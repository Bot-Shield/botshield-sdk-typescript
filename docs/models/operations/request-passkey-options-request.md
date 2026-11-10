# RequestPasskeyOptionsRequest

## Example Usage

```typescript
import { RequestPasskeyOptionsRequest } from "botshield-sdk/models/operations";

let value: RequestPasskeyOptionsRequest = {
  requestId: "req_8c1e…",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | From create-verification-link (server to server). Must be pending and unexpired. |