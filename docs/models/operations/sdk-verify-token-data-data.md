# SDKVerifyTokenDataData

## Example Usage

```typescript
import { SDKVerifyTokenDataData } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenDataData = {
  valid: true,
  claims: {
    act: "dibs:listing_4417",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `valid`                                                                                                                 | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `reason`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Present when valid is false.                                                                                            |
| `expiredAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | Present when the token was valid but has expired.                                                                       |
| `claims`                                                                                                                | [operations.Claims](../../models/operations/claims.md)                                                                  | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `replayed`                                                                                                              | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | true when this token was already checked once — the check is refused (valid: false). Each token is valid for one check. |
| `verdict`                                                                                                               | [operations.SDKVerifyTokenVerdict](../../models/operations/sdk-verify-token-verdict.md)                                 | :heavy_minus_sign:                                                                                                      | Present when `valid` is true. `pass` when the token records a verified human.                                           |