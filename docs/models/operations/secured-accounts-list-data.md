# SecuredAccountsListData

## Example Usage

```typescript
import { SecuredAccountsListData } from "botshield-sdk/models/operations";

let value: SecuredAccountsListData = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.SecuredAccountsListDataData](../../models/operations/secured-accounts-list-data-data.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `error`                                                                                              | [models.ErrorBody](../../models/error-body.md)                                                       | :heavy_minus_sign:                                                                                   | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result.    |