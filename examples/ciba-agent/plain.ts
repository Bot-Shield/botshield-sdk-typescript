/*
 * Hand-written (not generated). OpenID CIBA without any model:
 * ask the account holder to approve "Add a payee", wait for the answer, act on it.
 *
 *   npm run plain
 */

import { CibaError } from "botshield-sdk/ciba";
import { cibaClientFromEnv, whoToAsk } from "./config.js";

async function addPayee(name: string): Promise<void> {
  // Your real, sensitive action goes here. It only runs after an approval.
  console.log(`Payee "${name}" added.`);
}

async function main() {
  const client = cibaClientFromEnv();
  const payee = process.argv[2] ?? "Acme Ltd";

  console.log(`Asking the account holder to approve adding "${payee}" as a payee…`);
  const result = await client.askAndWait(
    {
      ...whoToAsk(),
      bindingMessage: `Add payee ${payee}`.slice(0, 64),
      action: {
        type: "botshield_ask",
        title: "Add a payee",
        category: "botshield.action",
        main: { label: "Payee", value: payee },
      },
      requestedExpiry: 300,
    },
    {
      signal: AbortSignal.timeout(6 * 60_000),
      onPending: ({ attempt, slowDown }) =>
        console.log(`  waiting for an answer (poll ${attempt}${slowDown ? ", slowing down" : ""})`),
    },
  );

  if (!result.approved) {
    console.log(result.reason === "access_denied" ? "Declined. Nothing was changed." : "No answer before the request expired. Nothing was changed.");
    return;
  }
  // Tokens are not printed. The verified claims say who approved (pairwise) and when.
  console.log(`Approved (sub ${result.claims.sub}, acr ${String(result.claims.acr)}, at ${new Date((result.claims.auth_time ?? 0) * 1000).toISOString()}).`);
  await addPayee(payee);
}

main().catch((e) => {
  if (e instanceof CibaError) {
    console.error(`BotShield answered ${e.status || "-"} ${e.error}${e.description ? `: ${e.description}` : ""}`);
  } else {
    console.error(e instanceof Error ? e.message : e);
  }
  process.exit(1);
});
