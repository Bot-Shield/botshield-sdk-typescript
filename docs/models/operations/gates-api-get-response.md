# GatesApiGetResponse

The gate. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `gate_not_found` (404).

## Example Usage

```typescript
import { GatesApiGetResponse } from "botshield-sdk/models/operations";

let value: GatesApiGetResponse = {
  data: {
    data: {
      gate: {
        key: "presale-nyc-1120",
        name: "NYC presale",
        message: "<value>",
        status: "closed",
        state: "open",
        environment: "development",
        destinationUrl: null,
        policy: null,
        placedAt: new Date("2025-09-11T04:48:20.908Z"),
        placedByApi: true,
      },
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

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [operations.GatesApiGetData](../../models/operations/gates-api-get-data.md) | :heavy_check_mark:                                                          | N/A                                                                         |