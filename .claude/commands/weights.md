---
description: Run scripts/weights.sh and analyse the output for oversized assets
---

Run the weights analyser:

!`bash scripts/weights.sh`

After it finishes, comment briefly on:

- **Total page weight** — flag if local total > 2 MB.
- Any file the script flagged as **> 500 KB** — name the file and the size.
- Any image whose **pixel dimensions are 2× or more than displayed** — those need a smaller export.
- The single biggest file by size (often the best compression target — WebP, oxipng, mozjpeg).

Be specific (cite filenames and numbers). Skip the recap if everything looks fine — just say "all healthy" with the total.
