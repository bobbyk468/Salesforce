# Certification guide and SEO changelog

14 November 2026

The certification update is on `Summer26` in [commit `77e86533`](https://github.com/bobbyk468/Salesforce/commit/77e86533ec0815a08bdf8fade2c72cd432323318). It includes 203 files and combines the working-tree handover with the fixes made after the baseline verification.

## What changed

- **Certification guides.** Aligned search titles, page headings, exam codes, and structured-data aliases. Updated exam facts, prerequisites, domain weights, and related guide copy. Removed stale or duplicated sections and moved closed exam details into historical references.
- **Practice questions.** Rendered the full authored question sets in the initial HTML. Expanded the four Claude guides to 15 questions each and brought designated Salesforce guides up to 20. Added a Public Sector Solutions scenario on investigative case management and compliant data sharing.
- **Homepage, role hubs, and footer.** Updated the 95 homepage cards and the role-hub cards with exam codes and published facts. Added retirement badges for 24 credentials, listed the relevant consultant guides on their role hubs, and added direct footer links to priority guides and role hubs.
- **Exam logistics.** Updated registration, exam-day, and retake pages for Trailhead Academy and Pearson VUE. Clarified OnVUE's digital whiteboard rules and Salesforce's retake wait periods.
- **Redirects.** Added 14 certification aliases and two Claude Foundations redirects. The verifier checks 30 permanent redirects in total, including existing legacy study-guide and exam-tip URLs. Next.js returns HTTP 308 for the new permanent redirects.

## Source decisions

- **CPQ and Billing Accredited Professional.** The historical guide now uses 35 scored questions, 60 minutes, a 74% passing score, and domain weights of 68%, 29%, and 3%. The handover's 63% figure was corrected in the verifier. [Salesforce exam guide](https://help.salesforce.com/s/articleView?id=005298796&language=en_US&type=1)
- **Tableau.** The verifier uses the published domain weights for Tableau Consultant and Tableau Server Administrator. [Consultant exam guide](https://help.salesforce.com/s/articleView?id=005298993&language=en_US&type=1) · [Server Administrator exam guide](https://help.salesforce.com/s/articleView?id=005298998&language=en_US&type=1)
- **Platform App Builder.** The exam guide describes maintenance three times a year. The published maintenance schedule lists App Builder in the Winter cycle. The page presents both and points readers to their assigned badge and deadline in their Trailblazer profile. [App Builder exam guide](https://help.salesforce.com/s/articleView?id=005298964&language=en_US&type=1) · [Maintenance schedule](https://help.salesforce.com/s/articleView?id=005298922&language=en_US&type=1)

## Verification

| Check | Result |
| --- | --- |
| Production build and [route verifier](../scripts/verify-all-95-certs-seo.mjs) | 3,882 passed, 0 failed. Covered 95 certification routes, the homepage, 10 role hubs, three exam logistics pages, and 30 redirects. |
| Search test suite | 88 Node tests and 10 Python tests passed. |
| Question test suite | 20 Node tests passed. The content validator checked 1,487 questions across 92 rendering pages and the weighting validator checked 87 exam outlines. |
| Metadata lengths | 178 built pages checked with zero violations. |
| Git whitespace check | Passed. |

To reproduce the route verification, build the site and start the production server in one terminal.

```sh
npm run build
npm run start
```

Run the checks from a second terminal.

```sh
node scripts/verify-all-95-certs-seo.mjs http://localhost:3000
npm run test:search
npm run test:questions
npm run validate:seo:lengths
```

The verifier establishes coverage for its assertions. The full handover was not independently audited line by line. The GitHub branch was verified. Deployment and live-site verification were outside this handoff. The existing local edits in `.claude/launch.json` and `src/app/about/page.tsx` were kept outside the commit.
