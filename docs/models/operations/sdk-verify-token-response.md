# SDKVerifyTokenResponse

Validation result. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: none — an invalid token is a normal result with valid=false.

## Example Usage

```typescript
import { SDKVerifyTokenResponse } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenResponse = {
  data: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.SDKVerifyTokenData](../../models/operations/sdk-verify-token-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |