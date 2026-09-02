# ActionsCheckStatusDataData

## Example Usage

```typescript
import { ActionsCheckStatusDataData } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusDataData = {
  status: "queued",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [operations.ActionsCheckStatusStatus](../../models/operations/actions-check-status-status.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ttlAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resolvedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ceremonyId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resolutionJwt`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | BotShield-signed Proof of Resolution JWT. null until status is approved or denied.            |
| `verdict`                                                                                     | [operations.Verdict](../../models/operations/verdict.md)                                      | :heavy_minus_sign:                                                                            | null until status is approved or denied.                                                      |
| `delivered`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the callback webhook has been confirmed delivered.                                    |
| `callbackAttempts`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |