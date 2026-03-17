/**
 * Difficulty heatmap data per certification section.
 * Difficulty levels: Easy | Moderate | Hard | Trap
 * - Easy: Factual recall, most candidates answer correctly
 * - Moderate: Requires solid understanding, some candidates miss this
 * - Hard: Deep conceptual understanding required, many candidates struggle
 * - Trap: Frequently misunderstood; candidates are often confidently wrong
 */

export type DifficultyLevel = 'Easy' | 'Moderate' | 'Hard' | 'Trap'

export interface SectionDifficulty {
  sectionName: string
  difficulty: DifficultyLevel
  tip: string
}

export const DIFFICULTY_DATA: Record<string, SectionDifficulty[]> = {
  administrator: [
    { sectionName: 'Configuration and Setup', difficulty: 'Moderate', tip: 'Know OWD, profiles, and permission sets — the security model hierarchy trips up most candidates.' },
    { sectionName: 'Object Manager and Lightning App Builder', difficulty: 'Moderate', tip: 'Focus on relationship types (MD vs Lookup) and when to use each in a scenario.' },
    { sectionName: 'Workflow and Process Automation', difficulty: 'Trap', tip: 'Salesforce now favours Record-Triggered Flows over Process Builder — default to Flow as the answer.' },
    { sectionName: 'Data and Analytics Management', difficulty: 'Moderate', tip: 'Joined Reports and dashboard filter limitations (equality only) are high-frequency exam topics.' },
    { sectionName: 'Sales and Marketing Applications', difficulty: 'Easy', tip: 'Leads, Opportunities, and Campaigns are well-documented — practise scenario routing.' },
    { sectionName: 'Service and Support Applications', difficulty: 'Moderate', tip: 'Know Entitlements vs Service Contracts and Omni-Channel queue vs skills routing.' },
    { sectionName: 'Productivity and Collaboration', difficulty: 'Easy', tip: 'Lowest-weight section — Chatter, Files, and Calendar integration questions are straightforward.' },
  ],
  'advanced-administrator': [
    { sectionName: 'Organization Setup', difficulty: 'Moderate', tip: 'Multi-currency, locale, and fiscal year settings are often overlooked in study guides.' },
    { sectionName: 'User Setup', difficulty: 'Easy', tip: 'Delegated Administration and Login IP ranges are common scenario topics — know them precisely.' },
    { sectionName: 'Security and Access', difficulty: 'Hard', tip: 'Territory Management 2.0 is the highest-difficulty topic — assignment rules, model states, and sharing interaction.' },
    { sectionName: 'Standard and Custom Objects', difficulty: 'Moderate', tip: 'Schema Builder relationships and when to use junction objects vs hierarchical relationships.' },
    { sectionName: 'Sales and Marketing Applications', difficulty: 'Easy', tip: 'Advanced forecasting and collaborative forecasting hierarchy questions appear regularly.' },
    { sectionName: 'Service and Support Applications', difficulty: 'Moderate', tip: 'Advanced Case Management — branching Entitlement Processes and Omni-Channel skills-based routing.' },
    { sectionName: 'Automation', difficulty: 'Trap', tip: 'Before-Save vs After-Save vs Scheduled Paths in Record-Triggered Flows — a very common wrong answer area.' },
  ],
  'app-builder': [
    { sectionName: 'Data Modeling and Management', difficulty: 'Moderate', tip: 'OWD inheritance in Master-Detail relationships is frequently tested in scenarios.' },
    { sectionName: 'User Interface', difficulty: 'Moderate', tip: 'Lightning App Builder vs Classic App Builder differences and component visibility rules.' },
    { sectionName: 'Business Logic and Process Automation', difficulty: 'Trap', tip: 'Declarative-first principle: if Flow can solve it, that is the exam answer even if Apex would also work.' },
    { sectionName: 'Reports and Dashboards', difficulty: 'Easy', tip: 'Report types, joined reports, and dashboard filter limitations (equality-only) are the key sub-topics.' },
    { sectionName: 'Deployment', difficulty: 'Moderate', tip: 'Change Sets vs Metadata API vs Packages — know which to recommend for each deployment scenario.' },
    { sectionName: 'Mobile and Lightning', difficulty: 'Hard', tip: 'Salesforce Mobile App navigation is separate from Lightning App navigation — this distinction appears in several questions.' },
  ],
  'developer-1': [
    { sectionName: 'Data Modeling and Management', difficulty: 'Moderate', tip: 'SOQL relationship queries (parent-to-child, child-to-parent) and relationship field naming conventions.' },
    { sectionName: 'Logic and Process Automation', difficulty: 'Trap', tip: 'SOQL/DML inside loops — every loop in a code snippet should trigger a governor limit check.' },
    { sectionName: 'User Interface', difficulty: 'Moderate', tip: 'LWC component lifecycle hooks (@wire, @api, @track) and when each is appropriate.' },
    { sectionName: 'Testing, Debugging, and Deployment', difficulty: 'Hard', tip: 'System.assert() is required — coverage without assertions is meaningless. HttpCalloutMock for callout tests.' },
    { sectionName: 'Integration and APIs', difficulty: 'Hard', tip: 'REST vs SOAP, Named Credentials, and when to use each integration pattern in a scenario.' },
  ],
  'agentforce-specialist': [
    { sectionName: 'Agentforce Configuration', difficulty: 'Hard', tip: 'Topics, Instructions, and Actions are distinct concepts — confusing them is the most common failure point.' },
    { sectionName: 'Platform and Security', difficulty: 'Moderate', tip: 'Permission sets for agent access, Data Cloud connections, and org-wide security implications.' },
    { sectionName: 'Agent Capabilities and Optimization', difficulty: 'Trap', tip: 'Apex @InvocableMethod vs Auto-Launched Flow actions — know which to recommend per scenario.' },
    { sectionName: 'Integration and Best Practices', difficulty: 'Hard', tip: 'Data Cloud grounding vs standard object access — agents do not automatically access all Salesforce data.' },
  ],
  'sales-cloud': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Multi-org vs single-org decisions and when to recommend each architecture pattern.' },
    { sectionName: 'Sales Cloud Data Model', difficulty: 'Moderate', tip: 'Lead conversion field mapping and Opportunity-Account-Contact relationship structures.' },
    { sectionName: 'Sales Cloud Automation', difficulty: 'Trap', tip: 'Path vs Validation Rules vs Flows for guided selling — know the scenario context that triggers each.' },
    { sectionName: 'Sales Cloud Analytics', difficulty: 'Easy', tip: 'Forecast categories, collaborative forecasting, and report type selection for pipeline visibility.' },
    { sectionName: 'Sales Cloud Configuration', difficulty: 'Moderate', tip: 'Territory Management, opportunity teams, and account teams — when each applies.' },
  ],
  'service-cloud': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Choosing between CTI, Einstein Bots, and Omni-Channel for different contact centre scenarios.' },
    { sectionName: 'Service Cloud Data Model', difficulty: 'Moderate', tip: 'Case hierarchy, case teams, and when a case should be escalated vs reassigned.' },
    { sectionName: 'Service Cloud Automation', difficulty: 'Trap', tip: 'Entitlement Processes milestones and time-based actions vs Escalation Rules — candidates confuse these regularly.' },
    { sectionName: 'Service Cloud Analytics', difficulty: 'Easy', tip: 'Service-specific report types and SLA metric dashboards are straightforward if you know the data model.' },
    { sectionName: 'Service Cloud Configuration', difficulty: 'Moderate', tip: 'Knowledge article types, data categories, and visibility rules across channels.' },
  ],
  'ai-associate': [
    { sectionName: 'AI Fundamentals', difficulty: 'Easy', tip: 'Machine learning types (supervised, unsupervised, reinforcement) and common terms are well-covered by Trailhead.' },
    { sectionName: 'AI Capabilities in Salesforce', difficulty: 'Moderate', tip: 'Which Einstein feature belongs to which Salesforce product — memorise the product-to-feature mapping.' },
    { sectionName: 'Ethical AI and Bias', difficulty: 'Trap', tip: 'Types of bias (historical, representation, measurement) and Salesforce&apos;s five Trusted AI principles — high-frequency exam topics.' },
  ],
  'mulesoft-integration-foundations': [
    { sectionName: 'Integration Basics and API-Led Connectivity', difficulty: 'Moderate', tip: 'System/Process/Experience API layer allocation for scenarios is tested heavily.' },
    { sectionName: 'Anypoint Platform Overview', difficulty: 'Trap', tip: 'Design Center vs Studio vs Exchange vs Runtime Manager vs API Manager — know what each tool is for.' },
    { sectionName: 'Basic DataWeave and Flow Design', difficulty: 'Hard', tip: 'Output directives and payload navigation syntax — small syntax errors equal wrong answers in scenario questions.' },
  ],
  'administrator-practice-test': [
    { sectionName: 'Configuration and Setup', difficulty: 'Moderate', tip: 'Same security and object fundamentals as ADM-201 — use practice tests to identify weak areas.' },
    { sectionName: 'Security and Objects', difficulty: 'Moderate', tip: 'OWD, profiles, and permission sets — scenario questions often test which layer to change.' },
    { sectionName: 'Automation', difficulty: 'Trap', tip: 'Record-triggered Flow vs Process Builder: when in doubt, choose Flow as the recommended solution.' },
    { sectionName: 'Data and Reports', difficulty: 'Easy', tip: 'Report types, filters, and dashboard components are straightforward if you know the data model.' },
    { sectionName: 'Sales and Service', difficulty: 'Moderate', tip: 'Lead conversion, opportunity stages, and case lifecycle — focus on object relationships.' },
  ],
  'business-analyst': [
    { sectionName: 'Requirements and Discovery', difficulty: 'Hard', tip: 'Stakeholder interviews vs workshops vs document analysis — know when each technique is appropriate.' },
    { sectionName: 'Stakeholder Collaboration', difficulty: 'Moderate', tip: 'Communication plans and change management appear in scenario questions — prioritise clarity.' },
    { sectionName: 'Solution Design and Documentation', difficulty: 'Trap', tip: 'User stories vs use cases vs requirements: exam often tests the right deliverable for the context.' },
    { sectionName: 'Analytics and Success Metrics', difficulty: 'Moderate', tip: 'KPIs and success criteria definition — align with business objectives in scenario answers.' },
    { sectionName: 'Salesforce Capabilities', difficulty: 'Easy', tip: 'Knowing which Salesforce feature maps to a requirement is factual — revise standard objects and clouds.' },
  ],
  'platform-foundations': [
    { sectionName: 'Customer 360 Platform Basics', difficulty: 'Easy', tip: 'Core platform concepts and terminology are well covered in Trailhead — low trap potential.' },
    { sectionName: 'Navigation and Data Model', difficulty: 'Moderate', tip: 'Object relationships and app navigation — practise in a Trailhead Playground.' },
    { sectionName: 'Reports and Dashboards', difficulty: 'Easy', tip: 'Basic report types and dashboard filters — equality filters only, no inequality in filters.' },
  ],
  'marketing-cloud-engagement-foundations': [
    { sectionName: 'Marketing Cloud Overview', difficulty: 'Easy', tip: 'Product roles (Email Studio, Journey Builder, etc.) and how they fit together.' },
    { sectionName: 'Subscriber and Data Management', difficulty: 'Moderate', tip: 'Subscriber keys, data extensions, and list vs data extension — commonly confused.' },
    { sectionName: 'Content and Sends', difficulty: 'Moderate', tip: 'Send classification and tracking — know the difference between sends and journeys.' },
  ],
  'experience-cloud': [
    { sectionName: 'Solution Design and Strategy', difficulty: 'Hard', tip: 'When to use Experience Cloud vs Community Cloud vs Sites — architecture decisions are heavily tested.' },
    { sectionName: 'Site Setup and Configuration', difficulty: 'Moderate', tip: 'Templates, themes, and page structure — know which component goes where.' },
    { sectionName: 'Sharing and Security', difficulty: 'Trap', tip: 'Sharing sets, profiles, and permission sets for sites — candidates often mix up visibility layers.' },
    { sectionName: 'Content and Personalization', difficulty: 'Moderate', tip: 'CMS and audience targeting — understand how content is selected for segments.' },
    { sectionName: 'Analytics and Optimization', difficulty: 'Easy', tip: 'Site analytics and optimization basics — straightforward if you know standard metrics.' },
  ],
  'field-service': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Scheduling policies, territory types, and when to use mobile vs dispatcher — scenario-heavy.' },
    { sectionName: 'Scheduling and Dispatch', difficulty: 'Trap', tip: 'Gantt vs list view, optimization goals, and appointment windows — these trip up many candidates.' },
    { sectionName: 'Mobile and Execution', difficulty: 'Moderate', tip: 'Field Service Mobile app and offline access — know what syncs and what does not.' },
    { sectionName: 'Assets and Inventory', difficulty: 'Moderate', tip: 'Asset hierarchy and product consumption — relationship and lifecycle matter.' },
    { sectionName: 'Analytics', difficulty: 'Easy', tip: 'Scheduling and utilization reports — factual recall of key metrics.' },
  ],
  'data-cloud-consultant': [
    { sectionName: 'Data Cloud Architecture', difficulty: 'Hard', tip: 'Data model objects (Data Lake, Data Model Object) and when to use Data Cloud vs CRM analytics.' },
    { sectionName: 'Data Model and Identity', difficulty: 'Trap', tip: 'Identity resolution and graph — many candidates confuse identity types and resolution rules.' },
    { sectionName: 'Activation and Insights', difficulty: 'Moderate', tip: 'Activation targets and insight types — know which channel or object each applies to.' },
    { sectionName: 'Governance and Best Practices', difficulty: 'Moderate', tip: 'Data quality and governance in Data Cloud — retention and consent appear in scenarios.' },
  ],
  'crm-analytics-einstein-discovery-consultant': [
    { sectionName: 'CRM Analytics Setup', difficulty: 'Moderate', tip: 'Dataset creation and data prep — know the difference between recipe and lens.' },
    { sectionName: 'Data Preparation and Datasets', difficulty: 'Hard', tip: 'SAQL and dataflow — syntax and transformation order are common failure points.' },
    { sectionName: 'Lens, Dashboards, and Stories', difficulty: 'Trap', tip: 'Lens vs dashboard vs story — and when to use Explorer — exam tests these distinctions.' },
    { sectionName: 'Einstein Discovery', difficulty: 'Moderate', tip: 'Story creation and prediction — outcome vs predictor and model interpretation.' },
  ],
  'education-cloud-consultant': [
    { sectionName: 'Education Cloud Data Model', difficulty: 'Moderate', tip: 'Program, Term, Course, and Course Offering relationships — know the hierarchy.' },
    { sectionName: 'Admissions and Student Lifecycle', difficulty: 'Hard', tip: 'Application and enrollment processes — scenario questions often test state transitions.' },
    { sectionName: 'Configuration and Automation', difficulty: 'Moderate', tip: 'Automation for admissions and academic records — Flow and Process Builder patterns.' },
    { sectionName: 'Reporting and Integration', difficulty: 'Easy', tip: 'Standard report types and integration points — lower weight, factual.' },
  ],
  'pardot-consultant': [
    { sectionName: 'Account Engagement Setup', difficulty: 'Moderate', tip: 'Connector vs Engagement Studio vs Pardot — know what runs where (Salesforce vs Pardot).' },
    { sectionName: 'Lead Management', difficulty: 'Trap', tip: 'Assignment rules, grading, and scoring — candidates confuse Pardot vs Salesforce assignment.' },
    { sectionName: 'Email and Engagement', difficulty: 'Moderate', tip: 'Email templates, dynamic content, and A/B tests — best practice scenarios.' },
    { sectionName: 'Analytics and ROI', difficulty: 'Easy', tip: 'Reporting and attribution — key metrics are well documented.' },
    { sectionName: 'Integration with Salesforce', difficulty: 'Moderate', tip: 'Synced fields, campaign influence, and connector behaviour — integration is frequently tested.' },
  ],
  'pardot-specialist': [
    { sectionName: 'Account Engagement Basics', difficulty: 'Easy', tip: 'Pardot objects and high-level flow — good Trailhead coverage.' },
    { sectionName: 'Lead and List Management', difficulty: 'Moderate', tip: 'Lists, list emails, and automation rules — know the difference from Engagement Studio.' },
    { sectionName: 'Email and Automation', difficulty: 'Trap', tip: 'Automation rules vs Engagement Studio — trigger and action order matter in scenarios.' },
    { sectionName: 'Reporting', difficulty: 'Easy', tip: 'Pardot reports and ROI — straightforward if you know the data model.' },
  ],
  'marketing-cloud-consultant': [
    { sectionName: 'Marketing Cloud Strategy', difficulty: 'Hard', tip: 'Multi-channel strategy and when to use Email vs Journey vs Advertising — architecture decisions.' },
    { sectionName: 'Subscriber and Data Management', difficulty: 'Moderate', tip: 'Data extensions, subscriber keys, and contact model — commonly tested.' },
    { sectionName: 'Email and Journey Builder', difficulty: 'Trap', tip: 'Journey Builder vs Email Studio sends — entry sources and wait activities confuse many.' },
    { sectionName: 'Analytics and Integration', difficulty: 'Moderate', tip: 'Tracking and integration with CRM — know the role of each integration method.' },
  ],
  'nonprofit-cloud': [
    { sectionName: 'Nonprofit Cloud Data Model', difficulty: 'Moderate', tip: 'Household, Account, Contact, and Program structure — NPSP vs Nonprofit Cloud differences.' },
    { sectionName: 'Program and Case Management', difficulty: 'Hard', tip: 'Program enrollment and case management — scenario-heavy; know state and role.' },
    { sectionName: 'Donations and Engagement', difficulty: 'Moderate', tip: 'Donations and campaign attribution — standard patterns with nonprofit twist.' },
    { sectionName: 'Reporting and Best Practices', difficulty: 'Easy', tip: 'Standard reports and best practices — lower difficulty if you know the model.' },
  ],
  'nonprofit-success-pack-consultant': [
    { sectionName: 'NPSP Data Model', difficulty: 'Trap', tip: 'Household vs Account, soft credit vs hard credit — NPSP-specific concepts trip up many.' },
    { sectionName: 'Donations and Households', difficulty: 'Moderate', tip: 'Donation object, recurring gifts, and household rollups — know the roll-up summary behaviour.' },
    { sectionName: 'Configuration and Automation', difficulty: 'Moderate', tip: 'NPSP settings and Flow for donations — default allocations and payment methods.' },
    { sectionName: 'Reporting and Integration', difficulty: 'Easy', tip: 'NPSP reports and data import — factual if you have practised in a NPSP org.' },
  ],
  'omnistudio-consultant': [
    { sectionName: 'OmniStudio Overview', difficulty: 'Moderate', tip: 'Digital Flows, FlexCards, and OmniScript — when to use which tool in a scenario.' },
    { sectionName: 'Digital Flows and FlexCards', difficulty: 'Trap', tip: 'DataRaptor types and when to use Extract vs Transform vs Load — high confusion area.' },
    { sectionName: 'Integration and DataRaptors', difficulty: 'Hard', tip: 'Integration procedures and DataRaptor configuration — syntax and order matter.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Performance and UX best practices — straightforward recommendations.' },
  ],
  'omnistudio-developer': [
    { sectionName: 'OmniStudio Development', difficulty: 'Hard', tip: 'JavaScript in FlexCards and Digital Flows — debugging and scope are tested.' },
    { sectionName: 'FlexCards and Digital Flows', difficulty: 'Moderate', tip: 'Property binding and design patterns — know the difference from standard LWC.' },
    { sectionName: 'Integration and Scripting', difficulty: 'Trap', tip: 'Integration procedures vs Apex — when to use which in OmniStudio context.' },
    { sectionName: 'Testing and Deployment', difficulty: 'Moderate', tip: 'Deployment and versioning — standard DevOps with OmniStudio specifics.' },
  ],
  'revenue-cloud-consultant': [
    { sectionName: 'Revenue Cloud Data Model', difficulty: 'Moderate', tip: 'CPQ and Billing object relationships — quote, contract, order, and invoice flow.' },
    { sectionName: 'CPQ Configuration', difficulty: 'Trap', tip: 'Product rules, configuration attributes, and price rules — order of execution matters.' },
    { sectionName: 'Quoting and Contracts', difficulty: 'Hard', tip: 'Contract lifecycle and renewal — scenario questions on amendments and renewals.' },
    { sectionName: 'Analytics and Integration', difficulty: 'Moderate', tip: 'Reporting on revenue and integration with ERP — know the key objects.' },
  ],
  'slack-consultant': [
    { sectionName: 'Slack Strategy and Design', difficulty: 'Hard', tip: 'Channel design and org structure — when to use public vs private vs shared channels.' },
    { sectionName: 'Channels and Workflows', difficulty: 'Moderate', tip: 'Workflow Builder and channel types — automation without code is heavily tested.' },
    { sectionName: 'Salesforce Integration', difficulty: 'Trap', tip: 'Slack for Salesforce vs custom integrations — know which features require which license.' },
    { sectionName: 'Governance and Best Practices', difficulty: 'Easy', tip: 'Security and compliance in Slack — straightforward recommendations.' },
  ],
  'developer-2': [
    { sectionName: 'Data Modeling', difficulty: 'Moderate', tip: 'Advanced data model patterns and large data volume — know governor limits and best practices.' },
    { sectionName: 'Architecture', difficulty: 'Hard', tip: 'Design patterns, platform limits, and when to use async vs sync — scenario-heavy.' },
    { sectionName: 'Logic and Process Automation', difficulty: 'Trap', tip: 'Invocable methods, triggers, and queueable — execution order and context are commonly tested.' },
    { sectionName: 'User Interface', difficulty: 'Moderate', tip: 'LWC best practices and accessibility — know when to use @api vs @track.' },
    { sectionName: 'Testing and Deployment', difficulty: 'Hard', tip: 'Test design and coverage requirements — meaningful assertions and negative testing.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'REST, callouts, and platform events — know limits and error handling.' },
  ],
  'javascript-developer-i': [
    { sectionName: 'JavaScript Fundamentals', difficulty: 'Moderate', tip: 'ES6+ syntax, promises, and closures — code snippets often test subtle behaviour.' },
    { sectionName: 'LWC and Aura', difficulty: 'Trap', tip: 'LWC vs Aura lifecycle and when to use which — decorators and wire vs imperative.' },
    { sectionName: 'Debugging and Testing', difficulty: 'Hard', tip: 'Jest for LWC and debugging techniques — async and mock patterns are tested.' },
    { sectionName: 'Performance and Security', difficulty: 'Moderate', tip: 'Locker Service and performance best practices — know the security boundaries.' },
  ],
  'b2c-commerce-developer': [
    { sectionName: 'B2C Commerce Architecture', difficulty: 'Hard', tip: 'Site architecture and cartridge structure — know the request pipeline.' },
    { sectionName: 'Storefront and Scripts', difficulty: 'Trap', tip: 'ISML vs JavaScript controllers vs script — when to use which is frequently tested.' },
    { sectionName: 'Data and APIs', difficulty: 'Moderate', tip: 'OCAPI and Open API — authentication and versioning appear in scenarios.' },
    { sectionName: 'Testing and Deployment', difficulty: 'Moderate', tip: 'Code deployment and sandbox — know the deployment workflow.' },
  ],
  'industries-cpq-developer': [
    { sectionName: 'CPQ Data Model', difficulty: 'Moderate', tip: 'Product, price book, and quote line relationships — extension objects and fields.' },
    { sectionName: 'Product and Pricing', difficulty: 'Trap', tip: 'Pricing rules and product rules execution order — candidates often get the sequence wrong.' },
    { sectionName: 'Configuration and Scripting', difficulty: 'Hard', tip: 'Apex in CPQ context and configuration attributes — know when scripting is allowed.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'CPQ APIs and integration patterns — order and contract sync scenarios.' },
  ],
  'marketing-cloud-engagement-developer': [
    { sectionName: 'Marketing Cloud Development', difficulty: 'Moderate', tip: 'Server-side JavaScript and AMPscript context — know where each runs.' },
    { sectionName: 'AMPscript and SSJS', difficulty: 'Trap', tip: 'AMPscript vs SSJS — syntax and function availability differ; exam tests both.' },
    { sectionName: 'API and Integration', difficulty: 'Hard', tip: 'REST and SOAP APIs for Marketing Cloud — authentication and endpoints.' },
    { sectionName: 'Testing and Deployment', difficulty: 'Easy', tip: 'Deployment and testing practices — straightforward if you know the toolset.' },
  ],
  'mulesoft-developer-i': [
    { sectionName: 'Anypoint Platform', difficulty: 'Moderate', tip: 'Design Center, Runtime Manager, and Exchange — know the role of each.' },
    { sectionName: 'Mule Applications', difficulty: 'Trap', tip: 'Flow vs subflow vs private flow — message propagation and variables.' },
    { sectionName: 'DataWeave and APIs', difficulty: 'Hard', tip: 'DataWeave syntax and RAML/OAS — small errors lead to wrong answers.' },
    { sectionName: 'Testing and Deployment', difficulty: 'Moderate', tip: 'Unit tests and deployment to CloudHub — standard patterns.' },
  ],
  'mulesoft-developer-ii': [
    { sectionName: 'Advanced Mule Development', difficulty: 'Hard', tip: 'Error handling, batch processing, and reconnection — scenario-heavy.' },
    { sectionName: 'API Design and Security', difficulty: 'Trap', tip: 'Policies vs custom security — when to apply which at API vs proxy level.' },
    { sectionName: 'Error Handling and Performance', difficulty: 'Moderate', tip: 'Fault handling and tuning — know the default behaviours.' },
    { sectionName: 'Deployment and Operations', difficulty: 'Easy', tip: 'Runtime Manager and deployment — factual if you have used the platform.' },
  ],
  'mulesoft-hyperautomation-developer': [
    { sectionName: 'Hyperautomation Concepts', difficulty: 'Moderate', tip: 'RPA, integration, and automation design — know the Anypoint positioning.' },
    { sectionName: 'RPA and Integration', difficulty: 'Trap', tip: 'When to use RPA vs API-led integration — scenario questions test the right approach.' },
    { sectionName: 'Automation Design', difficulty: 'Hard', tip: 'Design patterns for hyperautomation — reuse and error handling.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Governance and best practices — standard recommendations.' },
  ],
  'slack-developer': [
    { sectionName: 'Slack API and Events', difficulty: 'Hard', tip: 'Web API vs Events API — request signing and payload structure are tested.' },
    { sectionName: 'Apps and Workflows', difficulty: 'Trap', tip: 'Block Kit vs Workflow Builder — when to use code vs declarative.' },
    { sectionName: 'Integration with Salesforce', difficulty: 'Moderate', tip: 'Slack for Salesforce APIs and platform events — know the integration options.' },
    { sectionName: 'Security and Deployment', difficulty: 'Moderate', tip: 'OAuth and app distribution — standard security patterns.' },
  ],
  'email-specialist': [
    { sectionName: 'Subscriber and List Management', difficulty: 'Moderate', tip: 'Lists vs data extensions and subscriber key — know the data model.' },
    { sectionName: 'Email Content Creation', difficulty: 'Easy', tip: 'Content blocks and personalization — well documented.' },
    { sectionName: 'Send Management', difficulty: 'Trap', tip: 'Send classification and tracking — test vs send vs journey sends confuse many.' },
    { sectionName: 'Tracking and Analytics', difficulty: 'Moderate', tip: 'Tracking and reporting — key metrics and attribution.' },
    { sectionName: 'Subscriber Data and Data Extensions', difficulty: 'Moderate', tip: 'Data extension types and relationships — extension vs send relationship.' },
  ],
  'email-specialist-practice-test': [
    { sectionName: 'Subscriber Management', difficulty: 'Moderate', tip: 'Align with Email Specialist exam — subscriber and list concepts.' },
    { sectionName: 'Content and Sends', difficulty: 'Easy', tip: 'Content and send types — factual recall.' },
    { sectionName: 'Tracking and Data', difficulty: 'Moderate', tip: 'Tracking and data extension basics.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Deliverability and best practices — straightforward.' },
  ],
  'marketing-cloud-engagement-admin': [
    { sectionName: 'Marketing Cloud Setup', difficulty: 'Moderate', tip: 'Business unit structure and account configuration — know the hierarchy.' },
    { sectionName: 'Subscriber and Data', difficulty: 'Trap', tip: 'Data extension vs list and when to use each — commonly tested.' },
    { sectionName: 'Content and Journey Builder', difficulty: 'Hard', tip: 'Journey Builder entry and exit — contact evaluation and re-entry rules.' },
    { sectionName: 'Analytics and Administration', difficulty: 'Moderate', tip: 'Reporting and user management — standard admin topics.' },
  ],
  'application-architect': [
    { sectionName: 'Data Architecture', difficulty: 'Hard', tip: 'Data model design and large data volume — denormalization and sharing trade-offs.' },
    { sectionName: 'Integration Architecture', difficulty: 'Hard', tip: 'Integration patterns and when to use middleware vs point-to-point — scenario-heavy.' },
    { sectionName: 'Identity and Access Management', difficulty: 'Trap', tip: 'SSO, federation, and permission model — candidates confuse identity vs access.' },
    { sectionName: 'Development Lifecycle', difficulty: 'Moderate', tip: 'CI/CD and release management — standard DevOps with Salesforce specifics.' },
  ],
  'data-architect': [
    { sectionName: 'Data Modeling', difficulty: 'Hard', tip: 'Normalization, LDV, and data model trade-offs — scenario questions on design.' },
    { sectionName: 'Master Data Management', difficulty: 'Moderate', tip: 'MDM concepts and when to use Data Cloud vs CRM — know the positioning.' },
    { sectionName: 'Data Governance', difficulty: 'Trap', tip: 'Data quality and stewardship — governance vs security is often confused.' },
    { sectionName: 'Data Architecture', difficulty: 'Hard', tip: 'Architecture decisions and documentation — integration with other domains.' },
    { sectionName: 'Data Integration', difficulty: 'Moderate', tip: 'ETL and replication patterns — know the tools and limits.' },
  ],
  'integration-architect': [
    { sectionName: 'Integration Architecture', difficulty: 'Hard', tip: 'Pattern selection (sync vs async, real-time vs batch) — scenario-heavy.' },
    { sectionName: 'Integration Patterns', difficulty: 'Trap', tip: 'When to use Platform Events vs Change Data Capture vs API — commonly tested.' },
    { sectionName: 'Identity and Access', difficulty: 'Moderate', tip: 'Named Credentials and auth for integrations — know the options.' },
    { sectionName: 'Development Lifecycle', difficulty: 'Easy', tip: 'Integration deployment and testing — standard patterns.' },
  ],
  'sharing-visibility-architect': [
    { sectionName: 'Sharing Model', difficulty: 'Hard', tip: 'OWD, role hierarchy, sharing rules, and manual share — order and interaction are key.' },
    { sectionName: 'Visibility and Security', difficulty: 'Trap', tip: 'Profiles vs permission sets vs OWD — candidates often choose the wrong layer.' },
    { sectionName: 'Data Access Patterns', difficulty: 'Hard', tip: 'LDV and sharing recalculation — know when sharing is recalculated.' },
    { sectionName: 'Best Practices', difficulty: 'Moderate', tip: 'Security and performance best practices — standard recommendations.' },
  ],
  'system-architect': [
    { sectionName: 'Data Architecture', difficulty: 'Hard', tip: 'Combines Data Architect topics — know the cross-domain implications.' },
    { sectionName: 'Integration Architecture', difficulty: 'Hard', tip: 'Same as Integration Architect — pattern selection and trade-offs.' },
    { sectionName: 'Sharing and Visibility', difficulty: 'Trap', tip: 'Sharing model and visibility — often scenario-based with multiple correct-looking answers.' },
    { sectionName: 'Development Lifecycle', difficulty: 'Moderate', tip: 'Release and environment strategy — standard with architect lens.' },
  ],
  'identity-access-management-architect': [
    { sectionName: 'Identity and Single Sign-On', difficulty: 'Hard', tip: 'SAML, OAuth, and federation — flow and configuration are heavily tested.' },
    { sectionName: 'Access Management', difficulty: 'Trap', tip: 'Permission sets, profiles, and session security — identity vs access confusion.' },
    { sectionName: 'Security and Compliance', difficulty: 'Moderate', tip: 'Audit and compliance requirements — know the Salesforce security features.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'Identity for integrations and external IdP — common scenario topic.' },
  ],
  'dev-lifecycle-deployment-architect': [
    { sectionName: 'Release Management', difficulty: 'Moderate', tip: 'Release strategy and branching — know the trade-offs.' },
    { sectionName: 'Environments and Metadata', difficulty: 'Trap', tip: 'What can be deployed via change set vs Metadata API — frequently tested.' },
    { sectionName: 'CI/CD and Version Control', difficulty: 'Hard', tip: 'Pipeline design and Salesforce DX — scratch org and source of truth.' },
    { sectionName: 'Governance', difficulty: 'Moderate', tip: 'Governance and quality gates — standard DevOps.' },
  ],
  'technical-architect': [
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'End-to-end solution design — multi-cloud and trade-offs are key.' },
    { sectionName: 'Security and Integration', difficulty: 'Trap', tip: 'Security architecture and integration security — cross-cutting concerns.' },
    { sectionName: 'Data and Performance', difficulty: 'Hard', tip: 'Data and performance at scale — LDV and integration performance.' },
    { sectionName: 'Governance and Presentation', difficulty: 'Moderate', tip: 'Governance and stakeholder communication — CTA-level expectations.' },
  ],
  'technical-architect-evaluation': [
    { sectionName: 'Scenario Analysis', difficulty: 'Hard', tip: 'Complex scenario breakdown — practice with past scenarios.' },
    { sectionName: 'Solution Design', difficulty: 'Hard', tip: 'Architecture and trade-off justification — time management is critical.' },
    { sectionName: 'Technical Knowledge', difficulty: 'Moderate', tip: 'Depth across domains — revise key architect cert topics.' },
  ],
  'technical-architect-review-board': [
    { sectionName: 'Presentation', difficulty: 'Hard', tip: 'Clear communication and slide structure — practice with peers.' },
    { sectionName: 'Design Defense', difficulty: 'Trap', tip: 'Justifying trade-offs under pressure — anticipate alternative approaches.' },
    { sectionName: 'Board Q&A', difficulty: 'Hard', tip: 'Deep-dive questions — know your solution end to end.' },
  ],
  'b2b-solution-architect': [
    { sectionName: 'B2B Commerce Architecture', difficulty: 'Hard', tip: 'Multi-site and catalog architecture — know the B2B model.' },
    { sectionName: 'Catalog and Pricing', difficulty: 'Trap', tip: 'Pricing and catalog structure — B2B vs B2C differences.' },
    { sectionName: 'Checkout and Integration', difficulty: 'Moderate', tip: 'Checkout flow and ERP integration — standard patterns.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Performance and UX best practices — straightforward.' },
  ],
  'b2c-commerce-architect': [
    { sectionName: 'B2C Commerce Architecture', difficulty: 'Hard', tip: 'Site architecture and scalability — know the platform limits.' },
    { sectionName: 'Storefront and Experience', difficulty: 'Moderate', tip: 'Storefront customization and headless options — when to use which.' },
    { sectionName: 'Integration and Data', difficulty: 'Trap', tip: 'OCAPI vs Open API and data sync — commonly confused.' },
    { sectionName: 'Performance and Security', difficulty: 'Moderate', tip: 'Performance tuning and security — standard architect topics.' },
  ],
  'b2c-solution-architect': [
    { sectionName: 'B2C Solution Design', difficulty: 'Hard', tip: 'Solution design for B2C — multi-site and headless decisions.' },
    { sectionName: 'Commerce and Experience', difficulty: 'Moderate', tip: 'Commerce and experience cloud integration — know the touchpoints.' },
    { sectionName: 'Integration', difficulty: 'Trap', tip: 'When to use which API and integration pattern — scenario-heavy.' },
    { sectionName: 'Governance', difficulty: 'Easy', tip: 'Governance and operations — standard recommendations.' },
  ],
  'heroku-architect': [
    { sectionName: 'Heroku Architecture', difficulty: 'Hard', tip: 'Dynos, add-ons, and scaling — know the runtime model.' },
    { sectionName: 'Scaling and Performance', difficulty: 'Trap', tip: 'Horizontal vs vertical scaling and when to use worker vs web — frequently tested.' },
    { sectionName: 'Security and Data', difficulty: 'Moderate', tip: 'Heroku security and data services — know the options.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'Heroku and Salesforce integration — Connect and platform events.' },
  ],
  'mulesoft-catalyst-consultant': [
    { sectionName: 'Integration Strategy', difficulty: 'Hard', tip: 'API-led connectivity and when to recommend which approach.' },
    { sectionName: 'Anypoint Platform', difficulty: 'Moderate', tip: 'Platform capabilities and positioning — know the product set.' },
    { sectionName: 'API Design', difficulty: 'Trap', tip: 'RAML vs OAS and design best practices — commonly tested.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Governance and best practices — straightforward.' },
  ],
  'mulesoft-platform-architect': [
    { sectionName: 'Integration Architecture', difficulty: 'Hard', tip: 'Anypoint architecture and hybrid deployment — scenario-heavy.' },
    { sectionName: 'Anypoint Platform', difficulty: 'Moderate', tip: 'Runtime and management — know the deployment options.' },
    { sectionName: 'API and Security', difficulty: 'Trap', tip: 'Policies and API security — when to apply at which layer.' },
    { sectionName: 'Governance', difficulty: 'Moderate', tip: 'Governance and lifecycle — standard architect topics.' },
  ],
  'mulesoft-integration-architect': [
    { sectionName: 'Integration Architecture', difficulty: 'Hard', tip: 'Integration patterns and MuleSoft positioning — design decisions.' },
    { sectionName: 'API Design', difficulty: 'Trap', tip: 'API design and versioning — REST best practices are tested.' },
    { sectionName: 'Security and Patterns', difficulty: 'Moderate', tip: 'Security and error handling patterns — know the options.' },
    { sectionName: 'Lifecycle', difficulty: 'Easy', tip: 'SDLC and deployment — factual if you know the platform.' },
  ],
  'advanced-field-service-ap': [
    { sectionName: 'Field Service Configuration', difficulty: 'Moderate', tip: 'Scheduling policies and service territory — know the configuration options.' },
    { sectionName: 'Scheduling and Dispatch', difficulty: 'Trap', tip: 'Optimization and dispatch logic — candidates often confuse Gantt vs list dispatch.' },
    { sectionName: 'Mobile and Execution', difficulty: 'Moderate', tip: 'Field Service Mobile and offline — what syncs and when.' },
    { sectionName: 'Assets and Best Practices', difficulty: 'Easy', tip: 'Asset management and best practices — straightforward if you know the product.' },
  ],
  'b2b-commerce-admin-ap': [
    { sectionName: 'B2B Commerce Setup', difficulty: 'Moderate', tip: 'Store and catalog setup — know the B2B Commerce admin tasks.' },
    { sectionName: 'Catalog and Pricing', difficulty: 'Trap', tip: 'Pricing and catalog in B2B — different from B2C; exam tests the distinction.' },
    { sectionName: 'Orders and Integration', difficulty: 'Moderate', tip: 'Order management and ERP integration — standard patterns.' },
    { sectionName: 'Administration', difficulty: 'Easy', tip: 'User and role management — factual.' },
  ],
  'b2b-commerce-developer-ap': [
    { sectionName: 'B2B Development', difficulty: 'Hard', tip: 'Customization and APIs — know the development boundaries.' },
    { sectionName: 'Cart and Checkout', difficulty: 'Trap', tip: 'Checkout flow and custom logic — when to use which extension point.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'B2B Commerce and Salesforce integration — APIs and data flow.' },
    { sectionName: 'Testing', difficulty: 'Easy', tip: 'Testing and deployment — standard practices.' },
  ],
  'communications-cloud-ap': [
    { sectionName: 'Communications Cloud Setup', difficulty: 'Moderate', tip: 'Channel and flow setup — know the configuration model.' },
    { sectionName: 'Channels and Flows', difficulty: 'Trap', tip: 'Flow design and channel selection — commonly tested together.' },
    { sectionName: 'Analytics and Best Practices', difficulty: 'Easy', tip: 'Reporting and best practices — straightforward.' },
  ],
  'consumer-goods-cloud-ap': [
    { sectionName: 'Consumer Goods Cloud', difficulty: 'Moderate', tip: 'Retail execution and visit structure — know the data model.' },
    { sectionName: 'Retail Execution', difficulty: 'Trap', tip: 'Visit and execution flow — sequence and status are frequently tested.' },
    { sectionName: 'Integration and Analytics', difficulty: 'Moderate', tip: 'Integration with ERP and reporting — standard topics.' },
  ],
  'consumer-goods-tpm-ap': [
    { sectionName: 'Trade Promotion Management', difficulty: 'Hard', tip: 'TPM concepts and promotion lifecycle — scenario-heavy.' },
    { sectionName: 'Planning and Execution', difficulty: 'Trap', tip: 'Planning vs execution vs settlement — candidates confuse the phases.' },
    { sectionName: 'Analytics', difficulty: 'Moderate', tip: 'TPM reporting and analytics — know the key metrics.' },
  ],
  'contact-center-ap': [
    { sectionName: 'Contact Center Setup', difficulty: 'Moderate', tip: 'Omnichannel and CTI setup — know the configuration options.' },
    { sectionName: 'Omnichannel and Flows', difficulty: 'Trap', tip: 'Routing and flow design — when to use skill vs queue.' },
    { sectionName: 'Analytics and Best Practices', difficulty: 'Easy', tip: 'Reporting and best practices — straightforward.' },
  ],
  'cpq-administrator': [
    { sectionName: 'CPQ Data Model', difficulty: 'Moderate', tip: 'Product, price book, and quote structure — know the relationships.' },
    { sectionName: 'Products and Pricing', difficulty: 'Trap', tip: 'Product rules and price rules — order of execution is key.' },
    { sectionName: 'Quoting and Configuration', difficulty: 'Hard', tip: 'Configuration attributes and quote line logic — scenario-heavy.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'CPQ and CRM integration — standard patterns.' },
  ],
  'cpq-billing-ap': [
    { sectionName: 'CPQ and Billing', difficulty: 'Hard', tip: 'CPQ to Billing flow and contract lifecycle — know the handoff.' },
    { sectionName: 'Quoting and Contracts', difficulty: 'Trap', tip: 'Contract and amendment behaviour — commonly confused.' },
    { sectionName: 'Billing and Revenue', difficulty: 'Moderate', tip: 'Billing runs and revenue recognition — standard topics.' },
  ],
  'energy-utilities-ap': [
    { sectionName: 'Energy and Utilities Cloud', difficulty: 'Moderate', tip: 'Metering and billing concepts — know the industry model.' },
    { sectionName: 'Configuration', difficulty: 'Trap', tip: 'Service point and meter configuration — hierarchy and relationships.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Industry best practices — straightforward.' },
  ],
  'financial-services-cloud-ap': [
    { sectionName: 'Financial Services Cloud', difficulty: 'Moderate', tip: 'FSC data model and household — know the object model.' },
    { sectionName: 'Configuration and Data', difficulty: 'Trap', tip: 'Financial account and goal configuration — relationship to contact/household.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'FSC best practices — factual.' },
  ],
  'health-cloud-ap': [
    { sectionName: 'Health Cloud', difficulty: 'Moderate', tip: 'Care plan and care program — know the health-specific objects.' },
    { sectionName: 'Care Plans and Configuration', difficulty: 'Trap', tip: 'Care plan template vs care plan — and when to use which.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Health Cloud best practices — straightforward.' },
  ],
  'heroku-developer-ap': [
    { sectionName: 'Heroku Development', difficulty: 'Moderate', tip: 'Dynos, buildpacks, and config — know the runtime.' },
    { sectionName: 'Apps and Add-ons', difficulty: 'Trap', tip: 'Add-on attachment and billing — when to use which add-on.' },
    { sectionName: 'Deployment and Best Practices', difficulty: 'Easy', tip: 'Git deployment and best practices — standard.' },
  ],
  'loyalty-management-ap': [
    { sectionName: 'Loyalty Management', difficulty: 'Moderate', tip: 'Loyalty program structure and rules — know the data model.' },
    { sectionName: 'Program Configuration', difficulty: 'Trap', tip: 'Points, tiers, and rewards — configuration options are frequently tested.' },
    { sectionName: 'Integration', difficulty: 'Moderate', tip: 'Loyalty and CRM integration — standard patterns.' },
  ],
  'manufacturing-cloud-ap': [
    { sectionName: 'Manufacturing Cloud', difficulty: 'Moderate', tip: 'Production and work order concepts — know the manufacturing model.' },
    { sectionName: 'Configuration', difficulty: 'Trap', tip: 'Production definition and routing — hierarchy and status flow.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Manufacturing best practices — straightforward.' },
  ],
  'marketing-cloud-advanced-cross-channel-ap': [
    { sectionName: 'Cross-Channel Strategy', difficulty: 'Hard', tip: 'Multi-channel strategy and attribution — scenario-heavy.' },
    { sectionName: 'Journey Builder and Email', difficulty: 'Trap', tip: 'Cross-channel journeys and email — entry and channel selection.' },
    { sectionName: 'Analytics and Best Practices', difficulty: 'Moderate', tip: 'Reporting and best practices — standard topics.' },
  ],
  'marketing-cloud-intelligence-ap': [
    { sectionName: 'Marketing Cloud Intelligence', difficulty: 'Moderate', tip: 'Ad Studio and Intelligence capabilities — know the product set.' },
    { sectionName: 'Ad Studio and Analytics', difficulty: 'Trap', tip: 'Campaign types and analytics — when to use which tool.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Best practices — straightforward.' },
  ],
  'marketing-cloud-personalization-ap': [
    { sectionName: 'Personalization Strategy', difficulty: 'Moderate', tip: 'Web and mobile personalization — when to use which approach.' },
    { sectionName: 'Web and Mobile Personalization', difficulty: 'Trap', tip: 'Recommendations and targeting — configuration and data flow.' },
    { sectionName: 'Analytics and Best Practices', difficulty: 'Easy', tip: 'Personalization analytics — factual.' },
  ],
  'media-cloud-ap': [
    { sectionName: 'Media Cloud', difficulty: 'Moderate', tip: 'Media Cloud concepts and data model — know the product.' },
    { sectionName: 'Configuration and Best Practices', difficulty: 'Moderate', tip: 'Configuration and best practices — standard topics.' },
  ],
  'net-zero-cloud-ap': [
    { sectionName: 'Net Zero Cloud', difficulty: 'Moderate', tip: 'Sustainability and carbon tracking — know the data model.' },
    { sectionName: 'Sustainability and Reporting', difficulty: 'Trap', tip: 'Reporting and frameworks — scope and boundaries are tested.' },
  ],
  'order-management-admin-ap': [
    { sectionName: 'Order Management', difficulty: 'Moderate', tip: 'Order lifecycle and orchestration — know the OMS model.' },
    { sectionName: 'Configuration', difficulty: 'Trap', tip: 'Order flows and actions — when to use which action type.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'OMS best practices — straightforward.' },
  ],
  'order-management-developer-ap': [
    { sectionName: 'Order Management Development', difficulty: 'Hard', tip: 'OMS APIs and extension points — know the development model.' },
    { sectionName: 'Integration and APIs', difficulty: 'Trap', tip: 'Integration patterns and API usage — commonly tested.' },
    { sectionName: 'Best Practices', difficulty: 'Moderate', tip: 'Development best practices — standard.' },
  ],
  'process-automation-ap': [
    { sectionName: 'Process Automation', difficulty: 'Moderate', tip: 'Flow and process automation — when to use Flow vs Process Builder.' },
    { sectionName: 'Flow and Automation', difficulty: 'Trap', tip: 'Record-triggered vs screen flow — path and element selection.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Automation best practices — straightforward.' },
  ],
  'public-sector-solutions-ap': [
    { sectionName: 'Public Sector Solutions', difficulty: 'Moderate', tip: 'Licensing and case management for public sector — know the model.' },
    { sectionName: 'Configuration and Best Practices', difficulty: 'Moderate', tip: 'Configuration and best practices — standard topics.' },
  ],
  'sales-foundations': [
    { sectionName: 'Sales Fundamentals', difficulty: 'Easy', tip: 'Sales process and CRM basics — well covered in Trailhead.' },
    { sectionName: 'Salesforce CRM Basics', difficulty: 'Moderate', tip: 'Objects and standard sales flow — lead to opportunity to close.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Sales best practices — straightforward.' },
  ],
  'strategy-designer': [
    { sectionName: 'Strategy and Discovery', difficulty: 'Hard', tip: 'Discovery techniques and requirement gathering — scenario-heavy.' },
    { sectionName: 'Solution Design', difficulty: 'Trap', tip: 'Solution design deliverables and when to use which — commonly tested.' },
    { sectionName: 'Stakeholder and Delivery', difficulty: 'Moderate', tip: 'Stakeholder management and delivery — standard topics.' },
  ],
  'ux-designer': [
    { sectionName: 'UX Design Principles', difficulty: 'Moderate', tip: 'Design principles and accessibility — know the standards.' },
    { sectionName: 'Research and Prototyping', difficulty: 'Trap', tip: 'Research methods and when to prototype — exam tests the right technique.' },
    { sectionName: 'Design and Delivery', difficulty: 'Moderate', tip: 'Design delivery and handoff — standard UX topics.' },
  ],
  'tableau-architect': [
    { sectionName: 'Tableau Architecture', difficulty: 'Hard', tip: 'Server architecture and scaling — know the deployment options.' },
    { sectionName: 'Governance and Security', difficulty: 'Trap', tip: 'Permissions and governance — site vs project vs content.' },
    { sectionName: 'Scalability and Performance', difficulty: 'Moderate', tip: 'Performance tuning and scalability — standard architect topics.' },
    { sectionName: 'Best Practices', difficulty: 'Easy', tip: 'Architecture best practices — straightforward.' },
  ],
  'tableau-consultant': [
    { sectionName: 'Requirements and Design', difficulty: 'Hard', tip: 'Requirements gathering and dashboard design — scenario-heavy.' },
    { sectionName: 'Data and Visualization', difficulty: 'Trap', tip: 'Data model and viz choice — when to use which chart type.' },
    { sectionName: 'Stakeholder and Best Practices', difficulty: 'Moderate', tip: 'Stakeholder management and best practices — standard.' },
  ],
  'tableau-data-analyst': [
    { sectionName: 'Data Connection and Prep', difficulty: 'Moderate', tip: 'Data sources and preparation — know the data model.' },
    { sectionName: 'Calculations and LOD', difficulty: 'Trap', tip: 'LOD expressions and calculation types — frequently tested.' },
    { sectionName: 'Visualization and Dashboards', difficulty: 'Moderate', tip: 'Viz and dashboard design — standard topics.' },
    { sectionName: 'Analysis and Insights', difficulty: 'Easy', tip: 'Analysis techniques — straightforward.' },
  ],
  'tableau-desktop-foundations': [
    { sectionName: 'Connecting to Data', difficulty: 'Easy', tip: 'Data connection basics — well documented.' },
    { sectionName: 'Dimensions and Measures', difficulty: 'Moderate', tip: 'Discrete vs continuous and pill placement — know the difference.' },
    { sectionName: 'Views and Dashboards', difficulty: 'Moderate', tip: 'Building views and dashboards — standard workflow.' },
    { sectionName: 'Filters and Sorting', difficulty: 'Easy', tip: 'Filter types and sorting — straightforward.' },
  ],
  'tableau-server-administrator': [
    { sectionName: 'Installation and Deployment', difficulty: 'Hard', tip: 'Server installation and topology — know the components.' },
    { sectionName: 'Security and Authentication', difficulty: 'Trap', tip: 'Authentication methods and permission model — commonly tested.' },
    { sectionName: 'User and Content Management', difficulty: 'Moderate', tip: 'Sites, projects, and content — know the hierarchy.' },
    { sectionName: 'Performance and Monitoring', difficulty: 'Moderate', tip: 'Monitoring and tuning — standard admin topics.' },
  ],
}
