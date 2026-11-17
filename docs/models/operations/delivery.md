# Delivery

Present when you sent `partner_user_ref`. `pushed`: the customer's phone was asked. `not_delivered`: nothing was pushed (the customer has turned off checks from you, has no phone set up, or the push was skipped or could not be sent; see `push_skipped`). The check still exists and still answers. `not_linked`: this account is not verified with BotShield, so nothing was pushed.

## Example Usage

```typescript
import { Delivery } from "botshield-sdk/models/operations";

let value: Delivery = "pushed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pushed" | "not_delivered" | "not_linked" | Unrecognized<string>
```