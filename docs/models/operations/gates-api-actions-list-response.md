# GatesApiActionsListResponse

Actions. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `internal` (500). Each action carries `staff_can_send`. Each action carries `kind` (`action`, `recovery` or `signin`), `signin_qr` and, for a Recovery Action, `pending_where_url` / `pending_where_url_at`. Recovery and Sign-on Actions are placed in the Console, not here.

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