# SDKCreateVerificationLinkResponse

Verification link created. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 400 (partner not found / gate not active), 401, 403 (gate not in the token allowlist), 409 (pending request already exists — call revoke-verification). BotShield Actions and linking codes (`data.error.code`): `act_label_without_act` (400), `action_not_a_gate` (400), `action_invalid` (400 — act malformed), `action_not_found` (400 — no action with that key here), `action_off` (409), `action_requires_user_ref` (400), `link_requires_user_ref` (400 — the gate's policy is `link: required` and no partner_user_ref was sent).

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