# Git question-bank import

## Reproducible local workflow

Fetch a pinned source snapshot into a new, empty directory, then import it using the same commit:

```sh
node scripts/fetch-git-question-source.mjs --ref COMMIT --output /tmp/sf-questions-COMMIT
node scripts/import-git-questions.mjs --source /tmp/sf-questions-COMMIT --commit COMMIT
```

The importer accepts either the fetched directory (containing `Extracted/` and `tree.json`) or the extracted directory directly. `--count N` sets a minimum sample size and defaults to 15; totals round up to a multiple of the eligible source-set count for exactly equal per-set selection and `--output DIR` defaults to `src/lib/question-banks/imported`. The importer does not access the network or require credentials. It validates a supplied `tree.json` SHA against `--commit`; use the fetcher for a fresh, verified source inventory. Keep output directories dedicated to generated importer artifacts.

## Selection and generated files

Folders are mapped by exact name in the importer. If a folder contains a bank beneath a path component beginning `Read First` (case-insensitive), only those banks are eligible; otherwise all its JSON banks are used. Questions are grouped by source PDF, ordered round-robin across PDFs, and selected evenly across each PDF's eligible questions. Empty sets and per-source balance are recorded rather than hidden. Ambiguous folders are not auto-mapped; low-quality mapped banks are blocked.

Eligibility is structural: HIGH confidence, accepted/carried status, resolved answer source, complete contiguous choices (blank trailing placeholders are omitted), distinct nonblank option strings, a consistent answer key/count, and no review notes. Exact raw prompt and raw option strings define duplicate identity; conflicting answer keys exclude every member of that identity. Whitespace and code literals are preserved. Exhibit/diagram/image/screenshot-dependent prompts are excluded because visual assets are not imported. This process does not independently validate answer semantics.

The output contains per-slug JSON files plus `banks.json` (slug-to-questions aggregate), `counts.json` (small slug-to-count map, including the administrator practice-test alias), and `manifest.json` (coverage, source hashes, selection/exclusion/balance details and limitations). Runtime application code should consume `counts.json` or the manifest for counts/notices; importing `banks.json` into client code would disclose the full imported banks. The server-only integration helper may import `banks.json` and pass only the selected exam's records to a renderer.

Two source-side selection notices are recorded with hashes: App Builder's 29 August note says to use the latest master/READ FIRST file and monitor the folder; the Platform Developer 1 4 September note says the READ FIRST master file had answer corrections and directs users to the updated file. A fetched Claude Architect Foundations `verification_report.txt` is also hashed and summarized as extraction-quality metadata; it does not map or select questions for a credential. These files do not establish answer semantic correctness. The available repository tree has no `README.txt`; if one is present in a fetched root or mapped exam folder, the affected import is blocked for manual instruction review.

## Publication and source limitations

The repository snapshot's README does not declare a license. Obtain and record permission for public distribution before publishing these question excerpts; keeping them local while rights are unresolved does not establish permission. Source-derived confidence/status labels and answer evidence are provenance only, not proof of correctness. No answer rationales are fabricated. The ambiguous Claude & Advance AI application, Marketing Cloud Next, and Github Copilot folders remain unmapped. The Marketing Cloud Engagement Administrator and Revenue Cloud mapped banks are blocked when their available questions fail the HIGH-confidence selection gate. A companion verification report, if present in the downloaded source bundle, is provenance/report data and does not create a credential mapping.

## Current local integration and verification

Snapshot: `c3ca1118d266b276aa9dcfbb270197d55c5bacca` (October 4, 2026).
The website resolves imported questions on the server for 29 matching exams,
15 or 16 questions each, and the Administrator practice-test alias. That is 441 selected
exam questions and 456 page-bank records including the alias, not 456 distinct
questions. Unmatched exams and the blocked low-confidence Revenue Cloud and
Marketing Cloud Engagement Administrator banks retain their existing questions.
The homepage sample also uses a selected source question, not its old hardcoded bank.

`npm run test:questions` runs the fetch/import, UI and integration tests. Run
`npm run questions:verify -- --source SNAPSHOT_DIRECTORY --output REPORT.json`
for exact prompt/option/answer-key equality against the pinned extracted banks.
After `npm run build` and starting the new build on port 3800, run
`npm run audit:questions -- --base http://localhost:3800 --output REPORT.json`.
This checks all 30 page banks against server-rendered questions and visible Quiz
JSON-LD. It does not establish semantic answer correctness or PDF extraction fidelity.
Browser checks cover multi-answer grading, incomplete selections, reset, switching
single answers, expanding the complete question set, code whitespace, and a 390px viewport.

Evidence is in `performance-report/2026-10-05/question-import/`. No Git commit or
production deployment is performed by the importer. Public distribution is held
pending permission to publish the upstream question bank. Before deployment,
review the earlier pending shared SEO edits and refresh the bundled chatbot corpus
from the final approved build so it cannot retain the replaced sample questions.
An earlier Field Service study-guide metadata title still exceeds the title-length
validation limit; that SEO repair is separate from this question import.
