# RequestPasskeyCompleteResponse

The outcome at `data.data`. Handler errors arrive here too (HTTP 200) as `data.error`: `inline_not_for_age_gate` (400): the request is an Age Gate. This lane is for one named account; send the person to `data.error.url` (the app hand-off), where the age assertion is read.

## Example Usage

```typescript
import { RequestPasskeyCompleteResponse } from "botshield-sdk/models/operations";

let value: RequestPasskeyCompleteResponse = {
  data: {
    data: {
      outcome: "verified",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [operations.RequestPasskeyCompleteData](../../models/operations/request-passkey-complete-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |