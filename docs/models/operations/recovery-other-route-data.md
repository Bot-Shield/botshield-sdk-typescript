# RecoveryOtherRouteData

## Example Usage

```typescript
import { RecoveryOtherRouteData } from "botshield-sdk/models/operations";

let value: RecoveryOtherRouteData = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [operations.RecoveryOtherRouteDataData](../../models/operations/recovery-other-route-data-data.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `error`                                                                                            | [models.ErrorBody](../../models/error-body.md)                                                     | :heavy_minus_sign:                                                                                 | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result.  |