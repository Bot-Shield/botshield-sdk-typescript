# SigninConfirmDataData

## Example Usage

```typescript
import { SigninConfirmDataData } from "botshield-sdk/models/operations";

let value: SigninConfirmDataData = {
  signedIn: true,
  requestId: "<id>",
  act: "<value>",
  handle: "<value>",
  verifiedAt: new Date("2024-09-10T07:14:31.906Z"),
  environment: "development",
  finishedBy: "qr",
  tier: 1,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `signedIn`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Always true on success.                                                                              |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `act`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | Your Sign-on Action's key.                                                                           |
| `handle`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | The verified account's per-company handle (`OP_…`), as `account.secured` gave it.                    |
| `verifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | When the passkey was used.                                                                           |
| `environment`                                                                                        | [operations.SigninConfirmEnvironment](../../models/operations/signin-confirm-environment.md)         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `finishedBy`                                                                                         | [operations.SigninConfirmFinishedBy](../../models/operations/signin-confirm-finished-by.md)          | :heavy_check_mark:                                                                                   | `inline`: the passkey on your page. `qr`: BotShield's QR (only where your Sign-on Action has it on). |
| `tier`                                                                                               | [operations.SigninConfirmTier](../../models/operations/signin-confirm-tier.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |