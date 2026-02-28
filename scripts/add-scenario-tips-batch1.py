#!/usr/bin/env python3
"""Batch 1: Admin/Dev + Consultant track — adds 'How to Pass' section to 22 cert pages."""
import os

BASE = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app/certifications"

CERTS = {
    "administrator": (
        "Salesforce Administrator",
        "The ADM-201 exam is entirely scenario-based: each question describes a business problem and asks you to pick the correct native Salesforce feature. Mastering the mental map of which tool solves which problem is the single most important skill.",
        [
            ("Know Your Automation Toolkit", "Understand when to use Record-Triggered Flows (replacing Workflow Rules and Process Builder), Approval Processes for multi-step human approvals, and Scheduled Flows for time-based logic. The exam always tests the right tool for a given requirement."),
            ("Sharing & Security Is the Highest-Weighted Topic", "Org-Wide Defaults, Role Hierarchies, Sharing Rules, Profiles, and Permission Sets — know how each layer grants or restricts access and the order in which they are evaluated. Most security questions hinge on knowing the minimum-access principle."),
            ("Reports vs. Dashboards", "Know the four report types (Tabular, Summary, Matrix, Joined) and when each applies. Dashboards refresh from source reports and require a running user whose access determines which data appears."),
            ("Data Management Fundamentals", "Understand import/export tools (Data Import Wizard vs. Data Loader), field-level security, validation rules, and duplicate management. The exam regularly tests which import tool is appropriate for a given scenario."),
            ("Read Every Question for the Key Constraint", "Watch for qualifiers like &apos;declarative only,&apos; &apos;minimum configuration,&apos; or &apos;without code.&apos; These constraints eliminate most distractors and point to the correct answer."),
        ]
    ),
    "advanced-administrator": (
        "Salesforce Advanced Administrator",
        "The Advanced Administrator exam builds on ADM-201 with deeper feature knowledge and architectural judgment. You are expected to know not just what a feature does, but when and why to choose it over alternatives in complex, multi-requirement scenarios.",
        [
            ("Advanced Automation: Flows with Custom Metadata", "Know how to use Custom Metadata Types and Custom Settings to drive business logic in Flows without hardcoding values. Understand Flow collection variables, loops, and decision elements for complex multi-step automation."),
            ("Change Sets &amp; Deployment", "Know change set limitations (what cannot be deployed, dependent components), the difference between outbound and inbound change sets, and how sandboxes relate to production. Understand the full deployment lifecycle."),
            ("Advanced Reporting: Joined Reports &amp; Buckets", "Know when to use Joined Reports to combine data from multiple objects, how bucketing fields replaces formula fields for grouping, and how cross-filter reports restrict records based on related data."),
            ("Complex Security: Delegated Administration", "Understand how Delegated Administrators work and their limitations. Know how Field-Level Security interacts with page layouts and record access, and how to diagnose access issues using the Access Checker."),
            ("Territory Management", "Enterprise Territory Management questions test assignment rules, territory hierarchies, and how territories interact with opportunity and account ownership. Know how to configure and troubleshoot territory-based forecasting."),
        ]
    ),
    "app-builder": (
        "Salesforce App Builder",
        "The App Builder exam is heavily scenario-based, testing your ability to choose the right declarative tool for each business requirement. Questions often describe a business need and ask you to select the best solution — declarative first, programmatic only when necessary.",
        [
            ("Declarative vs. Programmatic Boundaries", "Know exactly when declarative tools (Flow, validation rules, formula fields) are sufficient vs. when Apex or custom development is needed. The exam strongly favors declarative-first answers unless the scenario requires code."),
            ("Flow Builder Is Central", "Understand all flow types: Screen Flows, Record-Triggered Flows (before/after save), Scheduled Flows, and Auto-Launched Flows. Know which trigger event to use for each scenario and when to use subflows."),
            ("Data Modeling Decisions", "Know when to use lookup vs. master-detail relationships, junction objects for many-to-many, and how roll-up summary fields only work with master-detail. Schema Builder visualizes relationships during design."),
            ("Lightning App Builder &amp; Page Assignments", "Understand how to configure Lightning pages, assign them to profiles and record types, and the difference between App, Home, and Record pages. Know when to use standard vs. custom components."),
            ("Sandbox Types &amp; Change Sets", "Know the four sandbox types (Developer, Developer Pro, Partial Copy, Full), their data/metadata characteristics, and change set limitations. Understand the recommended change management process for Salesforce orgs."),
        ]
    ),
    "developer-2": (
        "Salesforce Platform Developer II",
        "The PD2 exam requires deep technical expertise — questions assume you can read and reason about code, not just identify syntax. Focus on complex governor limit scenarios, asynchronous patterns, integration architecture, and enterprise design principles.",
        [
            ("Asynchronous Apex Mastery", "Know all four async patterns: Queueable (chainable, stateful), Batch (large data sets), Scheduled (time-based), and Future (simple async). Understand governor limits in async contexts (higher SOQL/DML limits) and when each pattern is appropriate."),
            ("Integration Architecture Decisions", "REST vs. SOAP vs. Platform Events vs. Change Data Capture — know the use cases for each. Understand outbound messaging, callout limits, Named Credentials, and how to handle integration errors gracefully."),
            ("Platform Events &amp; Event-Driven Architecture", "Know how Platform Events enable event-driven, decoupled architectures. Understand the difference between Platform Events and CDC, how to publish events from Apex and Flows, and how subscribers process events reliably."),
            ("LWC Advanced Patterns", "Understand component communication patterns: parent-to-child via properties, child-to-parent via custom events, and sibling communication via a shared service. Know when to use @wire vs. imperative Apex calls."),
            ("Testing Architecture", "PD2 emphasizes test design: mock callouts with Test.setMock, test data isolation (SeeAllData=false), testing async Apex with Test.startTest/stopTest, and achieving meaningful code coverage vs. superficial coverage."),
        ]
    ),
    "javascript-developer-i": (
        "Salesforce JavaScript Developer I",
        "The JavaScript Developer I exam tests core JavaScript and modern web concepts applied in the Salesforce context. Treat it as a JavaScript fundamentals exam first — LWC knowledge is important, but strong ES6+ and async programming foundations are what carry candidates through.",
        [
            ("Master ES6+ Syntax", "Arrow functions, destructuring, spread/rest operators, template literals, modules (import/export), and classes are heavily tested. Know how each differs from ES5 equivalents and common pitfalls."),
            ("Promises &amp; Async/Await", "Understand the Promise lifecycle (pending, fulfilled, rejected), chaining with .then()/.catch()/.finally(), and how async/await is syntactic sugar over promises. Know how errors propagate and how Promise.all() works."),
            ("Closures, Scope &amp; &apos;this&apos;", "These classic JavaScript topics appear frequently. Understand lexical scope, how closures capture variables from outer functions, and the four rules that determine what &apos;this&apos; refers to (default, implicit, explicit, new binding)."),
            ("LWC Lifecycle &amp; Reactivity", "Know the LWC component lifecycle hooks: constructor, connectedCallback, renderedCallback, disconnectedCallback. Understand reactive properties, how @track (legacy) and @api work, and how the wire service fetches data reactively."),
            ("The Event Loop &amp; Web APIs", "Understand call stack, event loop, microtask queue (promises), and macrotask queue (setTimeout). Know the fetch API, async patterns for HTTP calls, and how LWC&apos;s shadow DOM restricts direct DOM manipulation."),
        ]
    ),
    "platform-foundations": (
        "Salesforce Platform App Builder Foundations",
        "This associate-level exam tests foundational knowledge of the Salesforce platform. Questions focus on what Salesforce can do, how core features work together, and basic configuration — ideal for those new to the ecosystem.",
        [
            ("Understand the Core Data Model", "Know standard vs. custom objects, field types, and relationship types (lookup vs. master-detail). Understand how the App Builder uses these building blocks to create business applications."),
            ("Core Automation Features", "Know Flow Builder for automation, validation rules for data quality, formula fields for calculated values, and approval processes for multi-step reviews. No deep configuration details required — focus on use cases."),
            ("User Management Basics", "Profiles control what users can do; Roles control what data they can see via the role hierarchy. Permission Sets add access beyond a profile. These three work together to govern user access."),
            ("Reports &amp; Dashboards Overview", "Know that reports query Salesforce data and dashboards visualize report data. Understand the four report types at a high level and that dashboards require a running user for data access."),
            ("The Salesforce Ecosystem", "Understand AppExchange for third-party apps, Trailhead for learning, and the main Salesforce clouds (Sales, Service, Marketing, Experience, Platform) at a high level — what each cloud solves and when it&apos;s appropriate."),
        ]
    ),
    "process-automation-ap": (
        "Salesforce Process Automation Accredited Professional",
        "The Process Automation AP exam focuses entirely on Flow Builder and automation best practices. Expect detailed scenario questions about flow types, trigger configurations, error handling, and choosing the right automation approach.",
        [
            ("Know All Flow Types &amp; Triggers", "Record-Triggered (before/after save, before/after delete), Screen, Scheduled, Auto-Launched, Platform Event-Triggered, and Orchestration flows — know when each is appropriate and what triggers each type."),
            ("Before-Save vs. After-Save Trade-offs", "Before-save flows are faster (no DML operation) and best for updating the triggering record&apos;s fields. After-save flows allow related record operations and sending emails but consume DML statements and governor limits."),
            ("Error Handling with Fault Paths", "Every flow element that can fail should have a fault connector configured. Use Fault paths to display user-friendly error messages in Screen Flows and to log errors in auto-launched flows."),
            ("Collections &amp; Governor Limits", "Flows count against DML and SOQL limits. Use collections and loops efficiently — get all records first in one Get element, loop through them, and store results in a collection before a single DML operation."),
            ("Flow Testing &amp; Deployment", "Use debug mode to trace flow execution. Understand how to write flow test automation in the Flow test suite and how to migrate flows between sandboxes as active or inactive versions."),
        ]
    ),
    "ai-associate": (
        "Salesforce AI Associate",
        "The AI Associate exam tests foundational AI literacy — it is a conceptual understanding exam, not a coding exam. Focus on AI ethics, Salesforce&apos;s Trusted AI principles, and recognizing Einstein features and their use cases.",
        [
            ("Salesforce&apos;s Trusted AI Principles", "Know the five principles: Responsible, Accountable, Transparent, Empowering, and Inclusive. Questions about AI ethics and governance will reference these principles — understand what each means in practice."),
            ("AI Terminology at a Glance", "Distinguish between AI, Machine Learning, Deep Learning, and Generative AI. Know what training data, a model, inference, and a prompt mean without needing mathematical depth."),
            ("Einstein Features &amp; Use Cases", "Know Einstein Lead Scoring, Opportunity Insights, Einstein Bots, Einstein Search, Einstein Next Best Action, and Einstein Copilot at a feature level — what each does and when to recommend it to a business."),
            ("Bias, Fairness &amp; Model Drift", "Understand how training data bias affects model outputs, what model drift means over time, and why human oversight and regular model retraining matter for responsible AI deployment."),
            ("Generative AI &amp; Grounding", "Know what large language models (LLMs) do, what hallucination means and why it is a risk, and how Salesforce Einstein Copilot uses grounding with CRM data to produce more accurate, contextual responses."),
        ]
    ),
    "business-analyst": (
        "Salesforce Business Analyst",
        "The Business Analyst exam focuses on requirements elicitation, analysis, and translation into Salesforce solutions. Unlike technical exams, success depends on process methodology: user stories, stakeholder management, and UAT practices.",
        [
            ("User Stories &amp; Acceptance Criteria", "Know how to write user stories (As a [persona], I want [goal], so that [reason]) and define acceptance criteria that are testable, specific, and verifiable. Questions test whether criteria are complete and unambiguous."),
            ("Requirements Elicitation Techniques", "Know the trade-offs of interviews, workshops, surveys, observation, and prototyping. Questions ask which technique is most appropriate for a given scenario — workshops work well for cross-functional alignment, interviews for individual expertise."),
            ("Process Mapping &amp; UPN", "Understand Universal Process Notation (UPN) and how to map current-state vs. future-state processes. Know how swimlane diagrams document cross-functional workflows and identify handoffs and pain points."),
            ("UAT Strategy", "User Acceptance Testing involves real end users, realistic data, and verification that business requirements (not just technical specs) are satisfied. Know how to plan, execute, and sign off on UAT."),
            ("Stakeholder Management", "Identify stakeholder types (decision-makers, influencers, end users), know when to escalate vs. resolve scope conflicts, and understand how to manage competing priorities and scope creep."),
        ]
    ),
    "sales-cloud": (
        "Sales Cloud Consultant",
        "The Sales Cloud Consultant exam is scenario-based, presenting real business situations and asking you to identify the best Salesforce configuration. Deep knowledge of the full sales lifecycle — from lead to closed-won — and feature trade-offs is essential.",
        [
            ("Lead-to-Cash Process Mastery", "Understand the full lifecycle: Lead capture → Lead Assignment Rules → Conversion → Opportunity stages → Quotes → Close. Know what data transfers during lead conversion and what must be manually re-entered."),
            ("Forecasting &amp; Territory Management", "Know the difference between Collaborative Forecasts, Territory Forecasts, and customizable forecasting. Understand how Opportunity Splits share revenue credit and how territory assignment rules work."),
            ("Einstein Sales Features", "Know Einstein Lead Scoring (predictive scoring), Einstein Opportunity Insights (AI recommendations), and Einstein Activity Capture (email/calendar sync). Questions ask when to recommend each to solve a specific business problem."),
            ("Sales Process Configuration", "Understand Opportunity stages and sales processes, how to configure multiple sales processes for different record types, and how Path guides reps through stages with key fields and coaching tips."),
            ("CPQ Integration Basics", "Know how Salesforce CPQ integrates with Sales Cloud, the difference between Products/Pricebooks (native) and CPQ (add-on), and when to recommend CPQ over native product functionality."),
        ]
    ),
    "service-cloud": (
        "Service Cloud Consultant",
        "The Service Cloud Consultant exam tests your ability to design and configure a complete service operation. Questions are scenario-based and focus on case routing decisions, Knowledge management, entitlements, and channel strategy.",
        [
            ("Case Routing: Which Tool When", "Know all routing options: Assignment Rules (criteria-based), Queues (manual or rules-based), Omni-Channel (capacity-based, real-time), and Einstein Case Routing (AI-driven). Match each to the right complexity level."),
            ("Knowledge Management", "Understand the Knowledge data model (articles, data categories, channels), how to link articles to cases, approval processes for publishing, and how Lightning Knowledge differs from Classic Knowledge."),
            ("Entitlements &amp; SLAs", "Know how Entitlement Processes define SLA milestones, how Entitlements link to accounts and contacts, and how warning/violation actions trigger when milestones are at risk. Milestone Actions are heavily tested."),
            ("Omni-Channel Configuration", "Know the difference between Queue-Based and Skills-Based routing, how to configure service channels and routing configurations, and how to monitor agent capacity with the Omni Supervisor."),
            ("Self-Service &amp; Deflection", "Experience Cloud portals, Einstein Bots, and Knowledge self-service reduce case volume. Know how to measure deflection rate and which configuration choices increase self-service success."),
        ]
    ),
    "experience-cloud": (
        "Salesforce Experience Cloud Consultant",
        "The Experience Cloud Consultant exam tests implementation of portals, communities, and sites for external audiences. Focus on the sharing model for external users, template and component configuration, and authentication options.",
        [
            ("External User Sharing Model", "External users have their own sharing rules separate from internal users. Know how to configure Sharing Sets (for portal users), External Account Hierarchy, and how Super User Access works for partner users."),
            ("Template &amp; Page Configuration", "Know the available templates (Customer Service, Partner Central, Build Your Own), how to configure Lightning pages in Experience Builder, and how to control visibility of components with audience targeting."),
            ("User Authentication Options", "Know the difference between username/password login, SSO (SAML, OAuth), social login, and self-registration flows. Understand how to configure login pages, login flows, and identity verification."),
            ("CMS &amp; Content Management", "Understand Salesforce CMS for managing content published to Experience Cloud sites. Know the difference between enhanced LWR sites and Aura-based sites and the migration path between them."),
            ("Performance &amp; Moderation", "Know how CDN caching improves Experience Cloud performance, how moderation rules and criteria flag inappropriate content, and how to configure contributor roles for community-generated content."),
        ]
    ),
    "cpq-administrator": (
        "Salesforce CPQ Administrator",
        "The CPQ Administrator exam tests configuration of the full quote-to-cash process using Salesforce CPQ. Scenarios describe complex pricing or quoting requirements — know the CPQ data model and configuration options deeply.",
        [
            ("Product &amp; Bundle Configuration", "Know how to configure product options, bundle components, and feature groups. Understand Option Constraints (dependency/exclusion), Nested Bundles, and how Dynamic Bundles adjust products based on field values."),
            ("Pricing Waterfall", "Understand the CPQ pricing waterfall sequence: List Price → Special Price → Regular Price → Customer Price → Net Price. Know how Discount Schedules, Block Pricing, and Price Rules modify prices at each stage."),
            ("Approval Processes in CPQ", "CPQ approval processes can trigger based on quote line fields (e.g., discount thresholds). Know how Approval Rules work, how to chain approvals, and how the Approvals object integrates with Salesforce native approvals."),
            ("Quote Document Generation", "Know how to configure Quote Templates using template content, template sections, and column objects. Understand how DocuSign integration enables e-signature and how quote documents relate to quote lines."),
            ("Contract Amendments &amp; Renewals", "Understand how CPQ manages contract amendments (adding/removing products mid-term), renewal opportunities (auto-created from contracts), and how co-termination works for multi-asset contracts."),
        ]
    ),
    "pardot-consultant": (
        "Salesforce Marketing Cloud Account Engagement Consultant",
        "The Account Engagement (Pardot) Consultant exam tests solution design for B2B marketing automation. Scenarios ask you to design nurture programs, lead scoring models, and Salesforce sync configurations for specific business requirements.",
        [
            ("Lead Scoring &amp; Grading Design", "Scoring measures prospect engagement (activity-based); Grading measures fit (demographic-based). Know how to configure scoring categories, custom scoring rules, and grading profiles to align sales and marketing on lead quality."),
            ("Engagement Studio (Nurture Programs)", "Know all Engagement Studio trigger, rule, and action types. Understand how to design multi-branch programs, set wait times, and use rules to route prospects based on behavior or CRM data."),
            ("Salesforce Sync Architecture", "Understand the sync between Pardot (Prospects) and Salesforce (Leads/Contacts), sync triggers (Salesforce Connector user, assignment rules), and how to troubleshoot sync errors. Know the connector user&apos;s required permissions."),
            ("Forms, Landing Pages &amp; Tracking", "Know how to configure Pardot forms vs. form handlers (for external forms), landing page redirects, custom redirects for tracking links, and how the Pardot tracking pixel works across sites."),
            ("Campaign Reporting &amp; Attribution", "Understand Pardot campaign metrics, the Engagement History component, and how B2B Marketing Analytics extends reporting. Know the difference between first-touch and multi-touch attribution models."),
        ]
    ),
    "pardot-specialist": (
        "Salesforce Marketing Cloud Account Engagement Specialist",
        "The Account Engagement Specialist exam tests hands-on configuration knowledge. Focus on the execution side — automation rules, dynamic lists, email sends, and form configuration — rather than high-level solution design.",
        [
            ("Automation Rules vs. Segmentation Rules", "Automation Rules run continuously and apply actions retroactively to matching prospects. Segmentation Rules run once. Dynamic Lists update membership continuously based on criteria. Know which to use for each requirement."),
            ("Email Configuration &amp; Deliverability", "Know the difference between List Emails, Engagement Studio emails, and Operational emails (bypass opt-out). Understand SPF, DKIM, and how sender score affects deliverability."),
            ("Dynamic Content", "Know how to configure dynamic content variations based on prospect fields (industry, score, etc.) for email personalization. Understand the default variation requirement and how dynamic content is inserted via HML or custom redirects."),
            ("Forms &amp; Progressive Profiling", "Configure forms with dependent fields, progressive profiling (showing new fields on repeat visits), and Kiosk mode for events. Know how completion actions trigger follow-up automations."),
            ("Pardot API &amp; Integrations", "Know the key Pardot API capabilities, how Pardot integrates with third-party tools via Zapier or direct API, and how the Salesforce-Pardot connector user&apos;s permission set controls data sync."),
        ]
    ),
    "revenue-cloud-consultant": (
        "Salesforce Revenue Cloud Consultant",
        "The Revenue Cloud Consultant exam tests your ability to design end-to-end quote-to-revenue solutions spanning CPQ and Billing. Focus on the contract lifecycle, amendment logic, revenue recognition triggers, and the interaction between CPQ and Billing objects.",
        [
            ("CPQ-to-Billing Object Flow", "Know how a closed Opportunity activates a CPQ Contract, how the Contract generates Subscriptions and Assets, and how Billing Orders are created from Contracts. Understand the object relationship chain thoroughly."),
            ("Amendment &amp; Renewal Scenarios", "Amendments add, remove, or change products mid-term and create co-terminated subscriptions. Renewals auto-generate from contracts at term end. Know how proration is calculated for each scenario."),
            ("Revenue Recognition Options", "Understand Salesforce Billing revenue recognition rules: Revenue Schedules, how rev-rec triggers (billing date, order product date), and the accounting period configuration. Know how to handle ramp deals."),
            ("Invoice Generation &amp; Payment Processing", "Know how Invoice Runs generate invoices, how payment methods and terms are configured, and how the dunning process handles failed payments. Understand partial payments and credit notes."),
            ("Reporting &amp; Forecasting for Revenue", "Know how Revenue Cloud extends Sales Cloud forecasting with subscription revenue, ARR/MRR metrics, and churn reporting. Understand how CRM Analytics (Tableau CRM) is used for revenue analytics."),
        ]
    ),
    "nonprofit-cloud": (
        "Salesforce Nonprofit Cloud Consultant",
        "The Nonprofit Cloud exam tests implementation of NPSP (Nonprofit Success Pack) and Nonprofit Cloud features for mission-driven organizations. Focus on the data model differences from commercial Salesforce and the fundraising/program management features.",
        [
            ("NPSP Household Account Model", "NPSP uses Household Accounts (one per family/household) with Contacts as household members. Understand how this differs from the standard B2B account model and implications for duplicate management and household giving."),
            ("Gift Entry &amp; Payment Processing", "Know Nonprofit Cloud Gift Entry with its batch entry templates, gift commitments, and partial soft credits. Understand how payment processors integrate and how gift records relate to Opportunities."),
            ("Relationships &amp; Affiliations", "NPSP Relationships track personal connections between Contacts (e.g., spouse, board member). Affiliations track organizational connections between Contacts and Accounts. Know when to use each and how reciprocal relationships work."),
            ("Program Management", "Program Management Module (PMM) tracks services, programs, service schedules, and service deliveries. Know the PMM object model and how service delivery data rolls up to program reporting."),
            ("TDTM (Table-Driven Trigger Management)", "NPSP uses TDTM to manage its trigger logic through configuration records rather than code. Understand how TDTM Handler records control trigger behavior and how to troubleshoot TDTM-related issues."),
        ]
    ),
    "nonprofit-success-pack-consultant": (
        "Salesforce Nonprofit Success Pack Consultant",
        "The NPSP Consultant exam focuses specifically on configuring NPSP features for fundraising, constituent management, and reporting. The exam emphasizes practical configuration knowledge over architectural design.",
        [
            ("Recurring Donations Configuration", "Know how to configure open-ended vs. fixed-length recurring donations, pause rules, and how recurring donation schedules generate Opportunities. Understand how Elevate (payment processor) integrates with recurring donations."),
            ("Soft Credits &amp; Household Rollups", "Soft Credits track secondary donor credit (spouse, board member influence). Household Rollups aggregate giving totals at the household level. Know the rollup fields, their definitions, and how to customize them."),
            ("Data Import Wizard for NPSP", "Understand how to use the NPSP Data Import Wizard vs. standard Data Import Wizard for migrating constituent and gift data. Know field mappings and how to handle duplicate matching."),
            ("Engagement Plans", "Engagement Plans automate constituent stewardship tasks (thank-you calls, acknowledgment letters) triggered by donation milestones. Know how to configure Engagement Plan Templates and the task assignment rules."),
            ("Reports &amp; Dashboards for Nonprofits", "Know key NPSP report types (NPSP Households, NPSP Soft Credits) and how to build fundraising dashboards tracking year-to-date giving, LYBUNT/SYBUNT donors, and retention rates."),
        ]
    ),
    "education-cloud-consultant": (
        "Salesforce Education Cloud Consultant",
        "The Education Cloud Consultant exam tests implementation of Salesforce for higher education institutions. Focus on the Education Data Architecture (EDA), student lifecycle management, and how Education Cloud extends standard Salesforce.",
        [
            ("Education Data Architecture (EDA)", "EDA replaces the standard Account/Contact model with an education-specific model: Accounts as educational institutions, Contacts as students/faculty, and Affiliations linking them. Know how EDA&apos;s Household and Administrative account types differ."),
            ("Student Lifecycle Management", "Understand how Admissions Connect, Student Success Hub, and Recruitment and Admissions features map to the student journey from prospect through alumni. Know which features are in Education Cloud vs. standard Salesforce."),
            ("Program Enrollment &amp; Course Management", "Know the EDA objects: Programs, Courses, Course Offerings, and Course Enrollments. Understand how students enroll in course offerings and how academic records are maintained."),
            ("Advisor &amp; Success Hub Configuration", "Know how to configure the Success Hub for advisors with student alerts, appointments, and care plans. Understand how Advisor Link enables student-initiated advising appointments."),
            ("Reporting for Education", "Understand common education reporting needs: enrollment funnels, retention rates, advising caseloads, and alumni engagement. Know how to build reports using EDA-specific report types."),
        ]
    ),
    "data-cloud-consultant": (
        "Salesforce Data Cloud Consultant",
        "The Data Cloud Consultant exam tests your ability to design and implement a unified customer data platform. Focus on data ingestion architecture, identity resolution, segmentation, and activation — the full data lifecycle in Data Cloud.",
        [
            ("Data Ingestion &amp; Data Streams", "Know the difference between ingestion-based (real-time) and query-based data sources. Understand how Data Streams map source data to Data Cloud objects using the data model (Individual, Engagement, etc.)."),
            ("Identity Resolution", "Identity resolution matches and merges records from multiple sources into a single Unified Individual profile. Know how to configure matching rules, reconciliation rules, and how to handle merge conflicts."),
            ("Segmentation &amp; Activation", "Understand how to build segments using AND/OR logic across related data objects. Know activation targets (Marketing Cloud, Advertising Studio, CRM) and how segment membership flows to each target."),
            ("Calculated Insights &amp; Einstein", "Know how to create Calculated Insights for metric computation (e.g., LTV, engagement score) using SOQL-like query language. Understand how Einstein features in Data Cloud use unified profiles for predictions."),
            ("Data Cloud Permissions &amp; Governance", "Understand Data Cloud permission sets, data spaces for data segregation, consent management, and the Data Cloud governance framework for handling PII and regulatory compliance."),
        ]
    ),
    "crm-analytics-einstein-discovery-consultant": (
        "CRM Analytics and Einstein Discovery Consultant",
        "The CRM Analytics exam tests end-to-end analytics implementation: data preparation, story building, dashboard design, and deployment. Focus on the SAQL query language, recipe transformations, and how to embed analytics in Salesforce.",
        [
            ("Dataflow vs. Recipe Architecture", "Dataflows use nodes (digest, augment, flatten, edgemart) for batch data preparation. Recipes use visual, step-by-step transformations with live preview. Know when to use each and how they interact."),
            ("SAQL Query Language", "SAQL is used in Dashboard JSON and lens queries. Know the key clauses: foreach, group, order, limit, filter, and how to write basic aggregation queries. SAQL knowledge is directly tested."),
            ("Einstein Discovery Stories", "Know how to build a Story (outcome field, included variables, excluded variables), interpret Story insights (top factors, improvements), and deploy predictions as Prediction Fields back to Salesforce records."),
            ("Dashboard Design &amp; Embedding", "Understand how to configure widgets (chart, number, table, filter), link steps for drill-through navigation, and embed CRM Analytics dashboards in Lightning pages and the mobile app."),
            ("Security &amp; Data Access", "Know how to configure row-level security using security predicates, user attributes, and dataset sharing inheritance. Understand how Analytics shares (App sharing) control dashboard access."),
        ]
    ),
    "field-service": (
        "Salesforce Field Service Consultant",
        "The Field Service exam tests implementation of field service operations: scheduling, dispatch, mobile workers, and inventory. Focus on the Work Order data model, scheduling policy configuration, and the Field Service mobile app.",
        [
            ("Work Order Data Model", "Know the hierarchy: Work Order → Work Order Line Items → Service Appointments. Understand how Service Resources, Service Territories, and Operating Hours define scheduling availability."),
            ("Scheduling Policies &amp; Optimization", "Scheduling Policies define how Salesforce Scheduler and the Optimization engine assign appointments. Know the rule types (Work Rule, Service Objective), how they interact, and how to configure Scheduling Policy goals."),
            ("Dispatcher Console", "Know how dispatchers use the Gantt view, map view, and appointment list to manage appointments. Understand how to manually schedule, unschedule, and reassign appointments, and how to use absence management."),
            ("Mobile App Configuration", "Know how to configure the Field Service mobile app: which records are accessible offline, how to configure the mobile flow, Required Skills, and how mobile workers complete Work Order Line Items and capture signatures."),
            ("Inventory Management", "Understand how Product Items (serialized/non-serialized), Product Requests, and Product Consumed track parts consumption. Know how Return Orders handle reverse logistics and how inventory levels roll up by location."),
        ]
    ),
}


