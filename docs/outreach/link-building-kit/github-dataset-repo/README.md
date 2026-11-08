# salesforce-certification-dataset

Exam fee, scored question count, duration, pass mark, prerequisites and
official page for every current Salesforce certification — **87 credentials
across 10 role tracks** — as JSON and CSV, under CC BY 4.0.

- **JSON:** https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json
- **CSV:** https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv
- **Source and method:** https://www.trailblazeprep.com/salesforce-certification-report-2026

Both endpoints send `access-control-allow-origin: *`, so you can fetch them
straight from a browser or a notebook.

```bash
curl -s https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json \
  | jq '.data[] | select(.role_track == "Architect") | {name, exam_fee_usd}'
```

```python
import pandas as pd
df = pd.read_csv("https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv",
                 comment="#")
df.groupby("role_track")["exam_fee_usd"].sum().sort_values(ascending=False)
```

## Fields

| Field | Meaning |
| --- | --- |
| `name` | Current official credential name. |
| `slug` | Stable identifier, also the URL segment. |
| `role_track` | One of the 10 Salesforce role tracks. |
| `exam_fee_usd` | First-attempt registration fee in USD, before local taxes. |
| `duration_minutes` | Time allowed for the exam. |
| `scored_questions` | Questions that count towards the result. Most exams add up to five unscored trial questions that consume time but not marks. |
| `passing_score` | Pass mark as published in the exam guide. See the caveat below. |
| `prerequisites` | Whether another credential is genuinely required, only recommended, or the credential is awarded for a set of component exams. |
| `official_url` | The Salesforce page for the credential. |
| `study_guide_url`, `practice_questions_url` | Free material for it, no sign-up. |

**An empty cell means Salesforce does not publish that figure. It is not a
zero.** That distinction is the main reason this dataset exists: of the 87
credentials, all 87 have a published fee, but only 60 have a complete
published format, and the pass mark is published on none of the
certification pages — ours come from exam guides and should be treated as
secondary. A dataset that silently filled those gaps with estimates would
look more complete and be worth less.

## How it is built

Figures are read from each credential's own Salesforce page, with every URL
fetched and confirmed rather than guessed from the credential name. Two
errors were found and corrected that way (Tableau Architect's question
count; Tableau Server Administrator's question count and duration). The
dataset is generated from the same source the site's certification pages
render, so the two cannot drift.

The 2026 renames are tracked separately, because the former names are what
people still search for: 34 credentials have been renamed and 25 have a
changed exam status (retired, or closed to new registrations).

## Licence and attribution

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Use it anywhere,
including commercially, with attribution:

> [2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026) — Trailblaze Prep. CC BY 4.0.

## Not affiliated with Salesforce

This is an independent dataset. Salesforce, Trailblazer and Trailhead are
trademarks of salesforce.com, inc. Fees and exam formats change; the
official page linked in every row is authoritative.

## Corrections

Open an issue with the credential slug, the field, and the Salesforce URL
showing the correct value. Corrections with a source are merged quickly;
ones without are not merged at all.
