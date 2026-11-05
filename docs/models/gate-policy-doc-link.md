# GatePolicyDocLink

Does a pass link the person to your platform? `required` — you must send `partner_user_ref` with every request and the pass links in the same tap; `optional` — links when a ref is sent, anonymous otherwise; `never` — no link, no ref kept. Always `never` on an Age Gate. Tightens like a limit: required > optional > never.

## Example Usage

```typescript
import { GatePolicyDocLink } from "botshield-sdk/models";

let value: GatePolicyDocLink = "optional";
```

## Values

```typescript
"required" | "optional" | "never"
```