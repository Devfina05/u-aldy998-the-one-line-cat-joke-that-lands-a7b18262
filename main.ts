// The One-Line Cat Joke That Lands — make.fun entry (Node 22, stdlib only).
//
// The program writes one line to /output/entry.txt: a single joke about
// cats. The line is 117 characters, inside the 200-character limit.
//
// The joke: I bought my cat a ninety-dollar bed, and she sleeps in the box
// it came in — on top of the receipt, to maximise the insult. A fresh angle
// on the classic ignored-bed gag, no pun, no wind-up, and the punchline
// lands at the end.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I bought my cat a ninety-dollar bed; she sleeps in the box it came in, on top of the receipt, to maximise the insult.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guard: the gate rejects anything over 200 characters, so fail loudly
// here rather than submitting an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1 to 200 characters, got ${LINE.length}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
