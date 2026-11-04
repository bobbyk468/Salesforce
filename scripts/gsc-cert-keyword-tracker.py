#!/usr/bin/env python3
"""Export GSC query × URL performance and summarize it against the site taxonomy.

The taxonomy is read from the repository's certification category and naming
maps. It describes the site's labels, not an independently verified Salesforce
catalog. This tool uses only Search Analytics API data; it does not fetch SERPs.
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path
from typing import Any, Callable
from urllib.parse import urljoin

import requests

from gsc_oauth_env import load_oauth_credentials, oauth_token_json_path

ROOT = Path(__file__).resolve().parent.parent
SITE_URL = "https://www.trailblazeprep.com/"
API = "https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
DIMENSIONS = ["query", "page", "country", "device"]
RAW_FIELDS = ["query", "page", "country", "device", "clicks", "impressions", "ctr", "position",
              "cert_slug", "cert_name", "cert_categories", "catalog_source_status", "manual_review", "coverage_note", "reported_data_status",
              "data_start", "data_end", "country_filter", "device_filter", "data_source"]
DATA_SOURCE = "Google Search Console Search Analytics API"


def load_catalog(categories_path: Path, names_path: Path, aliases_path: Path | None = None) -> list[dict[str, str]]:
    """Parse the repository's static TS taxonomy maps without requiring Node."""
    cats = categories_path.read_text(encoding="utf-8")
    cats = cats.split("/** Categories with official", 1)[0]
    names_text = names_path.read_text(encoding="utf-8")
    aliases_text = aliases_path.read_text(encoding="utf-8") if aliases_path and aliases_path.exists() else ""
    name_pairs = re.findall(
        r"(?:['\"]([^'\"]+)['\"]|([A-Za-z0-9_-]+))\s*:\s*['\"]([^'\"]+)['\"]",
        names_text,
    )
    names = {(quoted_slug or bare_slug): name for quoted_slug, bare_slug, name in name_pairs}
    # The aliases file uses a nested object, where primaryName is deliberately
    # the site's effective label even when it differs from the name map.
    alias_blocks = re.findall(r"(?:['\"]([^'\"]+)['\"]|([A-Za-z0-9_-]+))\s*:\s*\{([^{}]*)\}", aliases_text)
    aliases = {slug: re.search(r"primaryName:\s*['\"]([^'\"]+)['\"]", block).group(1)
               for quoted_slug, bare_slug, block in alias_blocks
               for slug in [quoted_slug or bare_slug]
               if re.search(r"primaryName:\s*['\"]([^'\"]+)['\"]", block)}
    categories: dict[str, list[str]] = defaultdict(list)
    current = ""
    for line in cats.splitlines():
        cm = re.search(r"slug:\s*'([^']+)'", line)
        if cm:
            current = cm.group(1)
        hm = re.search(r"href:\s*'(/certifications/[^']+)'", line)
        if hm and current:
            slug = hm.group(1).rstrip("/").rsplit("/", 1)[-1]
            if current not in categories[slug]:
                categories[slug].append(current)
    catalog = []
    for slug, roles in sorted(categories.items()):
        fallback = slug.replace("-", " ").title()
        catalog.append({"cert_slug": slug, "cert_name": aliases.get(slug, names.get(slug, fallback)),
                        "cert_categories": ";".join(roles),
                        "page": urljoin(SITE_URL, f"certifications/{slug}"),
                        "catalog_source_status": "site taxonomy; current official status requires review",
                        "coverage_note": "API-reported rows only; query anonymization and API row limits mean this is not a complete site total",
                        "manual_review": "yes"})
    return catalog


def build_request(start_date: str, end_date: str, start_row: int, country: str | None = None,
                  device: str | None = None) -> dict[str, Any]:
    filters = []
    if country:
        filters.append({"dimension": "country", "operator": "equals", "expression": country.upper()})
    if device:
        filters.append({"dimension": "device", "operator": "equals", "expression": device.upper()})
    body: dict[str, Any] = {"startDate": start_date, "endDate": end_date, "dimensions": DIMENSIONS,
                            "rowLimit": 25000, "startRow": start_row}
    if filters:
        body["dimensionFilterGroups"] = [{"groupType": "and", "filters": filters}]
    return body


