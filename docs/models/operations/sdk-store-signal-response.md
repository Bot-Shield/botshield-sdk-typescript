# SDKStoreSignalResponse

Signal stored. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: none — a failed store returns data.data.error.

## Example Usage

```typescript
import { SDKStoreSignalResponse } from "botshield-sdk/models/operations";

let value: SDKStoreSignalResponse = {
  data: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.SDKStoreSignalData](../../models/operations/sdk-store-signal-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |