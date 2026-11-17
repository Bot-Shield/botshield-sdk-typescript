# GateType

The gate's type. An Age Gate never notarizes (widget suppresses the chip).

## Example Usage

```typescript
import { GateType } from "botshield-sdk/models/operations";

let value: GateType = "age";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"human" | "age" | Unrecognized<string>
```