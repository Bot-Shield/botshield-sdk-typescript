# GatesApiActionsRequestCancelResponse

Withdrawn, or the request as it stands when it was no longer waiting. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401), `gates_scope_required` (403), `org_not_found` (404), `request_not_found` (404), `internal` (500).

## Example Usage

```typescript
import { GatesApiActionsRequestCancelResponse } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestCancelResponse = {
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
| `data`                                                                                                          | [operations.GatesApiActionsRequestCancelData](../../models/operations/gates-api-actions-request-cancel-data.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |