# SDKConfirmLinkRequest

## Example Usage

```typescript
import { SDKConfirmLinkRequest } from "botshield-sdk/models/operations";

let value: SDKConfirmLinkRequest = {
  requestId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `requestId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | The request the person tapped (req_…).                                      |
| `partnerUserRef`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | The account your own session shows — the same id you started the link with. |
| `partnerUserId`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Alias of partner_user_ref.                                                  |