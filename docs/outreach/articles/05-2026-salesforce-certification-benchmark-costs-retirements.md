---
title: "We checked all 87 Salesforce certifications. Salesforce has stopped publishing pass marks."
canonical_url: "https://www.trailblazeprep.com/salesforce-certification-report-2026"
tags: salesforce, certification, opendata, data
---

I went looking for the pass mark for a Salesforce certification, the way
anyone does a week before an exam. I did not find it. Then I checked another.
Then I checked all 87.

Across every current Salesforce certification, the pass mark is published on
**none** of the certification pages. Not in a footnote, not behind a sign-in —
simply not there. The pages carry the fee, usually the question count, usually
the duration. The one number that tells you whether you passed is gone.

*By [Trailblaze Prep — Free Salesforce Certification Practice Questions](https://www.trailblazeprep.com/).
All figures below are computed from our
[open dataset](https://www.trailblazeprep.com/salesforce-certification-report-2026),
free to reuse under CC BY 4.0.*

## What is actually published

87 credentials, 10 role tracks:

- **87 of 87** have a published exam fee.
- **60 of 87** have a complete published format — question count, pass mark
  and duration.
- **67** have published section weightings.
- **77** have an official Salesforce page we could fetch and confirm.

This is not a site in disrepair. Fees are maintained carefully, because fees
are a transaction. The pass mark has drifted out of the public pages and into
per-exam guide PDFs that are not linked from every credential.

## Why that matters more than it sounds

Salesforce reports your result as a percentage *per section* and then, overall,
as the word "pass" or "fail" — never an overall percentage. So after a fail you
have eight section percentages and no way to know whether you were two points
short or twenty. Whether you rebook next week or next quarter depends entirely
on which, and the number you need is the pass mark.

Combine the two and the situation is genuinely odd: Salesforce does not tell
you your score, and increasingly does not tell you the score you needed.

## What a whole track costs

| Role track | Certs | Exam fees | Scored questions |
| --- | --- | --- | --- |
| [Architect](https://www.trailblazeprep.com/certifications/role/architect) | 17 | $12,900 | 540 |
| [Accredited Professional](https://www.trailblazeprep.com/certifications/role/accredited-professional) | 23 | $3,450 | 438 |
| [Consultant](https://www.trailblazeprep.com/certifications/role/consultant) | 14 | $2,800 | 660 |
| [Developer](https://www.trailblazeprep.com/certifications/role/developer) | 11 | $2,200 | 540 |
| [Administrator](https://www.trailblazeprep.com/certifications/role/administrator) | 8 | $1,600 | 420 |
| [Tableau](https://www.trailblazeprep.com/certifications/role/tableau) | 5 | $1,075 | 269 |
| [Associate](https://www.trailblazeprep.com/certifications/role/associate) | 4 | $300 | 120 |
| [Designer](https://www.trailblazeprep.com/certifications/role/designer) | 2 | $400 | 120 |
| [Marketing](https://www.trailblazeprep.com/certifications/role/marketing) | 2 | $400 | 120 |
| [Sales](https://www.trailblazeprep.com/certifications/role/sales) | 1 | $75 | 40 |
| **All 10** | **87** | **$25,200** | **3,267** |

Plus about **95 hours** of exam time — 5,695 minutes across the 57 credentials
whose duration is published. The fee column is complete; the duration and
question columns are sums over what exists, not estimates of what does not.
Fees range from $75 to $4,500.

**The Architect number is one credential, not a track.** Three of those
seventeen are the Certified Technical Architect components: $1,500 + $1,500 +
$4,500 = $7,500, well over half the track. Strip the CTA out and Architect is
$5,400 for fourteen credentials, which is ordinary.

**The Accredited Professional track looks like the bargain of the catalogue** —
23 credentials at $150 each — until you look at status. The large majority of
the 25 credentials with a closed or retired exam are Accredited Professionals.
A track that is mostly closed is cheap for the same reason a closing-down sale
is cheap.

## Renames and retirements

**34 credentials have been renamed** and **25 have a changed exam status**.
Nothing was taken from anyone — your credential is still yours — but the name
on your CV, the name in the job advert and the name on the Salesforce page are
now three different strings.

The patterns that catch people out:

- **Administrator → Platform Administrator**; Advanced Administrator →
  Platform Administrator II.
- **Consultants → Agentforce Consultants.** Sales Cloud Consultant →
  Agentforce Sales Consultant; Service Cloud Consultant → Agentforce Service
  Consultant; Field Service Consultant → Agentforce Field Service *and
  Operations* Consultant; Nonprofit Cloud Consultant → Agentforce Nonprofit
  Consultant. Two of those gained words in the middle, so a find-and-replace
  over your records will miss them.
- **Architect credentials gained a "Platform" prefix** — Data, Integration,
  Sharing and Visibility, Identity and Access Management, Dev Lifecycle and
  Deployment. Platform Developer I lost its numeral.
- **Pardot → Marketing Cloud Account Engagement**, years old and still
  catching people.
- **Data Cloud → Data 360.** Recent, and confusing because job adverts still
  say Data Cloud.
- **[AI Associate](https://www.trailblazeprep.com/certifications/ai-associate) is
  retired**; **CPQ Specialist → [CPQ Administrator](https://www.trailblazeprep.com/certifications/cpq-administrator)**,
  and that exam is now closed; **[Nonprofit Success Pack (NPSP) Consultant](https://www.trailblazeprep.com/certifications/nonprofit-cloud)**
  is closed to new registrations.

"Closed to new registrations" and "retired" are not the same thing and the
dataset distinguishes them. Before planning a track around a credential, check
its status, not just its fee.

## Take the data

Both endpoints are CC BY 4.0, CORS-open, no key:

- `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json`
- `https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv`

```bash
curl -s https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.json \
  | jq '[.data[] | select(.role_track=="Developer") | .exam_fee_usd] | add'
```

```python
import pandas as pd
df = pd.read_csv("https://www.trailblazeprep.com/datasets/salesforce-certifications-2026.csv",
                 comment="#")
df["passing_score"].isna().sum()   # how many gaps are left
```

One rule, stated plainly: **an empty cell means Salesforce does not publish
that figure. It is not a zero and it is not an estimate.** It would have been
easy to fill the gaps with plausible numbers — 65% is a safe guess for most
exams — and the dataset would have looked more complete and been worth much
less.

## Method

Figures come from each credential's own Salesforce page, with every URL
fetched and confirmed rather than derived from the credential name. That
mattered: name-derived URLs were wrong often enough to mis-map credentials,
and the check also turned up two of our own figures that were incorrect
(Tableau Architect's question count; Tableau Server Administrator's question
count and duration). Both are fixed. Corrections with a source are welcome.

---

*Full report, per-track medians and the rename tracker:
[2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026).
[Trailblaze Prep](https://www.trailblazeprep.com/) is a free, independent
Salesforce certification prep resource — no sign-up, no paywall. Not
affiliated with Salesforce.*
