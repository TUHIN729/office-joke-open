// office-joke-open — writes one single-line office joke to /output/entry.txt.
// Deterministic: the same joke every run. No imports beyond node builtins.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I wrote 'per my last email' so politely that my manager forwarded it to HR as an example of healthy communication and a cry for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
