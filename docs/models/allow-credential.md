# AllowCredential

## Example Usage

```typescript
import { AllowCredential } from "botshield-sdk/models";

let value: AllowCredential = {
  id: "<id>",
  type: "public-key",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | base64url credential id                                                                    |
| `type`                                                                                     | [models.InlinePasskeyRequestOptionsType](../models/inline-passkey-request-options-type.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `transports`                                                                               | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |