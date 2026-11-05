# GatesApiCancelResponse

Cancelled. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `gate_not_found` (404), `gate_in_use` (409), `retry` (503 — usage could not be checked; try again).

## Example Usage

```typescript
import { GatesApiCancelResponse } from "botshield-sdk/models/operations";

let value: GatesApiCancelResponse = {
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.GatesApiCancelData](../../models/operations/gates-api-cancel-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |