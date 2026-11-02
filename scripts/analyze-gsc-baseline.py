#!/usr/bin/env python3
"""Reconcile saved Search Console exports with the current sitemap roster.

This reports only values present in the downloaded exports. A missing Pages.csv
row is labelled no_row_in_export; it is never changed into a zero metric.
"""
from __future__ import annotations

import argparse
import csv
import json
import math
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REPORT_DIR = ROOT / "performance-report" / "2026-10-05"
SITE_ORIGIN = "https://www.trailblazeprep.com"


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as source:
        return list(csv.DictReader(source))


def normalize_url(value: str) -> str:
    """Normalize only host casing and trailing slash for metrics join keys."""
    parsed = urlsplit((value or "").strip())
    if not parsed.scheme or not parsed.netloc:
        return value.strip()
    path = parsed.path.rstrip("/") or "/"
    return urlunsplit((parsed.scheme.lower(), parsed.netloc.lower(), path, parsed.query, ""))


def pct(value: str) -> float | None:
    value = (value or "").strip()
    if not value:
        return None
    if value.endswith("%"):
        return float(value[:-1]) / 100
    return float(value)


def integer(value: str) -> int | None:
    value = (value or "").strip()
    return int(value) if value else None


def number(value: str) -> float | None:
    value = (value or "").strip()
    return float(value) if value else None


def chart_totals(path: Path) -> dict[str, object]:
    rows = read_csv(path)
    clicks = sum(integer(row.get("Clicks", "")) or 0 for row in rows)
    impressions = sum(integer(row.get("Impressions", "")) or 0 for row in rows)
    position_rows = [row for row in rows if row.get("Position") and row.get("Impressions")]
    position_impressions = sum(int(row["Impressions"]) for row in position_rows)
    weighted_position = (
        sum(float(row["Position"]) * int(row["Impressions"]) for row in position_rows) / position_impressions
        if position_impressions else None
    )
    dates = sorted(row["Date"] for row in rows if row.get("Date"))
    return {
        "chart_rows": len(rows), "start_date": dates[0] if dates else None,
        "end_date": dates[-1] if dates else None, "clicks": clicks,
        "impressions": impressions, "ctr": clicks / impressions if impressions else None,
        "impression_weighted_position": weighted_position,
        "position_coverage_impressions": position_impressions,
        "impressions_without_position": impressions - position_impressions,
    }


def load_pages(path: Path) -> dict[str, dict[str, object]]:
    pages = {}
    for row in read_csv(path):
        url = normalize_url(row.get("Top pages", ""))
        if not url:
            continue
        pages[url] = {
            "row_status": "present",
            "clicks": integer(row.get("Clicks", "")),
            "impressions": integer(row.get("Impressions", "")),
            "ctr": pct(row.get("CTR", "")),
            "position": number(row.get("Position", "")),
        }
    return pages


def page_metrics(url: str, pages: dict[str, dict[str, object]]) -> dict[str, object]:
    return pages.get(normalize_url(url), {
        "row_status": "no_row_in_export", "clicks": None, "impressions": None,
        "ctr": None, "position": None,
    })


def certificate_roster(sitemap_path: Path) -> list[dict[str, str]]:
    document = json.loads(sitemap_path.read_text(encoding="utf-8"))
    result = []
    for raw_url in document.get("urls", []):
        url = raw_url.strip()
        parsed = urlsplit(url)
        if parsed.scheme != "https" or parsed.netloc.lower() != "www.trailblazeprep.com":
            continue
        match = re.fullmatch(r"/certifications/([^/]+)/?", parsed.path)
        if not match:
            continue
        result.append({"url": f"{SITE_ORIGIN}/certifications/{match.group(1)}", "slug": match.group(1)})
    return sorted({row["url"]: row for row in result}.values(), key=lambda row: row["slug"])


def current_snapshot(path: Path, sitemap_urls: set[str]) -> tuple[dict[str, str], dict[str, str], dict[str, object]]:
    rows = read_csv(path)
    exact_matches = {row["URL"]: row.get("Last crawled", "") for row in rows if row.get("URL") in sitemap_urls}
    report = {
        "snapshot_file": str(path.relative_to(ROOT)), "snapshot_rows": len(rows),
        "exact_current_sitemap_matches": len(exact_matches),
        "outside_current_sitemap": len(rows) - len(exact_matches),
        "last_crawled_range": {
            "oldest": min((v for v in exact_matches.values() if v), default=None),
            "newest": max((v for v in exact_matches.values() if v), default=None),
        },
    }
    return exact_matches, {url: date for url, date in exact_matches.items()}, report


def quantile(values: list[float], q: float) -> float | None:
    values = sorted(values)
    if not values:
        return None
    at = (len(values) - 1) * q
    low = math.floor(at)
    high = math.ceil(at)
    return values[low] if low == high else values[low] * (high - at) + values[high] * (at - low)


