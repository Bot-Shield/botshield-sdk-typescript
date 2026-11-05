# GatesApiExtendResponse

Extended. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401), `gates_scope_required` (403), `org_not_found` (404), `gate_not_found` (404 — no draft or active gate holds this key), `extend_only` (400 — closesAt is not later than now set), `invalid_closes_at` (400), `gate_closed` (409 — the window has already passed), `gate_has_no_end` (409), `conflict` (409 — the gate changed at the same moment; read and retry).

## Example Usage

```typescript
import { GatesApiExtendResponse } from "botshield-sdk/models/operations";

let value: GatesApiExtendResponse = {
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
      extended: false,
      version: 91176,
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.GatesApiExtendData](../../models/operations/gates-api-extend-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |