# InlinePasskeyAssertion

WebAuthn AuthenticationResponseJSON (base64url strings) — the result of navigator.credentials.get(), serialized (e.g. PublicKeyCredential.toJSON() or @simplewebauthn/browser startAuthentication()).

## Example Usage

```typescript
import { InlinePasskeyAssertion } from "botshield-sdk/models";

let value: InlinePasskeyAssertion = {
  id: "<id>",
  rawId: "<id>",
  type: "public-key",
  response: {
    clientDataJSON: "<value>",
    authenticatorData: "<value>",
    signature: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `rawId`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `type`                                                                          | [models.InlinePasskeyAssertionType](../models/inline-passkey-assertion-type.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `authenticatorAttachment`                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `clientExtensionResults`                                                        | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `response`                                                                      | [models.ResponseT](../models/response-t.md)                                     | :heavy_check_mark:                                                              | N/A                                                                             |
| `additionalProperties`                                                          | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |