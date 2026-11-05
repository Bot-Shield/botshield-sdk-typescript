# GatesApiActionsRequestDataData

## Example Usage

```typescript
import { GatesApiActionsRequestDataData } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestDataData = {
  requestId: "<id>",
  status: "expired",
  expiresAt: new Date("2025-12-25T14:45:28.671Z"),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | [operations.GatesApiActionsRequestStatus](../../models/operations/gates-api-actions-request-status.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `expiresAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |