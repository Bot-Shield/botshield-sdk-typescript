# DataApp

Exactly one of three shapes. **Passkey**: `options` + `challenge_id` — run `navigator.credentials.get({ publicKey: options })` (or the native equivalent on rpId botshield.ai) and send the result to passkey-complete. **Fallback**: `fallback: "app"` — the request has no linked person (`not_linked`) or that person has no passkey (`no_passkey`); open `url` (the app hand-off). **Closed**: `outcome` + `code` — the request is unknown, closed or expired. Every passkey/fallback answer carries `url` and `setup_url` so you can offer both when this device holds none of the listed passkeys.

## Example Usage

```typescript
import { DataApp } from "botshield-sdk/models/operations";

let value: DataApp = {
  options: {
    challenge: "pZq1…",
    allowCredentials: [
      {
        id: "Aa9…",
        type: "public-key",
        transports: [
          "internal",
          "hybrid",
        ],
      },
    ],
    timeout: 60000,
    userVerification: "required",
    rpId: "botshield.ai",
  },
  challengeId: "6f1c1f0e-2a5b-4f7e-9d1a-3b2c4d5e6f70",
  expiresAt: new Date("2026-11-10T18:05:00.000Z"),
  url: "https://app.botshield.ai/verify?request_id=req_…",
  setupUrl: "https://app.botshield.ai/app/account/passkey",
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`                                                                                                                                                                   | [models.InlinePasskeyRequestOptions](../../models/inline-passkey-request-options.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                          | WebAuthn PublicKeyCredentialRequestOptionsJSON (base64url strings). rpId is botshield.ai; userVerification is always `required`.                                            |
| `challengeId`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Send back with passkey-complete. Single use.                                                                                                                                |
| `expiresAt`                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_minus_sign:                                                                                                                                                          | The challenge expires 5 minutes after it is issued.                                                                                                                         |
| `fallback`                                                                                                                                                                  | [operations.Fallback](../../models/operations/fallback.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | Present instead of `options` when the inline passkey can't run for this request.                                                                                            |
| `reason`                                                                                                                                                                    | [operations.RequestPasskeyOptionsReason](../../models/operations/request-passkey-options-reason.md)                                                                         | :heavy_minus_sign:                                                                                                                                                          | Why `fallback` was returned. `not_linked`: the request's partner_user_ref has no active link (or the request carries none). `no_passkey`: the linked person has no passkey. |
| `url`                                                                                                                                                                       | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The app hand-off for this request (the same /verify URL create-verification-link returns as web_url).                                                                       |
| `setupUrl`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Where the person adds a BotShield passkey (Settings → Passkey). Render "Set up a passkey in BotShield" from this; never hardcode a BotShield URL.                           |
| `outcome`                                                                                                                                                                   | [operations.RequestPasskeyOptionsOutcome](../../models/operations/request-passkey-options-outcome.md)                                                                       | :heavy_minus_sign:                                                                                                                                                          | Closed request only.                                                                                                                                                        |
| `code`                                                                                                                                                                      | [operations.Code](../../models/operations/code.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                          | Closed request only. `unknown_request` (outcome failed), `request_closed` (failed — no longer pending), `request_expired` (expired).                                        |