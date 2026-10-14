# SecuredAccountsStatusDataData

## Example Usage

```typescript
import { SecuredAccountsStatusDataData } from "botshield-sdk/models/operations";

let value: SecuredAccountsStatusDataData = {
  state: "fresh",
  freshUntil: new Date("2026-01-19T19:35:16.989Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `state`                                                                                       | [operations.State](../../models/operations/state.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `freshUntil`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When recent presence lapses (in the past when `stale`); null when `none`.                     |