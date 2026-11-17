# GatesApiActionsRequestCancelDataData

## Example Usage

```typescript
import { GatesApiActionsRequestCancelDataData } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestCancelDataData = {
  requestId: "<id>",
  status: "cancelled",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `status`                                                                                                            | [operations.GatesApiActionsRequestCancelStatus](../../models/operations/gates-api-actions-request-cancel-status.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `alreadyResolved`                                                                                                   | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | True when the request was no longer waiting, so nothing was withdrawn.                                              |
| `cancelledAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |