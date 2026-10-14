# SecuredAccountsListDataData

## Example Usage

```typescript
import { SecuredAccountsListDataData } from "botshield-sdk/models/operations";

let value: SecuredAccountsListDataData = {
  rows: [
    {
      handle: "<value>",
      status: "active",
      securedAt: new Date("2026-12-22T10:32:31.956Z"),
      unlinkedAt: new Date("2024-10-27T19:07:04.472Z"),
      unlinkedBy: "human",
      unlinkReason: "platform",
      surfaceId: "890ec218-10ff-441c-b8c5-f9bc6dce799e",
    },
  ],
  total: 694024,
  environment: "production",
  limit: 247626,
  offset: 704471,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `rows`                                                                                                    | [operations.Row](../../models/operations/row.md)[]                                                        | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `total`                                                                                                   | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Matching rows across all pages.                                                                           |
| `environment`                                                                                             | [operations.SecuredAccountsListEnvironment](../../models/operations/secured-accounts-list-environment.md) | :heavy_check_mark:                                                                                        | Your API key's environment.                                                                               |
| `limit`                                                                                                   | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `offset`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |