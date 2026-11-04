# GatesApiCreateDataData

## Example Usage

```typescript
import { GatesApiCreateDataData } from "botshield-sdk/models/operations";

let value: GatesApiCreateDataData = {
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
  activated: false,
  activationError: {
    message: "<value>",
    statusCode: 409,
    code: "gate_key_taken",
  },
};
```

## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gate`                                                                                                                                                                                                         | [models.Gate](../../models/gate.md)                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                             | A gate as the Gates API returns it — your own facts about the gate, never anything about people.                                                                                                               |
| `activated`                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                             | Whether the gate is live now.                                                                                                                                                                                  |
| `activationError`                                                                                                                                                                                              | [models.GatesApiError](../../models/gates-api-error.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Present only when `activate: true` was sent and Production activation was blocked: `org_not_verified`, `domain_not_verified` or `gate_limit_reached` (403). The gate stays a draft — call activate once fixed. |