def write_csv(path: Path, rows: list[dict[str, object]], fields: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as out:
        writer = csv.DictWriter(out, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--report-dir", type=Path, default=DEFAULT_REPORT_DIR)
    parser.add_argument("--sitemap", type=Path, default=ROOT / "public" / "urls.json")
    args = parser.parse_args()
    report_dir = args.report_dir.resolve()

    roster = certificate_roster(args.sitemap)
    sitemap_document = json.loads(args.sitemap.read_text(encoding="utf-8"))
    sitemap_urls = set(sitemap_document.get("urls", []))
    three_month = load_pages(report_dir / "performance" / "Pages.csv")
    last_28d = load_pages(report_dir / "performance-28d" / "Pages.csv")
    three_month_chart = chart_totals(report_dir / "performance" / "Chart.csv")
    last_28d_chart = chart_totals(report_dir / "performance-28d" / "Chart.csv")

    crawled_rows = read_csv(report_dir / "crawled-unindexed" / "Table.csv")
    duplicate_rows = read_csv(report_dir / "duplicates" / "Table.csv")
    crawled_exact = {r["URL"]: r.get("Last crawled", "") for r in crawled_rows if r.get("URL") in sitemap_urls}
    duplicate_exact = {r["URL"]: r.get("Last crawled", "") for r in duplicate_rows if r.get("URL") in sitemap_urls}

    output = []
    for cert in roster:
        url, slug = cert["url"], cert["slug"]
        perf3 = page_metrics(url, three_month)
        perf28 = page_metrics(url, last_28d)
        row: dict[str, object] = {
            "slug": slug, "canonical_url": url,
            "sitemap_exact_match": "yes" if url in sitemap_urls else "no",
            "gsc_crawled_unindexed_snapshot": "listed" if url in crawled_exact else "not_listed_in_snapshot",
            "crawled_unindexed_last_crawled": crawled_exact.get(url, ""),
            "gsc_duplicate_without_user_canonical_snapshot": "listed" if url in duplicate_exact else "not_listed_in_snapshot",
            "duplicate_snapshot_last_crawled": duplicate_exact.get(url, ""),
            "performance_3mo_row_status": perf3["row_status"],
            "performance_28d_row_status": perf28["row_status"],
        }
        for label, metrics in (("3mo", perf3), ("28d", perf28)):
            for field in ("clicks", "impressions", "ctr", "position"):
                row[f"{label}_{field}"] = metrics[field] if metrics["row_status"] == "present" else ""

        if url in crawled_exact:
            row["priority"] = "P1 - inspect current sitemap exclusion"
            row["priority_reason"] = "Exact URL match in Crawled - currently not indexed export; verify current URL Inspection before changes."
        elif perf28 and perf28["position"] is not None and 10 <= perf28["position"] <= 20 and perf28["impressions"]:
            row["priority"] = "P2 - improve high-impression page at positions 10-20"
            row["priority_reason"] = "28-day page-average position is 10-20; compare impressions against the P2 threshold in the summary."
        elif perf28 and perf28["position"] is not None and perf28["position"] <= 10 and perf28["ctr"] is not None:
            if (perf28["impressions"] or 0) >= 25:
                row["priority"] = "P3 - review low-CTR top-10 page"
                row["priority_reason"] = "Top-10 page-average position; compare CTR to the top-10 lower-quartile threshold in the summary."
            else:
                row["priority"] = "Monitor"
                row["priority_reason"] = "Top-10 page-average position but fewer than 25 exported 28-day impressions; low-volume CTR is too noisy to prioritize."
        else:
            row["priority"] = "Monitor"
            row["priority_reason"] = "No current sitemap exclusion or qualifying 28-day performance signal in the downloaded page export."
        output.append(row)

    p2_values = [float(r["28d_impressions"]) for r in output
                 if r["gsc_crawled_unindexed_snapshot"] != "listed"
                 and r["performance_28d_row_status"] == "present"
                 and r["28d_position"] is not None and 10 <= float(r["28d_position"]) <= 20
                 and r["28d_impressions"] != ""]
    p3_values = [float(r["28d_ctr"]) for r in output
                 if r["gsc_crawled_unindexed_snapshot"] != "listed"
                 and r["performance_28d_row_status"] == "present"
                 and r["28d_position"] is not None and float(r["28d_position"]) <= 10
                 and float(r["28d_impressions"] or 0) >= 25
                 and r["28d_ctr"] != ""]
    p2_threshold = quantile(p2_values, 0.75)
    p3_threshold = quantile(p3_values, 0.25)
    # Set finite operational thresholds so the generated priority labels are reproducible.
    p2_threshold = max(p2_threshold or 0, 1)
    p3_threshold = p3_threshold if p3_threshold is not None else 0
    for row in output:
        if row["priority"].startswith("P2"):
            row["priority_reason"] = f"28-day average position 10-20; impressions {row['28d_impressions']} >= cohort 75th percentile {p2_threshold:g}."
            if float(row["28d_impressions"]) < p2_threshold:
                row["priority"] = "Monitor"
                row["priority_reason"] = f"28-day position 10-20 but impressions are below cohort 75th percentile {p2_threshold:g}."
        elif row["priority"].startswith("P3"):
            row["priority_reason"] = f"28-day average position <=10; CTR {float(row['28d_ctr']):.4%} <= cohort 25th percentile {p3_threshold:.4%}."
            if float(row["28d_ctr"]) > p3_threshold:
                row["priority"] = "Monitor"
                row["priority_reason"] = f"28-day position <=10 but CTR is above cohort 25th percentile {p3_threshold:.4%}."

    csv_fields = list(output[0].keys()) if output else []
    out_csv = report_dir / "certification-baseline.csv"
    write_csv(out_csv, output, csv_fields)

    crawled_cert = [url for url in crawled_exact if re.fullmatch(r"https://www\.trailblazeprep\.com/certifications/[^/]+", url)]
    duplicate_cert = [url for url in duplicate_exact if re.fullmatch(r"https://www\.trailblazeprep\.com/certifications/[^/]+", url)]
    summary = {
        "generated_at_utc": datetime.now(timezone.utc).isoformat(),
        "inputs": {
            "sitemap": str(args.sitemap.resolve().relative_to(ROOT)),
            "gsc_report_dir": str(report_dir.relative_to(ROOT)),
            "performance_rows_3mo": len(three_month), "performance_rows_28d": len(last_28d),
            "query_export_limit_rows": 1000,
        },
        "certification_roster_count": len(roster), "current_sitemap_url_count": len(sitemap_urls),
        "gsc_performance_chart_totals": {"last_3_months": three_month_chart, "last_28_days": last_28d_chart},
        "gsc_page_table_coverage": {
            "cert_rows_present_3mo": sum(1 for r in output if r["performance_3mo_row_status"] == "present"),
            "cert_rows_missing_3mo": sum(1 for r in output if r["performance_3mo_row_status"] == "no_row_in_export"),
            "cert_rows_present_28d": sum(1 for r in output if r["performance_28d_row_status"] == "present"),
            "cert_rows_missing_28d": sum(1 for r in output if r["performance_28d_row_status"] == "no_row_in_export"),
            "missing_row_semantics": "No row in this exported Pages table; not equivalent to zero impressions or an indexing decision.",
        },
        "gsc_exclusion_snapshots": {
            "crawled_unindexed": {
                "export_rows": len(crawled_rows), "exact_current_sitemap_matches": len(crawled_exact),
                "exact_current_certification_matches": len(crawled_cert), "outside_current_sitemap": len(crawled_rows) - len(crawled_exact),
                "current_certification_urls": sorted(crawled_cert),
                "snapshot_age_caveat": "Exported URL Inspection coverage snapshot; verify live URL Inspection before treating as current Google state.",
            },
            "duplicate_without_user_selected_canonical": {
                "export_rows": len(duplicate_rows), "exact_current_sitemap_matches": len(duplicate_exact),
                "exact_current_certification_matches": len(duplicate_cert), "outside_current_sitemap": len(duplicate_rows) - len(duplicate_exact),
            },
        },
        "prioritization": {
            "rules": ["P1: exact match in Crawled - currently not indexed export", "P2: 28-day average page position 10-20 and impressions at/above observed certification cohort 75th percentile", "P3: 28-day average page position <=10, at least 25 28-day impressions, and CTR at/below observed certification cohort 25th percentile", "Monitor otherwise"],
            "p2_75th_percentile_impressions": p2_threshold,
            "p3_25th_percentile_ctr": p3_threshold,
            "priority_counts": dict(Counter(str(r["priority"]) for r in output)),
        },
        "limitations": [
            "Queries.csv is capped at 1,000 exported rows and anonymized low-volume queries can be omitted.",
            "Pages.csv is treated as the downloaded table, not a complete corpus; a missing page row is labelled explicitly.",
            "Chart totals are computed from the daily Chart export: summed clicks/impressions, CTR as total clicks divided by total impressions, and impression-weighted daily average position.",
            "Historical GSC coverage exports can differ from the current sitemap and current URL Inspection state.",
        ],
        "output_csv": str(out_csv.resolve().relative_to(ROOT)),
    }
    out_json = report_dir / "certification-baseline-summary.json"
    out_json.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Certification roster: {len(roster)} canonical URLs")
    print(f"GSC chart totals (3mo): {three_month_chart['clicks']} clicks / {three_month_chart['impressions']} impressions; CTR {three_month_chart['ctr']:.2%}; impression-weighted position {three_month_chart['impression_weighted_position']:.2f}")
    print(f"GSC chart totals (28d): {last_28d_chart['clicks']} clicks / {last_28d_chart['impressions']} impressions; CTR {last_28d_chart['ctr']:.2%}; impression-weighted position {last_28d_chart['impression_weighted_position']:.2f}")
    print(f"Crawled-unindexed: {len(crawled_exact)}/{len(crawled_rows)} exact current sitemap matches, {len(crawled_cert)} cert URLs")
    print(f"Baseline CSV: {out_csv}")
    print(f"Summary JSON: {out_json}")


if __name__ == "__main__":
    main()
