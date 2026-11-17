# SDKVerifyTokenRequest

## Example Usage

```typescript
import { SDKVerifyTokenRequest } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenRequest = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                        | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | JWT verification receipt                                                                                                                                       |
| `audience`                                                                                                                                                     | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | Your organization id (the organization_id shown in Console settings). When given, a token issued for any other organization is rejected.                       |
| `partnerUserRef`                                                                                                                                               | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | 4.0: with your secret key, on a token whose link is pending, this confirms the link (same as sdk/confirm-link). The answer's `link` says whether it went live. |