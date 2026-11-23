/*
 * Hand-written (not generated). A minimal agent on the Claude Agent SDK with one
 * tool, ask_account_holder, that asks the account holder over OpenID CIBA before
 * a sensitive action and returns their answer.
 *
 *   npm run agent -- "Add Acme Ltd as a payee"
 */

import { createSdkMcpServer, query, tool } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";
import { CibaError } from "botshield-sdk/ciba";
import { cibaClientFromEnv, whoToAsk } from "./config.js";

const ciba = cibaClientFromEnv();
const recipient = whoToAsk();

const askAccountHolder = tool(
  "ask_account_holder",
  "Ask the account holder to approve one sensitive action on their phone (OpenID CIBA via BotShield). " +
    "Blocks until they approve, decline, or the request expires. Call this before any sensitive action " +
    "and only go ahead when it returns approved.",
  {
    title: z.string().min(1).max(80).describe('What they are asked to approve, e.g. "Add a payee"'),
    label: z.string().min(1).max(40).describe('Label for the key detail, e.g. "Payee"'),
    value: z.string().min(1).max(120).describe('The key detail, e.g. "Acme Ltd"'),
    binding_message: z.string().min(1).max(64).describe("Short text shown on both sides, 64 characters at most"),
  },
  async ({ title, label, value, binding_message }) => {
    try {
      const r = await ciba.askAndWait(
        {
          ...recipient,
          bindingMessage: binding_message,
          action: { type: "botshield_ask", title, category: "botshield.action", main: { label, value } },
          requestedExpiry: 300,
        },
        { signal: AbortSignal.timeout(6 * 60_000) },
      );
      // Only the outcome goes back to the model, never the tokens.
      const text = r.approved
        ? `approved (pairwise sub ${r.claims.sub})`
        : r.reason === "access_denied" ? "declined" : "expired without an answer";
      return { content: [{ type: "text", text }] };
    } catch (e) {
      const text = e instanceof CibaError ? `could not ask: ${e.error}` : "could not ask";
      return { content: [{ type: "text", text }], isError: true };
    }
  },
);

const botshield = createSdkMcpServer({ name: "botshield", version: "1.0.0", tools: [askAccountHolder] });

async function main() {
  const prompt = process.argv.slice(2).join(" ") || "Add Acme Ltd as a payee on my account.";
  for await (const message of query({
    prompt,
    options: {
      model: "claude-opus-5-5",
      systemPrompt:
        "You help with account changes. You cannot change anything yourself: for any sensitive change, " +
        "call ask_account_holder first and report the answer plainly. If it is not approved, say nothing was changed.",
      tools: [], // no built-in tools; only ours
      mcpServers: { botshield },
      allowedTools: ["mcp__botshield__ask_account_holder"],
      settingSources: [],
      maxTurns: 4,
    },
  })) {
    if (message.type === "result") {
      console.log(message.subtype === "success" ? message.result : `Agent stopped: ${message.subtype}`);
    }
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
