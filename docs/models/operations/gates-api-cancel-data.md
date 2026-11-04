# GatesApiCancelData

## Example Usage

```typescript
import { GatesApiCancelData } from "botshield-sdk/models/operations";

let value: GatesApiCancelData = {
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
| `data`                                                                                                       | [operations.GatesApiCancelDataData](../../models/operations/gates-api-cancel-data-data.md)                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | [models.GatesApiError](../../models/gates-api-error.md)                                                      | :heavy_minus_sign:                                                                                           | Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result. |