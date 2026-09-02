<!-- Start SDK Example Usage [usage] -->
```typescript
import { BotShield } from "botshield-sdk";

const botShield = new BotShield();

async function run() {
  const result = await botShield.census.createSession({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->