def fetch_all(fetch_page: Callable[[dict[str, Any]], list[dict[str, Any]]], start_date: str,
              end_date: str, country: str | None = None, device: str | None = None) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    start_row = 0
    while True:
        page = fetch_page(build_request(start_date, end_date, start_row, country, device))
        rows.extend(page)
        if len(page) < 25000:
            return rows
        start_row += len(page)


def map_rows(rows: list[dict[str, Any]], catalog: list[dict[str, str]], start_date: str, end_date: str,
             country: str | None, device: str | None) -> list[dict[str, str]]:
    by_url = {item["page"].rstrip("/"): item for item in catalog}
    mapped = []
    for row in rows:
        keys = row.get("keys", [])
        query, page, country_key, device_key = (keys + [""] * 4)[:4]
        item = by_url.get(str(page).rstrip("/"), {})
        mapped.append({"query": str(query), "page": str(page), "country": str(country_key), "device": str(device_key),
                       "clicks": str(row.get("clicks", 0)), "impressions": str(row.get("impressions", 0)),
                       "ctr": str(row.get("ctr", 0)), "position": str(row.get("position", 0)),
                       "cert_slug": item.get("cert_slug", ""), "cert_name": item.get("cert_name", ""),
                       "cert_categories": item.get("cert_categories", ""),
                       "catalog_source_status": item.get("catalog_source_status", "unmapped GSC URL"),
                       "manual_review": item.get("manual_review", ""), "coverage_note": item.get("coverage_note", ""),
                       "reported_data_status": "reported",
                       "data_start": start_date, "data_end": end_date,
                       "country_filter": country or "all", "device_filter": device or "all", "data_source": DATA_SOURCE})
    return mapped


def summaries(mapped: list[dict[str, str]], catalog: list[dict[str, str]], start_date: str, end_date: str,
              country: str | None, device: str | None) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    groups: dict[str, list[dict[str, str]]] = defaultdict(list)
    for row in mapped:
        if row["cert_slug"]:
            groups[row["cert_slug"]].append(row)
    summary, gaps = [], []
    for cert in catalog:
        group = groups.get(cert["cert_slug"], [])
        clicks = sum(int(float(r["clicks"])) for r in group)
        impressions = sum(int(float(r["impressions"])) for r in group)
        weighted_position = sum(float(r["position"]) * int(float(r["impressions"])) for r in group)
        status = "reported" if group else "no reported GSC data for selected filters/date"
        summary.append({**cert, "clicks": str(clicks) if group else "", "impressions": str(impressions) if group else "",
                        "ctr": str(clicks / impressions) if impressions else ("0" if group else ""),
                        "position": str(weighted_position / impressions) if impressions else ("" if not group else ""),
                        "query_rows": str(len(group)) if group else "", "reported_data_status": status,
                        "data_start": start_date, "data_end": end_date, "country_filter": country or "all",
                        "device_filter": device or "all", "data_source": DATA_SOURCE,
                        "catalog_source": "src/lib/certifications-data.ts + cert-official-names.ts + cert-name-aliases.ts (site taxonomy; not independently verified official catalog)",
                        "catalog_source_status": cert["catalog_source_status"], "manual_review": cert["manual_review"],
                        "coverage_note": cert.get("coverage_note", "API-reported rows only; query anonymization and API row limits mean this is not a complete site total")})
        if not group:
            gaps.append({"cert_slug": cert["cert_slug"], "cert_name": cert["cert_name"],
                         "cert_categories": cert["cert_categories"], "page": cert["page"],
                         "catalog_source_status": cert["catalog_source_status"], "manual_review": cert["manual_review"],
                         "coverage_note": cert.get("coverage_note", "API-reported rows only; query anonymization and API row limits mean this is not a complete site total"),
                         "status": status, "data_start": start_date, "data_end": end_date,
                         "country_filter": country or "all", "device_filter": device or "all",
                         "data_source": DATA_SOURCE})
    return summary, gaps


