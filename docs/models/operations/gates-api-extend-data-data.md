# GatesApiExtendDataData

## Example Usage

```typescript
import { GatesApiExtendDataData } from "botshield-sdk/models/operations";

let value: GatesApiExtendDataData = {
  gate: {
    key: "presale-nyc-1120",
    name: "NYC presale",
    message: "<value>",
    status: "closed",
    state: "open",
    environment: "development",
    destinationUrl: null,
    policy: null,
    placedAt: new Date("2025-09-11T04:48:20.908Z"),
    placedByApi: true,
  },
  extended: true,
  version: 675217,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `gate`                                                                                           | [models.Gate](../../models/gate.md)                                                              | :heavy_check_mark:                                                                               | A gate as the Gates API returns it — your own facts about the gate, never anything about people. |
| `extended`                                                                                       | *boolean*                                                                                        | :heavy_check_mark:                                                                               | Always true.                                                                                     |
| `version`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | The gate's new policy document version.                                                          |