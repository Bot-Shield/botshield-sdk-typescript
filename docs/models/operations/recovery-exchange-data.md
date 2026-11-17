# RecoveryExchangeData

## Example Usage

```typescript
import { RecoveryExchangeData } from "botshield-sdk/models/operations";

let value: RecoveryExchangeData = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [operations.RecoveryExchangeDataData](../../models/operations/recovery-exchange-data-data.md)     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `error`                                                                                           | [models.ErrorBody](../../models/error-body.md)                                                    | :heavy_minus_sign:                                                                                | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result. |