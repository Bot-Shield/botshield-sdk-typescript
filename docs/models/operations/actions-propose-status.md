# ActionsProposeStatus

'queued' on first proposal. On an idempotent replay (same request_id) the card's CURRENT status.

## Example Usage

```typescript
import { ActionsProposeStatus } from "botshield-sdk/models/operations";

let value: ActionsProposeStatus = "queued";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "approved" | "denied" | "expired" | "cancelled" | Unrecognized<string>
```