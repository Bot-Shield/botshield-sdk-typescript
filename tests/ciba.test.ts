/*
 * Hand-written (not generated). Unit tests for the OpenID CIBA helper.
 * Run: npm run test:ciba   (bun test, already a dev dependency)
 */

import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { createPublicKey, generateKeyPairSync, sign, verify, type KeyObject } from "node:crypto";
import { CibaError, createCibaClient } from "../src/ciba.js";

const ISSUER = "https://api.botshield.ai";
const CLIENT_ID = "11111111-2222-3333-4444-555555555555";

// The agent's own key (client assertions) and the "server" key (tokens).
const agent = generateKeyPairSync("ec", { namedCurve: "P-256" });
const server = generateKeyPairSync("ec", { namedCurve: "P-256" });
const SERVER_KID = "srv-1";
const serverJwk = { ...(server.publicKey.export({ format: "jwk" }) as Record<string, unknown>), kid: SERVER_KID, alg: "ES256", use: "sig" };

const discovery = (issuer = ISSUER) => ({
  issuer,
  backchannel_authentication_endpoint: `${issuer}/oidc/bc-authorize`,
  token_endpoint: `${issuer}/oidc/token`,
  jwks_uri: `${issuer}/.well-known/jwks.json`,
});

const b64 = (o: unknown) => Buffer.from(JSON.stringify(o)).toString("base64url");
function serverToken(claims: Record<string, unknown>, key: KeyObject = server.privateKey, kid = SERVER_KID): string {
  const now = Math.floor(Date.now() / 1000);
  const input = `${b64({ alg: "ES256", kid, typ: "JWT" })}.${b64({ iss: ISSUER, aud: CLIENT_ID, sub: "OP_pairwise", iat: now, exp: now + 300, acr: "phrh", amr: ["pop", "user"], auth_time: now, ...claims })}`;
  return `${input}.${sign("sha256", Buffer.from(input), { key, dsaEncoding: "ieee-p1363" }).toString("base64url")}`;
}

interface Call { url: string; method: string; headers: Record<string, string>; form: URLSearchParams | null }
type Reply = { status: number; body: unknown };

/** A scripted fetch: GETs serve discovery/JWKS; POSTs to /oidc/token and /oidc/bc-authorize pop scripted replies. */
function mockFetch(opts: { token?: Reply[]; authorize?: Reply[]; issuer?: string } = {}) {
  const calls: Call[] = [];
  const token = [...(opts.token ?? [])];
  const authorize = [...(opts.authorize ?? [])];
  const fn = (async (input: string | URL | Request, init?: RequestInit) => {
    const url = String(input);
    const headers = Object.fromEntries(Object.entries((init?.headers ?? {}) as Record<string, string>).map(([k, v]) => [k.toLowerCase(), v]));
    const method = init?.method ?? "GET";
    calls.push({ url, method, headers, form: typeof init?.body === "string" ? new URLSearchParams(init.body) : null });
    const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
    if (url.endsWith("/.well-known/openid-configuration")) return json(200, discovery(opts.issuer));
    if (url.endsWith("/.well-known/jwks.json")) return json(200, { keys: [serverJwk] });
    if (url.endsWith("/oidc/bc-authorize")) {
      const r = authorize.shift() ?? { status: 200, body: { auth_req_id: "req-1", expires_in: 600, interval: 5 } };
      return json(r.status, r.body);
    }
    if (url.endsWith("/oidc/token")) {
      const r = token.shift();
      if (!r) throw new Error("no scripted token reply");
      return json(r.status, r.body);
    }
    return json(404, { error: "not_found" });
  }) as typeof fetch;
  return { fn, calls };
}

// Record sleeps instead of waiting.
const realSetTimeout = globalThis.setTimeout;
let sleeps: number[] = [];
beforeEach(() => {
  sleeps = [];
  (globalThis as { setTimeout: unknown }).setTimeout = ((cb: () => void, ms?: number) => {
    sleeps.push(ms ?? 0);
    return realSetTimeout(cb, 0);
  }) as unknown as typeof setTimeout;
});
afterEach(() => {
  globalThis.setTimeout = realSetTimeout;
});

const askParams = {
  accountReference: "acct-42",
  bindingMessage: "Add payee 4821",
  action: { type: "botshield_ask" as const, title: "Add a payee", category: "botshield.action", main: { label: "Payee", value: "Acme Ltd" } },
  requestedExpiry: 300,
};

