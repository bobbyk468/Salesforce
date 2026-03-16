#!/usr/bin/env python3
"""Add '3 Concepts That Fail Most Candidates' sections — Batch 2 of 3."""
import os

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app'
FAQ_MARKER = '<h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>'

def make_section(cert_name, c1t, c1b, c2t, c2b, c3t, c3b):
    return f"""      <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most {cert_name} Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">{c1t}</p>
            <p className="text-sm text-gray-700">{c1b}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">{c2t}</p>
            <p className="text-sm text-gray-700">{c2b}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">{c3t}</p>
            <p className="text-sm text-gray-700">{c3b}</p>
          </div>
        </div>
      </section>

"""

BATCH = {
  'health-cloud-ap-exam-tips': make_section(
    'Health Cloud',
    '1. Patient vs Member vs Person Account — Health Cloud Data Model',
    'Health Cloud uses Person Accounts for patients (an Account-Contact fusion). A Member is a Person Account enrolled in a health plan. These are not separate object types — they are the same Person Account with different record types. Candidates create separate Contact records for patients — the exam expects Person Accounts as the Patient/Member data model.',
    '2. Care Plans vs Care Programs — Individual vs Population Health',
    'A Care Plan is an individualised treatment plan for one patient with goals, problems, and tasks. A Care Program is a population-level health initiative (diabetes management programme) that patients can be enrolled in. Candidates recommend Care Programs for individual patient care management — the exam expects Care Plans for individual patient interactions and Care Programs for managing patient populations.',
    '3. Utilisation Management vs Prior Authorisation — Two Different Processes',
    'Utilisation Management reviews whether proposed treatments meet medical necessity criteria. Prior Authorisation is the specific approval request submitted by a provider before a service is rendered. In Health Cloud, these are separate workflows. Candidates use a generic Case for both — the exam expects the UM Request record for prior authorisation workflows with member, provider, and clinical review fields.',
  ),
  'heroku-architect-exam-tips': make_section(
    'Heroku Architect',
    '1. Heroku Connect — Bidirectional Sync Has Write Conflict Rules',
    'Heroku Connect synchronises data between a Heroku Postgres database and Salesforce objects. By default it is unidirectional (Salesforce to Postgres). Enabling bidirectional sync introduces write conflicts when both sides update the same record. Candidates assume bidirectional sync just works — the exam expects knowledge of the "Salesforce wins" vs "database wins" conflict resolution setting and when each applies.',
    '2. Dyno Types — Web vs Worker vs One-Off',
    'Web dynos handle HTTP requests and must respond within 30 seconds (otherwise Heroku returns a timeout). Worker dynos run background jobs with no time limit (used for long-running processes, queue processing). One-off dynos are for ad-hoc tasks (database migrations, scripts). Candidates run long-running jobs on Web dynos — the exam expects Worker dynos for async processing.',
    '3. Add-ons vs Buildpacks — Services vs Build Configuration',
    'Add-ons are third-party services attached to a Heroku app (Postgres database, Redis cache, monitoring tools) — they are provisioned and billed separately. Buildpacks are scripts that transform your code into a runnable slug at build time (Node.js buildpack installs npm packages, Python buildpack installs pip packages). Candidates confuse add-ons (runtime services) with buildpacks (build-time configuration).',
  ),
  'heroku-developer-ap-exam-tips': make_section(
    'Heroku Developer',
    '1. Ephemeral Filesystem — Files Written to Dyno Are Lost on Restart',
    'Heroku dynos have an ephemeral filesystem: any file written during a dyno session is lost when the dyno restarts (which happens at least daily). Candidates design apps that write user uploads or generated files to the local filesystem — the exam expects external storage (AWS S3, Heroku Postgres) for persistent files.',
    '2. Config Vars vs .env — Environment Variables Are Not in Code',
    'Config Vars are Heroku&apos;s secure environment variable store — set via the dashboard or CLI and injected at runtime. They should never be hardcoded in application code or checked into version control. Candidates put API keys in .env files and push them to Git — the exam expects Config Vars for all secrets and environment-specific settings.',
    '3. Release Phase — Run Migrations Before New Code Goes Live',
    'The Release Phase is a Heroku feature that runs a command (e.g., a database migration script) after a new slug is built but before it is deployed to dynos. If the release phase command fails, the deployment is rolled back automatically. Candidates run migrations manually after deployment — the exam expects Release Phase configuration for zero-downtime database migrations.',
  ),
  'identity-access-management-architect-exam-tips': make_section(
    'Identity &amp; Access Management Architect',
    '1. OAuth 2.0 Flows — Authorization Code vs JWT Bearer vs Client Credentials',
    'Authorization Code flow is for user-facing apps where a human logs in (most common). JWT Bearer flow is for server-to-server integration where a trusted server asserts a user identity without a login prompt. Client Credentials flow is for machine-to-machine with no user context. Candidates use Authorization Code for server integrations — the exam expects JWT Bearer for server-to-server with user context assertion and Client Credentials for pure system calls.',
    '2. Named Credentials vs Auth. Providers — Outbound vs Inbound Identity',
    'Named Credentials store the endpoint URL, authentication method, and credentials for Salesforce making outbound callouts to external systems. Auth. Providers configure Salesforce as a service provider (SP) for inbound Single Sign-On — external users log in via an external Identity Provider (IdP). Candidates configure Named Credentials for SSO — the exam expects Auth. Provider + SAML or OIDC for SSO and Named Credentials for outbound callouts.',
    '3. Delegated Authentication vs SSO — Custom Login vs Federated Identity',
    'Delegated Authentication calls a custom web service endpoint to validate Salesforce login credentials against an external system (legacy LDAP integration). SAML/OIDC SSO federates identity by trusting an external IdP&apos;s assertion without re-validating credentials. Delegated Auth is legacy and should not be recommended for new implementations — the exam expects SAML or OIDC SSO for modern identity federation.',
  ),
  'industries-cpq-developer-exam-tips': make_section(
    'Industries CPQ Developer',
    '1. Product Configuration vs Pricing Engine — Two Separate Subsystems',
    'Industries CPQ (Vlocity CPQ) has a Product Configurator that drives eligibility, compatibility, and bundle selection, and a separate Pricing Engine that calculates prices using Price Lists, Price Adjustments, and custom pricing methods. Candidates design pricing logic inside product configuration rules — the exam expects pricing logic in the Pricing Engine (Custom Price Methods) and product logic in the Configurator.',
    '2. OmniScript vs DataRaptor vs Integration Procedure — Three Tools, One Platform',
    'OmniScript orchestrates the user-facing interaction flow (wizard UI). DataRaptors extract, transform, and load data between Salesforce objects and OmniScript. Integration Procedures call external APIs and apply data transformations server-side without a UI. Candidates use DataRaptors for external API calls — the exam expects Integration Procedures for external callouts and DataRaptors for Salesforce data operations.',
    '3. Cart-Based vs Non-Cart-Based Flows — When Each Is Used',
    'Cart-based CPQ flows show a cart UI where users add products, configure them, and proceed to checkout. Non-cart-based (API-driven) flows are used when pricing and configuration are computed programmatically without user interaction (order management, bulk repricing). Candidates design cart UI for all CPQ scenarios — the exam expects non-cart API flows for system-driven pricing and automated order processing.',
  ),
  'integration-architect-exam-tips': make_section(
    'Integration Architect',
    '1. Real-Time vs Near-Real-Time vs Batch — Choosing the Right Integration Pattern',
    'Real-time integration executes synchronously during a transaction (callout mid-save) — adds latency and risk of timeout. Near-real-time uses Platform Events or Change Data Capture to trigger async processing within seconds. Batch syncs data on a schedule (hourly, nightly). Candidates recommend real-time callouts for data that needs to be "current" — the exam expects near-real-time (Platform Events) for that pattern and real-time only for blocking decisions (credit checks, inventory holds).',
    '2. Idempotency — Why Retry Logic Requires Idempotent Operations',
    'An idempotent operation produces the same result whether executed once or multiple times. Integration retries can cause duplicate records or double-charges if operations are not idempotent. Exam scenarios about retry handling expect idempotency design: use upsert (not insert) on retry, include a correlation ID, check if a record already exists before creating. Candidates design retry without idempotency safeguards.',
    '3. Salesforce Connect vs Heroku Connect vs MuleSoft — Three Different Integration Approaches',
    'Salesforce Connect exposes external data as External Objects in real time without importing it (best for small record sets queried infrequently). Heroku Connect maintains a Postgres replica of Salesforce data for high-performance querying. MuleSoft API-led connectivity builds reusable integration APIs across systems. Candidates recommend MuleSoft for all integration scenarios — the exam tests which tool fits the specific requirement.',
  ),
  'javascript-developer-i-exam-tips': make_section(
    'JavaScript Developer I',
    '1. Promises vs Async/Await — Same Mechanism, Different Syntax',
    'Promises and async/await both handle asynchronous operations — async/await is syntactic sugar over Promises. A function marked async always returns a Promise. await pauses execution until the Promise resolves. Candidates treat these as entirely different mechanisms and struggle with error handling: rejected Promises in async/await are caught with try/catch, not .catch(). Know both patterns and when the exam expects each.',
    '2. var vs let vs const — Scope and Reassignment Rules',
    'var is function-scoped and hoisted (available before its declaration line at runtime, with value undefined). let is block-scoped and not accessible before declaration (temporal dead zone). const is block-scoped and cannot be reassigned (but the object it references can be mutated). Candidates use var for all declarations — the exam expects let for mutable block-scoped variables and const for values that should not be reassigned.',
    '3. Event Bubbling vs Capturing — Two Phases of DOM Event Propagation',
    'Events propagate in two phases: Capturing (top-down, from document to target) then Bubbling (bottom-up, from target back to document). addEventListener defaults to Bubbling phase. Passing true as the third argument to addEventListener uses Capturing phase. stopPropagation() halts propagation; preventDefault() prevents default browser behaviour (they are NOT the same). Candidates call stopPropagation() expecting it to prevent form submission — that requires preventDefault().',
  ),
  'loyalty-management-ap-exam-tips': make_section(
    'Loyalty Management',
    '1. Loyalty Program vs Loyalty Programme Member vs Member Tier — Three Separate Records',
    'A Loyalty Program is the top-level programme definition (name, currency, tiers). A Loyalty Programme Member is the individual customer enrolled in the programme with their points balance and tier status. A Member Tier is the classification record (Bronze, Silver, Gold) linked to the programme. Candidates store tier information on the Loyalty Program record — the exam expects Member Tier records and the Tier field on the Programme Member.',
    '2. Accrual vs Redemption Transactions — Points In vs Points Out',
    'Accrual transactions add points to a member&apos;s balance (purchase, bonus promotion). Redemption transactions deduct points (reward claim, discount). These are separate Transaction Journal record types. Candidates use a single transaction type for both — the exam expects separate Transaction Journal entries with the correct Type field (Accrual vs Redemption) and expects the ledger balance to reflect both.',
    '3. Promotion vs Voucher vs Reward — Three Offer Mechanics',
    'Promotions offer bonus points or discounts for a limited time. Vouchers are single-use codes that grant a specific benefit. Rewards are items members redeem accumulated points for. Candidates use Promotion records for voucher distribution — the exam expects Voucher Definition and Voucher records for code-based offers and Reward records for the points redemption catalogue.',
  ),
  'manufacturing-cloud-ap-exam-tips': make_section(
    'Manufacturing Cloud',
    '1. Sales Agreements vs Opportunities — Recurring Revenue vs One-Time Sales',
    'Sales Agreements are long-term contracts between manufacturers and distributors/dealers with committed volumes and pricing over a period. Opportunities are one-time sales pipeline records. Candidates use Opportunities for tracking annual volume commitments — the exam expects Sales Agreements for recurring contract-based revenue with planned vs actual volume tracking.',
    '2. Account Forecasting vs Opportunity Forecasting — Two Different Forecast Models',
    'Account Forecasting in Manufacturing Cloud generates period-based forecasts for accounts based on historical actuals and planned volumes from Sales Agreements. Standard Opportunity Forecasting rolls up pipeline-stage-weighted opportunities. These are separate systems. Candidates combine them — the exam expects Account Forecasting for manufacturing account-level volume predictions.',
    '3. Run Rate vs Planned Volume — Baseline vs Committed',
    'Run Rate is the annualised volume based on recent actual sales (baseline projection). Planned Volume is the committed amount in a Sales Agreement. Candidates use Run Rate as the authoritative forecast — the exam expects Planned Volume from Sales Agreements as the primary committed forecast, with Run Rate as a comparison/validation signal.',
  ),
  'marketing-cloud-advanced-cross-channel-ap-exam-tips': make_section(
    'Marketing Cloud Advanced Cross-Channel',
    '1. Journey Builder vs Automation Studio — Interactive vs Batch',
    'Journey Builder orchestrates real-time, event-driven, multi-step customer journeys (triggered by data events, API events, or channel interactions). Automation Studio runs scheduled or triggered batch operations (SQL queries, data imports, file transfers, sends to static segments). Candidates use Automation Studio to build triggered customer journeys — the exam expects Journey Builder for event-driven multi-step sequences.',
    '2. Contact Builder Relationships — Data Extensions Must Be Related Correctly',
    'Contact Builder links Data Extensions to the subscriber model using relationship keys. If a Data Extension is not correctly related to the Contact model (via Contact Key or Subscriber Key), Journey Builder cannot use it to personalise messages. Candidates troubleshoot journey personalisation failures in Journey Builder settings — the exam expects Contact Builder relationship configuration as the root cause.',
    '3. Einstein Engagement Scoring vs Send Time Optimization — Two Different AI Features',
    'Einstein Engagement Scoring predicts the likelihood of a contact opening, clicking, or converting — it produces a score per contact. Send Time Optimization predicts the best time to send to each contact to maximise engagement. They address different questions: "who is likely to engage?" vs "when should I send?" Candidates recommend Send Time Optimization when the scenario asks about identifying low-engagement contacts — that requires Engagement Scoring.',
  ),
  'marketing-cloud-consultant-exam-tips': make_section(
    'Marketing Cloud Consultant',
    '1. Business Units — Data Isolation vs Sharing',
    'Business Units (BUs) in Marketing Cloud partition data, assets, and sending permissions between teams or brands. A subscriber in one BU is separate from the same email address in another BU by default. Sharing across BUs requires deliberate configuration (shared Data Extensions, cross-BU sending). Candidates assume shared subscriber lists across BUs — the exam expects BU-specific subscriber isolation unless cross-BU sharing is explicitly configured.',
    '2. Sender Authentication Package (SAP) vs Default Branding Domain',
    'A Sender Authentication Package authenticates a specific sending domain (From address) for email deliverability — it aligns the envelope sender, header From, and link domains. Without SAP, Marketing Cloud uses Salesforce&apos;s shared authentication domain, which reduces deliverability. Candidates configure SAP as optional — the exam treats SAP configuration as essential for enterprise email deliverability.',
    '3. Suppression Lists vs Publication Lists vs Exclusion Lists',
    'Suppression Lists prevent sending to specific addresses globally regardless of subscription status (legal complaints, internal addresses). Publication Lists are subscriber opt-in lists for specific publications (newsletter, promotions). Exclusion Lists are Data Extensions used in send flows to explicitly exclude matching records from a specific send. Candidates use Suppression for send-specific exclusions — the exam expects Exclusion Lists for those and Suppression for global permanent blocks.',
  ),
  'marketing-cloud-engagement-admin-exam-tips': make_section(
    'Marketing Cloud Engagement Admin',
    '1. Role-Based Access in Marketing Cloud — Roles vs Permissions',
    'Marketing Cloud uses Roles (Administrator, Analyst, Content Creator, Viewer) that bundle permissions. You can also apply individual permissions on top of or restricted from a role. Candidates assume roles are all-or-nothing — the exam expects nuanced role + individual permission configuration when a user needs most of a role&apos;s access but not all.',
    '2. IP Warming — New Sending IPs Need Gradual Volume Ramp',
    'New dedicated IPs for Marketing Cloud sending start with no reputation. ISPs (Gmail, Yahoo, Outlook) filter mail from new IPs heavily until a positive sending history is established. IP warming gradually increases send volume over 4–8 weeks. Candidates launch full-volume campaigns immediately on new IPs — the exam expects an IP warming plan as a prerequisite for high-volume new IP deployments.',
    '3. Sender Authentication — SPF, DKIM, and DMARC Are All Required',
    'SPF (Sender Policy Framework) authorises which mail servers can send on behalf of a domain. DKIM adds a cryptographic signature to emails. DMARC tells receiving servers what to do when SPF/DKIM checks fail (quarantine or reject). All three are required for enterprise deliverability. Candidates configure SPF and DKIM but skip DMARC — the exam expects DMARC as the critical policy layer that ties SPF and DKIM together.',
  ),
  'marketing-cloud-engagement-developer-exam-tips': make_section(
    'Marketing Cloud Engagement Developer',
    '1. Server-Side JavaScript (SSJS) vs AMPscript — When to Use Each',
    'AMPscript is a lightweight scripting language evaluated at send time for per-record personalisation (lookups, string functions, conditional content). SSJS runs before rendering for complex logic: API callouts, loops over multiple records, creating Core objects. Candidates use AMPscript for API callouts — AMPscript cannot make HTTP requests; SSJS is required for outbound callouts from Cloud Pages or email sends.',
    '2. REST API vs SOAP API — Modern vs Legacy in Marketing Cloud',
    'The Marketing Cloud REST API is the modern interface: faster, JSON-based, supports Journey Builder, Contact Builder, and most new features. The SOAP API is legacy: XML-based, supports email sends, subscriber management, and list operations. New integrations should use REST. Candidates use SOAP for new subscriber-creation integrations — the exam expects REST for new implementations.',
    '3. Transactional Messaging API — Not the Same as Journey API',
    'The Transactional Messaging API sends a single triggered email or SMS immediately to one recipient (order confirmation, password reset). The Journey API injects a contact into a Journey for multi-step orchestration. Candidates use the Journey API for all triggered single messages — the exam expects Transactional Messaging API for immediate one-off sends and Journey API for multi-step nurture.',
  ),
  'marketing-cloud-engagement-foundations-exam-tips': make_section(
    'Marketing Cloud Engagement Foundations',
    '1. Contact vs Subscriber — Two Different Identity Concepts',
    'A Contact in Marketing Cloud is a person record in Contact Builder identified by a Contact Key (often Salesforce CRM ID). A Subscriber is an email-specific opt-in record with a Subscriber Key. The same person can be both a Contact and a Subscriber, but they are stored differently. Candidates use the terms interchangeably — the exam distinguishes them: Contacts are cross-channel; Subscribers are email-channel specific.',
    '2. All Subscribers List vs Publication Lists vs Data Extensions for Sending',
    'The All Subscribers list is the master opt-out tracking list — it cannot be used for targeting sends. Publication Lists are opt-in subscription lists for specific content. Data Extensions (filtered or full) are the recommended targeting method for all complex sends. Candidates target sends using the All Subscribers list — the exam expects Data Extensions or Publication Lists for targeting.',
    '3. Email Studio vs Journey Builder — One-Time vs Ongoing',
    'Email Studio is used for one-time or ad-hoc batch sends (campaigns, announcements). Journey Builder is used for ongoing automated programs triggered by events (welcome series, re-engagement journeys). Candidates build welcome emails in Email Studio — the exam expects Journey Builder for any automated, triggered, multi-step sequence.',
  ),
  'marketing-cloud-intelligence-ap-exam-tips': make_section(
    'Marketing Cloud Intelligence',
    '1. Streams vs Workspaces — Data Ingestion vs Analysis',
    'Streams are the data connectors that ingest raw marketing performance data from ad platforms, email tools, and CRMs into Marketing Cloud Intelligence. Workspaces are the analysis environments where data is combined, visualised, and reported. Candidates try to configure analytics in the Stream setup — Streams are only for ingestion; all analysis happens in Workspaces.',
    '2. Harmonised vs Raw Data — Why Metrics Don&apos;t Match Source Platforms',
    'Marketing Cloud Intelligence harmonises metrics from disparate platforms into a common schema (e.g., mapping "clicks" from Google Ads, Meta Ads, and Marketing Cloud into one unified "Clicks" metric). Raw data from each platform may use different field names and definitions. Candidates expect raw platform numbers to appear unchanged — the exam expects understanding of the harmonisation layer and why numbers may differ slightly from native platform reports.',
    '3. Calculated Metrics vs Standard Metrics — Custom Formulas for Cross-Channel KPIs',
    'Standard metrics are ingested directly from source platforms (impressions, clicks, cost). Calculated metrics are custom formulas built in Intelligence (CPC = Cost / Clicks, ROAS = Revenue / Cost). Candidates try to pull ROAS and blended CPM directly from data streams — these cross-platform KPIs require Calculated Metric configuration in the workspace.',
  ),
  'marketing-cloud-personalization-ap-exam-tips': make_section(
    'Marketing Cloud Personalization',
    '1. Identity Resolution — Web SDK Tracks Anonymous Until Identity Is Asserted',
    'The MCP Web SDK tracks visitors anonymously by default (anonymous profile). When a user logs in or fills out a form, the system merges the anonymous session with a known profile using the Identity attribute (email, CRM ID). Candidates expect immediate identity resolution — anonymous tracking must be explicitly merged via setIdentity() or an identity event. Without this, web behaviour is attributed to an anonymous profile.',
    '2. Campaigns vs Experiences vs Templates — Three-Level Content Hierarchy',
    'A Campaign is the top-level container for a personalisation initiative. An Experience is a specific content variant within a campaign (shown to a defined audience segment). A Template is the layout/format definition for how content is rendered (banner, popup, infobar). Candidates create new campaigns for every A/B test variant — the exam expects multiple Experiences within one Campaign for variant testing.',
    '3. Einstein Decisions vs Rules-Based Personalisation — ML vs Configuration',
    'Einstein Decisions uses machine learning to select the best content/offer for each visitor based on their behaviour and attributes. Rules-based personalisation uses explicit audience segment conditions to show specific content. Candidates use Einstein Decisions for all personalisation — the exam expects rules-based for deterministic scenarios ("show this offer to all Gold members") and Einstein Decisions for "best next action" recommendations.',
  ),
  'media-cloud-ap-exam-tips': make_section(
    'Media Cloud',
    '1. Media Cloud Data Model — Media Order vs Standard Salesforce Order',
    'Media Cloud uses a Media Plan → Insertion Order → Line Item hierarchy for advertising sales, which is separate from the standard Salesforce Order → Order Product structure. Candidates apply standard Order logic to Media Cloud advertising scenarios — the exam expects the Media Plan data model for ad campaign booking and trafficking.',
    '2. Programmatic vs Direct Sales Workflows — Different Insertion Order Types',
    'Direct sales involve a media salesperson negotiating and booking ad placements manually (Insertion Order created in Salesforce). Programmatic sales are automated auction-based ad purchases through DSPs/SSPs. Media Cloud primarily manages the direct sales workflow. Candidates design full programmatic automation inside Salesforce — the exam focuses on direct sales Order Management and the handoff interfaces with ad servers.',
    '3. Rights Management — Content Rights Are Time-Boxed and Territory-Specific',
    'Media Cloud tracks content rights (broadcast, streaming, digital) per territory and time window. A sports rights deal may grant a broadcaster rights only within a specific country and only for a specific season. Candidates use a single Rights record — the exam expects rights records with territory, channel, and date-range fields, and understands that rights violations occur when content is broadcast outside permitted windows.',
  ),
  'mulesoft-catalyst-consultant-exam-tips': make_section(
    'MuleSoft Catalyst Consultant',
    '1. Catalyst Methodology Phases — Discover, Design, Build, Deliver',
    'MuleSoft Catalyst is the implementation methodology with four phases: Discover (assess current state, define strategy), Design (architect the solution), Build (implement APIs), and Deliver (deploy and operate). Candidates apply generic agile terminology to Catalyst questions — the exam uses Catalyst-specific phase names and expects knowledge of the artefacts produced in each phase (API Catalog in Design, API-led blueprint in Discover).',
    '2. C4E (Center for Enablement) — Not Just a Governance Committee',
    'The Center for Enablement (C4E) is MuleSoft&apos;s operating model for scaling integration across an organisation: it curates reusable APIs, enforces standards, and enables citizen integrators. It is not just an IT governance body — its primary goal is to increase the consumption of published APIs across business teams. Candidates describe the C4E as a review board — the exam expects enablement and API reuse promotion as the primary mandate.',
    '3. API Lifecycle Stages — Design → Build → Publish → Manage → Retire',
    'MuleSoft defines an API lifecycle: Design (RAML/OAS spec in Design Center), Build (Mule implementation in Anypoint Studio), Publish (to Exchange), Manage (apply policies in API Manager), Retire (deprecate and remove). Candidates skip the Design and Publish stages in their lifecycle descriptions — the exam expects all five stages and the specific Anypoint Platform tool used at each.',
  ),
  'mulesoft-developer-ii-exam-tips': make_section(
    'MuleSoft Developer II',
    '1. Batch Processing — Batch Job Phases and Error Handling',
    'Mule Batch Jobs have three phases: Input (record collection), Process (on-record parallel processing), and On Complete (summary handling after all records are processed). Errors in the Process phase are per-record — a failed record does not stop other records from processing. Candidates design Batch Jobs expecting a single error to halt processing — the exam expects per-record error handling and the acceptPolicy setting that controls how failures affect the batch.',
    '2. Async vs Sync Flow Execution — When Flow Runs Are Detached',
    'By default, flows called via Flow Reference execute synchronously (in the same thread as the caller). Async scopes run a sub-flow asynchronously in a new thread, and the caller does not wait for the result. Candidates use Async scope expecting the caller to receive the async response — Async is fire-and-forget. Know when to use each based on whether the caller needs the processing result.',
    '3. Watermark in Polling — Tracking Processed Records Across Runs',
    'A Watermark in a Scheduler-triggered polling flow tracks the last-processed record (e.g., last timestamp) so subsequent runs only retrieve new or updated records. Without Watermark, every run re-processes all records. Candidates implement custom tracking variables for incremental polling — the exam expects the built-in Watermark feature with an Object Store for persistence across Mule runtime restarts.',
  ),
  'mulesoft-hyperautomation-developer-exam-tips': make_section(
    'MuleSoft Hyperautomation Developer',
    '1. RPA vs API Integration — When Each Is the Right Tool',
    'MuleSoft RPA automates tasks through UI interaction (screen scraping, form filling) for systems without APIs. API integration connects systems with published APIs — it is faster, more reliable, and should always be preferred over RPA when an API exists. Candidates recommend RPA for legacy system integration — the exam expects API integration first and RPA only when no API is available.',
    '2. Composer vs Anypoint Studio — Low-Code vs Pro-Code',
    'MuleSoft Composer is a low-code integration tool for business users — drag-and-drop connectors for common SaaS apps (Salesforce, Slack, NetSuite). Anypoint Studio is the full-featured IDE for professional developers. Candidates recommend Anypoint Studio for all integrations — the exam expects Composer for business-user-managed, SaaS-to-SaaS integrations that do not require custom transformation logic.',
    '3. Process Automation vs RPA — Orchestration vs Execution',
    'Salesforce Flow (Process Automation) orchestrates multi-step business processes across Salesforce records and connected systems via API calls. MuleSoft RPA executes specific UI-based tasks on legacy applications. In a Hyperautomation solution, Flow orchestrates the overall process and calls RPA for steps that require UI interaction. Candidates design RPA to handle the entire workflow — the exam expects Flow to orchestrate and RPA only for the UI-automation steps.',
  ),
  'mulesoft-integration-architect-exam-tips': make_section(
    'MuleSoft Integration Architect',
    '1. API Policies — Rate Limiting vs Throttling vs SLA Tiers',
    'Rate Limiting blocks API calls that exceed the defined limit (hard stop, returns 429). Throttling queues excess calls and processes them when capacity is available (soft limit, adds latency). SLA Tiers grant different rate limits to different API consumers (Gold = 1000 req/min, Silver = 100 req/min). Candidates use rate limiting when throttling is appropriate — know the difference: rate limiting = reject; throttling = delay.',
    '2. Anypoint VPC and VPN — Private Network Architecture',
    'An Anypoint VPC (Virtual Private Cloud) creates a private network for CloudHub-deployed Mule apps, isolating them from the public internet. A VPN extends the VPC to an on-premises network. Candidates design Anypoint VPC for all network security — the exam also expects knowledge of Transit Gateway (connecting multiple VPCs) and Dedicated Load Balancers (exposing internal APIs on custom domains).',
    '3. API Autodiscovery — Linking a Mule App to API Manager',
    'API Autodiscovery connects a deployed Mule application to its API Manager instance using an API ID and Environment Credentials. Without this, API Manager policies are not applied to the running Mule app. Candidates configure policies in API Manager and expect them to apply automatically — the exam expects Autodiscovery configuration in the Mule app to link the two systems.',
  ),
  'mulesoft-platform-architect-exam-tips': make_section(
    'MuleSoft Platform Architect',
    '1. CloudHub 2.0 vs CloudHub 1.0 vs Runtime Fabric — Deployment Options',
    'CloudHub 1.0 is the shared managed runtime (workers). CloudHub 2.0 is the containerised replacement with improved scalability and clustering. Runtime Fabric (RTF) is a self-managed Kubernetes-based runtime for deploying Mule apps in customer-owned infrastructure. Candidates recommend CloudHub for all deployments — the exam expects RTF for data sovereignty requirements or cloud-control mandates.',
    '2. Shared vs Dedicated Load Balancer — Public vs Private Endpoint Exposure',
    'A Shared Load Balancer exposes Mule apps on a Salesforce-managed domain (tenant.us-e1.cloudhub.io) — suitable for non-production or public APIs. A Dedicated Load Balancer (DLB) exposes apps on a custom domain with SSL termination and network ACLs — required for production APIs that need branded domains or IP whitelisting. Candidates use Shared Load Balancers for production — the exam expects DLB for production, custom-domain requirements.',
    '3. Object Store v2 — Scoped to Deployment, Not Shared Across Workers by Default',
    'Object Store v2 persists key-value data across Mule runtime restarts. By default, Object Store is scoped to a single CloudHub worker — in a multi-worker deployment, workers do not share Object Store data unless explicitly configured. Candidates design session state management assuming Object Store is shared — the exam expects Persistent Object Store (shared across workers) or sticky sessions for stateful applications.',
  ),
  'net-zero-cloud-ap-exam-tips': make_section(
    'Net Zero Cloud',
    '1. Scope 1 vs Scope 2 vs Scope 3 Emissions — Different Tracking Responsibilities',
    'Scope 1: direct emissions from owned/controlled sources (company vehicles, on-site combustion). Scope 2: indirect emissions from purchased electricity, heat, or steam. Scope 3: all other indirect emissions in the value chain (business travel, supply chain, customer product use). Candidates use a single Emission record for all scopes — the exam expects Scope-specific record types and understanding that Scope 3 data often comes from external suppliers via data ingestion.',
    '2. Carbon Credits vs Carbon Offsets — Purchased vs Generated',
    'Carbon Credits are purchased instruments that represent the right to emit one tonne of CO2. Carbon Offsets are projects (reforestation, renewable energy) that reduce or remove emissions, generating credits. In Net Zero Cloud, purchased offsets are tracked as Sustainability Adjustments. Candidates conflate these — the exam distinguishes between emissions reduction (operational improvements) and offset purchases (compensating for remaining emissions).',
    '3. Emission Factors — Why Records Don&apos;t Match Industry Benchmarks',
    'Net Zero Cloud calculates emissions by multiplying activity data (litres of fuel, kWh of electricity) by Emission Factors (kg CO2e per unit). Emission Factor libraries are sourced from regulatory bodies (EPA, IPCC) and vary by region and time period. Candidates assume a single global emission factor for electricity — the exam expects region-specific grid emission factors (European electricity is cleaner than coal-heavy grids).',
  ),
  'nonprofit-cloud-exam-tips': make_section(
    'Nonprofit Cloud',
    '1. NPSP Household Account Model — Contacts Are Primary, Accounts Are Secondary',
    'Salesforce Nonprofit Success Pack (NPSP) inverts the standard B2B model: the Contact (donor/constituent) is the primary record, and the Household Account is auto-created to hold household-level relationships and giving. Candidates answer relationship questions using standard B2B Account-Contact logic — the exam expects NPSP&apos;s Household model where Contacts drive the relationship.',
    '2. Soft Credits vs Hard Credits — Recognition vs Liability',
    'Hard Credits are the actual donation amounts attributed to the donor who gave the money. Soft Credits recognise people who influenced the donation (a board member who introduced the donor) without financial liability. NPSP tracks both — candidates use a single Opportunity for all recognition. The exam expects Partial Soft Credits and Soft Credit Roles for recognising solicitors and influencers.',
    '3. NPSP Recurring Donations — Open-Ended vs Fixed-Length',
    'NPSP Recurring Donations can be Open-Ended (run indefinitely until cancelled) or Fixed-Length (a set number of installments). Each Recurring Donation creates Opportunity installments on a schedule. Candidates model monthly pledges as individual Opportunities — the exam expects Recurring Donation records with the correct recurrence type and the auto-generated installment Opportunity schedule.',
  ),
  'nonprofit-success-pack-consultant-exam-tips': make_section(
    'NPSP Consultant',
    '1. Affiliation vs Relationship — Organisation Connection vs Person Connection',
    'Affiliations link a Contact to a non-Household Account (their employer, a board membership, a programme affiliation). Relationships link two Contacts to each other (spouse, sibling, colleague). Candidates use Relationships for all connection types — the exam expects Affiliations for Contact-to-Organisation connections and Relationships for Contact-to-Contact.',
    '2. Gift Entry — Templates Are Required for Batch Processing',
    'NPSP Gift Entry requires a Gift Entry Template to be configured before batch gifts can be entered. Templates define which fields appear, default values, and matching rules for donors. Candidates try to enter gifts without configuring a template first — the exam expects Gift Entry Template setup as the prerequisite for efficient batch gift processing.',
    '3. Engagement Plans — Not the Same as Campaigns',
    'Engagement Plans are NPSP-specific task templates that define a sequence of outreach tasks (call, email, letter) assigned to a constituent over time. Salesforce Campaigns track marketing lists and ROI. Candidates use Campaigns for stewardship outreach sequences — the exam expects Engagement Plans for personalised, task-driven constituent outreach.',
  ),
}

def insert_section(file_path, section_html):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'bg-amber-50' in content:
        print(f'SKIP: {file_path}')
        return
    idx = content.find(FAQ_MARKER)
    if idx == -1:
        print(f'NO FAQ MARKER: {file_path}')
        return
    section_start = content.rfind('<section', 0, idx)
    if section_start == -1:
        print(f'NO SECTION: {file_path}')
        return
    new_content = content[:section_start] + section_html + content[section_start:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'OK: {file_path}')

for folder, section in BATCH.items():
    path = os.path.join(BASE, folder, 'page.tsx')
    if os.path.exists(path):
        insert_section(path, section)
    else:
        print(f'NOT FOUND: {path}')

print('Batch 2 done.')
