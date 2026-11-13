# Code

Closed request only. `unknown_request` (outcome failed), `request_closed` (failed — no longer pending), `request_expired` (expired).

## Example Usage

```typescript
import { Code } from "botshield-sdk/models/operations";

let value: Code = "unknown_request";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unknown_request" | "request_closed" | "request_expired" | Unrecognized<string>
```