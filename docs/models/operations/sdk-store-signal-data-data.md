# SDKStoreSignalDataData

## Example Usage

```typescript
import { SDKStoreSignalDataData } from "botshield-sdk/models/operations";

let value: SDKStoreSignalDataData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `signalToken`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Opaque tamper-proof token (bs_sig_...)                                                        |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Present instead of signal_token when the store failed ('Failed to store signal').             |