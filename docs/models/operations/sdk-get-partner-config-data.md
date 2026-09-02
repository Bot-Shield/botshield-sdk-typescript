# SDKGetPartnerConfigData

## Example Usage

```typescript
import { SDKGetPartnerConfigData } from "botshield-sdk/models/operations";

let value: SDKGetPartnerConfigData = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [operations.SDKGetPartnerConfigDataData](../../models/operations/sdk-get-partner-config-data-data.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `error`                                                                                               | [models.ErrorBody](../../models/error-body.md)                                                        | :heavy_minus_sign:                                                                                    | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result.      |