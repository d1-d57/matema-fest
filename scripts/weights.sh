#!/usr/bin/env bash
# scripts/weights.sh
#
# Walks index.html, finds every locally-referenced asset (src=, href=, srcset=,
# url(...) in inline CSS), reports file size + image dimensions, and flags:
#   - any local file > 500 KB
#   - any image whose pixel width is more than 2× its displayed width
#
# Requires: python3, Pillow (pip install Pillow).

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
HTML="$ROOT/index.html"

if [ ! -f "$HTML" ]; then
  echo "ERROR: $HTML not found. Run from repo root." >&2
  exit 1
fi

PYTHON="$(command -v python3 || command -v python || true)"
if [ -z "$PYTHON" ]; then
  echo "ERROR: python3 not found in PATH." >&2
  exit 1
fi

"$PYTHON" - "$HTML" "$ROOT" <<'PY'
import os, re, sys
from pathlib import Path

try:
    from PIL import Image
    have_pil = True
except ImportError:
    have_pil = False

html_path = Path(sys.argv[1]).resolve()
root = Path(sys.argv[2]).resolve()
src = html_path.read_text(encoding="utf-8")

# ── Collect references --------------------------------------------------------
ref_pat = re.compile(
    r'''(?:src|href)\s*=\s*["']([^"']+)["']'''
    r'''|url\(\s*["']?([^)"'\s]+)["']?\s*\)'''
    r'''|srcset\s*=\s*["']([^"']+)["']''',
    re.IGNORECASE,
)

refs = set()
for m in ref_pat.finditer(src):
    if m.group(1):
        refs.add(m.group(1))
    elif m.group(2):
        refs.add(m.group(2))
    elif m.group(3):
        for part in m.group(3).split(","):
            url = part.strip().split()[0] if part.strip() else ""
            if url:
                refs.add(url)

local, external = [], []
for r in sorted(refs):
    if r.startswith(("http://", "https://", "//", "data:", "mailto:", "tel:",
                     "#", "%23", "?", "javascript:")):
        external.append(r)
        continue
    # Require something that looks like a file path: a dot after the last slash.
    tail = r.rsplit("/", 1)[-1]
    if "." not in tail:
        external.append(r)  # bare ids / fragments / weird stuff — skip
        continue
    local.append(r)

# ── Gather displayed sizes from <img> width/height attributes -----------------
img_pat = re.compile(r'<img\b[^>]*>', re.IGNORECASE)
attr_pat = re.compile(r'''(\w+)\s*=\s*["']([^"']*)["']''')
displayed = {}  # ref -> (w, h)
for m in img_pat.finditer(src):
    attrs = dict(attr_pat.findall(m.group(0)))
    s = attrs.get("src") or attrs.get("data-src") or ""
    w = attrs.get("width", "")
    h = attrs.get("height", "")
    try: wn = int(w) if w.isdigit() else None
    except: wn = None
    try: hn = int(h) if h.isdigit() else None
    except: hn = None
    if not s: continue
    prev = displayed.get(s, (None, None))
    displayed[s] = (max(prev[0] or 0, wn or 0) or None,
                    max(prev[1] or 0, hn or 0) or None)

THRESH = 500 * 1024
flags = []

print("=" * 84)
print(f"Weights report — {html_path.name}")
print("=" * 84)

html_size = html_path.stat().st_size
print(f"\nindex.html               {html_size:>12,} B   ({html_size/1024:.1f} KB)")
if html_size > THRESH:
    flags.append(f"index.html is {html_size/1024:.0f} KB (> 500 KB)")

print(f"\nLocal dependencies referenced from index.html:\n")
print(f"  {'file':<32}{'size':>12}  {'pixels':>13}  {'shown':>10}  notes")
print(f"  {'-'*32}{'-'*12}  {'-'*13}  {'-'*10}  {'-'*30}")

total = html_size
seen = set()
for ref in local:
    if ref in seen:
        continue
    seen.add(ref)
    p = (root / ref).resolve()
    if not p.exists():
        print(f"  {ref:<32}{'MISSING':>12}  {'-':>13}  {'-':>10}  ⚠ file not found")
        flags.append(f"missing file: {ref}")
        continue
    sz = p.stat().st_size
    total += sz
    pixels = "-"
    shown = "n/a"
    note_parts = []
    if have_pil and p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"):
        try:
            with Image.open(p) as im:
                pw, ph = im.size
                pixels = f"{pw}x{ph}"
                d = displayed.get(ref) or displayed.get(p.name) or (None, None)
                dw, dh = d
                if dw or dh:
                    shown = f"{dw or '?'}x{dh or '?'}"
                if dw and pw > 2 * dw:
                    ratio = pw / dw
                    note_parts.append(f"{ratio:.1f}x over display")
                    flags.append(f"{ref}: {pw}x{ph}, displayed ~{dw}x{dh} ({ratio:.1f}x)")
                elif pw > 2000 and not dw:
                    note_parts.append(f"{pw}px wide (no display hint)")
        except Exception as e:
            note_parts.append(f"PIL: {e}")
    if sz > THRESH:
        note_parts.append(">500KB")
        flags.append(f"{ref}: {sz/1024:.0f} KB (> 500 KB)")
    note = ", ".join(note_parts) if note_parts else ""
    print(f"  {ref:<32}{sz:>12,}  {pixels:>13}  {shown:>10}  {note}")

print(f"  {'-'*32}{'-'*12}")
print(f"  {'TOTAL (local)':<32}{total:>12,}  ({total/1024:.1f} KB / {total/1024/1024:.2f} MB)")

if external:
    print(f"\nExternal references ({len(external)}, not weighed locally):")
    for e in external[:15]:
        # collapse long URLs
        short = e if len(e) <= 78 else e[:75] + "..."
        print(f"  - {short}")
    if len(external) > 15:
        print(f"  ... and {len(external)-15} more")

print()
if flags:
    print("Issues to review:")
    for f in flags:
        print(f"  - {f}")
    sys.exit(0)
else:
    print("OK — no oversized files or display mismatches.")

if not have_pil:
    print("\nNote: Pillow not installed - image dimensions skipped.")
    print("      Install with: pip install Pillow")
PY
