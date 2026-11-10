# InlinePasskeyRequestOptions

WebAuthn PublicKeyCredentialRequestOptionsJSON (base64url strings). rpId is botshield.ai; userVerification is always `required`.

## Example Usage

```typescript
import { InlinePasskeyRequestOptions } from "botshield-sdk/models";

let value: InlinePasskeyRequestOptions = {
  challenge: "<value>",
  rpId: "botshield.ai",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `challenge`                                               | *string*                                                  | :heavy_check_mark:                                        | base64url                                                 |                                                           |
| `allowCredentials`                                        | [models.AllowCredential](../models/allow-credential.md)[] | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `timeout`                                                 | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `userVerification`                                        | [models.UserVerification](../models/user-verification.md) | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `rpId`                                                    | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | botshield.ai                                              |
| `extensions`                                              | Record<string, *any*>                                     | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `additionalProperties`                                    | Record<string, *any*>                                     | :heavy_minus_sign:                                        | N/A                                                       |                                                           |