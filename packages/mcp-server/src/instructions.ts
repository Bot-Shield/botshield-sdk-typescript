// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import fs from 'fs/promises';
import { getLogger } from './logger';
import { readEnv } from './util';

const INSTRUCTIONS_CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

interface InstructionsCacheEntry {
  fetchedInstructions: string;
  fetchedAt: number;
}

const instructionsCache = new Map<string, InstructionsCacheEntry>();

export async function getInstructions({
  stainlessApiKey,
  customInstructionsPath,
}: {
  stainlessApiKey?: string | undefined;
  customInstructionsPath?: string | undefined;
}): Promise<string> {
  const now = Date.now();
  const cacheKey = customInstructionsPath ?? stainlessApiKey ?? '';
  const cached = instructionsCache.get(cacheKey);

  if (cached && now - cached.fetchedAt <= INSTRUCTIONS_CACHE_TTL_MS) {
    return cached.fetchedInstructions;
  }

  // Evict stale entries so the cache doesn't grow unboundedly.
  for (const [key, entry] of instructionsCache) {
    if (now - entry.fetchedAt > INSTRUCTIONS_CACHE_TTL_MS) {
      instructionsCache.delete(key);
    }
  }

  let fetchedInstructions: string;

  if (customInstructionsPath) {
    fetchedInstructions = await fetchLatestInstructionsFromFile(customInstructionsPath);
  } else {
    fetchedInstructions = await fetchLatestInstructionsFromApi(stainlessApiKey);
  }

  instructionsCache.set(cacheKey, { fetchedInstructions, fetchedAt: now });
  return fetchedInstructions;
}

async function fetchLatestInstructionsFromFile(path: string): Promise<string> {
  try {
    return await fs.readFile(path, 'utf-8');
  } catch (error) {
    getLogger().error({ error, path }, 'Error fetching instructions from file');
    throw error;
  }
}

async function fetchLatestInstructionsFromApi(stainlessApiKey: string | undefined): Promise<string> {
  // Setting the stainless API key is optional, but may be required
  // to authenticate requests to the Stainless API.
  const response = await fetch(
    readEnv('CODE_MODE_INSTRUCTIONS_URL') ?? 'https://api.stainless.com/api/ai/instructions/botshield-sdk',
    {
      method: 'GET',
      headers: { ...(stainlessApiKey && { Authorization: stainlessApiKey }) },
    },
  );

  let instructions: string | undefined;
  if (!response.ok) {
    getLogger().warn(
      'Warning: failed to retrieve MCP server instructions. Proceeding with default instructions...',
    );

    instructions =
      '\n  This is the botshield-sdk MCP server.\n\n  Available tools:\n  - search_docs: Search SDK documentation to find the right methods and parameters.\n  - execute: Run TypeScript code against a pre-authenticated SDK client. Define an async run(client) function.\n\n  Workflow:\n  - If unsure about the API, call search_docs first.\n  - Write complete solutions in a single execute call when possible. For large datasets, use API filters to narrow results or paginate within a single execute block.\n  - If execute returns an error, read the error and fix your code rather than retrying the same approach.\n  - Variables do not persist between execute calls. Return or log all data you need.\n  - Individual HTTP requests to the API have a 30-second timeout. If a request times out, try a smaller query or add filters.\n  - Code execution has a total timeout of approximately 5 minutes. If your code times out, simplify it or break it into smaller steps.\n  ';
  }

  instructions ??= ((await response.json()) as { instructions: string }).instructions;

  instructions +=
    '\n## BotShield Actions — Agent Operational Guide\n\nBotShield is a human-presence-gated attestation surface. As a\nTrusted Agent, you propose actions on a user\'s behalf; the user\nattests via a biometric ceremony in the BotShield iOS app;\nBotShield signs a Resolution JWT and POSTs it to your registered\ncallback URL.\n\n**Use ONLY these three methods.** Other SDK methods exist for\npartner integrations and require different credentials — calling\nthem with your agent key returns 401.\n\n### 1. Propose an action\n\nQueue a human-presence-gated action for a BotShield user. Returns\na card_id immediately; the verdict arrives async via your callback.\n\n```typescript\nconst action = await client.actions.proposeAction({\n  request_id: "uuid-idempotency-key",\n  user_email: "user@example.com",\n  action: {\n    summary_title: "Approve $5,000 wire transfer",\n    summary_detail: { label: "TOTAL", value: "$5,000.00" },\n    category: "finance.transfer"  // must be in your agent\'s allowed_action_categories\n  },\n  adaptive_card_payload: { /* optional Adaptive Card v1.5 JSON */ },\n  ttl_seconds: 600  // 60-86400, default 600\n});\n// Returns: { card_id, status: "queued", ttl_at }\n```\n\n### 2. Check action status\n\nPoll for the verdict. Terminal states (approved/denied) carry\nthe signed Resolution JWT — verify it with BotShield\'s public key.\n\n```typescript\nconst status = await client.actions.checkActionStatus({\n  request_id: "uuid-idempotency-key"\n});\n// Returns: { status, verdict?, resolution_jwt?, ceremony_id?, delivered? }\n// status: "queued" | "approved" | "denied" | "expired" | "cancelled"\n```\n\n### 3. Cancel a pending action\n\nStand down a queued proposal before the user responds. No-op if\nalready terminal — TTL-based expiry produces no Resolution.\n\n```typescript\nawait client.actions.cancelAction({\n  request_id: "uuid-idempotency-key"\n});\n```\n\n### Authentication\n\nSet `BOTSHIELD_API_KEY=bs_agent_<name>__<secret>`. Get your agent\nkey from the BotShield Partner Console → Settings → Trusted Agents.\nKeys are env-bound (a `bs_agent_*` issued for development won\'t\nvalidate against production and vice versa).\n\n### Polling pattern\n\n```typescript\nlet result;\ndo {\n  result = await client.actions.checkActionStatus({ request_id });\n  if (result.status === "queued") {\n    await new Promise(r => setTimeout(r, 2000));\n  }\n} while (result.status === "queued");\n\nif (result.status === "approved") {\n  // result.resolution_jwt is the signed BotShield attestation\n}\n```\n\n### Error handling\n\nAuto-retried: 408, 409, 429, ≥500 (default 2 retries, exponential).\n\n```typescript\nimport { BotShieldError } from "botshield-sdk";\ntry { ... } catch (e) {\n  if (e instanceof BotShieldError) {\n    console.log(e.status, e.message);\n  }\n}\n```\n\n### TTL semantics\n\nTTL is cancel. If the user doesn\'t respond before `ttl_at`, the\ncard silently expires — your `checkActionStatus` poll returns\n`status: "expired"` and no Resolution JWT is produced. Plan your\nagent to handle that as "user declined to engage."\n';
  return instructions;
}
