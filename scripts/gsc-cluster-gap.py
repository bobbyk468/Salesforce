#!/usr/bin/env python3
"""Map a Google Search Console query export onto the 95 certification pages
and the seven search-intent clusters they target.

`gsc-best-targets.py` answers "which URLs get no clicks". This answers the
question that matters for the top-10 goal: for each certification, which of
the seven naming patterns a candidate types does the site already rank for,
and which of them sit just off page one.

The cluster table is read from src/lib/cert-keyword-clusters.ts, the same
source the pages render from, so the analysis cannot drift from the site.

Usage:
    python3 scripts/gsc-cluster-gap.py ~/Downloads
    python3 scripts/gsc-cluster-gap.py ~/Downloads --near-miss 11 20 -n 40

Only the Python standard library is used.
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLUSTERS_TS = ROOT / "src" / "lib" / "cert-keyword-clusters.ts"

CLUSTER_LABELS = {
    "C1": "bare name",
    "C2": "vendor + name",
    "C3": "vendor Certified + name",
    "C4": "... certification",
    "C5": "... dumps",
    "C6": "legacy / numeral name",
    "C7": "exam code",
}


def load_clusters() -> dict[str, dict]:
    """Parse the TS cluster table without needing Node."""
    text = CLUSTERS_TS.read_text(encoding="utf-8")
    rows = re.findall(
        r"^  '([a-z0-9-]+)': \{ bare: \"([^\"]+)\", vendor: '([^']+)', aliases: \[([^\]]*)\] \},",
        text,
        re.M,
    )
    if not rows:
        sys.exit(f"Could not parse any clusters from {CLUSTERS_TS}")
    out = {}
    for slug, bare, vendor, aliases in rows:
        alias_list = [a.strip().strip('"') for a in aliases.split(",") if a.strip()]
        codes = [a for a in alias_list if " " not in a and any(c.isdigit() for c in a)]
        legacy = [a for a in alias_list if a not in codes]
        out[slug] = {
            "bare": bare,
            "vendor": vendor,
            "vendor_name": f"{vendor} {bare}",
            "certified_name": f"{vendor} {bare}"
            if re.search(r"\b(certified|accredited)\b", bare, re.I)
            else f"{vendor} Certified {bare}",
            "codes": codes,
            "legacy": legacy,
        }
    return out


def classify(query: str, clusters: dict[str, dict]) -> tuple[str | None, str | None, str]:
    """Return (slug, cluster id, matched term) for a query, longest match wins."""
    q = query.lower()
    # Candidates type codes every which way: "adm 201", "adm201", "ADM-201".
    # Normalise the separators so one spelling in the table catches all three.
    q_codes = re.sub(r"[\s_]+", "-", q)
    q_codes = re.sub(r"(?<=[a-z])-?(?=\d)", "-", q_codes)
    best: tuple[int, str, str, str] | None = None
    for slug, c in clusters.items():
        candidates = [
            (c["certified_name"], "C3"),
            (c["vendor_name"], "C2"),
            (c["bare"], "C1"),
            *[(code, "C7") for code in c["codes"]],
            *[(name, "C6") for name in c["legacy"]],
        ]
        for term, intent in candidates:
            t = term.lower()
            # Codes are short and token-like, so match them on a word boundary
            # to stop "AI-101" matching inside unrelated strings.
            if intent == "C7":
                hit = re.search(rf"(?<![a-z0-9]){re.escape(t)}(?![a-z0-9])", q_codes)
            else:
                hit = t in q
            if not hit:
                continue
            if best is None or len(t) > best[0]:
                best = (len(t), slug, intent, term)
    if best is None:
        return None, None, ""
    _, slug, intent, term = best
    # Intent overrides: the modifier in the query beats the name that matched.
    if "dump" in q or "braindump" in q:
        intent = "C5"
    elif "certification" in q or "certified" in q and intent not in ("C3",):
        intent = "C4" if "certification" in q else intent
    return slug, intent, term


def find_csv(base: Path, needle: str) -> Path | None:
    for p in sorted(base.glob("*.csv")):
        if needle.lower() in p.name.lower():
            return p
    return None


def read_rows(path: Path) -> list[dict]:
    with path.open(newline="", encoding="utf-8-sig") as fh:
        reader = csv.DictReader(fh)
        rows = []
        for row in reader:
            key = reader.fieldnames[0]
            try:
                rows.append({
                    "term": (row.get(key) or "").strip(),
                    "clicks": int(float(row.get("Clicks") or 0)),
                    "impressions": int(float(row.get("Impressions") or 0)),
                    "position": float(row.get("Position") or 0),
                })
            except ValueError:
                continue
        return rows


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("directory", help="Folder holding the GSC Queries CSV export")
    ap.add_argument("-n", type=int, default=30, help="Rows to show per table (default 30)")
    ap.add_argument("--near-miss", nargs=2, type=float, default=[10.5, 20.5],
                    metavar=("FROM", "TO"), help="Position band counted as just off page one")
    args = ap.parse_args()

    base = Path(args.directory).expanduser()
    queries_csv = find_csv(base, "Queries")
    if not queries_csv:
        sys.exit(f"No CSV with 'Queries' in its name found in {base}")

    clusters = load_clusters()
    rows = read_rows(queries_csv)
    print(f"Read {len(rows)} query rows from {queries_csv.name}")
    print(f"Cluster table: {len(clusters)} certification pages\n")

    per_cert: dict[str, dict[str, list]] = defaultdict(lambda: defaultdict(list))
    unmatched = []
    for r in rows:
        slug, intent, term = classify(r["term"], clusters)
        if slug is None:
            unmatched.append(r)
            continue
        per_cert[slug][intent].append({**r, "matched": term})

    lo, hi = args.near_miss
    page_one, near, deep, zero_click = [], [], [], []
    for slug, intents in per_cert.items():
        for intent, items in intents.items():
            for it in items:
                rec = {**it, "slug": slug, "intent": intent}
                if it["position"] <= 10.5:
                    page_one.append(rec)
                elif lo < it["position"] <= hi:
                    near.append(rec)
                else:
                    deep.append(rec)
                if it["clicks"] == 0 and it["impressions"] > 0:
                    zero_click.append(rec)

    def table(title: str, recs: list[dict], note: str = "") -> None:
        print(f"\n{title}  ({len(recs)} rows)")
        if note:
            print(f"  {note}")
        if not recs:
            print("  none")
            return
        recs = sorted(recs, key=lambda r: -r["impressions"])[: args.n]
        print(f"  {'pos':>6}  {'impr':>7}  {'clicks':>6}  {'cluster':<24}  query  ->  page")
        for r in recs:
            label = f"{r['intent']} {CLUSTER_LABELS.get(r['intent'], '')}"
            print(f"  {r['position']:>6.1f}  {r['impressions']:>7}  {r['clicks']:>6}  {label:<24}  "
                  f"{r['term']}  ->  /certifications/{r['slug']}")

    table("JUST OFF PAGE ONE — the shortest path to top 10",
          near, f"position {lo}-{hi}; these need a push, not a rebuild")
    table("ALREADY PAGE ONE — protect these", page_one)
    table("RANKING BUT DEEP — position beyond the near-miss band", deep)
    table("IMPRESSIONS BUT ZERO CLICKS — title and description work", zero_click)

    print(f"\n\nCOVERAGE BY CLUSTER")
    totals: dict[str, dict[str, int]] = defaultdict(lambda: {"queries": 0, "impr": 0, "clicks": 0})
    for slug, intents in per_cert.items():
        for intent, items in intents.items():
            totals[intent]["queries"] += len(items)
            totals[intent]["impr"] += sum(i["impressions"] for i in items)
            totals[intent]["clicks"] += sum(i["clicks"] for i in items)
    print(f"  {'cluster':<28}  {'queries':>7}  {'impr':>8}  {'clicks':>7}")
    for cid in sorted(CLUSTER_LABELS):
        t = totals[cid]
        print(f"  {cid} {CLUSTER_LABELS[cid]:<24}  {t['queries']:>7}  {t['impr']:>8}  {t['clicks']:>7}")

    silent = [s for s in clusters if s not in per_cert]
    print(f"\n\nCERTIFICATION PAGES WITH NO MATCHED QUERY AT ALL  ({len(silent)} of {len(clusters)})")
    print("  Either not yet ranking, or below the export's row cap.")
    for s in sorted(silent):
        print(f"  /certifications/{s}  ({clusters[s]['bare']})")

    print(f"\n\nUNMATCHED QUERIES  ({len(unmatched)} rows, top {args.n} by impressions)")
    print("  Not attributable to any of the 95 certifications: generic or off-taxonomy.")
    for r in sorted(unmatched, key=lambda r: -r["impressions"])[: args.n]:
        print(f"  {r['position']:>6.1f}  {r['impressions']:>7}  {r['clicks']:>6}  {r['term']}")


if __name__ == "__main__":
    main()
