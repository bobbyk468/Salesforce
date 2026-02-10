# GSC Best Next Targets

`gsc-best-targets.py` reads your Google Search Console Performance export (CSV) and prints the best opportunities to improve clicks and position.

## Setup

1. In **Google Search Console** → **Performance** → export your data (e.g. export to Excel).
2. Save each sheet as CSV in a folder, e.g.:
   - `Performance-on-Search - Chart.csv`
   - `Performance-on-Search - Queries.csv`
   - `Performance-on-Search - Pages.csv`
3. The script looks for any CSV whose filename contains `Chart`, `Queries`, or `Pages`.

## Usage

```bash
# From project root; CSVs in ./scripts (or use sample-*.csv)
python3 scripts/gsc-best-targets.py scripts

# From a custom folder (e.g. Downloads)
python3 scripts/gsc-best-targets.py ~/Downloads

# Show top 20 rows and use position < 20 for "low-hanging fruit"
python3 scripts/gsc-best-targets.py scripts -n 20 --position-threshold 20
```

## Output

- **Totals** — clicks, impressions, avg CTR, avg position (from Chart or Queries).
- **Top queries with 0 clicks** — optimize meta title/description for these search terms.
- **Top pages with 0 clicks** — prioritize these URLs for meta and internal linking.
- **Low-hanging fruit** — queries/pages with position &lt; 15 but 0 clicks (closest to page 1).

No extra dependencies: uses only the Python standard library.
