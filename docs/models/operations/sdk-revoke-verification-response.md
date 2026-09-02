# SDKRevokeVerificationResponse

Revocation result. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401.

## Example Usage

```typescript
import { SDKRevokeVerificationResponse } from "botshield-sdk/models/operations";

let value: SDKRevokeVerificationResponse = {
  data: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.SDKRevokeVerificationData](../../models/operations/sdk-revoke-verification-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |