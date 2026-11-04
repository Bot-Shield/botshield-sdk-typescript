# GatesApiActionsListResponse

Actions. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `internal` (500).

## Example Usage

```typescript
import { GatesApiActionsListResponse } from "botshield-sdk/models/operations";

let value: GatesApiActionsListResponse = {
  data: {
    data: {
      actions: [],
    },
    error: {
      message: "<value>",
      statusCode: 409,
      code: "gate_key_taken",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.GatesApiActionsListData](../../models/operations/gates-api-actions-list-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |