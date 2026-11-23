# OpenID CIBA with BotShield: agent sample

An agent asks the account holder to approve one sensitive action ("Add a payee") on their phone, waits for the answer, and only goes ahead on an approval. It uses OpenID CIBA (Client-Initiated Backchannel Authentication) through the `botshield-sdk/ciba` helper.

Two variants:

| File | What it is | Needs a model? |
|---|---|---|
| `plain.ts` | A plain Node script: ask, wait, act. | **No.** No LLM and no Anthropic key. |
| `agent.ts` | A minimal agent on the [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk) (`@anthropic-ai/claude-agent-sdk`) with one tool, `ask_account_holder`, that calls `askAndWait` before a sensitive action. | Yes (`ANTHROPIC_API_KEY`). |

## Prerequisites

- Node.js 18 or later.
- An agent in the [BotShield Console](https://console.botshield.ai) with **CIBA turned on** and your public key registered. Note its **Agent ID** (the CIBA `client_id`) and the key's **kid**.
- The matching **private key** (PEM, or a private JWK in a file) on the machine running the sample. ES256, ES384, PS256, RS256 and EdDSA keys work.
- Someone to ask: an **account reference** you set for a person who has linked their BotShield app to your agent (asking by account reference must be enabled for the agent), or the pairwise `OP_…` subject they hold with your agent.

## Environment

| Variable | Required | Meaning |
|---|---|---|
| `BOTSHIELD_CLIENT_ID` | yes | The Agent ID. |
| `BOTSHIELD_KEY_PATH` | yes | Path to the agent's private key (PEM). It is read from disk and never printed. |
| `BOTSHIELD_KID` | yes | The `kid` of the registered public key. |
| `BOTSHIELD_ACCOUNT_REF` | one of these two | Your account reference for the person (sent as `login_hint=acct:<ref>`). |
| `BOTSHIELD_LOGIN_HINT` | one of these two | The pairwise `OP_…` subject. |
| `BOTSHIELD_ISSUER` | no | Defaults to `https://api.botshield.ai`. |
| `BOTSHIELD_ENDPOINT_BASE` | no | Only for a non-production deployment that serves the endpoints at another host. |
| `ANTHROPIC_API_KEY` | agent variant only | Used by the Claude Agent SDK. |

## Run

```bash
cd examples/ciba-agent
npm install

# No model needed:
npm run plain -- "Acme Ltd"

# Claude Agent SDK variant:
npm run agent -- "Add Acme Ltd as a payee on my account"
```

The scripts run TypeScript with `tsx` straight from this repository's source (the `botshield-sdk/source` export condition), so no SDK build step is needed. In your own project, install `botshield-sdk` and `import { createCibaClient } from "botshield-sdk/ciba"`.

What you should see with the plain variant:

```
Asking the account holder to approve adding "Acme Ltd" as a payee…
  waiting for an answer (poll 1)
  waiting for an answer (poll 2)
Approved (sub OP_…, acr phrh, at 2026-11-23T18:04:11.000Z).
Payee "Acme Ltd" added.
```

A decline prints `Declined. Nothing was changed.`; no answer before the request expires prints the expiry message. An account reference with no linked person fails with `400 unknown_user_id`.

## Using the helper directly

```ts
import { readFileSync } from "node:fs";
import { createCibaClient } from "botshield-sdk/ciba";

const ciba = createCibaClient({
  clientId: process.env.BOTSHIELD_CLIENT_ID!,
  kid: process.env.BOTSHIELD_KID!,
  privateKey: readFileSync(process.env.BOTSHIELD_KEY_PATH!, "utf8"),
});

const result = await ciba.askAndWait({
  accountReference: "customer-1234",
  bindingMessage: "Add payee Acme Ltd",
  action: { type: "botshield_ask", title: "Add a payee", category: "botshield.action", main: { label: "Payee", value: "Acme Ltd" } },
});

if (result.approved) {
  // result.claims: verified ID token claims (pairwise sub, acr, amr, auth_time)
}
```

Notes:

- Every request carries a new client assertion (`private_key_jwt`, iss = sub = Agent ID, aud = issuer, 2-minute lifetime, unique `jti`); a `jti` is accepted once.
- `poll` waits `interval` seconds between token calls and adds 5 seconds on `slow_down`. A decline (`access_denied`) and an expiry (`expired_token`) come back as `{ approved: false, reason }`; anything else throws a `CibaError { error, description, status }`.
- Tokens are issued once per `auth_req_id`, signed ES256, and checked against the published JWKS (iss, aud, exp) before `poll` returns them.
- Don't log the tokens. The sample doesn't.
