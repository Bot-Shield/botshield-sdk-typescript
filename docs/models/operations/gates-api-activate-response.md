# GatesApiActivateResponse

The gate, now active. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key), `gates_scope_required` (403 — the key lacks Gates API access), `org_not_found` (404), `gate_not_found` (404), `org_not_verified` / `domain_not_verified` / `gate_limit_reached` (403, Production only).

## Example Usage

```typescript
import { GatesApiActivateResponse } from "botshield-sdk/models/operations";

let value: GatesApiActivateResponse = {
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.GatesApiActivateData](../../models/operations/gates-api-activate-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |