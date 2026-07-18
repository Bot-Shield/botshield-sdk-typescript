# SDKStoreSignalResponse

Signal stored

## Example Usage

```typescript
import { SDKStoreSignalResponse } from "botshield-sdk/models/operations";

let value: SDKStoreSignalResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `signalToken`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Opaque tamper-proof token (bs_sig_...)                                                        |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |