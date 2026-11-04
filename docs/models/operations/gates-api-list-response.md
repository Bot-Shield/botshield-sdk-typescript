# GatesApiListResponse

Gates. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `internal` (500).

## Example Usage

```typescript
import { GatesApiListResponse } from "botshield-sdk/models/operations";

let value: GatesApiListResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [operations.GatesApiListData](../../models/operations/gates-api-list-data.md) | :heavy_check_mark:                                                            | N/A                                                                           |