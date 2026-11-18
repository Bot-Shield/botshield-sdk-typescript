# GatesApiActionsRequestResponse

Queued. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401), `gates_scope_required` (403), `org_not_found` (404), `action_invalid` (400), `action_not_found` (404), `action_off` (404), `agent_not_found` (404), `not_linked` (409 — the person isn't linked to your company), `details_invalid` (400), `agent_removed_by_person` (409 — the person removed this agent), `account_reconfirm_required` (409 — the customer changed their phone number without approval from another phone, so they must confirm this account with BotShield again from your signed-in page before anything can be sent to them; nothing is counted or sent), `request_id_reused` (409 — also when the same request_id is sent with other terms), `too_many_open_requests` (429 — this person already has 5 of your requests waiting; carries `retry_after_seconds`), `daily_request_limit` (429 — 50 requests to this person in 24 hours; carries `retry_after_seconds`), `request_limit_unavailable` (503 — the request could not be counted, so it was not sent; retry), `one_addressee_required` (400 — send exactly one of partner_user_ref and phone_number), `phone_invalid` (400), `org_not_verified` (403 — by phone number in production), `send_rate_limited` (429 — asks by phone number per key per hour), `unanswered_limit_reached` (429 — too many unanswered asks by phone number in 24 hours), `unavailable` (503), `internal` (500). `action_is_recovery` / `action_is_signin` (404 — that act is your Recovery Action or Sign-on Action, which no request starts).

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