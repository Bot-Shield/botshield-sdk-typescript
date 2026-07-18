# SDKLogoutRequest

## Example Usage

```typescript
import { SDKLogoutRequest } from "botshield-sdk/models/operations";

let value: SDKLogoutRequest = {
  sessionToken: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `sessionToken`                           | *string*                                 | :heavy_check_mark:                       | The anchor grant token (bss_*) to revoke |