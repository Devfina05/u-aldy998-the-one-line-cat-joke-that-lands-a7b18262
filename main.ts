// The One-Line Cat Joke That Lands entry (Node 22, standard library only):
// writes one line, 117 characters, a single joke about cats, one line, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line: A cat joke with a fresh angle: the expensive bed ignored for the box, with the receipt detail as the extra insult. No pun, no wind-up, punchline lands at the end. One line, first-person voice,
// punch landing at the end.
// Verified by running the program: the output is exactly 117 characters,
// one line, within the 200-character limit.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I bought my cat a ninety-dollar bed; she sleeps in the box it came in, on top of the receipt, to maximise the insult.',
);
