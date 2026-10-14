# SecuredAccountsRevokeDataData

## Example Usage

```typescript
import { SecuredAccountsRevokeDataData } from "botshield-sdk/models/operations";

let value: SecuredAccountsRevokeDataData = {
  success: false,
  revoked: true,
  handle: "<value>",
  unlinkedAt: new Date("2024-01-12T17:01:20.834Z"),
  unlinkReason: "credential_changed",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `revoked`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | false when no active Secured Account matched (idempotent).                                                       |
| `handle`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The revoked account's handle; null when nothing was revoked.                                                     |
| `unlinkedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `unlinkReason`                                                                                                   | [operations.SecuredAccountsRevokeUnlinkReason](../../models/operations/secured-accounts-revoke-unlink-reason.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |