# SDKCreateSessionDataData

## Example Usage

```typescript
import { SDKCreateSessionDataData } from "botshield-sdk/models/operations";

let value: SDKCreateSessionDataData = {
  anchorGrantToken: "<value>",
  anchorGrantExpiresAt: new Date("2024-08-19T18:05:28.671Z"),
  anchorGrantExpiresInSeconds: 894261,
  sessionToken: "<value>",
  expiresAt: new Date("2026-08-26T18:27:09.621Z"),
  expiresInSeconds: 830984,
  organization: {
    id: "<id>",
    environment: "development",
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