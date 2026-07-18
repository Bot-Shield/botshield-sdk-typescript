# Verdict

Present only when status is approved or denied.

## Example Usage

```typescript
import { Verdict } from "botshield-sdk/models/operations";

let value: Verdict = "approve";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"approve" | "denied" | Unrecognized<string>
```