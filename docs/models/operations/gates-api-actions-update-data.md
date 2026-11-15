# GatesApiActionsUpdateData

## Example Usage

```typescript
import { GatesApiActionsUpdateData } from "botshield-sdk/models/operations";

let value: GatesApiActionsUpdateData = {
  data: {
    action: {
      id: "97e157ed-1aad-4481-84ed-ba39ebca5383",
      name: "Watch with passkey",
      actKey: "watch",
      whereUrl: "https://dramatic-underpants.name",
      state: "off",
      environment: "production",
      placedAt: new Date("2026-09-06T10:25:27.686Z"),
      turnedOffAt: null,
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
| `data`                                                                                                       | [operations.GatesApiActionsUpdateDataData](../../models/operations/gates-api-actions-update-data-data.md)    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | [models.GatesApiError](../../models/gates-api-error.md)                                                      | :heavy_minus_sign:                                                                                           | Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result. |