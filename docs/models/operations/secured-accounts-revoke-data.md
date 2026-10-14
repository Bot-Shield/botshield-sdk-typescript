# SecuredAccountsRevokeData

## Example Usage

```typescript
import { SecuredAccountsRevokeData } from "botshield-sdk/models/operations";

let value: SecuredAccountsRevokeData = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.SecuredAccountsRevokeDataData](../../models/operations/secured-accounts-revoke-data-data.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `error`                                                                                                  | [models.ErrorBody](../../models/error-body.md)                                                           | :heavy_minus_sign:                                                                                       | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result.        |