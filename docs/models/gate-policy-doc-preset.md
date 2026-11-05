# GatePolicyDocPreset

The label for the moment. It only pre-fills attributes; the engine never branches on it. Null/omitted = Custom.

## Example Usage

```typescript
import { GatePolicyDocPreset } from "botshield-sdk/models";

let value: GatePolicyDocPreset = "claim";
```

## Values

```typescript
"presale" | "promo" | "drop" | "vote" | "reservation" | "claim"
```