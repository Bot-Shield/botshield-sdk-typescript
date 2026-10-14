# SecuredAccountsStatusRequest

## Example Usage

```typescript
import { SecuredAccountsStatusRequest } from "botshield-sdk/models/operations";

let value: SecuredAccountsStatusRequest = {
  platformUserRef: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformUserRef`                                                                                                                                                                           | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | Your stable user id for the account (the same `platform_user_ref` you passed when it was secured). Hashed server-side; never stored or returned. Must be a stable id, not an email address. |