# SDKStoreSignalData

## Example Usage

```typescript
import { SDKStoreSignalData } from "botshield-sdk/models/operations";

let value: SDKStoreSignalData = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.SDKStoreSignalDataData](../../models/operations/sdk-store-signal-data-data.md)       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `error`                                                                                          | [models.ErrorBody](../../models/error-body.md)                                                   | :heavy_minus_sign:                                                                               | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result. |