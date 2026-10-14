# SDKGetPartnerConfigResponse

Partner configuration. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: none — unknown site key returns empty integrations.

## Example Usage

```typescript
import { SDKGetPartnerConfigResponse } from "botshield-sdk/models/operations";

let value: SDKGetPartnerConfigResponse = {
  data: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.SDKGetPartnerConfigData](../../models/operations/sdk-get-partner-config-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |