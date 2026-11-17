# SDKCreateVerificationLinkResponse

Verification link created. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 400 (partner not found / gate not active), 401, 403 (gate not in the token allowlist), 409 (pending request already exists — call revoke-verification).

## Example Usage

```typescript
import { SDKCreateVerificationLinkResponse } from "botshield-sdk/models/operations";

let value: SDKCreateVerificationLinkResponse = {
  data: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.SDKCreateVerificationLinkData](../../models/operations/sdk-create-verification-link-data.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |