# BotShieldActionState

`off` refuses new requests at once (`action_off`).

## Example Usage

```typescript
import { BotShieldActionState } from "botshield-sdk/models";

let value: BotShieldActionState = "off";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"live" | "off" | Unrecognized<string>
```