# SDKLogoutResponse

Token revoked. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401, 403 (token belongs to another organization).

## Example Usage

```typescript
import { SDKLogoutResponse } from "botshield-sdk/models/operations";

let value: SDKLogoutResponse = {
  data: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [operations.SDKLogoutData](../../models/operations/sdk-logout-data.md) | :heavy_check_mark:                                                     | N/A                                                                    |