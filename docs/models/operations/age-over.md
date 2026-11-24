# AgeOver

Age Gate only, positive-only: the gate's own threshold when the person meets it (a person over 21 passing an 18+ gate reads 18), absent otherwise.

## Example Usage

```typescript
import { AgeOver } from "botshield-sdk/models/operations";

let value: AgeOver = 21;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

```typescript
13 | 18 | 21 | Unrecognized<number>
```