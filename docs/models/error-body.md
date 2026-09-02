# ErrorBody

Handler error. Arrives inside data.error with HTTP 200 — check for it before reading the result.

## Example Usage

```typescript
import { ErrorBody } from "botshield-sdk/models";

let value: ErrorBody = {
  message: "<value>",
  statusCode: 505674,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `message`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | The HTTP status the error stands for (401, 403, 404, 409, 422, 500, 502). |
| `code`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Machine code when present, e.g. ttl_below_floor, ttl_above_ceiling.       |
| `minTtlSeconds`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `maxTtlSeconds`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `violations`                                                              | [models.Violation](../models/violation.md)[]                              | :heavy_minus_sign:                                                        | Adaptive Card TRUST-layer rejections (statusCode 422).                    |