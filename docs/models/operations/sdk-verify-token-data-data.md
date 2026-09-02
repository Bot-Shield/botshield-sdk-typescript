# SDKVerifyTokenDataData

## Example Usage

```typescript
import { SDKVerifyTokenDataData } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenDataData = {
  valid: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `valid`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Present when valid is false.                                                                  |
| `expiredAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Present when the token was valid but has expired.                                             |
| `claims`                                                                                      | [operations.Claims](../../models/operations/claims.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |