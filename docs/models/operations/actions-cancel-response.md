# ActionsCancelResponse

Cancellation result. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes for this operation: 401, 404 (request_id not found), 500.

## Example Usage

```typescript
import { ActionsCancelResponse } from "botshield-sdk/models/operations";

let value: ActionsCancelResponse = {
  data: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.ActionsCancelData](../../models/operations/actions-cancel-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |