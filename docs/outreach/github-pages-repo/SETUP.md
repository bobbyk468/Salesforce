# Publishing this repo

1. Create a public repo named `salesforce-certification-dataset` under the
   Trailblaze Prep account (not a personal one — a company-looking repo is
   what list maintainers check).
2. Run `npm run outreach:directory` so `index.html` is current, then copy
   `README.md`, `LICENSE` and `index.html` to its root. Do **not** copy this
   file. `index.html` is generated from the live certification grid — never
   edit it by hand, or the next regeneration silently discards your changes.
3. Commit the two data files as snapshots, so the repo still works if the
   site is down:
   ```bash
   curl -so salesforce-certifications-2026.json \
     https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json
   curl -so salesforce-certifications-2026.csv \
     https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv
   ```
   Name the snapshot date in the commit message. Refresh them when the site's
   figures change, or the repo becomes a stale fork of our own data.
4. Settings → Pages → deploy from `main` / root. `index.html` carries a
   canonical link to the report page, so the Pages copy will not compete
   with it in search.
5. Repo description: *Exam fee, question count, duration and prerequisites
   for all 87 Salesforce certifications. JSON + CSV, CC BY 4.0.*
   Topics: `salesforce`, `certification`, `dataset`, `open-data`, `csv`,
   `json`, `cc-by`.
6. Only then start the PRs in `../awesome-salesforce-prs.md`.
