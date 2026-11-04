# PassesPerPerson

Passes per person on your platform: `limit` per `window` (`30d` = rolling 30 days, `ever` = lifetime).

## Example Usage

```typescript
import { PassesPerPerson } from "botshield-sdk/models";

let value: PassesPerPerson = {
  limit: 2,
  window: "ever",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `limit`                              | *number*                             | :heavy_check_mark:                   | N/A                                  | 2                                    |
| `window`                             | [models.Window](../models/window.md) | :heavy_check_mark:                   | N/A                                  | ever                                 |