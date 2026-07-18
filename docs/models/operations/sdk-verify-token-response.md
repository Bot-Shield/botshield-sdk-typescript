# SDKVerifyTokenResponse

Validation result

## Example Usage

```typescript
import { SDKVerifyTokenResponse } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenResponse = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `valid`                                                  | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `reason`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `confidence`                                             | *number*                                                 | :heavy_minus_sign:                                       | Combined confidence (passkey + signals + integrations)   |
| `claims`                                                 | [operations.Claims](../../models/operations/claims.md)   | :heavy_minus_sign:                                       | N/A                                                      |
| `signals`                                                | [operations.Signals](../../models/operations/signals.md) | :heavy_minus_sign:                                       | N/A                                                      |