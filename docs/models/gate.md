# Gate

A gate as the Gates API returns it — your own facts about the gate, never anything about people.

## Example Usage

```typescript
import { Gate } from "botshield-sdk/models";

let value: Gate = {
  key: "presale-nyc-1120",
  name: "NYC presale",
  message: "<value>",
  status: "draft",
  state: "scheduled",
  environment: "development",
  destinationUrl: "https://fantastic-creature.biz",
  policy: {
    preset: "vote",
    gateType: "age",
    ageThreshold: 18,
    signedUp: false,
    link: "optional",
    passesPerPerson: {
      limit: 2,
      window: "ever",
    },
    realDaysAtLeast: 725172,
    schedule: {
      opensAt: new Date("2025-01-27T01:50:13.112Z"),
      closesAt: new Date("2024-12-21T11:32:24.842Z"),
    },
    line: "2 per person · ever",
  },
  placedAt: new Date("2026-06-13T22:00:45.621Z"),
  placedByApi: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The gate key — what `create-verification-link` sends as `gate`.                               | presale-nyc-1120                                                                              |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | NYC presale                                                                                   |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The gate's line to people on the arrival card.                                                |                                                                                               |
| `status`                                                                                      | [models.Status](../models/status.md)                                                          | :heavy_check_mark:                                                                            | `draft` until activated; `closed` once closed (a closed gate cannot be reopened).             |                                                                                               |
| `state`                                                                                       | [models.GateState](../models/gate-state.md)                                                   | :heavy_check_mark:                                                                            | Where an active gate is in its schedule. Null unless `status` is `active`.                    |                                                                                               |
| `environment`                                                                                 | [models.GateEnvironment](../models/gate-environment.md)                                       | :heavy_check_mark:                                                                            | The key's environment.                                                                        |                                                                                               |
| `destinationUrl`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Where the gate sends a person after they pass.                                                |                                                                                               |
| `policy`                                                                                      | [models.Policy](../models/policy.md)                                                          | :heavy_check_mark:                                                                            | The effective policy (base → org → gate). Null if none could be loaded.                       |                                                                                               |
| `placedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `placedByApi`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | true when an API key (not the Console) placed the gate.                                       |                                                                                               |