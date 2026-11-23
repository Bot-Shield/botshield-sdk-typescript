/*
 * Hand-written (not generated). Protected from Speakeasy regeneration by .genignore.
 *
 * OpenID CIBA client for BotShield Agents Ask: an agent asks the account holder
 * to approve one action on their phone, then polls for the answer.
 *
 *   discovery   GET  {base}/.well-known/openid-configuration
 *   ask         POST backchannel_authentication_endpoint (private_key_jwt)
 *   poll        POST token_endpoint, grant urn:openid:params:grant-type:ciba
 *   verify      ES256 tokens against jwks_uri
 *
 * Tokens and keys are never logged.
 */

import { randomUUID, type KeyObject } from "node:crypto";
import { CibaError } from "./errors.js";
import { decodeJwt, inferAlg, signJwt, toPrivateKey, verifyEs256 } from "./jwt.js";
import type {
  AskParams,
  AskResult,
  CibaAssertionAlg,
  CibaClaims,
  CibaClientOptions,
  Jwk,
  PollOptions,
  PollResult,
} from "./types.js";

export const DEFAULT_ISSUER = "https://api.botshield.ai";
export const CIBA_GRANT_TYPE = "urn:openid:params:grant-type:ciba";
export const CLIENT_ASSERTION_TYPE = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
/** Assertion lifetime in seconds (the server allows at most 300). */
const ASSERTION_TTL_SECONDS = 120;
const DEFAULT_INTERVAL_SECONDS = 5;
const SLOW_DOWN_STEP_SECONDS = 5;
/** Don't refetch the JWKS for an unknown kid more often than this. */
const JWKS_REFRESH_MIN_MS = 30_000;

export interface CibaEndpoints {
  issuer: string;
  backchannelAuthenticationEndpoint: string;
  tokenEndpoint: string;
  jwksUri: string;
}

export interface CibaClient {
  readonly clientId: string;
  readonly issuer: string;
  /** Resolve (and cache) the endpoints from discovery. */
  discover(): Promise<CibaEndpoints>;
  /** Send a backchannel authentication request: the person gets the ask on their phone. */
  ask(params: AskParams): Promise<AskResult>;
  /** Poll the token endpoint until the person answers or the request expires. */
  poll(authReqId: string, options?: PollOptions): Promise<PollResult>;
  /** Verify a BotShield-issued token (ES256, iss, aud = this client, exp) and return its claims. */
  verifyToken(token: string): Promise<CibaClaims>;
  /** ask() then poll() with the interval ask returned. */
  askAndWait(params: AskParams, options?: Omit<PollOptions, "interval">): Promise<PollResult>;
}

const trimSlash = (s: string) => s.replace(/\/+$/, "");

