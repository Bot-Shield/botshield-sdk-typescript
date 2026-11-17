# ActionsProposeResponse

Action proposal queued (or replayed). NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401, 403 (category_not_allowed), 404 (no binding for opaque_id / user not found), 422 (Adaptive Card rejected, see violations), 400 with code ttl_below_floor | ttl_above_ceiling, 429 with code too_many_open_requests | daily_request_limit (a cap per person: 5 requests waiting, 50 in 24 hours, counted across your company's agents; carries retry_after_seconds), 503 with code request_limit_unavailable (not counted, so not sent; retry), 400 with code one_addressee_required (phone_number together with another way to name the person) | phone_invalid, 403 with code org_not_verified (by phone number in production), 429 with code send_rate_limited | unanswered_limit_reached (asks by phone number), 503 with code unavailable, 409 with code account_reconfirm_required (the customer changed their phone number without approval from another phone; they must confirm their account with your company again from its signed-in page before your agents can ask them anything — nothing is counted or sent), 500, 502 (user lookup failed).

## Example Usage

```typescript
import { ActionsProposeResponse } from "botshield-sdk/models/operations";

let value: ActionsProposeResponse = {
  data: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ActionsProposeData](../../models/operations/actions-propose-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |