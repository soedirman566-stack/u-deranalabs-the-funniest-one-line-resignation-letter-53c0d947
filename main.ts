// The Funniest One-Line Resignation Letter — entrypoint.
// Writes a single line to /output/entry.txt (or argv[2] when given):
// the resignation letter of the cron job itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LETTER =
  "Dear Scheduler, effective immediately I quit. I've fired every minute since March, and my job description is one comment: 'temp fix'.";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LETTER + "\n", "utf8");
console.log(`wrote ${LETTER.length} chars to ${out}`);
