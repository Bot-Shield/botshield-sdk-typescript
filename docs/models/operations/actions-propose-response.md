# ActionsProposeResponse

Action proposal queued (or replayed). NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401, 403 (category_not_allowed), 404 (no binding for opaque_id / user not found), 422 (Adaptive Card rejected, see violations), 400 with code ttl_below_floor | ttl_above_ceiling, 500, 502 (user lookup failed).

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