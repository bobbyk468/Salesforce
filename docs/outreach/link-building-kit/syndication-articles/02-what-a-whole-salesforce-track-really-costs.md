---
title: "What a whole Salesforce certification track actually costs: $25,200 and 95 hours"
canonical_url: "https://www.trailblazeprep.com/salesforce-certification-cost"
tags: salesforce, certification, career, opendata
---

"How much does a Salesforce certification cost?" has an easy answer: $200 for
most of them, $75 for the entry-level ones. "How much does a Salesforce
*track* cost?" is the question people actually mean, and nobody publishes it,
because it requires adding up 87 exams.

So I added them up. Every current Salesforce certification, at first-attempt
prices, before local taxes.

## Every exam, every track

| Role track | Certifications | Exam fees | Scored questions |
| --- | --- | --- | --- |
| Architect | 17 | $12,900 | 540 |
| Accredited Professional | 23 | $3,450 | 438 |
| Consultant | 14 | $2,800 | 660 |
| Developer | 11 | $2,200 | 540 |
| Administrator | 8 | $1,600 | 420 |
| Tableau | 5 | $1,075 | 269 |
| Designer | 2 | $400 | 120 |
| Marketing | 2 | $400 | 120 |
| Associate | 4 | $300 | 120 |
| Sales | 1 | $75 | 40 |
| **All 10 tracks** | **87** | **$25,200** | **3,267** |

Plus roughly **95 hours** of exam time — 5,695 minutes across the exams whose
duration is published.

Two caveats that matter, and that I would rather state than bury. The fee
column is complete: all 87 credentials have a published fee. The question and
duration columns are not — only 57 credentials have a published duration —
so those totals are sums over what exists, not estimates of what doesn't. The
report page shows the coverage count beside every total for exactly this
reason.

## The Architect number is one exam

$12,900 for 17 Architect credentials looks like the track is five times the
price of any other. It mostly isn't. Three of those 17 are the Certified
Technical Architect components: $1,500 for the preparation exam, $1,500 for
the Architect Evaluation, and $4,500 for the Review Board. That is $7,500 —
well over half the track — concentrated in one credential that only a few
hundred people in the world hold.

Strip the CTA out and Architect costs $5,400 for 14 credentials, which is
ordinary. The headline number is real but it describes a single ambition, not
a career path.

## The Accredited Professional story is different

23 credentials for $3,450 — $150 each, the cheapest per-credential rate
anywhere in the catalogue. That looks like the bargain of the list until you
look at the status column: of the 25 Salesforce credentials with a changed
exam status in 2026, the large majority are Accredited Professionals, closed
to new registrations. A track that is mostly closed is cheap for the same
reason a closing-down sale is cheap.

This is the thing a cost table alone will not tell you, and the reason the
dataset carries status alongside fee.

## Nobody pays these numbers

No individual sits 87 exams. The totals are useful for two things only:
budgeting a team's certification plan, and sanity-checking the claim that
Salesforce certification is expensive. At $200 a credential and $100 a
retake, for an individual, it isn't — the cost of a Salesforce certification
is overwhelmingly the study time, not the fee.

## Take the data

All of the above, as JSON and CSV, CC BY 4.0, CORS open, no key:

- `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json`
- `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv`

```bash
curl -s https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json \
  | jq '[.data[] | select(.role_track=="Developer") | .exam_fee_usd] | add'
```

Rebuild the table, disagree with my groupings, do something better with it.
An empty cell means Salesforce does not publish that figure — not zero.

---

*Per-track breakdown, method, and the 2026 rename tracker:
[2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).
I maintain Trailblaze Prep, a free independent prep site. Not affiliated with
Salesforce; fees change, and the official page linked in every row wins.*
