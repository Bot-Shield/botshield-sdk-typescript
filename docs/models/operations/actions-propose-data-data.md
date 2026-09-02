# ActionsProposeDataData

## Example Usage

```typescript
import { ActionsProposeDataData } from "botshield-sdk/models/operations";

let value: ActionsProposeDataData = {
  status: "approved",
  cardId: "361e3b8a-3e43-412e-8ee9-3e25ee956410",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | [operations.ActionsProposeStatus](../../models/operations/actions-propose-status.md)             | :heavy_check_mark:                                                                               | 'queued' on first proposal. On an idempotent replay (same request_id) the card's CURRENT status. |
| `cardId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `ttlAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | Present on first proposal only.                                                                  |
| `idempotentReplay`                                                                               | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | true when this request_id was already proposed; no new card was created.                         |