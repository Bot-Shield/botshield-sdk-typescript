# SDKVerifyTokenVerdict

Present when `valid` is true. `pass` when the token records a verified human.

## Example Usage

```typescript
import { SDKVerifyTokenVerdict } from "botshield-sdk/models/operations";

let value: SDKVerifyTokenVerdict = "pass";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pass" | "unavailable" | Unrecognized<string>
```