/*
 * Hand-written (not generated). Protected from Speakeasy regeneration by .genignore.
 *
 * Minimal compact-JWS signing and verification on node:crypto (no extra dependencies).
 */

import {
  constants,
  createPrivateKey,
  createPublicKey,
  sign,
  verify,
  type KeyObject,
} from "node:crypto";
import { CibaError } from "./errors.js";
import type { CibaAssertionAlg, Jwk } from "./types.js";

const b64url = (input: Buffer | string): string =>
  Buffer.from(input).toString("base64url");

const b64json = (value: unknown): string => b64url(JSON.stringify(value));

/** Normalise a KeyObject / private JWK / PEM string into a private KeyObject. */
export function toPrivateKey(key: KeyObject | Jwk | string): KeyObject {
  let out: KeyObject;
  try {
    if (typeof key === "string") {
      out = createPrivateKey(key);
    } else if (isKeyObject(key)) {
      out = key;
    } else {
      out = createPrivateKey({ key, format: "jwk" } as unknown as Parameters<typeof createPrivateKey>[0]);
    }
  } catch {
    throw new CibaError("invalid_request", "privateKey could not be read as a private key");
  }
  if (out.type !== "private") {
    throw new CibaError("invalid_request", "privateKey must be a private key");
  }
  return out;
}

function isKeyObject(k: unknown): k is KeyObject {
  return typeof k === "object" && k !== null && "asymmetricKeyType" in k
    && typeof (k as KeyObject).export === "function";
}

/** The assertion alg that fits a key, when the caller didn't name one. */
export function inferAlg(key: KeyObject): CibaAssertionAlg {
  const type = key.asymmetricKeyType;
  if (type === "ec") {
    const curve = key.asymmetricKeyDetails?.namedCurve;
    if (curve === "prime256v1" || curve === "P-256") return "ES256";
    if (curve === "secp384r1" || curve === "P-384") return "ES384";
    throw new CibaError("invalid_request", `unsupported EC curve ${String(curve)}`);
  }
  if (type === "rsa") return "RS256";
  if (type === "rsa-pss") return "PS256";
  if (type === "ed25519") return "EdDSA";
  throw new CibaError("invalid_request", `unsupported key type ${String(type)}`);
}

function signBytes(alg: CibaAssertionAlg, data: Buffer, key: KeyObject): Buffer {
  switch (alg) {
    case "ES256":
      return sign("sha256", data, { key, dsaEncoding: "ieee-p1363" });
    case "ES384":
      return sign("sha384", data, { key, dsaEncoding: "ieee-p1363" });
    case "RS256":
      return sign("sha256", data, key);
    case "PS256":
      return sign("sha256", data, {
        key,
        padding: constants.RSA_PKCS1_PSS_PADDING,
        saltLength: 32,
      });
    case "EdDSA":
      return sign(null, data, key);
  }
}

/** Sign a compact JWS. */
export function signJwt(
  header: Record<string, unknown> & { alg: CibaAssertionAlg },
  payload: Record<string, unknown>,
  key: KeyObject,
): string {
  const input = `${b64json(header)}.${b64json(payload)}`;
  return `${input}.${b64url(signBytes(header.alg, Buffer.from(input), key))}`;
}

export interface DecodedJwt {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signingInput: string;
  signature: Buffer;
}

/** Split and parse a compact JWS without verifying it. */
export function decodeJwt(token: string): DecodedJwt {
  const parts = typeof token === "string" ? token.split(".") : [];
  if (parts.length !== 3) throw new CibaError("invalid_token", "not a compact JWT");
  const [h, p, s] = parts as [string, string, string];
  try {
    const header = JSON.parse(Buffer.from(h, "base64url").toString("utf8"));
    const payload = JSON.parse(Buffer.from(p, "base64url").toString("utf8"));
    if (!header || typeof header !== "object" || !payload || typeof payload !== "object") {
      throw new Error("not objects");
    }
    return { header, payload, signingInput: `${h}.${p}`, signature: Buffer.from(s, "base64url") };
  } catch {
    throw new CibaError("invalid_token", "JWT header or payload is not valid JSON");
  }
}

/** Verify an ES256 signature against a public JWK. */
export function verifyEs256(decoded: DecodedJwt, jwk: Jwk): boolean {
  try {
    const key = createPublicKey({ key: jwk, format: "jwk" } as unknown as Parameters<typeof createPublicKey>[0]);
    return verify(
      "sha256",
      Buffer.from(decoded.signingInput),
      { key, dsaEncoding: "ieee-p1363" },
      decoded.signature,
    );
  } catch {
    return false;
  }
}
