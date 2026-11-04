# VerificationGetStatusAction

BotShield Actions: what this tap confirms. Null on every non-action request. The `act` string itself is never shown here.

## Example Usage

```typescript
import { VerificationGetStatusAction } from "botshield-sdk/models/operations";

let value: VerificationGetStatusAction = {
  name: "Watch with passkey",
  label: "<value>",
  linked: true,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | The action's name.                                                                        | Watch with passkey                                                                        |
| `label`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | The `act_label` sent with the request.                                                    |                                                                                           |
| `linked`                                                                                  | *boolean*                                                                                 | :heavy_check_mark:                                                                        | Whether your ref on this request is already linked to your platform. Null when not known. |                                                                                           |