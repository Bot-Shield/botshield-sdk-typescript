# ActionsCancelStatus

'cancelled' when this call cancelled it; otherwise the card's current terminal status.

## Example Usage

```typescript
import { ActionsCancelStatus } from "botshield-sdk/models/operations";

let value: ActionsCancelStatus = "queued";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"queued" | "approved" | "denied" | "expired" | "cancelled" | Unrecognized<string>
```