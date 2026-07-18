# SDKCreateVerificationLinkResponse

Verification link created

## Example Usage

```typescript
import { SDKCreateVerificationLinkResponse } from "botshield-sdk/models/operations";

let value: SDKCreateVerificationLinkResponse = {
  data: {
    requestId: "<id>",
    deepLink: "<value>",
    webUrl: "https://agreeable-alert.info/",
    qrCodeUrl: "https://dark-completion.name/",
    expiresAt: new Date("2025-03-01T10:21:39.098Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.SDKCreateVerificationLinkData](../../models/operations/sdk-create-verification-link-data.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |