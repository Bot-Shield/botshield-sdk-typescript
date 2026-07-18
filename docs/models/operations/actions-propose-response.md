# ActionsProposeResponse

Action proposal queued

## Example Usage

```typescript
import { ActionsProposeResponse } from "botshield-sdk/models/operations";

let value: ActionsProposeResponse = {
  data: {
    status: "queued",
    cardId: "2720a10e-75fb-4752-b91b-8e65c28e6f9a",
    ttlAt: new Date("2024-06-03T06:21:09.929Z"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ActionsProposeData](../../models/operations/actions-propose-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |