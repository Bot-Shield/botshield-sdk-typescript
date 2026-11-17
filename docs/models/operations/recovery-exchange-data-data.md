# RecoveryExchangeDataData

## Example Usage

```typescript
import { RecoveryExchangeDataData } from "botshield-sdk/models/operations";

let value: RecoveryExchangeDataData = {
  recovery: false,
  act: "recovery",
  action: "<value>",
  handle: "<value>",
  recoveryId: "<id>",
  recoveredAt: new Date("2024-05-24T20:50:40.198Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `recovery`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Always true: this is a recovery.                                                              |
| `act`                                                                                         | [operations.RecoveryExchangeAct](../../models/operations/recovery-exchange-act.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `action`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The Recovery Action's key.                                                                    |
| `handle`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The account's per-company handle (`OP_…`), as `account.secured` gave it.                      |
| `recoveryId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `recoveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |