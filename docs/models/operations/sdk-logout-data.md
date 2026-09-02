# SDKLogoutData

## Example Usage

```typescript
import { SDKLogoutData } from "botshield-sdk/models/operations";

let value: SDKLogoutData = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `success`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `message`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `tokenFound`                                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `revokedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `error`                                                                                          | [models.ErrorBody](../../models/error-body.md)                                                   | :heavy_minus_sign:                                                                               | Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result. |