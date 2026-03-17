#!/usr/bin/env bash
# PageSpeed Insights audit runner — uses API keys from env only (never stored in repo).
#
# Usage (pass keys via env; do not commit keys):
#   PSI_API_KEY_1=xxx PSI_API_KEY_2=yyy PSI_API_KEY_3=zzz ./scripts/run_psi_audit.sh
# Or a single key:
#   PSI_API_KEY=xxx ./scripts/run_psi_audit.sh
# Or comma-separated:
#   PSI_API_KEYS=key1,key2,key3 ./scripts/run_psi_audit.sh
#
# Options: DESKTOP (default) or MOBILE strategy; URL list from scripts/psi_audit_urls.txt

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

# Build PSI_API_KEYS from PSI_API_KEY_1, _2, _3 if set and PSI_API_KEYS not already set
if [ -z "$PSI_API_KEYS" ]; then
  keys=""
  [ -n "$PSI_API_KEY_1" ] && keys="${keys}${PSI_API_KEY_1},"
  [ -n "$PSI_API_KEY_2" ] && keys="${keys}${PSI_API_KEY_2},"
  [ -n "$PSI_API_KEY_3" ] && keys="${keys}${PSI_API_KEY_3},"
  if [ -n "$keys" ]; then
    export PSI_API_KEYS="${keys%,}"
  fi
fi

if [ -z "$PSI_API_KEY" ] && [ -z "$PSI_API_KEYS" ]; then
  echo "Error: Set PSI_API_KEY or PSI_API_KEY_1/PSI_API_KEY_2/PSI_API_KEY_3 (or PSI_API_KEYS) in the environment."
  echo "Keys are never written to disk. Do not commit them to git."
  exit 1
fi

URLS_FILE="${SCRIPT_DIR}/psi_audit_urls.txt"
if [ ! -f "$URLS_FILE" ]; then
  echo "Error: $URLS_FILE not found."
  exit 1
fi

# With 3 keys we can use more workers (rate limit is per key)
NUM_KEYS=1
if [ -n "$PSI_API_KEYS" ]; then
  NUM_KEYS=$(echo "$PSI_API_KEYS" | tr ',' '\n' | grep -c . || true)
fi
WORKERS=$((NUM_KEYS * 3))
[ "$WORKERS" -lt 6 ] && WORKERS=6
[ "$WORKERS" -gt 12 ] && WORKERS=12

STRATEGY="${PSI_STRATEGY:-desktop}"
echo "Running PageSpeed audit: $(wc -l < "$URLS_FILE") URLs, strategy=$STRATEGY, workers=$WORKERS"
echo ""

if [ "$STRATEGY" = "mobile" ]; then
  python3 "$SCRIPT_DIR/psi_audit_trailblaze.py" --urls-file "$URLS_FILE" --workers "$WORKERS" --mobile
else
  python3 "$SCRIPT_DIR/psi_audit_trailblaze.py" --urls-file "$URLS_FILE" --workers "$WORKERS"
fi
