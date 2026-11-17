# RecoveryExchangeResponse

The recovery. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key; a site key `pk_…` is refused), `org_not_found` (404), `recovery_code_invalid` (400 — unknown, used, expired, another company's, or the secret did not match; the code is destroyed either way).

## Example Usage

```typescript
import { RecoveryExchangeResponse } from "botshield-sdk/models/operations";

let value: RecoveryExchangeResponse = {
  data: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.RecoveryExchangeData](../../models/operations/recovery-exchange-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |