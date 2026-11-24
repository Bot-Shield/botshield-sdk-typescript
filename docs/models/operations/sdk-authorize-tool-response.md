# SDKAuthorizeToolResponse

The answer. reason is one of not_approved, not_passkey, tool_mismatch, args_not_approved, args_mismatch, subject_mismatch, unlinked, replayed, expired, not_yours, not_on_record, invalid. Errors arrive as data.error — code: `invalid_key` (401).

## Example Usage

```typescript
import { SDKAuthorizeToolResponse } from "botshield-sdk/models/operations";

let value: SDKAuthorizeToolResponse = {
  data: {
    error: {
      message: "<value>",
      statusCode: 409,
      code: "gate_key_taken",
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.SDKAuthorizeToolData](../../models/operations/sdk-authorize-tool-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |