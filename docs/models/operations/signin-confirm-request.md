# SigninConfirmRequest

## Example Usage

```typescript
import { SigninConfirmRequest } from "botshield-sdk/models/operations";

let value: SigninConfirmRequest = {
  requestId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The request your server made with signin/request.                                                                |
| `partnerUserRef`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The account this attempt is for. When sent, a sign-in for any other account is refused (`signin_wrong_account`). |