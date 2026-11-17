# SigninConfirmResponse

Signed in. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key; a site key `pk_…` is refused), `org_not_found` (404), `signin_unknown` (404 — no sign-in your server asked for has that id; also another company's or environment's), `signin_pending` (409 — not confirmed yet), `signin_refused` (409 — not confirmed; do not sign the customer in), `signin_expired` (410 — the request or its answer is more than 2 minutes old), `signin_used` (409 — already redeemed), `signin_wrong_account` (409 — for a different account from `partner_user_ref`), `unavailable` (503).

## Example Usage

```typescript
import { SigninConfirmResponse } from "botshield-sdk/models/operations";

let value: SigninConfirmResponse = {
  data: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.SigninConfirmData](../../models/operations/signin-confirm-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |