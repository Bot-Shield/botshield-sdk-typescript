# SecuredAccountsRevokeResponse

Result. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `api_key_required` / `invalid_api_key` (401), `partner_not_found` (403), `ref_or_handle_required` / `invalid_platform_user_ref` / `invalid_handle` / `invalid_reason` (400), `revoke_failed` (500).

## Example Usage

```typescript
import { SecuredAccountsRevokeResponse } from "botshield-sdk/models/operations";

let value: SecuredAccountsRevokeResponse = {
  data: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.SecuredAccountsRevokeData](../../models/operations/secured-accounts-revoke-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |