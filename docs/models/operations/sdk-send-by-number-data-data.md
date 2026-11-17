# SDKSendByNumberDataData

## Example Usage

```typescript
import { SDKSendByNumberDataData } from "botshield-sdk/models/operations";

let value: SDKSendByNumberDataData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [operations.SDKSendByNumberStatus](../../models/operations/sdk-send-by-number-status.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `matchNumber`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Show this to your customer; they pick it in the app.                                          |