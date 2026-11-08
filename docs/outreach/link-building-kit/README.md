# Link-building kit

The site's problem is not on-page SEO — that is done — it is that six root
domains link to it. Everything in this folder exists to change that number,
and nothing in it is a shortcut: no paid links, no guest-post farms, no
directory blasts. Those are what the previous audit flagged as the inbound
profile's quality problem in the first place.

The strategy is one asset and three ways of putting it in front of people:

| Folder / file | What it is | Where the link comes from |
| --- | --- | --- |
| `github-dataset-repo/` | A standalone repo publishing the certification dataset under CC BY 4.0, with a GitHub Pages `index.html`. | Anyone reusing the data has to attribute it; data lists and awesome-lists accept licensed datasets. |
| `syndication-articles/` | Four finished articles, each built on a finding from our own data. | Dev.to, Medium, Hashnode, LinkedIn and Salesforce community forums, each with a canonical link back. |
| `awesome-salesforce-prs.md` | Targets, checklist and PR copy for curated lists. | Editorially reviewed list entries. |

## Order of work

1. **Publish the dataset repo first.** The articles and the list entries all
   point at it, and a list PR that links to a repo with no commits reads as
   a placeholder.
2. **Then the awesome-list PRs.** They are slow to review, so start them
   early and leave them.
3. **Then syndicate, one article a week.** Four articles published on the
   same day to the same four platforms looks like exactly what it is.

## Rules that are not negotiable

- **Canonical back to us.** Every syndicated copy carries
  `rel="canonical"` to the Trailblaze Prep original where the platform
  supports it (Dev.to `canonical_url`, Medium's import tool, Hashnode's
  canonical field). Where it does not — LinkedIn articles, forum posts — the
  copy is shortened to an excerpt with a link, not reproduced whole.
- **Disclose the affiliation.** In the article bio, in the PR body, in the
  forum post. Every time.
- **No fabricated numbers.** Every figure in these articles comes from
  `src/lib/benchmark-report-data.ts`, which computes from the same data the
  certification pages render. If a figure here disagrees with the live
  report, the report is right and this folder is stale — regenerate it.
- **Nothing that is only a pitch.** Each article has to be worth reading by
  someone who never visits the site. That is the only thing that makes any
  of this work.

## Measuring it

Search Console → Links → Top linking sites. Baseline at the time of writing:
**6 linking domains, 12 links**. Check monthly. Syndicated copies on Dev.to
and Medium typically show up within two weeks; merged list entries can take
two months.
