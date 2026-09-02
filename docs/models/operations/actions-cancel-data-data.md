# ActionsCancelDataData

## Example Usage

```typescript
import { ActionsCancelDataData } from "botshield-sdk/models/operations";

let value: ActionsCancelDataData = {
  status: "cancelled",
  cardId: "6fd8eb99-e15f-4386-bcdf-0c1f9ad62f21",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [operations.ActionsCancelStatus](../../models/operations/actions-cancel-status.md)            | :heavy_check_mark:                                                                            | 'cancelled' when this call cancelled it; otherwise the card's current terminal status.        |
| `cardId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Present when this call cancelled the card.                                                    |
| `alreadyResolved`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | true when the card was already terminal; nothing changed.                                     |