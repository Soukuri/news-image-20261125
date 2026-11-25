// Entry program for make.fun's news-image-20261125 bounty (Node 22,
// standard library only, no installs, no network).
//
// The picture was composed ahead of time — a newspaper front page for
// Wednesday 25 November 2026, typeset from the day's headlines with
// generated illustrations — and it ships in this repository as
// entry.png. The file holds JPEG bytes under a .png name, which the
// rules allow: the gate tells PNG from JPEG by the first bytes.
//
// All this program does is deliver that picture to the grader. It
// reads entry.png into memory and writes the same bytes back out as
// entry.png in the output directory, so the grader's two runs are
// guaranteed to see identical output.
//
// Outside the grader's container, run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const picture = readFileSync(join(repoDir, "entry.png"));
writeFileSync(join(outDir, "entry.png"), picture);
