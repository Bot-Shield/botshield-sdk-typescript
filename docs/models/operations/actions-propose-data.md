# ActionsProposeData

## Example Usage

```typescript
import { ActionsProposeData } from "botshield-sdk/models/operations";

let value: ActionsProposeData = {
  status: "queued",
  cardId: "2fef591d-9e42-4d90-9ef6-a6b3c83be12d",
  ttlAt: new Date("2025-03-23T12:10:32.120Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [operations.ActionsProposeStatus](../../models/operations/actions-propose-status.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cardId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ttlAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |