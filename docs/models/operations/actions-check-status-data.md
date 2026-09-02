# ActionsCheckStatusData

## Example Usage

```typescript
import { ActionsCheckStatusData } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusData = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [operations.ActionsCheckStatusDataData](../../models/operations/actions-check-status-data-data.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `error`                                                                                            | [models.ErrorBody](../../models/error-body.md)                                                     | :heavy_minus_sign:                                                                                 | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result.   |