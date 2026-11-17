# SigninConfirmData

## Example Usage

```typescript
import { SigninConfirmData } from "botshield-sdk/models/operations";

let value: SigninConfirmData = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [operations.SigninConfirmDataData](../../models/operations/signin-confirm-data-data.md)           | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `error`                                                                                           | [models.ErrorBody](../../models/error-body.md)                                                    | :heavy_minus_sign:                                                                                | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result. |