# SigninRequestDataData

## Example Usage

```typescript
import { SigninRequestDataData } from "botshield-sdk/models/operations";

let value: SigninRequestDataData = {
  requestId: "<id>",
  expiresAt: new Date("2024-02-02T20:44:06.223Z"),
  tier: 1,
  pageOrigin: "<value>",
  qr: false,
  qrUrl: "https://major-siege.org/",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The only value your page gets.                                                                 |
| `expiresAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | 2 minutes from now.                                                                            |
| `tier`                                                                                         | [operations.SigninRequestTier](../../models/operations/signin-request-tier.md)                 | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pageOrigin`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The one page origin BotShield's frame will run under: your Sign-on Action's address.           |
| `qr`                                                                                           | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether BotShield's QR may finish this sign-in (your Sign-on Action's QR switch; default off). |
| `qrUrl`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | BotShield's QR address for this request, only when `qr` is true.                               |