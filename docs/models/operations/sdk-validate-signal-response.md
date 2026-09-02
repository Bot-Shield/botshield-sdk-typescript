# SDKValidateSignalResponse

Validation result. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: none — an invalid token is a normal result with valid=false.

## Example Usage

```typescript
import { SDKValidateSignalResponse } from "botshield-sdk/models/operations";

let value: SDKValidateSignalResponse = {
  data: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.SDKValidateSignalData](../../models/operations/sdk-validate-signal-data.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |