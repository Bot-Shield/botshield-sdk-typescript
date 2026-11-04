# GatesApiActionsSetStateDataData

## Example Usage

```typescript
import { GatesApiActionsSetStateDataData } from "botshield-sdk/models/operations";

let value: GatesApiActionsSetStateDataData = {
  action: {
    id: "97e157ed-1aad-4481-84ed-ba39ebca5383",
    name: "Watch with passkey",
    actKey: "watch",
    whereUrl: "https://dramatic-underpants.name",
    state: "off",
    environment: "production",
    placedAt: new Date("2026-09-06T10:25:27.686Z"),
    turnedOffAt: null,
  },
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                                                  | [models.BotShieldAction](../../models/bot-shield-action.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                        | A BotShield Action: one act on your own surface keyed to a passkey. Not a gate — no schedule, no levers — and it always stands on a verified account, so a tap runs the linking ceremony. |