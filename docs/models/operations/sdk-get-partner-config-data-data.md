# SDKGetPartnerConfigDataData

## Example Usage

```typescript
import { SDKGetPartnerConfigDataData } from "botshield-sdk/models/operations";

let value: SDKGetPartnerConfigDataData = {
  integrations: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `integrations`                                                                                             | Record<string, [operations.Integrations](../../models/operations/integrations.md)>                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `environment`                                                                                              | [operations.SDKGetPartnerConfigEnvironment](../../models/operations/sdk-get-partner-config-environment.md) | :heavy_minus_sign:                                                                                         | Site key environment. Omitted when the site key is unknown or has no enabled integrations.                 |