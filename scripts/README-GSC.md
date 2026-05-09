# GSC Best Next Targets

`gsc-best-targets.py` reads your Google Search Console Performance export (CSV) and prints the best opportunities to improve clicks and position.

## OAuth for API scripts (`submit-gsc.py`, `gsc-index-status.py`)

If your Google Cloud **OAuth client was deleted**, create a new one (or several):

1. [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → **Credentials** → **Create credentials** → **OAuth client ID** → type **Desktop app**.
2. Download the JSON file(s).

**Multiple client files (try in order until sign-in works):**

- Put any number of valid client JSONs under **`scripts/.gsc/`** (gitignored), e.g. `client-a.json`, `client-b.json`. Files named `token.json` are ignored.
- **Or** `export GSC_OAUTH_CLIENT_JSON='/path/one.json,/path/two.json'` (separate paths with comma, semicolon, or pipe).
- **Or** `export GSC_OAUTH_CLIENT_DIR='/path/to/folder'` — every `*.json` there (except token-like names) is considered.

For `gsc-index-status.py` only, you can also pass explicit files:

`python3 scripts/gsc-index-status.py --creds-file /path/a.json --creds-file /path/b.json`

3. Run the script; complete the browser consent flow once. The refresh token is stored in **`scripts/.gsc/token.json`** (or `GSC_OAUTH_TOKEN_JSON`).

Enable **Google Search Console API** (and **Indexing API** for `submit-gsc.py`) on the same Google Cloud project.

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
