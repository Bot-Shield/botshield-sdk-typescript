# GateUnavailableEventReason

The frozen reason. A policy refusal or a replaced check keeps `internal_error`; read `failure_code` for the cause.

## Example Usage

```typescript
import { GateUnavailableEventReason } from "botshield-sdk/models";

let value: GateUnavailableEventReason = "platform_declined";
```

## Values

```typescript
"user_denied" | "device_lock_required" | "internal_error" | "platform_declined"
```