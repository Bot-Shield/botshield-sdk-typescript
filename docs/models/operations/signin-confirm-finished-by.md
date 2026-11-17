# SigninConfirmFinishedBy

`inline`: the passkey on your page. `qr`: BotShield's QR (only where your Sign-on Action has it on).

## Example Usage

```typescript
import { SigninConfirmFinishedBy } from "botshield-sdk/models/operations";

let value: SigninConfirmFinishedBy = "inline";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inline" | "qr" | Unrecognized<string>
```