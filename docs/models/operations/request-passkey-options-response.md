# RequestPasskeyOptionsResponse

Passkey options, the app fallback, or a closed-request outcome at `data.data`. Handler errors arrive here too (HTTP 200) as `data.error`: `inline_not_for_age_gate` (400): the request is an Age Gate. This lane is for one named account; send the person to `data.error.url` (the app hand-off), where the age assertion is read. A 500-class `data.error` ("Could not start the passkey") means retry.

## Example Usage

```typescript
import { RequestPasskeyOptionsResponse } from "botshield-sdk/models/operations";

let value: RequestPasskeyOptionsResponse = {
  data: {
    data: {
      options: {
        challenge: "pZq1…",
        allowCredentials: [
          {
            id: "Aa9…",
            type: "public-key",
            transports: [
              "internal",
              "hybrid",
            ],
          },
        ],
        timeout: 60000,
        userVerification: "required",
        rpId: "botshield.ai",
      },
      challengeId: "6f1c1f0e-2a5b-4f7e-9d1a-3b2c4d5e6f70",
      expiresAt: new Date("2026-11-10T18:05:00.000Z"),
      url: "https://app.botshield.ai/verify?request_id=req_…",
      setupUrl: "https://app.botshield.ai/app/account/passkey",
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.RequestPasskeyOptionsData](../../models/operations/request-passkey-options-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |