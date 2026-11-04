# GSC certification keyword tracker

This standalone export builds a weekly query × URL view from the Google Search
Console Search Analytics API and joins certification URLs to the site's local
certification taxonomy. It does not request or synthesize SERP pages, use paid
SERP services, or change site runtime behavior.

## Setup

Use the existing OAuth setup documented in [scripts/README-GSC.md](../scripts/README-GSC.md).
The script reuses `scripts/gsc_oauth_env.py` and its read-only Search Console
scope. It requires the Google OAuth dependencies already used by the GSC tools.
Do not put client JSON or token files in version control; the existing default
location `scripts/.gsc/` is gitignored.

## Weekly export

Choose a completed GSC reporting week (inclusive dates), then run:

```sh
python3 scripts/gsc-cert-keyword-tracker.py \
  --start-date 2026-10-26 --end-date 2026-11-01
```

Optional filters:

```sh
python3 scripts/gsc-cert-keyword-tracker.py \
  --start-date 2026-10-26 --end-date 2026-11-01 \
  --country IND --device MOBILE --output-dir reports/gsc-cert-keywords/2026-11-01
```

Country uses a three-letter ISO code. API response rows are paginated. The
selected dates, filters, and data source are recorded on each output row.

## Outputs

- `query-url-raw.csv`: reported query × page rows, including country, device,
  clicks, impressions, CTR, and average position.
- `cert-summary.csv`: API-reported metric sums grouped by the site's
  certification slug and all taxonomy categories containing that slug.
- `gsc-data-gaps.csv`: catalog pages with no returned API rows for the selected
  dates and filters. The status says `no reported GSC data`; it does not mean
  the page is unranked.

The catalog comes from `src/lib/certifications-data.ts`,
`src/lib/cert-official-names.ts`, and `src/lib/cert-name-aliases.ts`. This is the
site's local taxonomy, not a claim that every item is current in Salesforce's
official catalog. Rows carry a manual-review marker because names and inclusion
status (including legacy or third-party paths) can need review. Search Analytics
metrics reflect API-reported rows only: query anonymization and API row limits
mean they are not complete site totals. Unmapped GSC pages remain in the raw
export with blank certification fields.

This is a performance tracker, not a rank tracker. Average position is the GSC
metric for returned impressions; a missing row is not assigned an artificial
rank. Targeted SERP snapshots may be added later as a separately sourced,
optional workflow.

## Offline tests

```sh
python3 scripts/test_gsc_cert_keyword_tracker.py
```

Tests use mocked API page responses and do not contact Google.
