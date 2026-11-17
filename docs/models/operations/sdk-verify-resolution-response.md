# SDKVerifyResolutionResponse

The answer. A refused check has valid false and a reason; it does not spend the proof. Errors arrive as data.error — code: `invalid_key` (401).

## Example Usage

```typescript
import { SDKVerifyResolutionResponse } from "botshield-sdk/models/operations";

let value: SDKVerifyResolutionResponse = {
  data: {
    error: {
      message: "<value>",
      statusCode: 409,
      code: "gate_key_taken",
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.SDKVerifyResolutionData](../../models/operations/sdk-verify-resolution-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |