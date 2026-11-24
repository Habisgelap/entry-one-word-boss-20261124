import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — exactly one word describing the boss.
// Winner of 10 candidates scored in CANDIDATES.md (highest total, 22/25).
const WORD = "deadline";

// Gate: 1-30 characters, UTF-8, not only whitespace; exactly one word,
// no spaces, no sentence, no explanation.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`entry fails the gate: ${WORD.length} chars`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote ${WORD.length} chars to /output/entry.txt`);
