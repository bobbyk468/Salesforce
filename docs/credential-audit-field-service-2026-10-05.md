# Field Service Credential Fact Review — 2026-10-05

## Primary issuer sources reviewed

- Salesforce Help exam guide: https://help.salesforce.com/s/articleView?id=005298947&language=en_US&type=1
- Salesforce Trailhead credential page: https://trailhead.salesforce.com/en/credentials/fieldserviceconsultant (redirects to the Agentforce Field Service and Operations credential page)
- Salesforce Trailhead Academy exam listing: https://trailheadacademy.salesforce.com/certificate/exam-fs-consultant---FS-Con-101?event-slug=tableau-conference

The sources currently identify the credential as **Salesforce Certified Agentforce Field Service and Operations Consultant**. The exam guide labels its exam content as aligned to the Spring '23 release; that guide statement is retained as source wording and is not described here as current-release alignment.

## Shared verified facts for parent

- Exam: 60 multiple-choice/multiple-select questions, with up to five unscored questions; 105 minutes; passing score 63%.
- Registration: US$200 plus applicable taxes (JPY 30,000 listed); retake: US$100 plus applicable taxes (JPY 15,000 listed).
- Required prerequisites: **both** Salesforce Certified Platform Administrator **and** Salesforce Certified Agentforce Service Consultant. This is not a single-prerequisite credential. Platform Administrator is also shown on the issuer credential page; the detailed exam guide and exam listing name both credentials.
- Published domains (sum 100%): Managing Resources 16%; Managing Work Orders 23%; Managing Scheduling and Optimization 28%; Configuring Mobility 10%; Managing Inventory 8%; Managing Assets 5%; Configuring Maintenance Plans 5%; Permissions and Sharing 5%.
- Guide-audience experience profile (not a substitute for the required credentials): 1–2 years as a business analyst, 1+ years in the field services industry, and 2+ years of services and support experience.
- The reviewed guide does not prescribe a study duration or a practice-score readiness threshold, and it does not state a pass-rate figure.

## Corrections applied within this bounded scope

- Replaced the old 19/16/15/13/8/8/8/8 topic list with the issuer's eight current named objectives and weights.
- Corrected question count description, passing score, time limit, and fee framing; added the unscored-question and prerequisite details.
- Removed invented scenario percentages and unsupported “most commonly tested”/candidate-performance claims, fixed-duration study prescriptions, and readiness-score/pass implications.
- Replaced confident but overly categorical scheduling assertions with bounded scenario distinctions: resource eligibility vs preference, appointment lifecycle vs policy choice, and planned vs consumed inventory.
- Labeled the site's sample questions as original practice items, not actual or recalled Salesforce exam questions. Automated tests check structure, scope disclaimer, and link/logistics consistency; they do **not** claim each answer was independently validated against every possible org configuration.
- Preserved the existing page layout/components; no shared metadata, prerequisite, fee, or guide-URL mapping files were changed. Parent owns those updates.

## Files in scope

- `src/lib/cert-page-spike/promoted-associate/field-service.json`
- `src/app/field-service-consultant-study-guide/page.tsx`
- `src/app/field-service-exam-tips/page.tsx`
- `src/tests/field-service-facts.test.mjs`
- `docs/credential-audit-field-service-2026-10-05.md`
