# SDKCreateSessionData

## Example Usage

```typescript
import { SDKCreateSessionData } from "botshield-sdk/models/operations";

let value: SDKCreateSessionData = {
  anchorGrantToken: "<value>",
  anchorGrantExpiresAt: new Date("2025-09-10T16:08:59.802Z"),
  anchorGrantExpiresInSeconds: 986307,
  sessionToken: "<value>",
  expiresAt: new Date("2024-01-12T22:52:22.229Z"),
  expiresInSeconds: 269813,
  organization: {
    id: "<id>",
    environment: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `anchorGrantToken`                                                                                    | *string*                                                                                              | :heavy_check_mark:                                                                                    | Canonical grant token (Bearer bss_*)                                                                  |
| `anchorGrantExpiresAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `anchorGrantExpiresInSeconds`                                                                         | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `sessionToken`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | Legacy alias (backward compatibility)                                                                 |
| `expiresAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `expiresInSeconds`                                                                                    | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `organization`                                                                                        | [operations.SDKCreateSessionOrganization](../../models/operations/sdk-create-session-organization.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |