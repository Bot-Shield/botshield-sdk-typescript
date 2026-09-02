# SDKVerifyTokenData

## Example Usage

```typescript
import { SDKVerifyTokenData } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenData = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.SDKVerifyTokenDataData](../../models/operations/sdk-verify-token-data-data.md)       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `error`                                                                                          | [models.ErrorBody](../../models/error-body.md)                                                   | :heavy_minus_sign:                                                                               | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result. |