function decode(jwt: string) {
  const [h, p, s] = jwt.split(".") as [string, string, string];
  return {
    header: JSON.parse(Buffer.from(h, "base64url").toString()),
    payload: JSON.parse(Buffer.from(p, "base64url").toString()),
    input: `${h}.${p}`,
    sig: Buffer.from(s, "base64url"),
  };
}

describe("ask", () => {
  test("sends a form-encoded backchannel request with a fresh private_key_jwt assertion", async () => {
    const m = mockFetch({ authorize: [{ status: 200, body: { auth_req_id: "a", expires_in: 300, interval: 5 } }, { status: 200, body: { auth_req_id: "b", expires_in: 300, interval: 5 } }] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "e2e-1", fetch: m.fn });
    const r = await client.ask(askParams);
    expect(r).toEqual({ authReqId: "a", expiresIn: 300, interval: 5 });
    await client.ask(askParams);

    const posts = m.calls.filter((c) => c.method === "POST");
    expect(posts).toHaveLength(2);
    const first = posts[0]!;
    expect(first.url).toBe(`${ISSUER}/oidc/bc-authorize`);
    expect(first.headers["content-type"]).toBe("application/x-www-form-urlencoded");
    const f = first.form!;
    expect(f.get("scope")).toBe("openid");
    expect(f.get("login_hint")).toBe("acct:acct-42");
    expect(f.get("binding_message")).toBe("Add payee 4821");
    expect(f.get("requested_expiry")).toBe("300");
    expect(JSON.parse(f.get("authorization_details")!)).toEqual([askParams.action]);
    expect(f.get("client_assertion_type")).toBe("urn:ietf:params:oauth:client-assertion-type:jwt-bearer");

    const a = decode(f.get("client_assertion")!);
    expect(a.header).toMatchObject({ alg: "ES256", kid: "e2e-1" });
    expect(a.payload.iss).toBe(CLIENT_ID);
    expect(a.payload.sub).toBe(CLIENT_ID);
    expect(a.payload.aud).toBe(ISSUER);
    expect(a.payload.exp - Math.floor(Date.now() / 1000)).toBeLessThanOrEqual(300);
    expect(a.payload.exp).toBeGreaterThan(a.payload.iat);
    expect(verify("sha256", Buffer.from(a.input), { key: agent.publicKey, dsaEncoding: "ieee-p1363" }, a.sig)).toBe(true);

    const b = decode(posts[1]!.form!.get("client_assertion")!);
    expect(b.payload.jti).not.toBe(a.payload.jti);
  });

  test("loginHint is sent as-is; a PEM key and an explicit issuer work", async () => {
    const m = mockFetch();
    const pem = agent.privateKey.export({ format: "pem", type: "pkcs8" }).toString();
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: pem, kid: "k", fetch: m.fn, issuer: ISSUER + "/" });
    await client.ask({ ...askParams, accountReference: undefined as never, loginHint: "OP_abc" });
    expect(m.calls.find((c) => c.method === "POST")!.form!.get("login_hint")).toBe("OP_abc");
  });

  test("endpointBase: discovery and endpoints go to the override, aud stays the issuer", async () => {
    const STAGING = "https://staging.example.com";
    const m = mockFetch();
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn, endpointBase: STAGING });
    await client.ask(askParams);
    expect(m.calls[0]!.url).toBe(`${STAGING}/.well-known/openid-configuration`);
    const post = m.calls.find((c) => c.method === "POST")!;
    expect(post.url).toBe(`${STAGING}/oidc/bc-authorize`);
    expect(decode(post.form!.get("client_assertion")!).payload.aud).toBe(ISSUER);
  });

  test("validates arguments locally", async () => {
    const m = mockFetch();
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    await expect(client.ask({ ...askParams, bindingMessage: "x".repeat(65) })).rejects.toMatchObject({ error: "invalid_binding_message" });
    await expect(client.ask({ ...askParams, loginHint: "OP_x" } as never)).rejects.toMatchObject({ error: "invalid_request" });
    await expect(client.ask({ ...askParams, action: { type: "other" } } as never)).rejects.toMatchObject({ error: "invalid_authorization_details" });
    expect(m.calls.filter((c) => c.method === "POST")).toHaveLength(0);
  });

  test("server errors surface as CibaError with error, description and status", async () => {
    const m = mockFetch({ authorize: [{ status: 400, body: { error: "unknown_user_id", error_description: "no such account" } }] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    const err = await client.ask(askParams).catch((e) => e);
    expect(err).toBeInstanceOf(CibaError);
    expect(err).toMatchObject({ error: "unknown_user_id", description: "no such account", status: 400 });
  });
});

