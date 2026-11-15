

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

## 2.4.0 (unreleased — generated locally 2026-11-15, not published)
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
