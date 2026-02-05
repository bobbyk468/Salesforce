#!/usr/bin/env python3
"""
GSC Best Next Targets — load Google Search Console export CSVs and report
the best opportunities to improve clicks and position.

Usage:
  python scripts/gsc-best-targets.py [directory]
  python scripts/gsc-best-targets.py .

If directory is omitted, uses current directory. Looks for CSV files whose
names contain "Chart", "Queries", or "Pages" (e.g. from GSC Performance export).

Output:
  - Totals (clicks, impressions, avg CTR, avg position)
  - Top queries with 0 clicks (by impressions) — optimize titles/descriptions for these
  - Top pages with 0 clicks (by impressions) — prioritize these pages
  - Low-hanging fruit: queries/pages with position < 15 but 0 clicks
"""

import argparse
import csv
import sys
from pathlib import Path


def find_csv(dir_path: Path, fragment: str) -> Path | None:
    """Return path to first CSV in dir_path whose name contains fragment."""
    if not dir_path.is_dir():
        return None
    for f in dir_path.iterdir():
        if f.suffix.lower() == ".csv" and fragment.lower() in f.name.lower():
            return f
    return None


def load_csv(path: Path | None) -> list[dict]:
    if path is None or not path.exists():
        return []
    try:
        with open(path, newline="", encoding="utf-8", errors="replace") as f:
            reader = csv.DictReader(f)
            return list(reader)
    except Exception as e:
        print(f"Warning: could not read {path}: {e}", file=sys.stderr)
        return []


def to_num(val, default=0):
    try:
        return float(val) if val is not None and str(val).strip() != "" else default
    except (ValueError, TypeError):
        return default


