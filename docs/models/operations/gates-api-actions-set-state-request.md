# GatesApiActionsSetStateRequest

## Example Usage

```typescript
import { GatesApiActionsSetStateRequest } from "botshield-sdk/models/operations";

let value: GatesApiActionsSetStateRequest = {
  actKey: "watch",
  state: "off",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actKey`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | The action's key (input is lower-cased).                                                                | watch                                                                                                   |
| `state`                                                                                                 | [operations.GatesApiActionsSetStateState](../../models/operations/gates-api-actions-set-state-state.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     | off                                                                                                     |