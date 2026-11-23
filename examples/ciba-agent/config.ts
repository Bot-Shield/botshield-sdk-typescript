/*
 * Hand-written (not generated). Shared setup for the OpenID CIBA samples.
 * Reads configuration from the environment. Never prints the key.
 */

import { readFileSync } from "node:fs";
import { createCibaClient, type CibaClient } from "botshield-sdk/ciba";

function required(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) {
    console.error(`Missing ${name}. See README.md for the environment variables.`);
    process.exit(2);
  }
  return v;
}

export function cibaClientFromEnv(): CibaClient {
  const opts: Parameters<typeof createCibaClient>[0] = {
    clientId: required("BOTSHIELD_CLIENT_ID"),
    kid: required("BOTSHIELD_KID"),
    privateKey: readFileSync(required("BOTSHIELD_KEY_PATH"), "utf8"),
  };
  const issuer = process.env["BOTSHIELD_ISSUER"]?.trim();
  if (issuer) opts.issuer = issuer;
  const endpointBase = process.env["BOTSHIELD_ENDPOINT_BASE"]?.trim();
  if (endpointBase) opts.endpointBase = endpointBase;
  return createCibaClient(opts);
}

/** Who to ask: BOTSHIELD_ACCOUNT_REF (your account reference) or BOTSHIELD_LOGIN_HINT (a pairwise OP_… subject). */
export function whoToAsk(): { accountReference: string } | { loginHint: string } {
  const ref = process.env["BOTSHIELD_ACCOUNT_REF"]?.trim();
  if (ref) return { accountReference: ref };
  const hint = process.env["BOTSHIELD_LOGIN_HINT"]?.trim();
  if (hint) return { loginHint: hint };
  console.error("Set BOTSHIELD_ACCOUNT_REF (or BOTSHIELD_LOGIN_HINT). See README.md.");
  return process.exit(2);
}
