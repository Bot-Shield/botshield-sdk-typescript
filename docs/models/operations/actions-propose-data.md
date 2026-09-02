# ActionsProposeData

## Example Usage

```typescript
import { ActionsProposeData } from "botshield-sdk/models/operations";

let value: ActionsProposeData = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.ActionsProposeDataData](../../models/operations/actions-propose-data-data.md)        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `error`                                                                                          | [models.ErrorBody](../../models/error-body.md)                                                   | :heavy_minus_sign:                                                                               | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result. |