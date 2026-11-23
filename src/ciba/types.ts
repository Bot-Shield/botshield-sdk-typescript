/*
 * Hand-written (not generated). Protected from Speakeasy regeneration by .genignore.
 *
 * Types for the OpenID CIBA helper (botshield-sdk/ciba).
 */

import type { KeyObject } from "node:crypto";

/** A JSON Web Key (RFC 7517) as a plain object. */
export type Jwk = { kty?: string; kid?: string; [member: string]: unknown };

/** Client-assertion algorithms the BotShield token endpoint accepts. */
export type CibaAssertionAlg = "ES256" | "ES384" | "PS256" | "RS256" | "EdDSA";

export interface CibaClientOptions {
  /** The Agent ID from the BotShield Console (used as iss = sub of every client assertion). */
  clientId: string;
  /** The agent's private key: a Node KeyObject, a private JWK, or a PEM string. */
  privateKey: KeyObject | Jwk | string;
  /** The `kid` of the matching public key registered for this agent. */
  kid: string;
  /** Assertion algorithm. Inferred from the key when omitted (P-256 → ES256, P-384 → ES384, RSA → RS256, Ed25519 → EdDSA). */
  alg?: CibaAssertionAlg;
  /** OpenID issuer. Defaults to https://api.botshield.ai. */
  issuer?: string;
  /**
   * Where the endpoints are actually served, when that differs from the issuer
   * (a staging deployment). Discovery is fetched from here and every endpoint
   * listed under the issuer is rewritten to this base. Assertions still name the issuer as `aud`.
   */
  endpointBase?: string;
  /** fetch implementation (defaults to globalThis.fetch). */
  fetch?: typeof fetch;
  /** Allowed clock skew when checking token times, in seconds. Default 60. */
  clockSkewSeconds?: number;
}

/** A generic Agents Ask action (`botshield_ask` authorization_details entry). */
export interface BotShieldAskAction {
  type: "botshield_ask";
  /** What the person is asked to approve, e.g. "Add a payee". */
  title: string;
  /** Category, e.g. "botshield.action". */
  category: string;
  /** The one line shown most prominently. */
  main?: { label: string; value: string };
  details?: Array<{ label: string; value: string } | Record<string, unknown>>;
}

/** An AP2 payment action (`ap2_payment` authorization_details entry). */
export interface Ap2PaymentAction {
  type: "ap2_payment";
  title: string;
  category: string;
  payee?: unknown;
  payment_amount?: unknown;
  payment_instrument?: unknown;
  transaction_id?: string;
  details?: Array<Record<string, unknown>>;
}

export type CibaAction = BotShieldAskAction | Ap2PaymentAction;

interface AskBase {
  /** Short text shown on both devices (1–64 characters, no control characters). */
  bindingMessage: string;
  /** The single action the person approves or declines. */
  action: CibaAction;
  /** Seconds the request stays open (the engine enforces 60–86400). */
  requestedExpiry?: number;
  /** Only for agents set to ping delivery: the bearer token BotShield sends to your notification endpoint. */
  clientNotificationToken?: string;
}

/** Ask by the pairwise subject (`OP_…`) the person holds with this agent. */
export interface AskByLoginHint extends AskBase {
  loginHint: string;
  accountReference?: never;
}

/** Ask by your own account reference (sent as `acct:<reference>`; must be enabled for the agent). */
export interface AskByAccountReference extends AskBase {
  accountReference: string;
  loginHint?: never;
}

export type AskParams = AskByLoginHint | AskByAccountReference;

export interface AskResult {
  authReqId: string;
  /** Seconds until the request expires. */
  expiresIn: number;
  /** Seconds to wait between token polls. */
  interval: number;
}

export interface PollOptions {
  signal?: AbortSignal;
  /** Called after each `authorization_pending` / `slow_down`. */
  onPending?: (info: { attempt: number; interval: number; slowDown: boolean }) => void;
  /** Starting poll interval in seconds (use the `interval` from ask). Default 5. */
  interval?: number;
}

/** Verified claims of a BotShield ID token. */
export interface CibaClaims {
  iss: string;
  /** Pairwise subject: stable per person per agent, not an identity. */
  sub: string;
  aud: string | string[];
  exp: number;
  iat?: number;
  auth_time?: number;
  acr?: string;
  amr?: string[];
  [claim: string]: unknown;
}

export type PollResult =
  | {
    approved: true;
    idToken: string;
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    /** Verified ID token claims. */
    claims: CibaClaims;
    /** The Proof of Resolution JWT, when the engine includes it. */
    resolutionJwt?: string;
    authorizationDetails?: unknown;
  }
  | { approved: false; reason: "access_denied" | "expired_token" };
