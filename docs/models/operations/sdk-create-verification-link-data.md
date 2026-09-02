# SDKCreateVerificationLinkData

## Example Usage

```typescript
import { SDKCreateVerificationLinkData } from "botshield-sdk/models/operations";

let value: SDKCreateVerificationLinkData = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                            | [operations.SDKCreateVerificationLinkDataData](../../models/operations/sdk-create-verification-link-data-data.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `error`                                                                                                           | [models.ErrorBody](../../models/error-body.md)                                                                    | :heavy_minus_sign:                                                                                                | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result.                  |