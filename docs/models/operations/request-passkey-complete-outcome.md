# RequestPasskeyCompleteOutcome

`verified`: done. `wrong_identity`: the passkey used belongs to a different BotShield ID than the one this request is for (no code). `expired`: the challenge or the request expired — call passkey-options again (or create a new request). `failed`: see `code`.

## Example Usage

```typescript
import { RequestPasskeyCompleteOutcome } from "botshield-sdk/models/operations";

let value: RequestPasskeyCompleteOutcome = "wrong_identity";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"verified" | "wrong_identity" | "expired" | "failed" | Unrecognized<string>
```