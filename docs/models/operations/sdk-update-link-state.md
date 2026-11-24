# SDKUpdateLinkState

`verified`: the customer stays BotShield Verified (the app shows the password icon). `unfinished`: only when your company requires a passkey at your sign-in; the account is paused and its requests are refused until it is confirmed again with `signin_passkey: true`.

## Example Usage

```typescript
import { SDKUpdateLinkState } from "botshield-sdk/models/operations";

let value: SDKUpdateLinkState = "verified";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"verified" | "unfinished" | Unrecognized<string>
```