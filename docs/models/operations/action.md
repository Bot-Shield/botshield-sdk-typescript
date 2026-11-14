# Action

## Example Usage

```typescript
import { Action } from "botshield-sdk/models/operations";

let value: Action = {
  summaryTitle: "<value>",
  summaryDetail: {
    label: "TOTAL",
    value: "$100.90",
  },
  category: "travel.book",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `summaryTitle`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | Plain-English action description shown on the card (e.g. 'Has an Uber ride ready to book').           |                                                                                                       |
| `summaryDetail`                                                                                       | [operations.SummaryDetail](../../models/operations/summary-detail.md)                                 | :heavy_minus_sign:                                                                                    | Primary KPI shown on the card chrome.                                                                 |                                                                                                       |
| `category`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | Must be in agent.allowed_action_categories AND in the partner's approved scopes for this environment. | travel.book                                                                                           |
| `trustedAccountId`                                                                                    | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Optional link to the user's trusted account.                                                          |                                                                                                       |