describe("poll", () => {
  const approved = () => ({ status: 200, body: { id_token: serverToken({}), access_token: serverToken({ scope: "openid" }), token_type: "Bearer", expires_in: 300, resolution_jwt: "r.j.w" } });

  test("waits the interval, backs off 5s on slow_down, then returns verified claims", async () => {
    const m = mockFetch({ token: [
      { status: 400, body: { error: "authorization_pending" } },
      { status: 400, body: { error: "slow_down" } },
      { status: 400, body: { error: "authorization_pending" } },
      approved(),
    ] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    const pending: Array<{ attempt: number; interval: number; slowDown: boolean }> = [];
    const r = await client.poll("req-1", { interval: 5, onPending: (i) => pending.push(i) });
    expect(sleeps).toEqual([5000, 5000, 10000, 10000]);
    expect(pending.map((p) => p.slowDown)).toEqual([false, true, false]);
    expect(r.approved).toBe(true);
    if (!r.approved) throw new Error("unreachable");
    expect(r.claims).toMatchObject({ sub: "OP_pairwise", aud: CLIENT_ID, acr: "phrh", iss: ISSUER });
    expect(r.resolutionJwt).toBe("r.j.w");

    const tokenCalls = m.calls.filter((c) => c.url.endsWith("/oidc/token"));
    expect(tokenCalls).toHaveLength(4);
    for (const c of tokenCalls) {
      expect(c.form!.get("grant_type")).toBe("urn:openid:params:grant-type:ciba");
      expect(c.form!.get("auth_req_id")).toBe("req-1");
    }
    const jtis = tokenCalls.map((c) => decode(c.form!.get("client_assertion")!).payload.jti);
    expect(new Set(jtis).size).toBe(4);
  });

  test("a decline and an expiry are results, not errors", async () => {
    for (const reason of ["access_denied", "expired_token"] as const) {
      const m = mockFetch({ token: [{ status: 400, body: { error: reason } }] });
      const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
      expect(await client.poll("req-1")).toEqual({ approved: false, reason });
    }
  });

  test("other token errors throw (e.g. invalid_grant after tokens were issued)", async () => {
    const m = mockFetch({ token: [{ status: 400, body: { error: "invalid_grant", error_description: "tokens were already issued" } }] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    await expect(client.poll("req-1")).rejects.toMatchObject({ error: "invalid_grant", status: 400 });
  });

  test("an aborted signal stops polling", async () => {
    const m = mockFetch({ token: [] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    const ac = new AbortController();
    ac.abort();
    await expect(client.poll("req-1", { signal: ac.signal })).rejects.toMatchObject({ error: "aborted" });
  });

  test("askAndWait asks then polls with the returned interval", async () => {
    const m = mockFetch({ authorize: [{ status: 200, body: { auth_req_id: "z", expires_in: 300, interval: 7 } }], token: [approved()] });
    const client = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    const r = await client.askAndWait(askParams);
    expect(r.approved).toBe(true);
    expect(sleeps).toEqual([7000]);
    expect(m.calls.find((c) => c.url.endsWith("/oidc/token"))!.form!.get("auth_req_id")).toBe("z");
  });
});

describe("verifyToken", () => {
  const client = () => createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: mockFetch().fn });

  test("accepts a valid ES256 token and caches the JWKS", async () => {
    const m = mockFetch();
    const c = createCibaClient({ clientId: CLIENT_ID, privateKey: agent.privateKey, kid: "k", fetch: m.fn });
    expect((await c.verifyToken(serverToken({}))).sub).toBe("OP_pairwise");
    await c.verifyToken(serverToken({ aud: [CLIENT_ID, "other"] }));
    expect(m.calls.filter((x) => x.url.endsWith("/jwks.json"))).toHaveLength(1);
  });

  test("rejects wrong aud, wrong iss, expiry, bad signature and unknown kid", async () => {
    const now = Math.floor(Date.now() / 1000);
    const other = generateKeyPairSync("ec", { namedCurve: "P-256" });
    const cases = [
      serverToken({ aud: "someone-else" }),
      serverToken({ iss: "https://evil.example" }),
      serverToken({ exp: now - 3600 }),
      serverToken({}, other.privateKey),
      serverToken({}, server.privateKey, "nope"),
      "not.a.jwt",
    ];
    for (const t of cases) {
      await expect(client().verifyToken(t)).rejects.toMatchObject({ error: "invalid_token" });
    }
  });

  test("the published JWK really is the server key", () => {
    expect(createPublicKey({ key: serverJwk as never, format: "jwk" }).equals(server.publicKey)).toBe(true);
  });
});
