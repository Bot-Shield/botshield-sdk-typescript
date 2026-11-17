# SDKConfirmLinkDataData

## Example Usage

```typescript
import { SDKConfirmLinkDataData } from "botshield-sdk/models/operations";

let value: SDKConfirmLinkDataData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `linked`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [operations.SDKConfirmLinkState](../../models/operations/sdk-confirm-link-state.md)           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `firstTime`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `handle`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trusted`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trustedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `verificationToken`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The finished token. Single use, 2 minutes.                                                    |