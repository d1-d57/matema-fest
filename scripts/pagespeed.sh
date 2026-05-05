#!/usr/bin/env bash
# scripts/pagespeed.sh
#
# Runs Google PageSpeed Insights v5 against a URL for both mobile and desktop,
# strips heavy fields (screenshots) from the JSON, and writes:
#
#   .pagespeed/<YYYY-MM-DD_HHMM>_mobile.json
#   .pagespeed/<YYYY-MM-DD_HHMM>_desktop.json
#   .pagespeed/<YYYY-MM-DD_HHMM>_summary.md
#
# Usage: scripts/pagespeed.sh [URL]
#   default URL: https://d1-d57.github.io/matema-fest-2026-preview/
#
# API key:
#   - $PAGESPEED_API_KEY env var (used by CI), or
#   - ~/.pagespeed_key file (used locally)

set -euo pipefail

URL="${1:-https://d1-d57.github.io/matema-fest-2026-preview/}"

if [ -n "${PAGESPEED_API_KEY:-}" ]; then
  KEY="$PAGESPEED_API_KEY"
elif [ -f "$HOME/.pagespeed_key" ]; then
  KEY=$(tr -d '[:space:]' < "$HOME/.pagespeed_key")
else
  echo "ERROR: no PageSpeed API key." >&2
  echo "  Create one at https://developers.google.com/speed/docs/insights/v5/get-started" >&2
  echo "  then either:  echo YOUR_KEY > ~/.pagespeed_key" >&2
  echo "  or:           export PAGESPEED_API_KEY=YOUR_KEY" >&2
  exit 1
fi

if [ -z "${KEY:-}" ]; then
  echo "ERROR: API key is empty." >&2
  exit 1
fi

command -v jq   >/dev/null || { echo "ERROR: jq is required." >&2; exit 1; }
command -v curl >/dev/null || { echo "ERROR: curl is required." >&2; exit 1; }

mkdir -p .pagespeed
TS=$(date -u +%Y-%m-%d_%H%M)

API="https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

# jq filter: drop screenshot blobs (root-level + per-audit details)
STRIP='
  del(
    .lighthouseResult.audits."screenshot-thumbnails",
    .lighthouseResult.audits."final-screenshot",
    .lighthouseResult.audits."full-page-screenshot",
    .lighthouseResult.fullPageScreenshot
  )
  | walk(if type == "object" then del(.screenshot, .screenshots) else . end)
'

echo "URL: $URL"

for STRATEGY in mobile desktop; do
  OUT=".pagespeed/${TS}_${STRATEGY}.json"
  TMP=".pagespeed/${TS}_${STRATEGY}.tmp"
  echo "→ fetching $STRATEGY ..."
  curl -fsSL --get \
    --data-urlencode "url=$URL" \
    --data-urlencode "key=$KEY" \
    --data-urlencode "strategy=$STRATEGY" \
    --data-urlencode "category=performance" \
    --data-urlencode "category=accessibility" \
    --data-urlencode "category=best-practices" \
    --data-urlencode "category=seo" \
    "$API" > "$TMP"
  jq "$STRIP" < "$TMP" > "$OUT"
  rm -f "$TMP"
  ORIG=$(wc -c < "$OUT")
  printf "  → %s  (%d KB)\n" "$OUT" "$((ORIG/1024))"
done

# ── Summary -----------------------------------------------------------------
SUMMARY=".pagespeed/${TS}_summary.md"

extract() {
  jq -r '
    .lighthouseResult as $lr |
    {
      perf: (($lr.categories.performance.score      // 0) * 100 | floor),
      a11y: (($lr.categories.accessibility.score    // 0) * 100 | floor),
      bp:   (($lr.categories["best-practices"].score // 0) * 100 | floor),
      seo:  (($lr.categories.seo.score              // 0) * 100 | floor),
      lcp:  ($lr.audits."largest-contentful-paint".displayValue // "n/a"),
      cls:  ($lr.audits."cumulative-layout-shift".displayValue // "n/a"),
      tbt:  ($lr.audits."total-blocking-time".displayValue // "n/a"),
      fcp:  ($lr.audits."first-contentful-paint".displayValue // "n/a"),
      tti:  ($lr.audits."interactive".displayValue // "n/a"),
      si:   ($lr.audits."speed-index".displayValue // "n/a"),
      inp:  (.loadingExperience.metrics.INTERACTION_TO_NEXT_PAINT.percentile // null),
      opps: [
        $lr.audits | to_entries[] |
        select(.value.details.type? == "opportunity") |
        select((.value.details.overallSavingsMs // 0) > 0) |
        { title: .value.title,
          ms: (.value.details.overallSavingsMs // 0),
          bytes: (.value.details.overallSavingsBytes // 0) }
      ] | sort_by(-.ms) | .[0:3]
    }
  ' "$1"
}

{
  echo "# PageSpeed report — $TS"
  echo
  echo "URL: \`$URL\`"
  echo
  for STRATEGY in mobile desktop; do
    F=".pagespeed/${TS}_${STRATEGY}.json"
    D=$(extract "$F")
    PERF=$(echo "$D" | jq -r '.perf')
    A11Y=$(echo "$D" | jq -r '.a11y')
    BP=$(echo "$D"   | jq -r '.bp')
    SEO=$(echo "$D"  | jq -r '.seo')
    case "$STRATEGY" in
      mobile)  LABEL="Mobile" ;;
      desktop) LABEL="Desktop" ;;
      *)       LABEL="$STRATEGY" ;;
    esac
    echo "## $LABEL"
    echo
    echo "| Performance | Accessibility | Best Practices | SEO |"
    echo "|---:|---:|---:|---:|"
    echo "| **$PERF** | $A11Y | $BP | $SEO |"
    echo
    echo "**Core Web Vitals**"
    echo "- LCP: \`$(echo "$D" | jq -r '.lcp')\`"
    echo "- CLS: \`$(echo "$D" | jq -r '.cls')\`"
    echo "- TBT: \`$(echo "$D" | jq -r '.tbt')\`"
    INP=$(echo "$D" | jq -r '.inp')
    if [ "$INP" = "null" ] || [ -z "$INP" ]; then
      echo "- INP: \`n/a\` _(no field data yet — needs traffic via CrUX)_"
    else
      echo "- INP: \`${INP} ms\` _(p75 from CrUX field data)_"
    fi
    echo "- FCP: \`$(echo "$D" | jq -r '.fcp')\`"
    echo "- TTI: \`$(echo "$D" | jq -r '.tti')\`"
    echo "- Speed Index: \`$(echo "$D" | jq -r '.si')\`"
    echo
    echo "**Top 3 opportunities**"
    OPPS=$(echo "$D" | jq -r '.opps[] | "- \(.title) — saves ~\(.ms)ms / \(.bytes) bytes"')
    if [ -z "$OPPS" ]; then
      echo "_(none — no opportunities with measurable savings)_"
    else
      echo "$OPPS"
    fi
    echo
  done
} > "$SUMMARY"

echo "→ $SUMMARY"
