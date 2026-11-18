# SDKVerifyTokenLink

Present only on a token whose link waited for your server. `pending`: not confirmed (send your secret key and `partner_user_ref`, or call sdk/confirm-link). `live` with `confirmed: true`: this check confirmed it. `not_live`: the confirm was refused (`code`).

## Example Usage

```typescript
import { SDKVerifyTokenLink } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenLink = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `state`                                                                             | [operations.SDKVerifyTokenState](../../models/operations/sdk-verify-token-state.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `confirmed`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `handle`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `firstTime`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `code`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | `link_pending`, or the confirm refusal code (as sdk/confirm-link).                  |
| `message`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |