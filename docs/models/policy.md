# Policy

The effective policy (base → org → gate). Null if none could be loaded.

## Example Usage

```typescript
import { Policy } from "botshield-sdk/models";

let value: Policy = {
  preset: "promo",
  gateType: "human",
  ageThreshold: 21,
  signedUp: true,
  link: "never",
  passesPerPerson: {
    limit: 2,
    window: "ever",
  },
  realDaysAtLeast: 19105,
  schedule: {
    opensAt: new Date("2025-01-27T01:50:13.112Z"),
    closesAt: new Date("2024-12-21T11:32:24.842Z"),
  },
  line: "2 per person · ever",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `preset`                                                 | [models.GatePreset](../models/gate-preset.md)            | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `gateType`                                               | [models.GateType](../models/gate-type.md)                | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `ageThreshold`                                           | [models.AgeThreshold](../models/age-threshold.md)        | :heavy_check_mark:                                       | Age Gate only; null on a Human Gate.                     |                                                          |
| `signedUp`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `link`                                                   | [models.GateLink](../models/gate-link.md)                | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `passesPerPerson`                                        | [models.PassesPerPerson](../models/passes-per-person.md) | :heavy_check_mark:                                       | Null = as often as they like.                            |                                                          |
| `realDaysAtLeast`                                        | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `schedule`                                               | [models.Schedule](../models/schedule.md)                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `line`                                                   | *string*                                                 | :heavy_check_mark:                                       | The human-readable policy readback the Console shows.    | 2 per person · ever                                      |