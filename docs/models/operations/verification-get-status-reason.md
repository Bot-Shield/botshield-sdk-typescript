# VerificationGetStatusReason

Why a request ended `failed`. Null while pending and on success. `already_trusted`: this BotShield ID already secures another account on your platform. `rebind_requires_prior_id`: this account is already secured by another BotShield ID. `pass_limit_reached`: the person has used the passes the gate allows. `real_days_not_met`: the BotShield ID has not yet proved a person on as many days as the gate asks. `unavailable`: the standard Unavailable result.

## Example Usage

```typescript
import { VerificationGetStatusReason } from "botshield-sdk/models/operations";

let value: VerificationGetStatusReason = "pass_limit_reached";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"already_trusted" | "rebind_requires_prior_id" | "pass_limit_reached" | "real_days_not_met" | "unavailable" | Unrecognized<string>
```