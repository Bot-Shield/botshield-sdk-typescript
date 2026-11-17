# SDKSendByNumberRequest

## Example Usage

```typescript
import { SDKSendByNumberRequest } from "botshield-sdk/models/operations";

let value: SDKSendByNumberRequest = {
  phoneNumber: "479-309-9343 x4234",
  act: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `phoneNumber`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The customer's mobile number (E.164, or a 10-digit US number). Used for one lookup, then dropped. |
| `act`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | A live BotShield Action key. Its name is the reason the person reads.                             |
| `actLabel`                                                                                        | *string*                                                                                          | :heavy_minus_sign:                                                                                | Your own line on the card. No links.                                                              |