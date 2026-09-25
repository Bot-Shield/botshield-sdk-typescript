# VerificationGetStatusStatus

`pass` is a Recent Presence pass: the pre-check resolved the person without a new ceremony. Its record expires 60 seconds after the check, after which this endpoint reports `expired` — it never becomes `completed`. Treat `pass` as success and read it promptly.

## Example Usage

```typescript
import { VerificationGetStatusStatus } from "botshield-sdk/models/operations";

let value: VerificationGetStatusStatus = "not_found";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "pass" | "expired" | "failed" | "not_found" | "error" | Unrecognized<string>
```