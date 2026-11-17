# RecoveryOtherRouteResponse

Received. NOTE: handler errors also arrive here (HTTP 200) as data.error — codes: `invalid_key` (401 — missing, malformed or inactive key; a site key `pk_…` is refused), `org_not_found` (404), `handle_invalid` (400), `unavailable` (503).

## Example Usage

```typescript
import { RecoveryOtherRouteResponse } from "botshield-sdk/models/operations";

let value: RecoveryOtherRouteResponse = {
  data: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.RecoveryOtherRouteData](../../models/operations/recovery-other-route-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |