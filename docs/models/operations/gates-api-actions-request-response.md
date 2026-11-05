# GatesApiActionsRequestResponse

Queued. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401), `gates_scope_required` (403), `action_invalid` (400), `action_not_found` (404), `action_off` (404), `agent_not_found` (404), `not_linked` (409 — the person isn't linked to your company), `request_id_reused` (409).

## Example Usage

```typescript
import { GatesApiActionsRequestResponse } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestResponse = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [operations.GatesApiActionsRequestData](../../models/operations/gates-api-actions-request-data.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |