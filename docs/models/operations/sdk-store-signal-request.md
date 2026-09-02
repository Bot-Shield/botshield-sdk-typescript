# SDKStoreSignalRequest

## Example Usage

```typescript
import { SDKStoreSignalRequest } from "botshield-sdk/models/operations";

let value: SDKStoreSignalRequest = {
  siteKey: "<value>",
  score: 389020,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `siteKey`             | *string*              | :heavy_check_mark:    | N/A                   |
| `score`               | *number*              | :heavy_check_mark:    | N/A                   |
| `edgeScore`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `clientScore`         | *number*              | :heavy_minus_sign:    | N/A                   |
| `ipHash`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `uaHash`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `country`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `signals`             | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |