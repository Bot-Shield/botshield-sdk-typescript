# GatesApiCloseDataData

## Example Usage

```typescript
import { GatesApiCloseDataData } from "botshield-sdk/models/operations";

let value: GatesApiCloseDataData = {
  closed: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `closed`                                                   | *boolean*                                                  | :heavy_check_mark:                                         | Always true.                                               |
| `alreadyClosed`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | Present (true) when no draft or active gate held this key. |