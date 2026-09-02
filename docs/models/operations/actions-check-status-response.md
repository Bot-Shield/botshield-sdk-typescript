# ActionsCheckStatusResponse

Current proposal state. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401, 404 (request_id not found), 500.

## Example Usage

```typescript
import { ActionsCheckStatusResponse } from "botshield-sdk/models/operations";

let value: ActionsCheckStatusResponse = {
  data: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.ActionsCheckStatusData](../../models/operations/actions-check-status-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |