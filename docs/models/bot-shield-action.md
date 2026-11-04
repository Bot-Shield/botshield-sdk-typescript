# BotShieldAction

A BotShield Action: one act on your own surface keyed to a passkey. Not a gate — no schedule, no levers — and it always stands on a verified account, so a tap runs the linking ceremony.

## Example Usage

```typescript
import { BotShieldAction } from "botshield-sdk/models";

let value: BotShieldAction = {
  id: "6687edef-b44b-4d8d-97e1-5a5443cc6a5c",
  name: "Watch with passkey",
  actKey: "watch",
  whereUrl: "https://deficient-sushi.org/",
  state: "off",
  environment: "production",
  placedAt: new Date("2025-10-27T15:36:02.161Z"),
  turnedOffAt: new Date("2025-03-29T13:38:14.651Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Shown to the person on their card.                                                            | Watch with passkey                                                                            |
| `actKey`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The part of `act` before the first ':' that names this action.                                | watch                                                                                         |
| `whereUrl`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Where the action lives on your surface (informational).                                       |                                                                                               |
| `state`                                                                                       | [models.BotShieldActionState](../models/bot-shield-action-state.md)                           | :heavy_check_mark:                                                                            | `off` refuses new requests at once (`action_off`).                                            |                                                                                               |
| `environment`                                                                                 | [models.BotShieldActionEnvironment](../models/bot-shield-action-environment.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `placedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `turnedOffAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |