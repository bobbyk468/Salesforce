#!/usr/bin/env python3
"""Add '3 Concepts That Fail Most Candidates' sections to exam tips pages — Batch 1 of 3."""
import os, re

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
  'advanced-field-service-ap-exam-tips': make_section(
    'Advanced Field Service',
    '1. Work Order Line Items vs Service Appointments — Not the Same Object',
    'Work Order Line Items define the scope of work (what tasks must be done). Service Appointments are scheduled visits linked to those tasks. One Work Order can have multiple Service Appointments. Candidates answer scheduling and capacity questions using Work Order logic — the exam expects Service Appointment logic. Scheduling rules, territories, and capacity caps are all properties of Service Appointments.',
    '2. Operating Hours vs Scheduling Policy — Why the Right Technician Is Not Getting Assigned',
    'Operating Hours define when a resource or territory is available to work. Scheduling Policies determine how the optimizer prioritises work (by skill, travel time, or SLA). When a qualified technician is not being scheduled, the most common exam answer is a missing or incorrect Operating Hours record — not a missing skill. Candidates default to checking skills first and miss the Operating Hours issue.',
    '3. Permission Sets for Field Service Mobile — Profiles Are Not Enough',
    'Field Service Lightning Mobile requires specific permission sets (Field Service Mobile License plus Field Service Standard or Dispatcher) in addition to a base profile. A standard Service Cloud profile alone does not grant mobile app access. Exam scenarios about why a field technician cannot see their schedule in the mobile app expect the answer "missing permission set," not "missing profile."',
  ),
  'application-architect-exam-tips': make_section(
    'Application Architect',
    '1. Application Architect Is a Role Credential — Not a Single Exam',
    'The Salesforce Application Architect credential is awarded when you hold both the System Architect credential and the four domain architect exams (Data, Integration, Sharing &amp; Visibility, Dev Lifecycle). There is no single "Application Architect exam." Candidates often study for it as if it were one test. Focus on the four domain exams first, then earn System Architect — the Application Architect credential follows automatically.',
    '2. Multi-Org vs Single-Org — Recognising the Decisive Scenario Signals',
    'Single-org consolidates all business units into one instance (better data sharing, more governance complexity). Multi-org separates by business unit (more autonomy, harder cross-BU data access). Exam scenarios signal multi-org with: strict regulatory data isolation requirements, completely separate business processes with no cross-BU data sharing, or post-merger organisations with incompatible tech stacks.',
    '3. Large Data Volumes and Query Performance — Skinny Tables Are Not Indexes',
    'Skinny tables are read-only Salesforce-managed tables that cache frequently queried field subsets to speed SOQL queries on high-volume objects. They are NOT the same as custom indexes. Custom indexes speed lookups on specific fields. Candidates use these terms interchangeably. Know when to request each from Salesforce Support and why standard indexes (on Lookup/Master-Detail fields and formula fields) are automatically maintained.',
  ),
  'b2b-commerce-admin-ap-exam-tips': make_section(
    'B2B Commerce Administrator',
    '1. Price Lists vs Price Books — B2B Commerce Has Its Own Pricing Layer',
    'B2B Commerce uses Price Lists (not standard Salesforce Price Books) to manage account-specific or segment-specific pricing. Price Books apply to standard Salesforce Opportunities. Candidates confuse these when answering scenarios about why a buyer account sees the wrong price. In B2B Commerce, the Price List is resolved through the Buyer Group &rarr; Price List assignment — not through the standard Price Book hierarchy.',
    '2. Buyer Groups vs Accounts — Access Is Granted Through the Group',
    'Buyer Groups are the mechanism that assigns buyer accounts to a specific storefront, price list, and entitlement policy. You do not grant storefront access directly to an Account. Candidates answer "assign the account to the storefront" — the correct answer is "add the account to a Buyer Group that has the storefront assignment." Missing this layer is the most common B2B Commerce admin exam mistake.',
    '3. Quick Order vs Order Templates — Different Use Cases, Same Confusion',
    'Quick Order lets a buyer enter SKUs or upload a CSV to add multiple products to cart in one step — it is designed for buyers who know exactly what they want. Order Templates (Order Guides) are curated product lists merchants set up for accounts to reorder from. The exam tests which to recommend: buyer-driven fast reorder = Quick Order; merchant-curated repeat purchase list = Order Template.',
  ),
  'b2b-commerce-developer-ap-exam-tips': make_section(
    'B2B Commerce Developer',
    '1. LWC Commerce Components vs Base Components — Extension vs Replacement',
    'B2B Commerce on Lightning uses base LWC commerce components (product detail, cart, checkout) that can be extended or replaced. Extending a base component inherits its functionality and adds custom logic. Replacing it means writing the entire component from scratch. Candidates choose "replace" for simple customisations — the exam expects "extend." Only replace when the base component cannot be modified to meet requirements.',
    '2. Integration Framework: Commerce APIs vs Apex vs Platform Events',
    'The B2B Commerce Integration Framework uses Apex extension points (CartExtension, ShippingProvider, TaxProvider) to plug in external logic. Candidates use ad-hoc Platform Events or custom REST APIs instead. Know the specific Apex extension point for each commerce integration: tax calculation = TaxProvider, shipping rates = ShippingProvider, cart validation = CartValidationOutput.',
    '3. Guest Browsing vs Authenticated Checkout — Session Context Matters',
    'Guest users can browse a B2B Commerce storefront but cannot add to cart or check out without authenticating. The guest user context has a different Experience Cloud licence type than the authenticated buyer. Candidates design features that work in guest context and forget that adding to cart requires authentication. Exam scenarios about "users cannot add items to cart" expect the answer "buyer is not authenticated."',
  ),
  'b2b-solution-architect-exam-tips': make_section(
    'B2B Solution Architect',
    '1. Account-Based vs Contact-Based Data Models — B2B vs B2C Architecture Decision',
    'B2B Salesforce implementations are account-centric: Contacts belong to Accounts, and Opportunities, Cases, and revenue are tracked at the Account level. B2C implementations are contact/person-account centric. When a B2B scenario adds consumer-facing channels, candidates default to Person Accounts — but the exam expects a clear rationale tied to the client&apos;s business model before recommending that change.',
    '2. Revenue Lifecycle Management vs CPQ — Knowing When Each Fits',
    'CPQ (Salesforce Configure, Price, Quote) handles product configuration, pricing rules, and quote generation. Revenue Lifecycle Management (RLM) extends this to subscription management, usage-based billing, and contract amendments. Candidates recommend CPQ for scenarios that describe subscription renewals, amendments, and billing — the exam expects RLM for those patterns.',
    '3. Integration Architecture — Point-to-Point vs ESB vs API-Led Connectivity',
    'Point-to-point integrations create direct connections between systems and become unmaintainable at scale. ESB (Enterprise Service Bus) centralises integration logic but creates a single point of failure. API-led connectivity (MuleSoft) layers APIs into System, Process, and Experience tiers for reusability and resilience. Exam scenarios describe scale and reuse requirements — candidates over-recommend ESB when API-led is the correct answer.',
  ),
  'b2c-commerce-architect-exam-tips': make_section(
    'B2C Commerce Architect',
    '1. Site Architecture — One Site vs Multiple Sites for Multi-Region',
    'B2C Commerce supports multiple storefronts within one realm. A single site can serve multiple locales using site preferences and localisation. Candidates recommend one site per region — the exam expects multi-locale configuration on a single site unless business processes are completely separate (separate catalogs, pricing, and fulfilment), in which case separate sites are justified.',
    '2. OCAPI vs SCAPI — Legacy vs Modern API Layer',
    'Open Commerce API (OCAPI) is the legacy REST API for B2C Commerce. Salesforce Commerce API (SCAPI) is the modern replacement, built on headless architecture. Exam scenarios about new integrations expect SCAPI recommendations. Candidates default to OCAPI because it is more familiar from study materials — know that Headless Reference Architecture (SFRA) uses SCAPI for new implementations.',
    '3. Quota Limits — Why Performance Degrades Under Load',
    'B2C Commerce enforces pipeline/controller quota limits (CPU time, memory, custom objects per request). Exceeding these causes degraded performance or errors. Candidates diagnose performance issues by looking at code logic — the exam expects checking quota consumption first. Know the key quotas: custom object record limit per session, pipeline dictionary size, and API call rate limits.',
  ),
  'b2c-commerce-developer-exam-tips': make_section(
    'B2C Commerce Developer',
    '1. Controllers vs Pipelines — SFRA Uses Controllers, Not Pipelines',
    'Salesforce Reference Architecture (SFRA) uses MVC-style Controllers (JavaScript/Node.js). Pipelines are the legacy SiteGenesis architecture. Exam scenarios about new development expect Controller-based answers. Candidates who studied older materials still default to Pipeline answers. Never recommend Pipelines for new SFRA features — use Controllers and middleware.',
    '2. Hooks vs Cartridge Overrides — Extension Without Modification',
    'SFRA extension points include Hooks (event-driven, registered in hooks.json) and Cartridge Overrides (placing a custom cartridge higher in the cartridge path). Hooks allow extending behaviour at defined integration points without modifying base cartridge code. Overrides replace entire files. The exam prefers Hooks for targeted customisation and overrides only when the entire file needs replacement.',
    '3. Business Manager Site Preferences vs Custom Objects — Where to Store Config',
    'Site Preferences store merchant-configurable settings (feature toggles, API keys, display rules) that non-developers can update via Business Manager. Custom Objects store structured data with specific schemas. Candidates use Custom Objects to store configuration data — the exam expects Site Preferences for settings that merchants need to manage without code deployments.',
  ),
  'b2c-solution-architect-exam-tips': make_section(
    'B2C Solution Architect',
    '1. Single vs Multi-Cloud Order Management — When OMS Is Needed',
    'Salesforce Order Management (OMS) handles post-purchase order lifecycle: fulfilment, inventory, returns, and shipping. It is a separate product from B2C Commerce. Candidates design order processing inside B2C Commerce — the exam expects OMS for complex multi-location fulfilment, returns, and order orchestration scenarios that exceed what the commerce platform handles natively.',
    '2. Identity Resolution — Matching Contacts Across Channels Without Duplication',
    'B2C Solution Architecture often involves customers existing in both Commerce Cloud and Service Cloud. Without identity resolution (matching on email or loyalty ID), the same person creates duplicate records. Exam scenarios about unified customer view expect Data Cloud or a matching/merging strategy — not just standard duplicate rules, which only prevent creation, not cross-system matching.',
    '3. Headless Commerce Architecture — When to Recommend It',
    'Headless commerce separates the front-end (custom React/Next.js PWA) from the back-end (B2C Commerce APIs). It is recommended when: brand requires full UI control, performance demands exceed Storefront Reference Architecture limits, or content is managed in an external CMS. Candidates recommend headless for all scenarios — the exam expects SFRA (Storefront Reference Architecture) first unless the scenario explicitly requires custom front-end control.',
  ),
  'business-analyst-exam-tips': make_section(
    'Business Analyst',
    '1. Process Mapping vs User Stories — Different Artefacts for Different Purposes',
    'Process maps (swim lane diagrams, flow charts) document current-state workflows across people and systems. User stories document future-state requirements from the user&apos;s perspective ("As a [role], I want [capability] so that [benefit]"). Candidates write user stories when asked for a process map and vice versa. The exam tests when each is the appropriate analysis output — process map for AS-IS documentation; user stories for development backlog requirements.',
    '2. Acceptance Criteria vs Definition of Done — Two Different Quality Gates',
    'Acceptance Criteria define the specific conditions a feature must meet to be accepted by the Product Owner — they are story-specific. Definition of Done is a team-wide checklist that all stories must pass (code reviewed, tested, deployed to staging). Candidates merge these concepts. The exam distinguishes them: acceptance criteria vary per story; Definition of Done is universal and does not change story-by-story.',
    '3. Stakeholder Communication — RACI Matrix vs Communication Plan',
    'A RACI matrix maps stakeholders to responsibilities: Responsible, Accountable, Consulted, Informed. A Communication Plan defines who receives what information, in what format, and at what frequency. They serve different purposes. Candidates use RACI to answer "how do you manage stakeholder updates?" — the exam expects a Communication Plan for that use case. RACI is for clarifying decision ownership, not managing information flow.',
  ),
  'communications-cloud-ap-exam-tips': make_section(
    'Communications Cloud',
    '1. Enterprise Product Catalog vs Standard Salesforce Products — Different Objects',
    'Communications Cloud uses the Vlocity (OmniStudio) Enterprise Product Catalog (EPC) for complex telecommunications product modelling — bundles, components, pricing, and eligibility rules. Standard Salesforce Products and Price Books do not handle the hierarchical, configurable nature of telco offers. Candidates answer product questions using standard Salesforce product logic — the exam expects EPC-specific concepts.',
    '2. Order Decomposition — Fulfilment Orders Are Automatically Created',
    'When an order is submitted in Communications Cloud, Order Management decomposes it into Fulfilment Orders and Fulfilment Order Line Items based on routing rules. This decomposition is automatic — developers do not manually create Fulfilment Orders. Candidates design manual Fulfilment Order creation logic — the exam expects configuration of the decomposition rules, not custom code.',
    '3. CPQ in Communications Context — VlocityProduct vs Standard CPQ',
    'Communications Cloud CPQ uses Vlocity/OmniStudio product modelling (not standard Salesforce CPQ). The pricing and configuration rules use Custom Price Methods and Product Actions within the EPC. Candidates apply standard Salesforce CPQ concepts (Price Rules, Product Rules) to Communications Cloud scenarios — these are different systems with different configuration paradigms.',
  ),
  'consumer-goods-cloud-ap-exam-tips': make_section(
    'Consumer Goods Cloud',
    '1. Retail Execution Visits vs Service Appointments — Different Objects in CGC',
    'Consumer Goods Cloud uses the Visit object (not Service Appointments) for retail execution. Visits are linked to Accounts (retail stores), have planned and actual dates, and are assigned to field representatives. Service Appointments are a Field Service Lightning concept. Candidates conflate these because both involve scheduling field staff — the exam expects Visit-based logic for retail execution scenarios.',
    '2. Assessments vs Surveys — Purpose-Built Retail Audit Tool',
    'Consumer Goods Cloud includes purpose-built Assessment Tasks for retail audits (shelf compliance, planogram adherence, product availability). These are not the same as Salesforce Surveys (customer feedback tool). Exam scenarios about store audits and compliance checks expect Assessment Task configuration — not Surveys or custom LWC components.',
    '3. My Route Planning — Optimisation Is Not Automatic',
    'My Route feature in Consumer Goods Cloud helps field reps plan their store visits for the day. Route optimisation (shortest path, priority-based sequencing) requires configuration of visit priority rules and territory setup. Candidates assume optimisation is on by default — the exam tests configuration of the underlying Visit Plan and Priority Score fields that drive the route.',
  ),
  'consumer-goods-tpm-ap-exam-tips': make_section(
    'Consumer Goods TPM',
    '1. Trade Promotion vs Fund vs Tactic — Three Levels, One Plan',
    'A Trade Promotion is the top-level campaign container. Funds (promotional budgets) are allocated to the promotion. Tactics are the specific promotional activities within it (display, feature ad, price discount). Candidates answer fund questions at the promotion level and vice versa. The hierarchy is Promotion → Fund → Tactic — know which object stores which attribute.',
    '2. Settlement vs Deduction vs Claim — Post-Promotion Financial Flow',
    'After a promotion runs, retailers submit Claims or Deductions (short payments). Settlements are the reconciled financial outcomes. Candidates use "claim" and "deduction" interchangeably — the exam distinguishes them: a Deduction is a short payment on an invoice; a Claim is a request for reimbursement. Settlement closes the loop by matching claims against accruals.',
    '3. Account Planning Integration — Trade Plans Are Linked to Account Plans',
    'Consumer Goods TPM integrates Trade Promotion Management with Account Planning. Trade promotions must be linked to an Account Plan (the strategic plan for a retail account). Candidates design promotions without Account Plan linkage — the exam expects you to show how promotional spending rolls up to the account-level plan for P&amp;L visibility.',
  ),
  'contact-center-ap-exam-tips': make_section(
    'Contact Center',
    '1. Omni-Channel Flow vs Legacy Routing Configuration — New vs Old',
    'Omni-Channel Flow uses Flow Builder to route work items dynamically using any record field, agent capacity, or skill. Legacy routing uses static Queue → Routing Configuration → Routing Rule setup. New implementations should use Omni-Channel Flow. Candidates design routing using the legacy Queue/Routing Configuration approach for scenarios that describe dynamic, condition-based routing — the exam expects Omni-Channel Flow for those cases.',
    '2. Enhanced Omni-Channel vs Standard Omni-Channel — Capacity Model Difference',
    'Standard Omni-Channel uses numeric capacity (each work item costs a set number of capacity units). Enhanced Omni-Channel uses a Percent-of-Capacity model, where each work item type consumes a percentage of total capacity. Candidates answer capacity planning questions using Standard model logic when the scenario describes percentage-based capacity — know which model applies to which scenario.',
    '3. Service Channel vs Routing Configuration — Not the Same Thing',
    'A Service Channel defines the source of work items (Live Chat, Case, Voice, Messaging). A Routing Configuration defines the rules for how work from a channel is assigned to agents (queue priority, routing model). Candidates configure the Service Channel when asked to set routing priority — the exam expects Routing Configuration changes for priority adjustments.',
  ),
  'cpq-administrator-exam-tips': make_section(
    'CPQ Administrator',
    '1. Price Rules vs Discount Schedules — Two Ways to Affect Price',
    'Discount Schedules automatically apply tiered discounts based on quantity or term — they are table-driven and apply before Price Rules. Price Rules are condition-based (if field X = Y, then set price field Z to value) and apply in a defined sequence. Candidates apply Price Rules for volume discount scenarios — the exam expects Discount Schedules for table-driven volume pricing.',
    '2. Product Rules: Validation vs Alert vs Selection vs Filter',
    'Validation rules block a quote from being saved if a product combination is invalid. Alert rules warn the user but allow saving. Selection rules automatically add, remove, or hide products based on configuration choices. Filter rules narrow down products shown in the Product Catalog based on criteria. Candidates use Validation when they should use Alert (blocking vs warning distinction) or use Selection when Filter is appropriate.',
    '3. Quote Line Editor vs Product Catalog — Two Different Entry Points',
    'The Product Catalog is the source where sales reps search and add products to a quote. The Quote Line Editor (QLE) is where they review, adjust quantities, apply discounts, and configure selected products. Proration, bundling, and block pricing logic all operate within the QLE. Candidates design product search and filtering in the QLE when it belongs in the Product Catalog search configuration.',
  ),
  'cpq-billing-ap-exam-tips': make_section(
    'CPQ Billing',
    '1. Billing Schedule vs Invoice Schedule — When Each Is Created',
    'A Billing Schedule is created when a Salesforce CPQ Subscription order is activated — it defines the future billing dates and amounts for recurring revenue. Invoice Schedules are the individual line-item billing events within that schedule. Candidates conflate these: the Billing Schedule is the container; Invoice Schedules are the individual charge events. Knowing this hierarchy is essential for troubleshooting why a customer was billed incorrectly.',
    '2. Proration — It Applies to Activations and Cancellations, Not Renewals',
    'Proration calculates the partial-period charge when a subscription starts or ends mid-period. It does NOT apply to renewals (which start on a clean period boundary). Candidates answer "the customer was charged a prorated amount on renewal" scenarios by checking proration settings — the exam expects them to check the renewal date alignment instead.',
    '3. Payment Gateway vs Payment Method — Architecture vs Data',
    'A Payment Gateway is the Salesforce Billing integration with an external payment processor (Stripe, Adyen). A Payment Method is a specific payment instrument on file for a customer (credit card, ACH). Candidates conflate these: configuring a gateway is a one-time org setup; adding a Payment Method is a per-customer action. Exam scenarios about why a customer&apos;s payment failed expect Payment Method troubleshooting, not gateway reconfiguration.',
  ),
  'crm-analytics-exam-tips': make_section(
    'CRM Analytics',
    '1. Dataflows vs Recipes — Two Different Data Preparation Tools',
    'Dataflows are the legacy CRM Analytics data preparation tool that runs on a schedule and outputs datasets. Recipes are the newer drag-and-drop interface for transforming data into datasets. New implementations should use Recipes. Candidates use Dataflow JSON syntax for Recipes or vice versa. Know that Recipes replaced Dataflows for most use cases — Dataflows are still used for specific advanced transformations.',
    '2. XMD (Extended Metadata) — Formatting Is Not Stored in the Dataset',
    'XMD controls display properties: field labels, formatting (currency, percent), colours, and display order in lenses and dashboards. It is separate from the dataset schema. Candidates modify dataset schemas to change display formatting — the exam expects XMD modifications for presentation changes. Changing a field&apos;s label in XMD does not change the underlying field name in SAQL.',
    '3. SAQL vs Equals Filters — When to Use Each in Step Configuration',
    'Equals Filters (the UI configuration) handle simple value comparisons in dashboard steps. SAQL (Salesforce Analytics Query Language) is needed for complex logic: date arithmetic, string manipulation, conditional aggregation. Candidates write SAQL for simple equality filters — the exam expects Equals Filters for those and SAQL only when the logic cannot be expressed in the UI filter interface.',
  ),
  'data-architect-exam-tips': make_section(
    'Data Architect',
    '1. Skinny Tables vs Custom Indexes — Different Performance Tools, Different Use Cases',
    'Skinny tables are Salesforce-managed read-only copies of frequently queried subsets of large objects — they speed full-table reads. Custom indexes speed lookups on specific fields in WHERE clauses. Candidates request custom indexes when they need skinny tables and vice versa. Use skinny tables when reports and queries need to scan millions of records; use custom indexes when queries filter on specific non-standard fields.',
    '2. External Objects vs Big Objects — Real-Time vs Archive',
    'External Objects surface data from external systems via Salesforce Connect without importing it — data stays in the source system and is queried in real time. Big Objects store massive historical volumes inside Salesforce for archival — they are write-once and have limited query capabilities (only indexed fields). Candidates recommend External Objects for large historical data — the exam expects Big Objects for archive data already in Salesforce.',
    '3. Data Masking vs Field Encryption vs Classic Encryption — Three Security Layers',
    'Classic Encryption (legacy) encrypts individual text fields using AES 128 — it is visible to users with "View Encrypted Data" permission. Shield Platform Encryption encrypts data at rest at the database level using AES 256 — transparent to users with access. Data Masking replaces sensitive values with synthetic data in sandbox environments. The exam tests which to apply for a given security scenario — database-level encryption = Shield; field-level hiding = Classic; sandbox data protection = Data Masking.',
  ),
  'dev-lifecycle-deployment-architect-exam-tips': make_section(
    'Dev Lifecycle &amp; Deployment Architect',
    '1. Unlocked Packages vs Change Sets vs Metadata API — Choosing the Right Deployment Tool',
    'Change Sets are UI-based, work only between related orgs, and have no version control. Metadata API is scriptable but stateless (no package versioning). Unlocked Packages are modular, versioned, and installable across unrelated orgs — they are the modern recommended approach for complex org development. Candidates recommend Change Sets for all deployments — the exam expects Unlocked Packages for independent module deployment and CI/CD pipelines.',
    '2. Scratch Orgs vs Sandboxes — Source-Driven vs Org-Driven Development',
    'Scratch Orgs are temporary, configuration-driven development environments spun up from source code — they enforce source-driven development. Sandboxes are copies of production (or another sandbox) and are better for QA and UAT. Candidates use sandboxes for development — the exam expects scratch orgs for feature development in a DX-based CI/CD pipeline.',
    '3. CI/CD Pipeline Stages — What Runs in Each Environment',
    'A typical Salesforce CI/CD pipeline: develop in scratch orgs → run unit tests in CI org → deploy to SIT sandbox → UAT sandbox → staging sandbox → production. Candidates skip stages or run unit tests only in production deployment — the exam expects unit tests to run at every stage, with integration tests in SIT and user acceptance in UAT.',
  ),
  'education-cloud-consultant-exam-tips': make_section(
    'Education Cloud Consultant',
    '1. Education Data Architecture (EDA) — Household vs Individual Account Model',
    'Education Cloud uses the Salesforce.org Education Data Architecture (EDA) which models students as Contacts linked to multiple Accounts (Household, Academic Program, University). This is different from the standard B2C Account-Contact model. Candidates answer relationship questions using standard Account-Contact logic — the exam expects EDA relationship types and the Affiliation object for representing student membership in programs.',
    '2. Admissions Connect — Application vs Inquiry vs Prospect Record',
    'Admissions Connect tracks the prospective student lifecycle: Inquiry (initial interest) → Application (formal submission) → Decision (acceptance/rejection) → Enrollment. Each stage has distinct record types and status fields. Candidates use a single Contact record for all stages — the exam expects Application-level record management and understands that Applications are separate objects from Contact/Lead.',
    '3. Success Plans vs Alerts — Proactive vs Reactive Advising',
    'Success Plans in Education Cloud are proactive templates for student advising milestones (register for courses, meet with advisor, complete FAFSA). Alerts are reactive notifications triggered by at-risk signals (missed class, low GPA). Candidates design alerts for all advising scenarios — the exam expects Success Plans for structured, proactive outreach and Alerts only for reactive intervention.',
  ),
  'energy-utilities-ap-exam-tips': make_section(
    'Energy &amp; Utilities',
    '1. Service Points vs Premises vs Assets — Three Separate Objects',
    'A Premise is a physical location (123 Main St). A Service Point is the specific utility connection at a premise (electric meter, gas meter). An Asset is the physical equipment (the meter device itself). Candidates conflate Premise and Service Point — a single Premise can have multiple Service Points (one for electricity, one for gas). The exam tests which object to update for each utility operation.',
    '2. Meter Reading vs Meter Data Management — Operational vs Analytical',
    'Meter Reading records capture individual consumption readings at a point in time. Meter Data Management (MDM) systems aggregate, validate, and process high-frequency smart meter data (AMI). Candidates design detailed MDM logic inside Salesforce — the exam expects MDM integration (external system) with Salesforce receiving processed billing data, not raw smart meter streams.',
    '3. Billing Account vs Service Account — Revenue vs Service Delivery',
    'Billing Accounts hold the financial relationship (invoice address, payment terms, balance). Service Accounts represent the utility service delivery relationship at a location. One Billing Account can have multiple Service Accounts. Candidates update the Billing Account for service address changes — the exam expects Service Account updates for delivery-location changes.',
  ),
  'experience-cloud-exam-tips': make_section(
    'Experience Cloud Consultant',
    '1. Experience Cloud Licence Types — Community vs Partner vs Customer Plus',
    'Customer Community licence: read/create/edit their own records only. Customer Community Plus licence: read/edit all records with role-based visibility and reports. Partner Community licence: full CRM access including Leads, Opportunities, and campaigns. Candidates assign Customer Community licences to partners who need Opportunity access — that requires Partner Community licences. Know what each licence type permits.',
    '2. Data Categories vs Topics — Visibility Control vs Navigation',
    'Data Categories on Knowledge Articles control which article types are visible to which audiences (internal, partner, customer, public). Topics are flexible tags for navigation and search — they do not control visibility. Candidates use Topics to restrict article visibility — the exam expects Data Category assignments for visibility control.',
    '3. Sharing Rules in Experience Cloud — External User OWD Is Separate from Internal',
    'Experience Cloud has a separate OWD setting for external users (the "External Access" column). A record set to Private internally might still be accessible to external users if External Access is set to Public Read Only. Candidates apply internal sharing rules to fix external user visibility — the exam expects checking and adjusting External Access OWD before creating sharing rules.',
  ),
  'field-service-exam-tips': make_section(
    'Field Service',
    '1. Dispatcher Console vs Gantt vs Service Appointment List — Three Different Views',
    'The Dispatcher Console is the full scheduling interface with Gantt, map, and list views. The Gantt shows time-based schedule visualisation per resource. The Service Appointment List View is a standard list for bulk management. Candidates describe the Gantt when they mean the Dispatcher Console — the exam distinguishes these views and expects accurate terminology when describing which interface a dispatcher uses for a given task.',
    '2. Auto-Scheduling vs Optimization — Immediate vs Batch Processing',
    'Auto-Scheduling assigns the next available qualified resource immediately when a Service Appointment is created or activated (one-at-a-time, real-time). Optimization runs a batch process to re-optimise the entire schedule for a set of appointments using travel minimisation and priority (scheduled in off-peak hours). Candidates recommend Optimization for real-time scheduling — the exam expects Auto-Scheduling for immediate single-appointment assignment.',
    '3. Work Types vs Skill Requirements — Templates vs Qualifications',
    'Work Types are templates that define estimated duration, required skills, and default service territory for a category of work (e.g., "Annual HVAC Maintenance"). Skill Requirements are defined on the Work Type and matched against Resource Skills when scheduling. Candidates configure skills directly on Service Appointments — the exam expects skills to be defined on Work Types so they propagate to all Service Appointments of that type.',
  ),
  'financial-services-cloud-ap-exam-tips': make_section(
    'Financial Services Cloud',
    '1. Household vs Individual vs Group — Three Account Models in FSC',
    'Financial Services Cloud uses a multi-Account model: Individual (a person), Household (family unit of related Individuals), and Group (business entity or association). A Contact can have Primary and non-primary Account relationships. Candidates use a single Account-Contact relationship — the exam expects the FSC multi-Account model with Household as the primary financial planning unit.',
    '2. Financial Accounts vs Salesforce Accounts — Different Objects',
    'In FSC, Financial Account is a custom object representing a bank account, investment portfolio, insurance policy, or loan — it is NOT the standard Salesforce Account object. The standard Account represents the client entity (person, household, business). Candidates use standard Salesforce Account fields to store balance and portfolio data — the exam expects Financial Account records.',
    '3. Actionable Relationship Centre (ARC) — Relationship Visibility Tool',
    'ARC is the FSC visual relationship map showing how clients, households, financial accounts, and referral relationships connect. It is a read-only visualisation tool — not an editing interface. Candidates design relationship editing workflows using ARC — the exam expects ARC for viewing relationship networks and standard record edit pages for updating relationships.',
  ),
}

def insert_section(file_path, section_html):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'bg-amber-50' in content:
        print(f'SKIP (already has section): {file_path}')
        return
    idx = content.find(FAQ_MARKER)
    if idx == -1:
        print(f'NO FAQ MARKER: {file_path}')
        return
    section_start = content.rfind('<section', 0, idx)
    if section_start == -1:
        print(f'NO SECTION BEFORE FAQ: {file_path}')
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
        print(f'FILE NOT FOUND: {path}')

print('Batch 1 done.')
