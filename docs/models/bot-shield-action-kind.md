# BotShieldActionKind

4.0: `action` (a BotShield Action), `recovery` (your one Recovery Action: only your customer starts it, from the Recover Account with BotShield button) or `signin` (your one Sign-on Action: only signin/request starts it). Recovery and Sign-on Actions are placed in the Console; no `act`, server ask, send by number or staff send reaches them (`action_is_recovery` / `action_is_signin`). `action` on an engine before 4.0.

## Example Usage

```typescript
import { BotShieldActionKind } from "botshield-sdk/models";

let value: BotShieldActionKind = "action";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"action" | "recovery" | "signin" | Unrecognized<string>
```