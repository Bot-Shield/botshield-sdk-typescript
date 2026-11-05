# GatesApiListData

## Example Usage

```typescript
import { GatesApiListData } from "botshield-sdk/models/operations";

let value: GatesApiListData = {
  data: {
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
  },
  error: {
    message: "<value>",
    statusCode: 409,
    code: "gate_key_taken",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.GatesApiListDataData](../../models/operations/gates-api-list-data-data.md)                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | [models.GatesApiError](../../models/gates-api-error.md)                                                      | :heavy_minus_sign:                                                                                           | Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result. |