def build_section(display_name, intro, tips):
    tips_html = ""
    for title, content in tips:
        tips_html += (
            "              <div>\n"
            f"                <p className=\"font-semibold text-gray-900 mb-1\">{title}</p>\n"
            f"                <p>{content}</p>\n"
            "              </div>\n"
        )
    return (
        "\n"
        "          {/* How to Pass Scenario Strategy */}\n"
        f"          <div id=\"scenario-tips\" className=\"mt-12 rounded-xl border border-gray-100 bg-white p-6\">\n"
        f"            <h2 className=\"text-2xl font-bold text-gray-900 mb-4\">How to Pass the {display_name} Exam</h2>\n"
        f"            <p className=\"text-sm text-gray-600 mb-5\">\n"
        f"              {intro}\n"
        f"            </p>\n"
        f"            <div className=\"space-y-4 text-sm text-gray-700\">\n"
        f"{tips_html}"
        f"            </div>\n"
        f"          </div>\n\n"
    )


updated = 0
skipped = 0
errors = 0

for slug, (display_name, intro, tips) in CERTS.items():
    file_path = os.path.join(BASE, slug, "page.tsx")
    if not os.path.exists(file_path):
        print(f"NOT FOUND: {slug}")
        errors += 1
        continue

    with open(file_path, "r") as f:
        content = f.read()

    if 'id="scenario-tips"' in content:
        print(f"SKIP (exists): {slug}")
        skipped += 1
        continue

    marker = '          <div id="practice-questions"'
    if marker not in content:
        print(f"ERROR (no marker): {slug}")
        errors += 1
        continue

    section = build_section(display_name, intro, tips)
    new_content = content.replace(marker, section + marker, 1)

    # Update CertTableOfContents
    old_toc = "{ id: 'key-concepts', title: 'Key Concepts' },"
    new_toc = "{ id: 'key-concepts', title: 'Key Concepts' },\n              { id: 'scenario-tips', title: 'How to Pass' },"
    if old_toc in new_content:
        new_content = new_content.replace(old_toc, new_toc, 1)
    else:
        print(f"WARNING (no ToC key-concepts): {slug}")

    with open(file_path, "w") as f:
        f.write(new_content)

    print(f"OK: {slug}")
    updated += 1

print(f"\nDone — updated: {updated}, skipped: {skipped}, errors: {errors}")
