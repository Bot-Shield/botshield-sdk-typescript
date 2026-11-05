# GatesApiActionsRequestStatusResponse

The request. Errors as data.error — codes: `invalid_key`, `gates_scope_required`, `request_not_found` (404).

## Example Usage

```typescript
import { GatesApiActionsRequestStatusResponse } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestStatusResponse = {
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

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                          | [operations.GatesApiActionsRequestStatusData](../../models/operations/gates-api-actions-request-status-data.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |