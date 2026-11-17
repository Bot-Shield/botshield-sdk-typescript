# RecoveryOtherRouteDataData

## Example Usage

```typescript
import { RecoveryOtherRouteDataData } from "botshield-sdk/models/operations";

let value: RecoveryOtherRouteDataData = {
  received: false,
  worksFrom: new Date("2025-11-13T13:35:03.792Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `received`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `worksFrom`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When your other route may take effect: the person has until then to say it was not them.      |