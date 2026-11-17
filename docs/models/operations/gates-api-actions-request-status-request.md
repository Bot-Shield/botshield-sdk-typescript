# GatesApiActionsRequestStatusRequest

## Example Usage

```typescript
import { GatesApiActionsRequestStatusRequest } from "botshield-sdk/models/operations";

let value: GatesApiActionsRequestStatusRequest = {
  requestId: "4f28f745-eb08-4998-9860-25c669451668",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `agent`                                                                                                                            | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The agent you sent the request through. A request is keyed on (agent, request_id); name the agent so the answer is that request's. |
| `waitSeconds`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |