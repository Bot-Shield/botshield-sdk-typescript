

## 2026-07-18 19:36:32
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.790.2 (2.918.3) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v1.10.0] .
### Releases
- [NPM v1.10.0] https://www.npmjs.com/package/botshield-sdk/v/1.10.0 - .

## 2026-10-07 20:36:16
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v2.0.2] .
### Releases
- [NPM v2.0.2] https://www.npmjs.com/package/botshield-sdk/v/2.0.2 - .

## 2026-10-14 02:41:00
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v2.1.0] .
### Releases
- [NPM v2.1.0] https://www.npmjs.com/package/botshield-sdk/v/2.1.0 - .

## 2026-10-14 04:18:52
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v2.2.0] .
### Releases
- [NPM v2.2.0] https://www.npmjs.com/package/botshield-sdk/v/2.2.0 - .

## 2.3.0 (unreleased — generated locally 2026-11-10, not published)
### Changes
Based on:
- OpenAPI Doc: bot-shield-wg `feat/inline-spec-agegate-guard` (openapi-spec.json + the shared overlay)
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
### Behavior change ⚠️ — default server is now PRODUCTION
- With no `server` / `serverURL`, the client now calls `https://api.botshield.ai/operations`. Before 2.3.0 the default (index 0) was `http://localhost:9991/operations`.
- Servers are selected by NAME: `new BotShield({ server: "production" | "staging" | "local" })`. The `serverIdx` option is removed (it was index-based, and the new order would have silently re-pointed `serverIdx: 1` from production to staging). `serverURL` is unchanged. MCP server CLI: `--server-index` → `--server <production|staging|local>`.
- Staging is new: `https://wg-staging.botshield.ai/operations`.
### Added
- `client.inlinePasskey.getOptions({ requestId })` / `client.inlinePasskey.complete({ requestId, challengeId, response })` — the partner inline passkey lane (no API key; the request_id is the credential). An Age Gate request is refused with `data.error.code = "inline_not_for_age_gate"` (+ `data.error.url`, the app hand-off).
- `GateHumanVerifiedEvent` model (the `gate.human_verified` webhook, incl. `act`).
- `verification.getStatus`: `matchNumber`, `organizationMarkUrl`, `gateType`, `ageThreshold`, `ageVerdict`, `ageSource`; `reason` is now an open string (gate and action refusal codes) — the `VerificationGetStatusReason` enum type is removed.
- `ErrorBody.url`.

## 2.4.0 (never published — folded into 4.0.0)
### Changes
Based on:
- OpenAPI Doc: bot-shield-wg `feat/4.0-sdk-spec` (openapi-spec.json + the shared overlay), on top of the engine's 4.0 batch 1
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
### Added (all additive; no type removed or renamed)
- `client.gates.actions.update({ actKey, name?, staffCanSend? })` — rename an action, or mark it "staff can send".
- `BotShieldAction.staffCanSend`; `gates.actions.create` takes `staffCanSend`.
- `census.createVerificationLink`: `delivery` (`pushed` | `not_delivered` | `not_linked`) and `pushSkipped` (`daily_cap` | `unavailable`). New refusal code `act_label_has_link`.
- `census.verifyToken`: `claims.kind` (`verification` | `action`) and `claims.environment` (`development` | `production`), null on a pre-4.0 token. A token of another kind or from the other environment is refused (`valid: false` with a `reason` line).
- `verification.getStatus`: status `cancelled` (reasons `declined`, `superseded`).
- `GateUnavailableEvent` model (the `gate.unavailable` webhook, incl. `failureCode: "superseded"`).

## 4.0.0 (BotShield 4.0 — generated locally 2026-11-17, not yet published)
### Changes
Based on:
- OpenAPI Doc: bot-shield-wg `staging/4.0-batch1` acb8b93 `openapi-spec.json`, with the batch 1 spec changes from `feat/4.0-sdk-spec` da16b16 merged in (that branch is not yet in staging), then the engine overlay and this repo's overlay, as for 2.4.0
- Speakeasy CLI 1.796.3 (2.934.1) https://github.com/speakeasy-api/speakeasy
- The version is 4.0.0 to match BotShield 4.0 (the embed shipped as 4.0.0). It includes everything listed under 2.4.0.
### Breaking changes
- None in the SDK surface: no method, export, field or option was removed or renamed. `gates.actions.request` `partnerUserRef` is now optional (send it or `phoneNumber`).
- Engine behavior with 4.0: `verification.getStatus` returns `verificationToken` / `signedToken` only to your secret key for a request your server started or one under "Pending until your server confirms"; a site-key page request without the switch still reads them with the request id.
### Added
- `client.census.sendByNumber({ phoneNumber, act, actLabel? })` (secret key): send a request to verify to the person whose BotShield ID carries the number. The answer is the same whether or not anyone holds it: `status: "sent"`, `requestId`, `expiresAt`, `matchNumber`.
- `client.census.confirmLink({ requestId, partnerUserRef })` (secret key): confirm a link that waits for your server ("Pending until your server confirms"); returns the finished token on this response only.
- `client.actions.verifyResolution({ token })` (agent key or secret key): check a Proof of Resolution. It works once; later checks answer `valid: false, replayed: true`.
- `client.gates.actions.requestCancel({ requestId, agent, reason? })`: withdraw an action request that is still waiting. A withdrawn request is not billed.
- `actions.proposeAction`: `phoneNumber` (ask by number; the answer carries `matchNumber`) and `partnerUserRef` (AA-15: name a verified customer by your own account reference).
- `gates.actions.request`: `phoneNumber` (with `matchNumber` on the answer) and `details` rows; `gates.actions.requestStatus`: `agent`.
- BotShield Actions: `highValue` on `gates.actions.create` / `update`, `BotShieldAction.highValue`. A high-value action starts only from the customer's signed-in session (`action_requires_signed_in` by number or by staff).
- `census.verifyToken`: `partnerUserRef` input (confirms a pending link with the secret key), `link` result and `claims.linkState`.
- `verification.getStatus`: `linkState`, `linkExpiresAt`, `linkCode`, `linkMessage`.
- `ErrorBody.retryAfterSeconds` / `GatesApiError.retryAfterSeconds` on 429 limits.
- Refusal codes documented in the operations: `account_reconfirm_required`, `action_requires_signed_in`, `one_addressee_required`, `phone_invalid`, `org_not_verified`, `send_rate_limited`, `unanswered_limit_reached`, `too_many_open_requests`, `daily_request_limit`.
### Production
- The default server is production, whose engine is pre-4.0 until the 4.0 engine ships. Until then `sendByNumber`, `confirmLink`, `verifyResolution` and `gates.actions.requestCancel` (and the 4.0 inputs above) work only against `server: "staging"`.
