# Signals

## Example Usage

```typescript
import { Signals } from "botshield-sdk/models/operations";

let value: Signals = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `botshieldScore`                                             | *number*                                                     | :heavy_minus_sign:                                           | Signal Pixel score (0-100)                                   |
| `turnstile`                                                  | [operations.Turnstile](../../models/operations/turnstile.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `passkey`                                                    | [operations.Passkey](../../models/operations/passkey.md)     | :heavy_minus_sign:                                           | N/A                                                          |