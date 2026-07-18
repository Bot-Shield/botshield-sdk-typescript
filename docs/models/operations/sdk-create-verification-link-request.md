# SDKCreateVerificationLinkRequest

## Example Usage

```typescript
import { SDKCreateVerificationLinkRequest } from "botshield-sdk/models/operations";

let value: SDKCreateVerificationLinkRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `userEmail`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `returnUrl`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `webhookUrl`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `scope`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sdkType`                                                                      | [operations.SDKTypeRequest](../../models/operations/sdk-type-request.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `mode`                                                                         | [operations.Mode](../../models/operations/mode.md)                             | :heavy_minus_sign:                                                             | linked-account = OAuth+passkey, private = direct WebAuthn (no PII)             |
| `botshieldUserId`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | Returning user ID to skip onboarding                                           |
| `signalToken`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Tamper-proof Signal Pixel token (bs_sig_...) for server-side score correlation |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |