# Reason

Present when valid is false.

## Example Usage

```typescript
import { Reason } from "botshield-sdk/models/operations";

let value: Reason = "signal_token_already_used";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalid_signal_token" | "signal_token_expired" | "signal_token_already_used" | Unrecognized<string>
```