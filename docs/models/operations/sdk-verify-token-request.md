# SDKVerifyTokenRequest

## Example Usage

```typescript
import { SDKVerifyTokenRequest } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenRequest = {
  token: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `token`                                             | *string*                                            | :heavy_check_mark:                                  | JWT verification receipt                            |
| `signalToken`                                       | *string*                                            | :heavy_minus_sign:                                  | Optional Signal Pixel token for combined confidence |