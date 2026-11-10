# RequestPasskeyCompleteRequest

## Example Usage

```typescript
import { RequestPasskeyCompleteRequest } from "botshield-sdk/models/operations";

let value: RequestPasskeyCompleteRequest = {
  requestId: "<id>",
  challengeId: "a010d67c-7a7b-4d6a-90e0-cbb4a4eddc53",
  response: {
    id: "<id>",
    rawId: "<id>",
    type: "public-key",
    response: {
      clientDataJSON: "<value>",
      authenticatorData: "<value>",
      signature: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                                                           | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | N/A                                                                                                                                                                                                   |
| `challengeId`                                                                                                                                                                                         | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | From passkey-options.                                                                                                                                                                                 |
| `response`                                                                                                                                                                                            | [models.InlinePasskeyAssertion](../../models/inline-passkey-assertion.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                    | WebAuthn AuthenticationResponseJSON (base64url strings) — the result of navigator.credentials.get(), serialized (e.g. PublicKeyCredential.toJSON() or @simplewebauthn/browser startAuthentication()). |