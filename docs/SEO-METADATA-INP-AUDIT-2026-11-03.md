# Homepage metadata and INP audit: 2026-11-03

## Homepage metadata

The homepage had inherited the generic layout metadata. The shared default and homepage override now use:

- **Title (53 characters):** `Free Salesforce Exam Practice Tests | Trailblaze Prep`
- **Description (129 characters):** `Free Salesforce practice exams and study guides for Admin, Developer, Consultant, Architect, MuleSoft and Tableau certifications.`

The built homepage HTML at `.next/server/app/index.html` has matching title and description values in the document title, Open Graph tags, and Twitter tags. The canonical remains `https://www.trailblazeprep.com`.

The document language is English (`lang="en"`). No alternate language URLs exist in this scope, so no `hreflang` tags were added. The scanner's missing-hreflang flag is not actionable for this English-only site without real localized alternatives.

## INP warning

The scanner reported a generic slow-INP warning without a field INP value. The PageSpeed API request returned HTTP 429, so no field INP measurement was available. The INP warning remains unresolved; no performance code was changed and these results do not establish field INP passing.

The parent agent ran synthetic Event Timing checks at 4× CPU slowdown. Six live run maxima were 312, 32, 32, 232, 160, and 48ms. The slowest chat-opening click in follow-up runs was 232ms, with 1.6ms input delay and roughly 230ms presentation delay. Three local production baseline runs had overall maxima of 64, 32, and 32ms; chat-opening interactions measured 48, 16, and 24ms. All checked menu, category, FAQ, and chat actions worked. The cold live chat opening was not reproduced as a slow interaction locally, so no chat code change was justified.

These browser Event Timing observations are synthetic interaction diagnostics, not the field INP metric and not a substitute for a field-data report.

## Validation and state

- `npm run build` passed. Log: `/tmp/trailblaze-home-metadata-build-2026-11-03.log`.
- `npm run validate:seo:lengths` checked 310 built pages with 0 violations. Log: `/tmp/trailblaze-home-metadata-length-validation-2026-11-03.log`.
- `node --test scripts/validate-seo-lengths.test.mjs` passed 4/4 tests. Log: `/tmp/trailblaze-home-metadata-tests-2026-11-03.log`.
- The mobile/DOM findings and responsive-check evidence are documented in [`SEO-MOBILE-DOM-AUDIT-2026-11-03.md`](SEO-MOBILE-DOM-AUDIT-2026-11-03.md).

Changes are local and undeployed. The metadata output and synthetic interaction evidence do not demonstrate live production updates or a passing field INP result.
