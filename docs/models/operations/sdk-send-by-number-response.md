# SDKSendByNumberResponse

Result. NOTE: handler errors arrive here (HTTP 200) as data.error — codes: secret_key_required · invalid_key · phone_invalid · action_invalid · action_not_found · action_off · act_label_has_link · org_not_verified · send_rate_limited · unanswered_limit_reached · unavailable.

## Example Usage

```typescript
import { SDKSendByNumberResponse } from "botshield-sdk/models/operations";

let value: SDKSendByNumberResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.SDKSendByNumberData](../../models/operations/sdk-send-by-number-data.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |