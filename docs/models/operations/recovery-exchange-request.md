# RecoveryExchangeRequest

## Example Usage

```typescript
import { RecoveryExchangeRequest } from "botshield-sdk/models/operations";

let value: RecoveryExchangeRequest = {
  code: "<value>",
  secret: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The `botshield_recovery_code` your landing page received. Works once, for 2 minutes.                          |
| `secret`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The secret your page set in this browser before the tap (its SHA-256, base64url, was the button's challenge). |