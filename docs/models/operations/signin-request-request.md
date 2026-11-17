# SigninRequestRequest

## Example Usage

```typescript
import { SigninRequestRequest } from "botshield-sdk/models/operations";

let value: SigninRequestRequest = {
  partnerUserRef: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `partnerUserRef`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Your own reference for the account (the same `partner_user_ref` it was verified with). Hashed server-side; never stored or returned. |