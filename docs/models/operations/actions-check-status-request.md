# ActionsCheckStatusRequest

## Example Usage

```typescript
import { ActionsCheckStatusRequest } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusRequest = {
  requestId: "6b9dddd5-efca-4320-8d65-4856773255eb",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `waitSeconds`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Long-poll hold, in seconds (0–25). Set your HTTP timeout above this. |