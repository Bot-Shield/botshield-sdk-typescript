# VerificationGetStatusResponse

Verification status. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: none — unknown ids return status not_found.

## Example Usage

```typescript
import { VerificationGetStatusResponse } from "botshield-sdk/models/operations";

let value: VerificationGetStatusResponse = {
  data: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.VerificationGetStatusData](../../models/operations/verification-get-status-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |