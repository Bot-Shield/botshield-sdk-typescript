# GatesApiActionsRequestStatusData

## Example Usage

```typescript
import { GatesApiActionsRequestStatusData } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestStatusData = {
  error: {
    message: "<value>",
    statusCode: 409,
    code: "gate_key_taken",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                   | [operations.GatesApiActionsRequestStatusDataData](../../models/operations/gates-api-actions-request-status-data-data.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `error`                                                                                                                  | [models.GatesApiError](../../models/gates-api-error.md)                                                                  | :heavy_minus_sign:                                                                                                       | Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result.             |