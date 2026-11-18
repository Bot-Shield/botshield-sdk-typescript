# GatesApiActionsSetStateResponse

The action. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `action_not_found` (404), `internal` (500). Each action carries `staff_can_send`. Each action carries `kind` (`action`, `recovery` or `signin`), `signin_qr` and, for a Recovery Action, `pending_where_url` / `pending_where_url_at`. Recovery and Sign-on Actions are placed in the Console, not here.

## Example Usage

```typescript
import { GatesApiActionsSetStateResponse } from "botshield-sdk/models/operations";

let value: GatesApiActionsSetStateResponse = {
  data: {
    data: {
      action: {
        id: "97e157ed-1aad-4481-84ed-ba39ebca5383",
        name: "Watch with passkey",
        actKey: "watch",
        whereUrl: "https://dramatic-underpants.name",
        state: "off",
        environment: "production",
        placedAt: new Date("2026-09-06T10:25:27.686Z"),
        turnedOffAt: null,
      },
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [operations.GatesApiActionsSetStateData](../../models/operations/gates-api-actions-set-state-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |