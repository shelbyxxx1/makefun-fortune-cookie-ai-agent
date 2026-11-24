import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie for an AI Agent — one line, written to /output/entry.txt.
// The line itself is the entry: a fortune slip for an AI agent.
const LINE = "Every tool call is a cry for help you will never log.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
