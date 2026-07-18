# InvalidInputErrorError

## Example Usage

```typescript
import { InvalidInputErrorError } from "botshield-sdk/models";

let value: InvalidInputErrorError = {
  propertyPath: "<value>",
  invalidValue: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `propertyPath`     | *string*           | :heavy_check_mark: | N/A                |
| `invalidValue`     | *any*              | :heavy_check_mark: | The invalid value  |
| `message`          | *string*           | :heavy_check_mark: | N/A                |