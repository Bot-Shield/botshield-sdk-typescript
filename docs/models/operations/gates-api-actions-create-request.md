# GatesApiActionsCreateRequest

## Example Usage

```typescript
import { GatesApiActionsCreateRequest } from "botshield-sdk/models/operations";

let value: GatesApiActionsCreateRequest = {
  name: "Watch with passkey",
  actKey: "watch",
  whereUrl: "https://example.com/listings",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Shown to the person on their card.                                       | Watch with passkey                                                       |
| `actKey`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Lower-case letters, digits, `_` or `-`, up to 40 (input is lower-cased). | watch                                                                    |
| `whereUrl`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | Where the action lives on your surface. `https://` only.                 | https://example.com/listings                                             |