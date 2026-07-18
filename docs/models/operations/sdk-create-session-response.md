# SDKCreateSessionResponse

Anchor grant window created

## Example Usage

```typescript
import { SDKCreateSessionResponse } from "botshield-sdk/models/operations";

let value: SDKCreateSessionResponse = {
  data: {
    anchorGrantToken: "<value>",
    anchorGrantExpiresAt: new Date("2024-05-07T11:24:47.060Z"),
    anchorGrantExpiresInSeconds: 537432,
    sessionToken: "<value>",
    expiresAt: new Date("2025-01-05T13:05:06.609Z"),
    expiresInSeconds: 859631,
    organization: {
      id: "<id>",
      environment: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.SDKCreateSessionData](../../models/operations/sdk-create-session-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |