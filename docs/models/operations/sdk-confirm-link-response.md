# SDKConfirmLinkResponse

Result. NOTE: handler errors arrive here (HTTP 200) as data.error — codes: secret_key_required · invalid_key · account_required · link_not_found · environment_mismatch · link_account_mismatch · link_expired · link_refused · rebind_requires_prior_id · already_trusted · signin_passkey_required (403) · password_reset_recent (403, with retry_after) · unavailable.

## Example Usage

```typescript
import { SDKConfirmLinkResponse } from "botshield-sdk/models/operations";

let value: SDKConfirmLinkResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [operations.SDKConfirmLinkData](../../models/operations/sdk-confirm-link-data.md) | :heavy_minus_sign:                                                                | N/A                                                                               |