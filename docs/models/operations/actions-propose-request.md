# ActionsProposeRequest

## Example Usage

```typescript
import { ActionsProposeRequest } from "botshield-sdk/models/operations";

let value: ActionsProposeRequest = {
  requestId: "d00d13ae-6bbe-4236-84e4-c60d3a585b31",
  userEmail: "Katrina.Frami72@yahoo.com",
  action: {
    summaryTitle: "<value>",
    summaryDetail: {
      label: "TOTAL",
      value: "$100.90",
    },
    category: "travel.book",
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Agent-supplied UUID for idempotency. Re-proposing with the same request_id returns the existing card_id.                                                       |
| `userEmail`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Email of the BotShield user to receive this proposal.                                                                                                          |
| `action`                                                                                                                                                       | [operations.Action](../../models/operations/action.md)                                                                                                         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `adaptiveCardPayload`                                                                                                                                          | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | Optional Adaptive Card v1.5 JSON shown when the user expands the card. Allowlist: TextBlock, FactSet, ColumnSet, Container, Table, Image (bundled-asset only). |
| `ttlSeconds`                                                                                                                                                   | *number*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | How long the user has to respond before the proposal expires. Bounds locked by V3 spec §3.4.                                                                   |