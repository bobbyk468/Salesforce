# How to syndicate these four

Each article has a **canonical target** on trailblazeprep.com. Every copy
published anywhere else must point its canonical at that URL, or we are
competing with ourselves for our own content.

| Article | Canonical target | Best platforms |
| --- | --- | --- |
| `01-salesforce-exam-score-calculator-section-weightage-math.md` | `/tools/score-calculator` | Dev.to, Hashnode |
| `02-complete-salesforce-architect-certification-roadmap-2026.md` | `/architect-certification-path` | Medium, LinkedIn |
| `03-salesforce-adm-201-vs-platform-app-builder-vs-business-analyst.md` | `/adm-201-vs-app-builder` | Guest posts (PlanetCert, CertificationPlanner) |
| `04-salesforce-agentforce-specialist-and-data-cloud-study-guide-2026.md` | `/certifications/agentforce-specialist` | AI and data engineering blogs, Dev.to |
| `05-2026-salesforce-certification-benchmark-costs-retirements.md` | `/salesforce-certification-report-2026` | Data-journalism outlets, Hacker News, r/salesforce (excerpt) |

Every one also links to `https://www.trailblazeprep.com/` in the intro or
outro, and to four or more `/certifications/<slug>` pages in the body. Keep
both when editing.

## Per platform

- **Dev.to** — front matter `canonical_url:`. Set it before publishing; Dev.to
  will not change the canonical cleanly afterwards. Tags: `salesforce`,
  `certification`, `career`, `opendata`.
- **Hashnode** — "Original article URL" in post settings.
- **Medium** — publish on the site first, then use Medium's *Import a story*,
  which sets the canonical automatically. Do not paste it in as a new draft.
- **LinkedIn** — LinkedIn ignores canonicals. Publish a 300–400 word excerpt
  that stops at the interesting bit, with a link. Do not reproduce the whole
  article.
- **Reddit / Trailblazer Community / Stack Exchange** — excerpt plus link, and
  disclose the affiliation in the post itself, not just a flair. These
  communities remove undisclosed self-promotion, and a removal costs more
  than the link was worth.

## Pacing

One article a week. Publishing four at once, to the same platforms, in the
same voice, is the pattern that gets accounts flagged.

## Voice

These are written to read like a person wrote them, not a content tool. The
project's anti-AI rules live in `docs/X-CONTENT-STYLE-RULES.md`. Those rules
were written for tweets, so the mechanical parts (lowercase only, no bullets,
280 characters) do not carry over to long-form. What does carry over:

- Plain English. Short sentences. Contractions. Fragments where they land.
- No em-dashes. They are the clearest tell, and a full stop or a comma almost
  always does the job.
- Banned throughout: comprehensive, delve, unlock, transformative, in today's
  world, remember, it's important to note, navigate, leverage, crucial,
  essential, robust, seamless, landscape, realm, dive in, it's worth noting,
  when it comes to.
- Every section takes a side. No "on the one hand".
- Specifics over abstractions. A pass mark, a fee, a section weight, a thing
  that actually catches people out.
- Don't let every section resolve neatly. Real writing trails off sometimes.

Check a draft before publishing:

```bash
grep -c '—' docs/outreach/articles/0*.md          # should be 0
```

## Before publishing any of them

Re-check the figures against the live report. They are computed, so they
change when the underlying data does, and a syndicated article with a number
that no longer matches the page it cites is worse than no article.
