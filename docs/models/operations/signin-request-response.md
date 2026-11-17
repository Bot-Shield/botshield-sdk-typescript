# SigninRequestResponse

The sign-in request. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key; a site key `pk_…` is refused), `org_not_found` (404), `signin_not_set_up` (409 — no live Sign-on Action with a sign-in page here), `not_verified` (409 — not a verified account here; nothing was started), `account_paused` (409 — the customer's verified accounts are paused until they confirm again from a signed-in page), `unavailable` (503).

## Example Usage

```typescript
import { SigninRequestResponse } from "botshield-sdk/models/operations";

let value: SigninRequestResponse = {
  data: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.SigninRequestData](../../models/operations/signin-request-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |