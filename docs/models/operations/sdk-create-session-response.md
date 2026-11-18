# SDKCreateSessionResponse

Anchor grant window created. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401 (bad or missing credential), 403 (origin not allowed for the site key).

## Example Usage

```typescript
import { SDKCreateSessionResponse } from "botshield-sdk/models/operations";

let value: SDKCreateSessionResponse = {
  data: {},
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [operations.SDKCreateSessionData](../../models/operations/sdk-create-session-data.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |