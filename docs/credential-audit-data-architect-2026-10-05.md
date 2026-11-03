# Platform Data Architect source audit — 2026-10-05

## Verified exam facts

Checked Salesforce's [Platform Data Architect Exam Guide](https://help.salesforce.com/s/articleView?id=005298972&language=en_US&type=1) on 2026-10-05. It lists 60 multiple-choice questions and up to five unscored questions, 105 minutes, a 58% passing score, US$400 registration and US$200 retake fees (plus applicable taxes), and no prerequisite. Salesforce recommends (not requires) Platform App Builder, Platform Developer, and Platform Developer II certifications.

The guide's domain weights total 100%:

| Official domain | Weight |
| --- | ---: |
| Data Modeling/Database Design | 25% |
| Master Data Management | 5% |
| Salesforce Data Management | 25% |
| Data Governance | 10% |
| Large Data Volume Considerations | 20% |
| Data Migration | 15% |

## Technical source checks and copy decisions

- The claim that Bulk API 2.0 handles "up to 100 million records per batch job" is unsupported and conflates limits. Salesforce's [Bulk API and Bulk API 2.0 limits](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-bulkapi.html) list up to 150 million uploaded records per rolling 24-hour period for each API. Bulk API 2.0 automatically manages ingest batches; it does not use the legacy per-batch record limit. Its upload limit is expressed in file/request size, not a general 100-million-per-job allowance.
- Salesforce's [Bulk API 2.0 ingest guide](https://developer.salesforce.com/docs/platform/api-asynch/guide/datafiles-understanding-bulk2-ingest.html) says batches are created automatically, one per 10,000 records in the job data, up to the daily 150-million-record maximum. This is not a 100-million-per-job limit. The 15,000-batch allocation is shared between Bulk API and Bulk API 2.0, but applies to the batch allocation, not to the record allocation.
- The statement that Data Loader automatically switches to Bulk API above 200 records is incorrect. The [Data Loader configuration guide](https://developer.salesforce.com/docs/platform/data-loader-impl/guide/configuring-the-data-loader.html) says its default is SOAP-based and exposes SOAP, Bulk API, and Bulk API 2.0 as settings. The 200-record figure describes a SOAP import batch-size maximum, not an automatic API-selection threshold; Bulk API 2.0 handles batch sizing automatically.
- Salesforce's [skinny table guidance](https://developer.salesforce.com/docs/platform/salesforce-large-data-volumes-bp/guide/ldv-deployments-infrastructure-skinny-tables.html) describes a Salesforce-managed table that can avoid joins for supported read-only operations and must be requested through Salesforce Support. Its [index guidance](https://developer.salesforce.com/docs/platform/salesforce-large-data-volumes-bp/guide/ldv-deployments-infrastructure-indexes.html) explains that the query optimizer uses data distribution and selectivity, so an index is not automatically used just because a field is filtered.
- The [SOQL limitations for Big Objects](https://developer.salesforce.com/docs/platform/salesforce-soql-sosl/guide/sforce-api-calls-soql-limits.html) require filters on index fields in index order, without gaps, and constrain operators. The JSON's former blanket claim that Big Objects disallow `GROUP BY`/aggregate queries was removed rather than replaced with an overbroad rule.

## Initial practice-answer spot check

Reviewed the first five answer keys in the Data Architect `sampleQuestions` array against the exam objectives and the primary platform references above. The selected options are conceptually consistent: architect scope; LDV performance considerations; skinny tables' join-reduction use; master-detail parent-child semantics; and archiving with access-pattern considerations. These are original practice items, not Salesforce exam questions, and this spot check does not establish question-bank completeness or exam predictiveness.

## Scope and unresolved limits

Updated only Data Architect material in `src/lib/cert-page-spike/promoted-associate/data-architect.json`, `src/lib/cert-seo-data.ts`, `src/lib/exam-weightage-data.ts`, and the related Data Architect study-guide/exam-tips pages, plus this audit and `src/tests/credential-facts.test.mjs`. The related page title/year labels use calendar year 2026; no issuer alignment to a specific seasonal release was verified. Existing unrelated working-tree changes were left intact. No knowledge base, build, or deployment work was performed.

The official exam guide specifies objectives, not exam-question frequency, candidate error rates, relative difficulty, or a recommended study duration; those claims were removed or reframed as study suggestions. API capacity and performance are workload-, org-, and configuration-dependent; no single record-count threshold or tool is claimed as universally optimal. This bounded audit does not independently validate every technical statement outside the corrected exam logistics, domain weights, migration claims, and first-five answer-key spot check.
