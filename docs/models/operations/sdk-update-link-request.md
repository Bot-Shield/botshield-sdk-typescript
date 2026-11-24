# SDKUpdateLinkRequest

## Example Usage

```typescript
import { SDKUpdateLinkRequest } from "botshield-sdk/models/operations";

let value: SDKUpdateLinkRequest = {
  signinPasskey: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `partnerUserRef`                                        | *string*                                                | :heavy_minus_sign:                                      | The account, by the same id you started the link with.  |
| `partnerUserId`                                         | *string*                                                | :heavy_minus_sign:                                      | Alias of partner_user_ref.                              |
| `signinPasskey`                                         | *false*                                                 | :heavy_check_mark:                                      | Only `false`: the account now signs in with a password. |