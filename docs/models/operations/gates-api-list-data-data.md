# GatesApiListDataData

## Example Usage

```typescript
import { GatesApiListDataData } from "botshield-sdk/models/operations";

let value: GatesApiListDataData = {
  gates: [
    {
      key: "presale-nyc-1120",
      name: "NYC presale",
      message: null,
      status: "active",
      state: "closed",
      environment: "production",
      destinationUrl: "https://informal-harp.biz/",
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
      placedAt: new Date("2024-01-14T13:09:59.977Z"),
      placedByApi: true,
    },
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `gates`                               | [models.Gate](../../models/gate.md)[] | :heavy_check_mark:                    | N/A                                   |