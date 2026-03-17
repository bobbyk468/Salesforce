"""
Fetch full PageSpeed Insights (Lighthouse) JSON for a URL and print details
for specific audits (especially accessibility color contrast).

Usage:
  PSI_API_KEY=... python3 scripts/psi_fetch_full.py --url /
  PSI_API_KEYS=key1,key2 python3 scripts/psi_fetch_full.py --url https://www.trailblazeprep.com/

Notes:
  - Uses PSI v5 endpoint: https://www.googleapis.com/pagespeedonline/v5/runPagespeed
  - Never commit API keys; use env only.
"""

import argparse
import json
import os
import sys
import time
from urllib.error import URLError
from urllib.parse import urlencode
from urllib.request import urlopen

PSI_BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
BASE_URL = "https://www.trailblazeprep.com"


def get_key() -> str:
    keys = os.environ.get("PSI_API_KEYS", "").strip()
    if keys:
        return keys.split(",")[0].strip()
    return os.environ.get("PSI_API_KEY", "").strip()


def fetch(url: str, strategy: str) -> dict:
    key = get_key()
    if not key:
        raise SystemExit("Missing PSI_API_KEY or PSI_API_KEYS in env")
    params = [
        ("url", url),
        ("strategy", strategy),
        ("category", "performance"),
        ("category", "accessibility"),
        ("category", "best-practices"),
        ("category", "seo"),
        ("key", key),
    ]
    q = urlencode(params)
    for attempt in range(3):
        try:
            with urlopen(f"{PSI_BASE}?{q}", timeout=180) as r:
                return json.loads(r.read())
        except URLError as e:
            if attempt < 2:
                time.sleep(3 * (attempt + 1))
                continue
            return {"error": str(e)}


def score_pct(v) -> int:
    try:
        return round((v or 0) * 100)
    except Exception:
        return 0


def print_scores(data: dict):
    cats = data.get("lighthouseResult", {}).get("categories", {})
    print("Scores:")
    print("  performance    =", score_pct(cats.get("performance", {}).get("score")))
    print("  accessibility  =", score_pct(cats.get("accessibility", {}).get("score")))
    print("  best-practices =", score_pct(cats.get("best-practices", {}).get("score")))
    print("  seo            =", score_pct(cats.get("seo", {}).get("score")))


def print_contrast_details(data: dict, limit: int = 20):
    audits = data.get("lighthouseResult", {}).get("audits", {})
    a = audits.get("color-contrast")
    if not a:
        print("\nNo color-contrast audit present.")
        return
    print("\nAudit: color-contrast")
    print("  title:", a.get("title"))
    print("  score:", a.get("score"))
    details = a.get("details", {})
    items = details.get("items", []) if isinstance(details, dict) else []
    print("  failing-items:", len(items))
    for i, item in enumerate(items[:limit], start=1):
        node = item.get("node", {}) if isinstance(item, dict) else {}
        print(f"\n  #{i}")
        if "selector" in node:
            print("   selector:", node.get("selector"))
        if "snippet" in node:
            print("   snippet:", node.get("snippet"))
        if "explanation" in item:
            print("   explanation:", item.get("explanation"))
        # axe sometimes provides fg/bg colors and contrast ratio
        for k in ("contrastRatio", "expectedContrastRatio", "fontSize", "fontWeight", "foregroundColor", "backgroundColor"):
            if k in item:
                print(f"   {k}:", item.get(k))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", required=True, help="Full URL or path (e.g. /privacy)")
    ap.add_argument("--strategy", choices=["desktop", "mobile"], default="desktop")
    ap.add_argument("--out", default=None, help="Optional path to save full JSON")
    args = ap.parse_args()

    url = args.url
    if url.startswith("/"):
        url = BASE_URL + url

    data = fetch(url, args.strategy)
    if "error" in data:
        print("Error:", data["error"])
        sys.exit(2)

    print("URL:", url)
    print_scores(data)
    print_contrast_details(data)

    if args.out:
        with open(args.out, "w") as f:
            json.dump(data, f, indent=2)
        print("\nSaved full JSON to", args.out)


if __name__ == "__main__":
    main()