def main() -> None:
    parser = argparse.ArgumentParser(description="GSC Best Next Targets — analyze export CSVs")
    parser.add_argument(
        "directory",
        nargs="?",
        default=".",
        help="Directory containing Chart, Queries, and Pages CSV files",
    )
    parser.add_argument(
        "-n",
        "--top",
        type=int,
        default=15,
        help="Number of top rows to show for queries and pages (default: 15)",
    )
    parser.add_argument(
        "--position-threshold",
        type=float,
        default=15.0,
        help="Max position for 'low-hanging fruit' (default: 15)",
    )
    args = parser.parse_args()

    base = Path(args.directory).resolve()
    if not base.is_dir():
        print(f"Error: not a directory: {base}", file=sys.stderr)
        sys.exit(1)

    chart_path = find_csv(base, "Chart")
    queries_path = find_csv(base, "Queries")
    pages_path = find_csv(base, "Pages")

    chart_rows = load_csv(chart_path)
    queries_rows = load_csv(queries_path)
    pages_rows = load_csv(pages_path)

    if not queries_rows and not pages_rows and not chart_rows:
        print("No Chart, Queries, or Pages CSV found in", base, file=sys.stderr)
        print("Export your GSC Performance data to CSV (e.g. one sheet per file).", file=sys.stderr)
        sys.exit(1)

    # Detect first column key (Top queries / Top pages / etc.)
    query_key = next((k for k in (queries_rows[0].keys() if queries_rows else []) if "quer" in k.lower() or k == "Query"), "Query")
    if queries_rows and query_key not in queries_rows[0]:
        query_key = list(queries_rows[0].keys())[0] if queries_rows else "Query"
    page_key = next((k for k in (pages_rows[0].keys() if pages_rows else []) if "page" in k.lower() or k == "Page"), "Page")
    if pages_rows and page_key not in pages_rows[0]:
        page_key = list(pages_rows[0].keys())[0] if pages_rows else "Page"

    # --- Totals from Chart ---
    print("=" * 60)
    print("GSC BEST NEXT TARGETS")
    print("=" * 60)

    if chart_rows:
        total_clicks = sum(to_num(r.get("Clicks")) for r in chart_rows)
        total_imp = sum(to_num(r.get("Impressions")) for r in chart_rows)
        ctr_vals = [to_num(r.get("CTR")) for r in chart_rows if r.get("CTR") not in (None, "")]
        pos_vals = [to_num(r.get("Position")) for r in chart_rows if r.get("Position") not in (None, "")]
        avg_ctr = (sum(ctr_vals) / len(ctr_vals) * 100) if ctr_vals else 0
        avg_pos = sum(pos_vals) / len(pos_vals) if pos_vals else 0
        print("\n📊 TOTALS (from Chart)")
        print(f"   Clicks:       {int(total_clicks)}")
        print(f"   Impressions:  {int(total_imp)}")
        print(f"   Avg CTR:      {avg_ctr:.2f}%")
        print(f"   Avg Position: {avg_pos:.1f}")
    elif queries_rows:
        total_clicks = sum(to_num(r.get("Clicks")) for r in queries_rows)
        total_imp = sum(to_num(r.get("Impressions")) for r in queries_rows)
        print("\n📊 TOTALS (from Queries)")
        print(f"   Clicks:       {int(total_clicks)}")
        print(f"   Impressions:  {int(total_imp)}")
    else:
        print("\n📊 TOTALS: (no Chart/Queries data)")

    # --- Top queries with 0 clicks ---
    zero_queries = [r for r in queries_rows if to_num(r.get("Clicks")) == 0]
    zero_queries.sort(key=lambda r: to_num(r.get("Impressions")), reverse=True)
    if zero_queries:
        print("\n🔍 TOP QUERIES WITH 0 CLICKS (optimize title/description for these)")
        print("-" * 60)
        for r in zero_queries[: args.top]:
            q = r.get(query_key, list(r.values())[0] if r else "")
            imp = int(to_num(r.get("Impressions")))
            pos = to_num(r.get("Position"))
            pos_str = f"{pos:.1f}" if pos else "—"
            print(f"   {imp:4} imp  pos {pos_str:>5}  {str(q)[:70]}")
    else:
        print("\n🔍 No queries with 0 clicks in data.")

    # --- Top pages with 0 clicks ---
    zero_pages = [r for r in pages_rows if to_num(r.get("Clicks")) == 0]
    zero_pages.sort(key=lambda r: to_num(r.get("Impressions")), reverse=True)
    if zero_pages:
        print("\n📄 TOP PAGES WITH 0 CLICKS (prioritize these pages)")
        print("-" * 60)
        for r in zero_pages[: args.top]:
            p = r.get(page_key, list(r.values())[0] if r else "")
            imp = int(to_num(r.get("Impressions")))
            pos = to_num(r.get("Position"))
            pos_str = f"{pos:.1f}" if pos else "—"
            label = str(p).split("/")[-1] or str(p)[:60]
            print(f"   {imp:4} imp  pos {pos_str:>5}  {label}")
    else:
        print("\n📄 No pages with 0 clicks in data.")

    # --- Low-hanging fruit ---
    threshold = args.position_threshold
    print(f"\n🍋 LOW-HANGING FRUIT (position < {threshold}, 0 clicks)")
    print("-" * 60)

    lh_queries = [r for r in queries_rows if to_num(r.get("Clicks")) == 0 and to_num(r.get("Impressions")) >= 1 and to_num(r.get("Position")) < threshold and to_num(r.get("Position")) > 0]
    lh_queries.sort(key=lambda r: to_num(r.get("Position")))
    if lh_queries:
        for r in lh_queries[: args.top]:
            q = r.get(query_key, list(r.values())[0] if r else "")
            imp = int(to_num(r.get("Impressions")))
            pos = to_num(r.get("Position"))
            print(f"   pos {pos:.1f}  {imp:3} imp   {str(q)[:55]}")
    else:
        print("   No queries in this range.")

    lh_pages = [r for r in pages_rows if to_num(r.get("Clicks")) == 0 and to_num(r.get("Impressions")) >= 1 and to_num(r.get("Position")) < threshold and to_num(r.get("Position")) > 0]
    lh_pages.sort(key=lambda r: to_num(r.get("Position")))
    if lh_pages:
        print("   --- Pages ---")
        for r in lh_pages[: args.top]:
            p = r.get(page_key, list(r.values())[0] if r else "")
            imp = int(to_num(r.get("Impressions")))
            pos = to_num(r.get("Position"))
            label = str(p).split("/")[-1] or str(p)[:50]
            print(f"   pos {pos:.1f}  {imp:3} imp   {label}")
    else:
        print("   No pages in this range.")

    print("\n" + "=" * 60)
    print("Next: improve meta title/description for top queries and pages above.")
    print("=" * 60)


if __name__ == "__main__":
    main()
