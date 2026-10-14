# SDKCreateSessionData

## Example Usage

```typescript
import { SDKCreateSessionData } from "botshield-sdk/models/operations";

let value: SDKCreateSessionData = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.DataNotarizeRequiresUserRef](../../models/operations/data-notarize-requires-user-ref.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `error`                                                                                              | [models.ErrorBody](../../models/error-body.md)                                                       | :heavy_minus_sign:                                                                                   | Handler error. Arrives inside `data.error` with HTTP 200. Check for it before reading the result.    |