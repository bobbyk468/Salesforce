---
title: "I checked all 87 Salesforce certifications. The pass marks are gone."
canonical_url: "https://www.trailblazeprep.com/salesforce-certification-report-2026"
tags: salesforce, certification, opendata, data
---

I went looking for the pass mark on a certification page, the way anyone does the week before an exam. It wasn't there. So I checked another one. Then I checked all 87.

It's on none of them. Not in a footnote, not behind a login. Gone. The pages still carry the fee, usually the question count, usually the duration. The one number that tells you whether you passed isn't published any more.

*From [Trailblaze Prep](https://www.trailblazeprep.com/). Every figure below comes from the [open dataset](https://www.trailblazeprep.com/salesforce-certification-report-2026), free to reuse under CC BY 4.0.*

## What is still published

87 credentials, 10 role tracks:

- 87 of 87 have a published exam fee.
- 60 of 87 have a complete format, meaning question count, pass mark and duration.
- 67 have published section weightings.
- 77 have an official page I could fetch and confirm.

This isn't a neglected website. The fees are maintained carefully, because fees are a transaction. The pass mark has drifted off the public pages and into exam guide PDFs that aren't linked from every credential.

## Why that matters more than it sounds

Salesforce reports your result as a percentage per section, then pass or fail. No overall number, ever. So after a fail you have eight section percentages and no idea whether you missed by two points or twenty. That decides whether you rebook next week or next quarter, and the figure you need to work it out is the pass mark.

Put the two together and it's a strange place to end up. They don't tell you your score, and now they mostly don't tell you the score you needed.

## What a whole track costs

| Role track | Certs | Fees | Questions |
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

Plus about 95 hours of exam time, 5,695 minutes across the 57 credentials that publish a duration. The fee column is complete. The question and duration columns are sums of what exists, not estimates of what doesn't. Fees run from $75 to $4,500.

**The Architect number is one credential, not a track.** Three of those seventeen are the Certified Technical Architect stages: $1,500, $1,500 and $4,500. That's $7,500, more than half the track. Take the CTA out and Architect is $5,400 for fourteen credentials, which is ordinary.

**Accredited Professional looks like the bargain of the catalogue.** 23 credentials at $150 each. Then you look at status, and most of the 25 closed or retired exams are in that track. It's cheap the way a closing-down sale is cheap.

## Renames and retirements

34 credentials have been renamed. 25 have a changed exam status.

Nobody lost anything. Your credential is still yours. But the name on your CV, the name in the job ad and the name on the Salesforce page are now three different strings, and search engines treat them as three different things.

The ones that catch people:

Administrator became Platform Administrator. Advanced Administrator became Platform Administrator II.

The consultants became Agentforce consultants. Sales Cloud Consultant, Service Cloud Consultant, Field Service Consultant, Nonprofit Cloud Consultant. Two of those gained words in the middle rather than just a prefix, so a find-and-replace over your records will miss them.

The architect credentials picked up a "Platform" prefix. Data, Integration, Sharing and Visibility, Identity and Access Management, Dev Lifecycle and Deployment. Platform Developer I quietly lost its numeral.

Pardot became Marketing Cloud Account Engagement, years ago, and it's still catching people.

Data Cloud became Data 360. Recent, and confusing, because job ads still say Data Cloud.

[AI Associate](https://www.trailblazeprep.com/certifications/ai-associate) is retired. CPQ Specialist became [CPQ Administrator](https://www.trailblazeprep.com/certifications/cpq-administrator), and that exam is now closed. [NPSP Consultant](https://www.trailblazeprep.com/certifications/nonprofit-cloud) is closed to new registrations.

Closed and retired aren't the same thing, and the dataset keeps them apart. Before you build a plan around a credential, check its status, not just its fee.

## Take the data

Both endpoints are CC BY 4.0, CORS open, no key:

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

One rule, and it's the point of the whole thing: **an empty cell means Salesforce doesn't publish that figure.** It isn't a zero and it isn't an estimate. Filling the gaps with plausible numbers would have been easy, 65% is a safe guess for most exams, and the dataset would have looked better and been worth much less.

## How it was built

Every figure comes from the credential's own Salesforce page, with each URL fetched and confirmed rather than guessed from the name. That mattered. Guessing URLs from names got them wrong often enough to mis-map credentials, and the check also turned up two of our own figures that were simply incorrect: Tableau Architect's question count, and Tableau Server Administrator's question count and duration. Both fixed.

If you find a third, open an issue with the slug and the Salesforce URL showing the right value. Corrections with a source get merged. Ones without don't.

*Full report, per-track medians and the rename tracker: [2026 Salesforce Certification Benchmark Report](https://www.trailblazeprep.com/salesforce-certification-report-2026). [Trailblaze Prep](https://www.trailblazeprep.com/) is free and independent. Not affiliated with Salesforce.*
