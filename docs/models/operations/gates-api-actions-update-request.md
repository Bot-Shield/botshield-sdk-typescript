# GatesApiActionsUpdateRequest

## Example Usage

```typescript
import { GatesApiActionsUpdateRequest } from "botshield-sdk/models/operations";

let value: GatesApiActionsUpdateRequest = {
  actKey: "account-recovery",
  name: "You asked to recover your account.",
  staffCanSend: true,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `actKey`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | The action's key (input is lower-cased).                                            | account-recovery                                                                    |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Shown to the person on their card.                                                  | You asked to recover your account.                                                  |
| `staffCanSend`                                                                      | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Your support team can send this to a customer. Its name is what the customer reads. | true                                                                                |