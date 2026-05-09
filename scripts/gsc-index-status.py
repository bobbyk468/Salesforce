#!/usr/bin/env python3
"""
Export URL index status from Google Search Console URL Inspection API.

Outputs:
  - reports/gsc-indexed-urls.csv
  - reports/gsc-not-indexed-urls.csv
  - reports/gsc-index-status-all.csv
  - reports/gsc-index-status-summary.json

Usage:
  python3 scripts/gsc-index-status.py
  python3 scripts/gsc-index-status.py --limit 50
  python3 scripts/gsc-index-status.py --urls-file public/urls.json --site-url sc-domain:trailblazeprep.com
"""

from __future__ import annotations

import argparse
import csv
import json
import sys
import time
from pathlib import Path
from typing import Any

import requests

from gsc_oauth_env import load_oauth_credentials, oauth_token_json_path

try:
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
except Exception:
    print("Missing deps. Install with:")
    print("  pip3 install google-auth-oauthlib requests")
    raise


ROOT = Path(__file__).resolve().parent.parent
DEFAULT_URLS_FILE = ROOT / "public" / "urls.json"
DEFAULT_SITE_URL = "https://www.trailblazeprep.com/"
INSPECTION_ENDPOINT = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]


def load_urls(urls_file: Path) -> list[str]:
    payload = json.loads(urls_file.read_text(encoding="utf-8"))
    urls = payload.get("urls", [])
    if not isinstance(urls, list):
        raise ValueError(f"Invalid urls list in {urls_file}")
    return [u for u in urls if isinstance(u, str) and u.startswith("http")]


def inspect_url(session: requests.Session, inspection_url: str, site_url: str) -> dict[str, Any]:
    body = {
        "inspectionUrl": inspection_url,
        "siteUrl": site_url,
        "languageCode": "en-US",
    }
    resp = session.post(INSPECTION_ENDPOINT, json=body, timeout=30)
    if resp.status_code != 200:
        raise RuntimeError(f"{resp.status_code}: {resp.text[:300]}")
    return resp.json()


def classify_index_status(result: dict[str, Any]) -> dict[str, str]:
    inspection = result.get("inspectionResult", {})
    index = inspection.get("indexStatusResult", {})
    verdict = str(index.get("verdict", "UNKNOWN"))
    coverage = str(index.get("coverageState", ""))
    robots = str(index.get("robotsTxtState", ""))
    indexing_state = str(index.get("indexingState", ""))
    canonical = str(index.get("googleCanonical", ""))
    user_canonical = str(index.get("userCanonical", ""))

    indexed = verdict.upper() == "PASS" and "Indexed" in coverage
    return {
        "indexed": "yes" if indexed else "no",
        "verdict": verdict,
        "coverageState": coverage,
        "indexingState": indexing_state,
        "robotsTxtState": robots,
        "googleCanonical": canonical,
        "userCanonical": user_canonical,
    }


def write_csv(path: Path, rows: list[dict[str, str]], fieldnames: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main() -> int:
    parser = argparse.ArgumentParser(description="Export indexed vs non-indexed URLs from GSC.")
    parser.add_argument("--urls-file", type=Path, default=DEFAULT_URLS_FILE)
    parser.add_argument(
        "--token-file",
        type=Path,
        default=None,
        help="Override token path (default: scripts/.gsc/token.json or GSC_OAUTH_TOKEN_JSON)",
    )
    parser.add_argument(
        "--creds-file",
        type=Path,
        action="append",
        dest="creds_files",
        help="OAuth client JSON (repeat for multiple; default: discover in scripts/.gsc/ and env)",
    )
    parser.add_argument("--site-url", default=DEFAULT_SITE_URL)
    parser.add_argument("--limit", type=int, default=0, help="Optional limit for quick runs")
    parser.add_argument("--delay-ms", type=int, default=250, help="Delay between calls")
    args = parser.parse_args()

    if not args.urls_file.exists():
        print(f"URLs file not found: {args.urls_file}")
        return 1

    token_file = args.token_file or oauth_token_json_path()
    client_override = args.creds_files if args.creds_files else None

    try:
        creds = load_oauth_credentials(token_file, SCOPES, client_paths=client_override)
    except FileNotFoundError as e:
        print(str(e), file=sys.stderr)
        return 1
    except RuntimeError as e:
        print(str(e), file=sys.stderr)
        return 1

    urls = load_urls(args.urls_file)
    if args.limit > 0:
        urls = urls[: args.limit]

    print(f"Loaded {len(urls)} URLs from {args.urls_file}")

    session = requests.Session()
    session.headers.update(
        {
            "Authorization": f"Bearer {creds.token}",
            "Content-Type": "application/json",
        }
    )

    all_rows: list[dict[str, str]] = []
    indexed_rows: list[dict[str, str]] = []
    not_indexed_rows: list[dict[str, str]] = []

    for i, url in enumerate(urls, start=1):
        if creds.expired and creds.refresh_token:
            creds.refresh(Request())
            session.headers["Authorization"] = f"Bearer {creds.token}"
        try:
            raw = inspect_url(session, url, args.site_url)
            classified = classify_index_status(raw)
            row = {
                "url": url,
                **classified,
            }
            all_rows.append(row)
            if classified["indexed"] == "yes":
                indexed_rows.append(row)
                marker = "INDEXED"
            else:
                not_indexed_rows.append(row)
                marker = "NOT_INDEXED"
            print(f"[{i:>3}/{len(urls)}] {marker} - {url}")
        except Exception as e:
            row = {
                "url": url,
                "indexed": "unknown",
                "verdict": "ERROR",
                "coverageState": str(e)[:240],
                "indexingState": "",
                "robotsTxtState": "",
                "googleCanonical": "",
                "userCanonical": "",
            }
            all_rows.append(row)
            not_indexed_rows.append(row)
            print(f"[{i:>3}/{len(urls)}] ERROR - {url} - {e}")
        time.sleep(max(args.delay_ms, 0) / 1000)

    reports_dir = ROOT / "reports"
    fields = [
        "url",
        "indexed",
        "verdict",
        "coverageState",
        "indexingState",
        "robotsTxtState",
        "googleCanonical",
        "userCanonical",
    ]
    write_csv(reports_dir / "gsc-index-status-all.csv", all_rows, fields)
    write_csv(reports_dir / "gsc-indexed-urls.csv", indexed_rows, fields)
    write_csv(reports_dir / "gsc-not-indexed-urls.csv", not_indexed_rows, fields)

    summary = {
        "checked": len(all_rows),
        "indexed": len(indexed_rows),
        "not_indexed": len(not_indexed_rows),
        "site_url": args.site_url,
        "urls_file": str(args.urls_file),
    }
    (reports_dir / "gsc-index-status-summary.json").write_text(
        json.dumps(summary, indent=2), encoding="utf-8"
    )

    print("\nDone.")
    print(json.dumps(summary, indent=2))
    print(f"Indexed CSV: {reports_dir / 'gsc-indexed-urls.csv'}")
    print(f"Not indexed CSV: {reports_dir / 'gsc-not-indexed-urls.csv'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
