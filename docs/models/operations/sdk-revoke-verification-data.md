# SDKRevokeVerificationData

## Example Usage

```typescript
import { SDKRevokeVerificationData } from "botshield-sdk/models/operations";

let value: SDKRevokeVerificationData = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.SDKRevokeVerificationDataData](../../models/operations/sdk-revoke-verification-data-data.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `error`                                                                                                  | [models.ErrorBody](../../models/error-body.md)                                                           | :heavy_minus_sign:                                                                                       | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result.         |