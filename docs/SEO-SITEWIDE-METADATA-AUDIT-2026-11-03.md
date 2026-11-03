# Site-wide metadata audit — 3 November 2026

All 310 rendered HTML pages now meet the requested scanner ranges:

| Check | Before | After |
| --- | ---: | ---: |
| Titles below 50 characters | 93 | 0 |
| Titles above 60 characters | 0 | 0 |
| Descriptions below 100 characters | 0 | 0 |
| Descriptions above 130 characters | 251 | 0 |
| Pages meeting both ranges | 51 | 310 |

Coverage includes all 307 indexable pages, the two intentionally noindex practice-test aliases, and the framework not-found page. The framework global-error boundary is excluded because it has no standalone searchable metadata.

## Implementation

Individual page descriptions were rewritten at their source. Shared certification, study-guide, exam-tip, comparison, and role metadata generators choose complete phrases that fit the ranges. Credential names, recognized exam-code prefixes, and retired, closed, or unverified status notices are preserved. The two legacy practice-test aliases retain their parent canonical URLs and noindex directives. All indexable pages have matching document, Open Graph, and Twitter titles and descriptions.

The validator now enforces minimum and maximum lengths, parses rendered HTML to count decoded characters, and can export the complete page inventory:

```sh
npm run build
node scripts/validate-seo-lengths.mjs --report=docs/SEO-METADATA-LENGTHS-2026-11-03.json
```

## Verification

- Production build passed. Log: `/tmp/trailblaze-sitewide-build-2026-11-03.log`.
- Rendered metadata validator checked 310 pages with zero violations. See [the complete inventory](SEO-METADATA-LENGTHS-2026-11-03.json).
- Thirty-one validator, rendered-template, credential, and content regression tests passed. Log: `/tmp/trailblaze-sitewide-final-tests-2026-11-03.log`.
- Rendered SEO tests verified 91 canonical certification pages, 51 study-guide pairs, and 455 initial question prompts against their Quiz structured data.
- Comparison against the saved build baseline found zero changes to canonical URLs, robots directives, visible H1s, or visible body text. Indexable page titles and descriptions have zero duplicate groups, zero social-tag mismatches, and no visibly truncated titles.
- Local production HTTP checks returned 200 with compliant metadata for the homepage, Administrator certification, ADM-201 study guide, PD1 vs PD2 comparison, Contact, and the Administrator practice-test alias.
- `git diff --check` passed.

## State

These changes are local and have not been deployed. The original scanner's results will require a fresh crawl after deployment. This audit concerns titles and descriptions; it does not resolve the separate INP measurement warning.
