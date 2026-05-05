---
description: Run PageSpeed Insights and compare with the previous run
---

Run PageSpeed Insights against the live site (mobile + desktop):

!`bash scripts/pagespeed.sh`

After the script finishes, do this:

1. List the two most recent summaries: `ls -t .pagespeed/*_summary.md | head -2`.
2. Print the **new** summary verbatim (the first one in that list).
3. If a previous summary exists, diff the key numbers between them:
   - Performance score (mobile + desktop) — ↑ / ↓ / =
   - LCP, CLS, TBT — better / worse / unchanged
   - Did any new opportunity appear in the top-3? Did one drop out?
4. End with a **single-line verdict**:
   - "ship it" — scores held or improved
   - "small regression — check X" — name the metric and give a guess at the cause
   - "regression — likely caused by Y" — when there's an obvious culprit (e.g. a recent image change matching an LCP regression)

If there is no previous run yet, just print the new summary and say "first run, no baseline".
