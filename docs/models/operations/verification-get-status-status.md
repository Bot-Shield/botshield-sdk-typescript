# VerificationGetStatusStatus

`pass` is legacy: a success recorded without a new confirmation on the phone. Gates always ask in 3.3, so new requests end `completed`. A `pass` record expires 60 seconds after the check, after which this endpoint reports `expired`. `cancelled`: the request ended without an answer; see `reason` (`declined`: the person cancelled the link ask; `superseded`: a newer check sent to the same person replaced this one).

## Example Usage

```typescript
import { VerificationGetStatusStatus } from "botshield-sdk/models/operations";

let value: VerificationGetStatusStatus = "not_found";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "pass" | "expired" | "failed" | "cancelled" | "not_found" | "error" | Unrecognized<string>
```