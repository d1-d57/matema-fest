---
description: Run weights + pagespeed and produce a unified report
---

Run both checks in sequence.

First, weights (local — fast):

!`bash scripts/weights.sh`

Then, PageSpeed (network — ~30s per strategy):

!`bash scripts/pagespeed.sh`

Now produce a single short report combining both:

1. **Local weight** — total KB, biggest file, anything flagged.
2. **Live performance** — performance score (mobile / desktop), LCP / CLS / TBT (mobile), top-1 opportunity.
3. If a previous PageSpeed summary exists in `.pagespeed/`, compare and call out any regression.
4. End with a one-sentence verdict: "ship it", "investigate X", or "regression — Y".

Keep it tight. The user reads this many times — don't pad.
