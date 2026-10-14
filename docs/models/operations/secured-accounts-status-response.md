# SecuredAccountsStatusResponse

Current state. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `api_key_required` / `invalid_api_key` (401), `partner_not_found` (403), `presence_requires_user_ref` / `notarize_ref_must_be_stable` (400), `presence_unavailable` (503, retry).

## Example Usage

```typescript
import { SecuredAccountsStatusResponse } from "botshield-sdk/models/operations";

let value: SecuredAccountsStatusResponse = {
  data: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.SecuredAccountsStatusData](../../models/operations/secured-accounts-status-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |