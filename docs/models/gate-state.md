# GateState

Where an active gate is in its schedule. Null unless `status` is `active`.

## Example Usage

```typescript
import { GateState } from "botshield-sdk/models";

let value: GateState = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"scheduled" | "open" | "closed" | Unrecognized<string>
```