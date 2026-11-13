# GatesApiActionsRequestStatusDataData

## Example Usage

```typescript
import { GatesApiActionsRequestStatusDataData } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestStatusDataData = {
  requestId: "<id>",
  status: "expired",
  act: "<value>",
  expiresAt: new Date("2024-03-14T23:28:15.816Z"),
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `status`                                                                                                            | [operations.GatesApiActionsRequestStatusStatus](../../models/operations/gates-api-actions-request-status-status.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `act`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `expiresAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `resolvedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | When the person answered; null while queued.                                                                        |
| `token`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Present once approved, until the collection window closes.                                                          |
| `tokenExpiresIn`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Seconds left to collect `token`; 0 once the collection window has closed (then `token` is null).                    |