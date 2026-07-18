# ActionsCheckStatusData

## Example Usage

```typescript
import { ActionsCheckStatusData } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusData = {
  status: "approved",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                             | [operations.ActionsCheckStatusStatus](../../models/operations/actions-check-status-status.md)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `verdict`                                                                                                            | [operations.Verdict](../../models/operations/verdict.md)                                                             | :heavy_minus_sign:                                                                                                   | Present only when status is approved or denied.                                                                      |
| `resolutionJwt`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | BotShield-signed Resolution JWT. Present only when status is approved or denied. Verify with BotShield's public key. |
| `ceremonyId`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `delivered`                                                                                                          | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Whether the callback webhook has been confirmed delivered.                                                           |