def write_csv(path: Path, rows: list[dict[str, str]], fields: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--start-date", required=True, help="Inclusive YYYY-MM-DD (GSC reporting date)")
    parser.add_argument("--end-date", required=True, help="Inclusive YYYY-MM-DD")
    parser.add_argument("--site-url", default=SITE_URL, help="GSC property URL or sc-domain property")
    parser.add_argument("--country", help="Optional ISO-3166-1 alpha-3 country filter, e.g. IND")
    parser.add_argument("--device", choices=["DESKTOP", "MOBILE", "TABLET"], help="Optional device filter")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "reports" / "gsc-cert-keywords")
    parser.add_argument("--token-file", type=Path, default=None)
    parser.add_argument("--creds-file", type=Path, action="append", dest="creds_files")
    args = parser.parse_args(argv)
    try:
        start, end = date.fromisoformat(args.start_date), date.fromisoformat(args.end_date)
        if end < start:
            raise ValueError("--end-date must be on or after --start-date")
        if end > date.today():
            raise ValueError("--end-date cannot be in the future")
        if args.country and not re.fullmatch(r"[A-Za-z]{3}", args.country):
            raise ValueError("--country must be an ISO-3166-1 alpha-3 code, e.g. IND or USA")
    except ValueError as exc:
        parser.error(str(exc))
    try:
        creds = load_oauth_credentials(args.token_file or oauth_token_json_path(), SCOPES,
                                       client_paths=args.creds_files if args.creds_files else None)
    except (FileNotFoundError, RuntimeError) as exc:
        print(str(exc), file=sys.stderr)
        return 1
    session = requests.Session()
    session.headers["Authorization"] = f"Bearer {creds.token}"
    encoded_site = requests.utils.quote(args.site_url, safe="")
    endpoint = API.format(site=encoded_site)

    def fetch_page(body: dict[str, Any]) -> list[dict[str, Any]]:
        if creds.expired and creds.refresh_token:
            from google.auth.transport.requests import Request
            creds.refresh(Request())
            session.headers["Authorization"] = f"Bearer {creds.token}"
        response = session.post(endpoint, json=body, timeout=60)
        if response.status_code != 200:
            raise RuntimeError(f"Search Analytics API returned HTTP {response.status_code}: {response.text[:300]}")
        return response.json().get("rows", [])

    try:
        raw = fetch_all(fetch_page, args.start_date, args.end_date, args.country, args.device)
    except Exception as exc:
        print(f"GSC export failed: {exc}", file=sys.stderr)
        return 1
    catalog = load_catalog(ROOT / "src/lib/certifications-data.ts", ROOT / "src/lib/cert-official-names.ts",
                           ROOT / "src/lib/cert-name-aliases.ts")
    mapped = map_rows(raw, catalog, args.start_date, args.end_date, args.country, args.device)
    summary, gaps = summaries(mapped, catalog, args.start_date, args.end_date, args.country, args.device)
    out = args.output_dir
    write_csv(out / "query-url-raw.csv", mapped, RAW_FIELDS)
    summary_fields = ["cert_slug", "cert_name", "cert_categories", "page", "clicks", "impressions", "ctr", "position", "query_rows", "reported_data_status", "data_start", "data_end", "country_filter", "device_filter", "data_source", "catalog_source", "catalog_source_status", "manual_review", "coverage_note"]
    write_csv(out / "cert-summary.csv", summary, summary_fields)
    gap_fields = ["cert_slug", "cert_name", "cert_categories", "page", "status", "catalog_source_status", "manual_review", "coverage_note", "data_start", "data_end", "country_filter", "device_filter", "data_source"]
    write_csv(out / "gsc-data-gaps.csv", gaps, gap_fields)
    print(f"Exported {len(mapped)} GSC query × URL rows; {len(gaps)} catalog pages have no reported GSC data for this selection.")
    print(f"Outputs: {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
