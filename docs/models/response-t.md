# ResponseT

## Example Usage

```typescript
import { ResponseT } from "botshield-sdk/models";

let value: ResponseT = {
  clientDataJSON: "<value>",
  authenticatorData: "<value>",
  signature: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `clientDataJSON`       | *string*               | :heavy_check_mark:     | N/A                    |
| `authenticatorData`    | *string*               | :heavy_check_mark:     | N/A                    |
| `signature`            | *string*               | :heavy_check_mark:     | N/A                    |
| `userHandle`           | *string*               | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |