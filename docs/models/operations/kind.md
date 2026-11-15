# Kind

`verification`: a person passed a check or a link. `action`: a person confirmed a BotShield Action. Null on a token issued before 4.0.

## Example Usage

```typescript
import { Kind } from "botshield-sdk/models/operations";

let value: Kind = "verification";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"verification" | "action" | Unrecognized<string>
```