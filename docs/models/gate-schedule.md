# GateSchedule

The gate's runtime. `closesAt` must be after `opensAt`.

## Example Usage

```typescript
import { GateSchedule } from "botshield-sdk/models";

let value: GateSchedule = {
  opensAt: new Date("2026-11-20T17:00:00Z"),
  closesAt: new Date("2026-11-22T05:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `opensAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the gate opens (ISO 8601 with offset). Omitted/null = open from placement.               | 2026-11-20T17:00:00Z                                                                          |
| `closesAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When it closes. Omitted/null = runs until closed.                                             | 2026-11-22T05:00:00Z                                                                          |