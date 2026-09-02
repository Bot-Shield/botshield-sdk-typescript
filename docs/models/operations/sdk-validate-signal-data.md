# SDKValidateSignalData

## Example Usage

```typescript
import { SDKValidateSignalData } from "botshield-sdk/models/operations";

let value: SDKValidateSignalData = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.SDKValidateSignalDataData](../../models/operations/sdk-validate-signal-data-data.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `error`                                                                                          | [models.ErrorBody](../../models/error-body.md)                                                   | :heavy_minus_sign:                                                                               | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result. |