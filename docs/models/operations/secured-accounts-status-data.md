# SecuredAccountsStatusData

## Example Usage

```typescript
import { SecuredAccountsStatusData } from "botshield-sdk/models/operations";

let value: SecuredAccountsStatusData = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.SecuredAccountsStatusDataData](../../models/operations/secured-accounts-status-data-data.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `error`                                                                                                  | [models.ErrorBody](../../models/error-body.md)                                                           | :heavy_minus_sign:                                                                                       | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result.        |