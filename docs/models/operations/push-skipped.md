# PushSkipped

Present only when the account is linked but its phones were not pushed for one of these reasons. `daily_cap`: you have sent this customer the most checks allowed in 24 hours. `unavailable`: BotShield could not read this customer's recent checks, so it pushed nothing (fails closed). The request is still created either way.

## Example Usage

```typescript
import { PushSkipped } from "botshield-sdk/models/operations";

let value: PushSkipped = "unavailable";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"daily_cap" | "unavailable" | Unrecognized<string>
```