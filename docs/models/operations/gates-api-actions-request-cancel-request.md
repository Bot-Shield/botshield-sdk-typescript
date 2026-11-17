# GatesApiActionsRequestCancelRequest

## Example Usage

```typescript
import { GatesApiActionsRequestCancelRequest } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestCancelRequest = {
  requestId: "051094fe-34d9-4831-871e-175e420057ed",
  agent: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `requestId`                                          | *string*                                             | :heavy_check_mark:                                   | The request_id you sent.                             |
| `agent`                                              | *string*                                             | :heavy_check_mark:                                   | The agent you sent it through.                       |
| `reason`                                             | *string*                                             | :heavy_minus_sign:                                   | For your own audit trail. Never shown to the person. |