export function createCibaClient(options: CibaClientOptions): CibaClient {
  if (!options || typeof options.clientId !== "string" || !options.clientId) {
    throw new CibaError("invalid_request", "clientId is required");
  }
  if (typeof options.kid !== "string" || !options.kid) {
    throw new CibaError("invalid_request", "kid is required");
  }
  const clientId = options.clientId;
  const kid = options.kid;
  const key: KeyObject = toPrivateKey(options.privateKey);
  const alg: CibaAssertionAlg = options.alg ?? inferAlg(key);
  const issuer = trimSlash(options.issuer ?? DEFAULT_ISSUER);
  const base = trimSlash(options.endpointBase ?? issuer);
  const skew = options.clockSkewSeconds ?? 60;
  const doFetch: typeof fetch | undefined = options.fetch ?? globalThis.fetch;
  if (typeof doFetch !== "function") {
    throw new CibaError("invalid_request", "no fetch implementation available (Node 18+ or pass options.fetch)");
  }

  // ── discovery ──────────────────────────────────────────────────────────
  let discovery: Promise<CibaEndpoints> | null = null;

  const rebase = (url: unknown, field: string): string => {
    if (typeof url !== "string" || !url) {
      throw new CibaError("invalid_response", `discovery is missing ${field}`);
    }
    return base !== issuer && url.startsWith(issuer + "/") ? base + url.slice(issuer.length) : url;
  };

  async function loadDiscovery(): Promise<CibaEndpoints> {
    const doc = await getJson(`${base}/.well-known/openid-configuration`);
    if (doc["issuer"] !== issuer) {
      throw new CibaError("invalid_response", `discovery issuer ${String(doc["issuer"])} does not match ${issuer}`);
    }
    return {
      issuer,
      backchannelAuthenticationEndpoint: rebase(doc["backchannel_authentication_endpoint"], "backchannel_authentication_endpoint"),
      tokenEndpoint: rebase(doc["token_endpoint"], "token_endpoint"),
      jwksUri: rebase(doc["jwks_uri"], "jwks_uri"),
    };
  }

  function discover(): Promise<CibaEndpoints> {
    if (!discovery) {
      discovery = loadDiscovery().catch((e) => {
        discovery = null; // retry next time
        throw e;
      });
    }
    return discovery;
  }

  // ── HTTP ───────────────────────────────────────────────────────────────
  async function send(url: string, init: RequestInit): Promise<{ status: number; body: Record<string, unknown> | null }> {
    let res: Response;
    try {
      res = await doFetch!(url, init);
    } catch (e) {
      if (init.signal?.aborted) throw new CibaError("aborted", "the request was aborted");
      throw new CibaError("network_error", e instanceof Error ? e.message : "request failed");
    }
    let body: Record<string, unknown> | null = null;
    try {
      const parsed: unknown = await res.json();
      body = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : null;
    } catch {
      body = null;
    }
    return { status: res.status, body };
  }

  async function getJson(url: string): Promise<Record<string, unknown>> {
    const { status, body } = await send(url, { method: "GET", headers: { accept: "application/json" } });
    if (status !== 200 || !body) {
      throw new CibaError("invalid_response", `GET ${url} answered ${status}`, status);
    }
    return body;
  }

  function postForm(url: string, form: Record<string, string>, signal?: AbortSignal) {
    const init: RequestInit = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" },
      body: new URLSearchParams(form).toString(),
    };
    if (signal) init.signal = signal;
    return send(url, init);
  }

  const oauthError = (status: number, body: Record<string, unknown> | null): CibaError =>
    new CibaError(
      typeof body?.["error"] === "string" ? body["error"] : "invalid_response",
      typeof body?.["error_description"] === "string" ? body["error_description"] : `unexpected HTTP ${status}`,
      status,
    );

  // ── client authentication (private_key_jwt) ───────────────────────────
  /** A fresh assertion per call: jti is single-use on the server. */
  function clientAuth(): Record<string, string> {
    const now = Math.floor(Date.now() / 1000);
    const assertion = signJwt(
      { alg, kid, typ: "JWT" },
      { iss: clientId, sub: clientId, aud: issuer, iat: now, exp: now + ASSERTION_TTL_SECONDS, jti: randomUUID() },
      key,
    );
    return { client_id: clientId, client_assertion_type: CLIENT_ASSERTION_TYPE, client_assertion: assertion };
  }

  // ── ask ────────────────────────────────────────────────────────────────
  async function ask(params: AskParams): Promise<AskResult> {
    const p = params as AskParams & { loginHint?: string; accountReference?: string };
    const hasHint = typeof p.loginHint === "string" && p.loginHint.length > 0;
    const hasRef = typeof p.accountReference === "string" && p.accountReference.trim().length > 0;
    if (hasHint === hasRef) {
      throw new CibaError("invalid_request", "pass exactly one of loginHint or accountReference");
    }
    const msg = p.bindingMessage;
    if (typeof msg !== "string" || msg.length < 1 || msg.length > 64 || hasControlChar(msg)) {
      throw new CibaError("invalid_binding_message", "bindingMessage must be 1–64 characters of plain text");
    }
    const action = p.action;
    if (!action || (action.type !== "botshield_ask" && action.type !== "ap2_payment")) {
      throw new CibaError("invalid_authorization_details", "action.type must be botshield_ask or ap2_payment");
    }
    if (typeof action.title !== "string" || typeof action.category !== "string") {
      throw new CibaError("invalid_authorization_details", "action.title and action.category are required");
    }
    const form: Record<string, string> = {
      scope: "openid",
      login_hint: hasHint ? p.loginHint! : `acct:${p.accountReference!.trim()}`,
      binding_message: msg,
      authorization_details: JSON.stringify([action]),
    };
    if (p.requestedExpiry !== undefined) {
      if (!Number.isInteger(p.requestedExpiry) || p.requestedExpiry <= 0) {
        throw new CibaError("invalid_request", "requestedExpiry must be a positive integer (seconds)");
      }
      form["requested_expiry"] = String(p.requestedExpiry);
    }
    if (p.clientNotificationToken) form["client_notification_token"] = p.clientNotificationToken;

    const ep = await discover();
    const { status, body } = await postForm(ep.backchannelAuthenticationEndpoint, { ...form, ...clientAuth() });
    if (status !== 200 || !body || typeof body["auth_req_id"] !== "string") throw oauthError(status, body);
    const expiresIn = Number(body["expires_in"]);
    const interval = Number(body["interval"]);
    return {
      authReqId: body["auth_req_id"],
      expiresIn: Number.isFinite(expiresIn) ? expiresIn : 0,
      interval: Number.isFinite(interval) && interval > 0 ? interval : DEFAULT_INTERVAL_SECONDS,
    };
  }

  // ── poll ───────────────────────────────────────────────────────────────
  async function poll(authReqId: string, opts: PollOptions = {}): Promise<PollResult> {
    if (typeof authReqId !== "string" || !authReqId) throw new CibaError("invalid_request", "authReqId is required");
    const ep = await discover();
    let interval = opts.interval && opts.interval > 0 ? opts.interval : DEFAULT_INTERVAL_SECONDS;
    for (let attempt = 1; ; attempt++) {
      await sleep(interval * 1000, opts.signal);
      const { status, body } = await postForm(
        ep.tokenEndpoint,
        { grant_type: CIBA_GRANT_TYPE, auth_req_id: authReqId, ...clientAuth() },
        opts.signal,
      );
      if (status === 200 && body && typeof body["id_token"] === "string") {
        const idToken = body["id_token"];
        const claims = await verifyToken(idToken);
        const out: PollResult = {
          approved: true,
          idToken,
          accessToken: typeof body["access_token"] === "string" ? body["access_token"] : "",
          tokenType: typeof body["token_type"] === "string" ? body["token_type"] : "Bearer",
          expiresIn: Number(body["expires_in"]) || 0,
          claims,
        };
        if (typeof body["resolution_jwt"] === "string") out.resolutionJwt = body["resolution_jwt"];
        if (body["authorization_details"] !== undefined) out.authorizationDetails = body["authorization_details"];
        return out;
      }
      const code = typeof body?.["error"] === "string" ? body["error"] : "";
      if (code === "authorization_pending") {
        opts.onPending?.({ attempt, interval, slowDown: false });
        continue;
      }
      if (code === "slow_down") {
        interval += SLOW_DOWN_STEP_SECONDS;
        opts.onPending?.({ attempt, interval, slowDown: true });
        continue;
      }
      if (code === "access_denied" || code === "expired_token") return { approved: false, reason: code };
      throw oauthError(status, body);
    }
  }

  // ── token verification ─────────────────────────────────────────────────
  let jwks: Map<string, Jwk> | null = null;
  let jwksFetchedAt = 0;

  async function loadJwks(): Promise<Map<string, Jwk>> {
    const ep = await discover();
    const doc = await getJson(ep.jwksUri);
    const keys = Array.isArray(doc["keys"]) ? (doc["keys"] as Array<Record<string, unknown>>) : [];
    const map = new Map<string, Jwk>();
    for (const k of keys) if (typeof k["kid"] === "string") map.set(k["kid"], k as Jwk);
    jwks = map;
    jwksFetchedAt = Date.now();
    return map;
  }

  async function keyFor(tokenKid: string): Promise<Jwk | undefined> {
    let map = jwks ?? (await loadJwks());
    if (!map.has(tokenKid) && Date.now() - jwksFetchedAt >= JWKS_REFRESH_MIN_MS) map = await loadJwks();
    return map.get(tokenKid);
  }

  async function verifyToken(token: string): Promise<CibaClaims> {
    const d = decodeJwt(token);
    if (d.header["alg"] !== "ES256") throw new CibaError("invalid_token", "token alg must be ES256");
    const tokenKid = d.header["kid"];
    if (typeof tokenKid !== "string" || !tokenKid) throw new CibaError("invalid_token", "token has no kid");
    const jwk = await keyFor(tokenKid);
    if (!jwk) throw new CibaError("invalid_token", "no published key matches the token kid");
    if (!verifyEs256(d, jwk)) throw new CibaError("invalid_token", "signature did not verify");

    const c = d.payload;
    const now = Math.floor(Date.now() / 1000);
    if (c["iss"] !== issuer) throw new CibaError("invalid_token", "iss does not match the issuer");
    const aud = c["aud"];
    if (!(aud === clientId || (Array.isArray(aud) && aud.includes(clientId)))) {
      throw new CibaError("invalid_token", "aud does not name this client");
    }
    if (typeof c["exp"] !== "number" || c["exp"] + skew < now) throw new CibaError("invalid_token", "token expired");
    if (typeof c["nbf"] === "number" && c["nbf"] - skew > now) throw new CibaError("invalid_token", "token not yet valid");
    if (typeof c["iat"] === "number" && c["iat"] - skew > now) throw new CibaError("invalid_token", "token issued in the future");
    if (typeof c["sub"] !== "string" || !c["sub"]) throw new CibaError("invalid_token", "token has no sub");
    return c as CibaClaims;
  }

  async function askAndWait(params: AskParams, options: Omit<PollOptions, "interval"> = {}): Promise<PollResult> {
    const req = await ask(params);
    return poll(req.authReqId, { ...options, interval: req.interval });
  }

  return { clientId, issuer, discover, ask, poll, verifyToken, askAndWait };
}

function hasControlChar(s: string): boolean {
  for (let i = 0; i < s.length; i++) if (s.charCodeAt(i) < 0x20) return true;
  return false;
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new CibaError("aborted", "polling was aborted"));
    const t = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(t);
      reject(new CibaError("aborted", "polling was aborted"));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
