# GatesApiExtendRequest

## Example Usage

```typescript
import { GatesApiExtendRequest } from "botshield-sdk/models/operations";

let value: GatesApiExtendRequest = {
  key: "presale-nyc-1120",
  closesAt: new Date("2026-11-21T04:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The key of the gate to extend.                                                                | presale-nyc-1120                                                                              |
| `closesAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The new closing time (ISO 8601). Must be later than the gate's current closing time.          | 2026-11-21T04:00:00Z                                                                          |