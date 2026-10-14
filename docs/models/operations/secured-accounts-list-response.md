# SecuredAccountsListResponse

One page of Secured Accounts. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `api_key_required` / `invalid_api_key` (401), `partner_not_found` (403), `invalid_platform_user_ref` / `invalid_status` (400), `secured_accounts_unavailable` (500).

## Example Usage

```typescript
import { SecuredAccountsListResponse } from "botshield-sdk/models/operations";

let value: SecuredAccountsListResponse = {
  data: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.SecuredAccountsListData](../../models/operations/secured-accounts-list-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |