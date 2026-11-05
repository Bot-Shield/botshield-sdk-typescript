# GatesApiError

Gates API handler error. Arrives inside `data.error` with HTTP 200 — check for it before reading the result.

## Example Usage

```typescript
import { GatesApiError } from "botshield-sdk/models";

let value: GatesApiError = {
  message: "<value>",
  statusCode: 409,
  code: "gate_key_taken",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `message`          | *string*           | :heavy_check_mark: | N/A                |                    |
| `statusCode`       | *number*           | :heavy_check_mark: | N/A                | 409                |
| `code`             | *string*           | :heavy_check_mark: | N/A                | gate_key_taken     |