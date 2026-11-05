# GatesApiActivateData

## Example Usage

```typescript
import { GatesApiActivateData } from "botshield-sdk/models/operations";

let value: GatesApiActivateData = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.GatesApiActivateDataData](../../models/operations/gates-api-activate-data-data.md)               | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | [models.GatesApiError](../../models/gates-api-error.md)                                                      | :heavy_minus_sign:                                                                                           | Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result. |