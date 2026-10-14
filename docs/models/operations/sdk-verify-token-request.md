# SDKVerifyTokenRequest

## Example Usage

```typescript
import { SDKVerifyTokenRequest } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenRequest = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | JWT verification receipt                                                                                                                 |
| `audience`                                                                                                                               | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Your organization id (the organization_id shown in Console settings). When given, a token issued for any other organization is rejected. |