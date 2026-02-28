#!/usr/bin/env python3
"""Batch 2: Architect + Marketing/MuleSoft track — adds 'How to Pass' section to 26 cert pages."""
import os

BASE = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app/certifications"

CERTS = {
    "application-architect": (
        "Salesforce Application Architect",
        "The Application Architect credential validates expertise in designing robust Salesforce applications. Questions test your ability to apply the right pattern — declarative vs. programmatic, which relationship type, which security model — for complex multi-requirement scenarios.",
        [
            ("Data Modeling for Scale", "Know when to use lookup vs. master-detail, external objects (Salesforce Connect), big objects, and custom metadata types. Understand the impact of each relationship type on reporting, rollups, and data access."),
            ("Security Architecture Layers", "Understand how object-level, field-level, and record-level security interact. Know the order of evaluation and how to use the Access Checker to diagnose access issues in complex orgs."),
            ("Apex Design Patterns", "Know common design patterns: Singleton, Strategy, and Decorator for Apex. Understand trigger frameworks (one trigger per object pattern), virtual/abstract classes, and interface-based design for testability."),
            ("Integration Patterns", "Know the canonical integration patterns: Remote Process Invocation (request/reply and fire-and-forget), Data Virtualization, Batch Data Sync, and UI Update via Remote Process. Match each to REST/SOAP/Platform Events."),
            ("Declarative vs. Programmatic Decision", "Always justify when code is needed vs. when declarative tools suffice. Exam questions reward candidates who choose the simplest, most maintainable solution and understand the trade-offs."),
        ]
    ),
    "system-architect": (
        "Salesforce System Architect",
        "The System Architect credential validates expertise in multi-system integration and enterprise-scale Salesforce deployments. Focus on integration architecture patterns, data migration strategy, and managing complex org configurations.",
        [
            ("Enterprise Integration Patterns", "Know the full Enterprise Integration Patterns catalog applied to Salesforce: synchronous vs. asynchronous, point-to-point vs. hub-and-spoke, ESB, and event-driven architecture. Match each pattern to its ideal use case."),
            ("Data Migration Strategy", "Understand how to plan data migration: data mapping, cleansing, load sequence (parent records before child records), external IDs for upsert, and how to validate data post-migration."),
            ("Multi-Org Architecture", "Know the scenarios that require multiple orgs (geographies, business units, regulatory) vs. a single org with shared infrastructure. Understand org replication, data sharing between orgs, and Connected Orgs."),
            ("Governor Limits at Scale", "Understand how governor limits affect architectural decisions: bulkification requirements, async patterns to bypass synchronous limits, and how to architect for high-volume data ingestion scenarios."),
            ("Salesforce Connect &amp; External Objects", "Know how External Objects (via Salesforce Connect / OData) provide real-time data virtualization. Understand when to use virtual data vs. replicating data into Salesforce, and the performance trade-offs."),
        ]
    ),
    "integration-architect": (
        "Salesforce Integration Architect",
        "The Integration Architect exam tests your ability to design and implement integration solutions between Salesforce and external systems. Focus on selecting the right integration pattern, API type, and middleware approach for complex scenarios.",
        [
            ("Integration Pattern Selection", "Know Remote Process Invocation (sync &amp; async), Batch Data Synchronization, Data Virtualization, UI Update, and Event-Driven patterns. Match each to the business scenario presented in the question."),
            ("REST vs. SOAP vs. Bulk API", "REST API for CRUD operations and real-time integrations; SOAP API for older enterprise systems requiring WSDL; Bulk API for high-volume data loads; Streaming API for real-time push notifications. Know when each is appropriate."),
            ("Platform Events &amp; Change Data Capture", "Platform Events decouple publisher/subscriber and support event-driven integration. CDC pushes field-level change records to subscribers. Know how to configure each and handle event replay for reliability."),
            ("Middleware &amp; MuleSoft", "Understand API-led connectivity (System, Process, Experience layers), how MuleSoft Anypoint Platform fits in the integration architecture, and when to use middleware vs. point-to-point integrations."),
            ("Security in Integrations", "Know how to use Named Credentials for secure outbound connections, OAuth flows for external system authentication, and how to implement IP restrictions and mutual TLS for sensitive integrations."),
        ]
    ),
    "data-architect": (
        "Salesforce Data Architect",
        "The Data Architect exam tests expertise in designing Salesforce data models, managing data quality, and planning data migration. Focus on relationship types, storage limits, archiving strategies, and master data management.",
        [
            ("Advanced Data Modeling", "Know when to use lookup, master-detail, hierarchical (self-referential), and external relationships. Understand junction objects, indirect lookup fields, and how relationship type affects roll-up summaries, cascade delete, and record access."),
            ("Large Data Volume (LDV) Strategies", "Know how to handle LDV: skinny tables, custom indexes, selective queries, division archiving, and big objects. Understand what causes a full table scan and how to prevent query timeouts."),
            ("Data Quality &amp; Duplicate Management", "Know Duplicate Rules, Matching Rules, and how they interact. Understand how to use Data.com clean rules (legacy knowledge), field validation, and data stewardship processes for ongoing data quality."),
            ("Data Migration Architecture", "Plan migration using external IDs (upsert strategy), parent-before-child load order, and the appropriate API (Bulk API for volume, REST for real-time). Understand data validation and rollback strategies."),
            ("Master Data Management", "Know MDM patterns: Registry, Consolidation, and Coexistence. Understand how to implement a golden record strategy, handle conflicting records, and synchronize master data across systems."),
        ]
    ),
    "sharing-visibility-architect": (
        "Salesforce Sharing and Visibility Architect",
        "The Sharing &amp; Visibility Architect exam focuses entirely on Salesforce&apos;s record access model. Every question tests your ability to design and troubleshoot complex sharing configurations — from OWDs to Apex Managed Sharing.",
        [
            ("Access Evaluation Order", "Understand the exact order in which access is evaluated: OWD → Role Hierarchy → Sharing Rules → Manual Sharing → Teams → Apex Managed Sharing → Profile/PermSet object permissions. Know which layers are additive."),
            ("Criteria-Based Sharing Rules", "Know the difference between Owner-Based and Criteria-Based Sharing Rules. Understand when criteria-based rules fire, their limits (300 per object), and how they interact with other sharing mechanisms."),
            ("External Sharing Model", "The external sharing model (OWD for portal users) is separate from the internal model. Know how to configure Sharing Sets for portal users and how Account Teams extend access to Experience Cloud contacts."),
            ("Performance Considerations", "Complex sharing configurations (large sharing rule counts, deep role hierarchies) cause sharing recalculation performance issues. Know how to use defer sharing calculation and design for recalculation efficiency."),
            ("Apex Managed Sharing", "Apex Managed Sharing uses Share objects (AccountShare, etc.) with a specific Cause value. Know how to grant, revoke, and maintain programmatic shares and how they persist through OWD changes."),
        ]
    ),
    "identity-access-management-architect": (
        "Salesforce Identity and Access Management Architect",
        "The IAM Architect exam tests deep knowledge of authentication, authorization, and identity federation. Focus on OAuth flows, SAML configuration, Connected Apps, and how to secure both Salesforce and external applications.",
        [
            ("OAuth 2.0 Flows", "Know all OAuth flows: Web Server (authorization code), User-Agent (implicit), Username-Password, JWT Bearer, Device, and Refresh Token flows. Match each flow to its use case and security characteristics."),
            ("SAML &amp; SSO Configuration", "Understand how SAML 2.0 enables SSO: SP-Initiated vs. IdP-Initiated flows, assertion attributes, Federation IDs, and how to configure Salesforce as a SP or IdP. Know common troubleshooting steps."),
            ("Connected Apps &amp; Scopes", "Know how Connected Apps control external system access to Salesforce APIs. Understand OAuth scopes, IP restrictions, user provisioning (SCIM), and how policies control access."),
            ("Multi-Factor Authentication", "Know MFA enforcement methods: Salesforce Authenticator, TOTP apps, security keys. Understand how MFA interacts with SSO (IdP-provided MFA vs. Salesforce MFA), and the MFA enforcement timeline implications."),
            ("Salesforce Identity Features", "Know User Provisioning for Connected Apps, Identity Connect (AD sync), Login Flows for custom authentication logic, and how External Identity licenses differ from internal user licenses."),
        ]
    ),
    "dev-lifecycle-deployment-architect": (
        "Salesforce Development Lifecycle and Deployment Architect",
        "The Dev Lifecycle Architect exam tests expertise in ALM, CI/CD, sandbox strategy, and package development. Focus on choosing the right deployment approach for complex org configurations and release management.",
        [
            ("Sandbox Strategy", "Know the four sandbox types and when to use each: Developer (unit testing), Developer Pro (data load testing), Partial Copy (realistic data subset), Full (UAT with production data volume). Know refresh intervals."),
            ("Change Set Limitations", "Change sets have significant limitations: no delete capability, no metadata dependency resolution, no version control. Know when to move beyond change sets to source-driven development."),
            ("Source-Driven Development", "Understand SFDX / SF CLI source format, scratch orgs for isolated development, how to push/pull metadata, and how Salesforce DX integrates with Git version control systems."),
            ("Package Development (2GP)", "Know the difference between Unlocked Packages and Managed Packages. Understand how to define package boundaries, handle dependencies between packages, and version package releases."),
            ("CI/CD Pipeline Design", "Know how to design a CI/CD pipeline: source → scratch org → unit tests → package version → sandbox UAT → production. Understand how tools like GitHub Actions, Copado, or Gearset automate the pipeline."),
        ]
    ),
    "heroku-architect": (
        "Heroku Architect",
        "The Heroku Architect exam tests enterprise-scale Heroku deployment design. Focus on Heroku infrastructure components, Heroku Connect for Salesforce data sync, high-availability patterns, and security architecture.",
        [
            ("Heroku Infrastructure Components", "Know dynos (web, worker, one-off), formations, add-ons, buildpacks, and config vars. Understand how these components combine to run a scalable application on Heroku."),
            ("Heroku Connect Architecture", "Know how Heroku Connect syncs data between Heroku Postgres and Salesforce using polled sync (Salesforce → Postgres) and a Salesforce trigger (Postgres → Salesforce). Understand conflict resolution and sync frequency."),
            ("High Availability &amp; Scaling", "Understand horizontal scaling (multiple dynos), how the Heroku Router load-balances requests, database connection pooling (PgBouncer), and how to design for zero-downtime deployments."),
            ("Security Architecture", "Know how to use Private Spaces for network isolation, Heroku Shield for HIPAA/PCI compliance, and how to secure data in transit (TLS) and at rest with encrypted Heroku Postgres."),
            ("Performance Optimization", "Know how to use Heroku caching (Redis add-on), async job processing (worker dynos with Sidekiq/Celery), and database query optimization to design performant Heroku applications."),
        ]
    ),
    "technical-architect": (
        "Salesforce Certified Technical Architect",
        "The CTA credential is the most prestigious Salesforce certification. The written exam and Review Board test your ability to architect enterprise solutions, justify technical decisions, and communicate trade-offs at an executive level.",
        [
            ("Architecture Decision Justification", "Every technical decision must be backed by clear reasoning tied to the client&apos;s requirements, constraints, and principles. Practice articulating why you chose one approach over alternatives — this is what the Review Board evaluates."),
            ("Trade-off Analysis", "CTAs must identify trade-offs: performance vs. simplicity, customization vs. upgradability, cost vs. scalability. Practice presenting these trade-offs clearly and recommending the best option with justification."),
            ("Risk Identification &amp; Mitigation", "CTA scenarios include risks (data migration risks, integration failure points, security gaps). Know how to identify risks proactively and propose mitigation strategies for each."),
            ("Stakeholder Communication", "The Review Board assesses how well you communicate complex technical concepts to diverse audiences: executives, project managers, developers. Practice explaining architecture decisions in plain language."),
            ("Integration &amp; Data Architecture Depth", "CTAs must have deep knowledge of integration patterns, data modeling, large data volumes, and security. Review all architect-level topics (Integration Architect, Data Architect, IAM Architect) as they are all in scope."),
        ]
    ),
    "technical-architect-evaluation": (
        "Salesforce Technical Architect Evaluation",
        "The CTA Evaluation program assesses your readiness for the Review Board through a structured evaluation process. Focus on demonstrating architectural breadth, clear communication, and the ability to handle ambiguous requirements.",
        [
            ("Demonstrating Architecture Breadth", "Evaluators look for evidence of experience across all CTA domains: data architecture, integration, security, UX, environment management, and data migration. Build a portfolio of real-world architectural decisions."),
            ("Handling Ambiguity", "CTA evaluations present deliberately ambiguous scenarios. Practice asking clarifying questions, stating your assumptions clearly, and designing solutions that are flexible enough to accommodate multiple interpretations."),
            ("Whiteboard Communication", "Practice whiteboarding architecture diagrams quickly and clearly. Your diagram should show system boundaries, integration points, data flows, and key design decisions — without being cluttered."),
            ("Justification Framework", "Use a consistent framework: state the requirement, present options, identify trade-offs for each, and recommend with clear rationale. This structured approach demonstrates CTA-level thinking."),
            ("Prepare with Mock Sessions", "The CTA community regularly runs mock Review Board sessions. Participating in these is the single most effective preparation strategy — treat each mock as the real thing and seek detailed feedback."),
        ]
    ),
    "technical-architect-review-board": (
        "Salesforce Technical Architect Review Board",
        "The CTA Review Board is a live, oral examination where candidates present architecture solutions to a panel of senior Salesforce architects. Preparation requires practicing under realistic conditions — not just studying content.",
        [
            ("The Review Board Format", "The Review Board presents a complex business scenario. You have time to review it, then present your architecture to the panel and answer questions. Know the format deeply so logistics don&apos;t distract you on the day."),
            ("Architecture Presentation Structure", "Open with a brief summary of your understanding of the requirements, present your high-level architecture diagram, walk through each component and key decisions, address risks, and close with a recommendation."),
            ("Handling Panel Questions", "Panel questions probe your assumptions and test alternative approaches. If challenged, consider the question carefully, acknowledge valid points, and either defend your position with evidence or update your recommendation."),
            ("Deep Dive Readiness", "Be prepared to go deep on any component of your solution: data model, integration pattern, security configuration, deployment approach. If you propose something, know the details."),
            ("Mock Board Practice Is Essential", "The only way to prepare for the Review Board is to do it. Practice with mock panels, record yourself, and review your performance. Focus on confidence, clarity, and structured thinking under pressure."),
        ]
    ),
    "email-specialist": (
        "Salesforce Marketing Cloud Email Specialist",
        "The Email Specialist exam tests deep knowledge of Marketing Cloud email features, from subscriber management to advanced personalization. Questions are scenario-based and focus on solving deliverability, segmentation, and automation problems.",
        [
            ("Email Studio Data Model", "Know All Subscribers, Publication Lists, Suppression Lists, Data Extensions, and Filtered Data Extensions. Understand how subscriber status (Active, Bounced, Unsubscribed, Held) affects send eligibility."),
            ("AMPscript for Personalization", "Know core AMPscript functions: Lookup, LookupRows, AttributeValue, Format, IIf, and how to use FOR loops for dynamic content blocks. Questions often present AMPscript snippets and ask what they output."),
            ("Journey Builder vs. Automation Studio", "Journey Builder is customer-driven (triggered by individual behavior). Automation Studio is time/event-driven (runs on a schedule or file drop). Know when to use each and what activities are exclusive to each tool."),
            ("Deliverability Best Practices", "Understand SPF, DKIM, DMARC, and how IP warming works. Know what causes spam complaints and bounces (hard vs. soft), and how Marketing Cloud handles deliverability automatically vs. what requires configuration."),
            ("A/B Testing &amp; Reporting", "Know how to configure A/B tests (subject line, from name, content, send time), how to set the winner criteria, and which send-level metrics (Delivery Rate, Open Rate, Click Rate, Bounce Rate) measure what."),
        ]
    ),
    "marketing-cloud-consultant": (
        "Salesforce Marketing Cloud Consultant",
        "The Marketing Cloud Consultant exam tests solution design and implementation planning for Marketing Cloud. Focus on discovering requirements, designing scalable data architectures, and integrating Marketing Cloud with Salesforce CRM.",
        [
            ("Discovery &amp; Requirements", "Know how to elicit marketing requirements: campaign types, audience segmentation needs, personalization requirements, and reporting needs. Map business requirements to Marketing Cloud features and identify gaps."),
            ("Data Architecture Design", "Design data extensions, relationship tables, and how to structure data for efficient segmentation. Know when to use Contact Builder data model vs. standalone data extensions for complex subscriber data."),
            ("Marketing Cloud Connect", "Know how Marketing Cloud Connect integrates with Salesforce CRM: synced data extensions, triggered sends from Salesforce records, Journey Builder Salesforce activities, and how the connected app is configured."),
            ("Cross-Channel Strategy", "Understand how to design coordinated campaigns across Email, SMS (MobileConnect), Push (MobilePush), and Advertising. Know how Journey Builder orchestrates cross-channel experiences."),
            ("Governance &amp; Compliance", "Know GDPR, CAN-SPAM, and CASL requirements and how to implement compliance in Marketing Cloud: consent management, preference centers, unsubscribe handling, and data retention policies."),
        ]
    ),
    "marketing-cloud-engagement-admin": (
        "Salesforce Marketing Cloud Engagement Administrator",
        "The Marketing Cloud Engagement Administrator exam focuses on platform administration: user management, account setup, security, and data management. Questions test your ability to configure and maintain a Marketing Cloud instance.",
        [
            ("Account Setup &amp; Business Units", "Know how to configure business units for multi-brand or multi-regional setups, how permissions are inherited, and how to manage shared content and data extensions across business units."),
            ("User Roles &amp; Permissions", "Know the standard Marketing Cloud roles (Administrator, Analyst, Content Creator, etc.) and how to create custom roles. Understand how role-based permissions control access to each studio and feature."),
            ("Data Management &amp; Retention", "Know how to configure data retention policies on data extensions, manage All Subscribers list hygiene, and use Contact Deletion to comply with data privacy regulations."),
            ("Sender Authentication Package (SAP)", "Understand how SAP (Private Domain, SAP Subdomain, Reply Mail Management) improves email deliverability and brand reputation. Know the difference between a SAP and a standard shared IP configuration."),
            ("API Integration &amp; Security", "Know how to create and manage API integrations (installed packages with OAuth credentials), configure IP whitelisting for API access, and monitor API usage for security anomalies."),
        ]
    ),
    "marketing-cloud-engagement-developer": (
        "Salesforce Marketing Cloud Engagement Developer",
        "The Marketing Cloud Engagement Developer exam tests technical development skills: AMPscript, SSJS, REST/SOAP APIs, and custom activities. Questions require you to write or interpret code snippets and design custom solutions.",
        [
            ("AMPscript Proficiency", "Master AMPscript data functions: Lookup, LookupRows, LookupOrderedRows, UpdateData, InsertData. Know conditional logic (IIF, CASE), date/string functions, and how to use AMPscript in subject lines, preheaders, and email body."),
            ("Server-Side JavaScript (SSJS)", "Know SSJS for CloudPages and landing page logic: using Platform.Load to import functions, Core.JavaScript library for data extensions (Rows, Row objects), and how SSJS differs from client-side JavaScript."),
            ("REST &amp; SOAP API Usage", "Know the key Marketing Cloud REST API endpoints: /contacts/v1/contacts, /messaging/v1/messageDefinitionSends, /data/v1/async, and how to authenticate using OAuth 2.0 client credentials."),
            ("Custom Activities in Journey Builder", "Know how to build custom Journey Builder activities using the Custom Activity API: the config.json structure, execute/save/publish/validate endpoints, and how activities interact with Journey Builder&apos;s UI."),
            ("Query Activities &amp; Data Extensions", "Know how to write SQL in Automation Studio Query Activities to transform and aggregate data extension data. Understand overwrite vs. append destination actions and how to join data extensions in queries."),
        ]
    ),
    "marketing-cloud-engagement-foundations": (
        "Salesforce Marketing Cloud Engagement Foundations",
        "The Marketing Cloud Engagement Foundations exam tests foundational knowledge of the platform for new users. Focus on understanding the core studios, the subscriber data model, and basic email campaign execution.",
        [
            ("Core Studios Overview", "Know what each studio does: Email Studio (email campaigns), Mobile Studio (SMS/push), Advertising Studio (digital ads), Social Studio (social media), and Journey Builder (cross-channel orchestration)."),
            ("Subscriber Data Model", "Understand All Subscribers, Lists, and Data Extensions. Know when lists are appropriate (simple, volume-based segments) vs. data extensions (relational data, complex attributes)."),
            ("Basic Email Send Process", "Know the steps to send an email: select an audience (list or data extension), choose a send classification, configure tracking, and initiate a send. Understand how to use guided sends vs. the send wizard."),
            ("Contact Builder Overview", "Understand Contact Builder&apos;s role in unifying subscriber data: Attribute Groups, Relationships, and how data extension data links to the Contact record via Contact Key."),
            ("Reporting Fundamentals", "Know the core email metrics: Sent, Delivered, Bounced (hard/soft), Opened, Clicked, Unsubscribed, and Spam Complaints. Understand how to access Tracking reports and what each metric measures."),
        ]
    ),
    "marketing-cloud-advanced-cross-channel-ap": (
        "Salesforce Marketing Cloud Advanced Cross-Channel Accredited Professional",
        "The Advanced Cross-Channel AP exam tests deep expertise in coordinating marketing across channels in Marketing Cloud. Focus on Journey Builder&apos;s advanced capabilities, cross-channel orchestration, and personalization at scale.",
        [
            ("Advanced Journey Builder", "Know all Journey Builder entry sources (data extension, Salesforce data, inbound chat, API event), activity types, and decision splits. Understand how to use Einstein STO, Einstein Engagement Scoring, and random split for testing."),
            ("Cross-Channel Coordination", "Know how to design journeys that span Email, SMS, Push, and Advertising channels. Understand how frequency capping, channel preference, and suppression work across channels in a single journey."),
            ("Transactional Messaging", "Understand the difference between marketing messages (opt-in required) and transactional messages (service-based, bypass opt-out). Know how to configure Transactional Send Definitions via the API."),
            ("Personalization at Scale", "Know how to use Dynamic Content blocks driven by data extension lookups, AMPscript conditional content, and Einstein Content Selection for AI-driven personalization across large audiences."),
            ("Journey Measurement &amp; Optimization", "Know how to use Journey Analytics to measure path performance, configure control groups for holdout testing, and use Einstein Engagement Frequency to optimize send cadence."),
        ]
    ),
    "marketing-cloud-intelligence-ap": (
        "Salesforce Marketing Cloud Intelligence Accredited Professional",
        "The Marketing Cloud Intelligence (Datorama) AP exam tests data ingestion, model building, and dashboard creation in the Intelligence platform. Focus on the harmonization framework and how to connect and unify multi-source marketing data.",
        [
            ("Data Streams &amp; Connectors", "Know how to connect data sources using native connectors (Google Analytics, Facebook Ads, Marketing Cloud), API connectors, and file-based imports (CSV). Understand scheduled refresh and incremental load options."),
            ("Data Model &amp; Harmonization", "Understand the Intelligence data model: Streams, Total Metrics, Dimensions, and how to harmonize disparate data by mapping vendor-specific fields to a unified dimension (e.g., mapping &apos;Campaign&apos; across platforms)."),
            ("Model Builder", "Know how to use the Model Builder to create calculated metrics (formulas), cross-stream joins, and custom dimensions. Understand the difference between Stream metrics and Total metrics."),
            ("Dashboard Design", "Know how to create boards, widgets (bar charts, line charts, scorecards, pivot tables), and how to configure filters and date controls. Understand how to share dashboards with internal and external stakeholders."),
            ("Einstein Integration", "Know how Einstein features in Intelligence (Einstein Insights, Anomaly Detection) analyze marketing performance data and how to configure alerts for KPI deviations."),
        ]
    ),
    "marketing-cloud-personalization-ap": (
        "Salesforce Marketing Cloud Personalization Accredited Professional",
        "The Marketing Cloud Personalization (Interaction Studio) AP exam tests real-time personalization capabilities. Focus on web SDK implementation, campaign configuration, and how to use behavioral data for personalized experiences.",
        [
            ("Web SDK Implementation", "Know how to implement the Personalization web SDK (Evergage beacon), configure sitemap mappings for page types and item catalog, and how event data is sent to the Personalization platform."),
            ("Catalog &amp; User Profile", "Understand the Personalization catalog (Products, Articles, Blog Posts) and how item attributes drive recommendations. Know how User Profile attributes are built from behavioral events and how they power segmentation."),
            ("Campaign Types", "Know the four campaign types: Web (in-page personalization), Triggered Email, Open-Time Email, and Server-Side (API-based). Understand when to use each and how they integrate with Marketing Cloud."),
            ("Einstein Recipes &amp; Recommendations", "Know how to configure Einstein Recipe types (Trending, Recently Viewed, Similar Items, Collab Filtering) and how Boosters and Exclusions customize recommendation logic for specific use cases."),
            ("Reporting &amp; A/B Testing", "Know how to interpret campaign performance reports (impressions, CTR, revenue per impression) and configure A/B tests against a control group to measure the lift from personalization."),
        ]
    ),
    "mulesoft-developer-i": (
        "MuleSoft Developer I",
        "The MuleSoft Developer I exam tests foundational Anypoint Platform skills: building integrations in Anypoint Studio, using connectors, transforming data with DataWeave, and deploying to CloudHub. Focus on practical flow design and DataWeave syntax.",
        [
            ("Mule 4 Flow Design", "Know the three flow types: Flow (with message source), Sub-Flow (no source, called by reference), and Private Flow. Understand the flow lifecycle and how the Mule Message (payload, attributes, variables) changes through processors."),
            ("DataWeave 2.0 Fundamentals", "DataWeave is the transformation language at the core of Mule 4. Know how to map, filter, transform, and coerce data types. Key functions: map, filter, mapObject, reduce, pluck, flatten, and type coercion operators."),
            ("Core Connectors", "Know the key connectors: HTTP Listener/Request, Database, File/FTP, JMS/AMQP, Salesforce, and how to configure each. Understand connection pooling, reconnection strategies, and connection testing."),
            ("Error Handling", "Know the error handling mechanisms: Try/Catch scope, On Error Continue vs. On Error Propagate, and Global Error Handlers. Understand error type hierarchy (MULE:CONNECTIVITY, HTTP:UNAUTHORIZED, etc.) and how to handle them."),
            ("Deployment to CloudHub", "Know how to deploy a Mule application to CloudHub 1.0: environment selection, worker configuration (size and count), deployment properties, and how to monitor deployed applications."),
        ]
    ),
    "mulesoft-developer-ii": (
        "MuleSoft Developer II",
        "The MuleSoft Developer II exam tests advanced development skills: complex DataWeave transformations, async patterns, API security implementation, and advanced deployment strategies. Expect deep technical questions on Anypoint Platform internals.",
        [
            ("Advanced DataWeave", "Go beyond basic mappings: know how to use modules (Arrays, Strings, Math), pattern matching, recursive functions, and how to write reusable DataWeave modules. Know how to handle complex nested JSON and XML transformations."),
            ("Async &amp; Batch Processing", "Know Batch Jobs in Mule 4: Batch Job scope, Batch Step, Batch Aggregator, and On Complete phases. Understand when to use batch processing vs. scatter-gather for parallel processing of large data sets."),
            ("API Security Policies", "Know how to apply policies in API Manager: Rate Limiting, JWT Validation, OAuth 2.0 (client credentials, authorization code), CORS, and IP whitelist. Understand policy ordering and how custom policies are built."),
            ("Advanced Deployment Strategies", "Know the difference between CloudHub 1.0, CloudHub 2.0, and Runtime Fabric deployment models. Understand zero-downtime deployments, persistent queues, and how to configure multiple workers for HA."),
            ("Performance Tuning", "Know how to tune thread pools (Grizzly, CPU intensive, CPU lite, I/O), configure watermark-based polling, and use caching (Object Store) to reduce redundant API calls in Mule applications."),
        ]
    ),
    "mulesoft-integration-architect": (
        "MuleSoft Integration Architect",
        "The MuleSoft Integration Architect exam tests expertise in designing integration solutions using API-led connectivity and the Anypoint Platform. Focus on architecture patterns, Center for Enablement (C4E), and governance frameworks.",
        [
            ("API-Led Connectivity Layers", "Master the three-layer model: Experience APIs (channel-specific), Process APIs (orchestration), and System APIs (backend connectivity). Know how to identify which layer each integration belongs to and why."),
            ("Center for Enablement (C4E)", "The C4E promotes reuse by publishing discoverable assets (connectors, APIs, templates) to Anypoint Exchange. Know how to establish a C4E, measure reuse metrics, and govern API lifecycle through the C4E."),
            ("API Governance Framework", "Know how to use API Manager for API governance: applying policies, defining SLAs, monitoring API usage, and how API Autodiscovery links deployed applications to API Manager."),
            ("Architecture Decision Trade-offs", "Architect questions test trade-off reasoning: synchronous vs. asynchronous, REST vs. SOAP, on-premise vs. cloud deployment. Always justify recommendations based on requirements (latency, volume, security)."),
            ("Anypoint Platform Architecture", "Know the major platform components: Anypoint Studio (IDE), Anypoint Exchange (asset library), Runtime Manager (deployment), API Manager (governance), and MQ (async messaging). Understand how they integrate."),
        ]
    ),
    "mulesoft-integration-foundations": (
        "MuleSoft Integration Foundations",
        "The MuleSoft Integration Foundations exam is an entry-level certification testing basic integration concepts and Anypoint Platform familiarity. Focus on understanding what integration is, why it matters, and what MuleSoft does.",
        [
            ("Integration Styles &amp; Patterns", "Know the four integration styles: Point-to-Point, Hub-and-Spoke, ESB, and API-Led Connectivity. Understand the trade-offs of each and why API-led connectivity is MuleSoft&apos;s recommended approach."),
            ("Anypoint Platform Overview", "Know the key platform components at a high level: Anypoint Studio, Exchange, Runtime Manager, API Manager, CloudHub, and MQ. Understand the role each plays in the integration lifecycle."),
            ("API Concepts", "Understand what an API is, the difference between REST and SOAP APIs, how API contracts (RAML/OAS) define interface expectations, and how API versioning works."),
            ("DataWeave Basics", "Know basic DataWeave syntax for simple JSON-to-JSON and JSON-to-XML transformations. Understand the %dw 2.0 header, output directive, and simple map/filter operations."),
            ("Connector Ecosystem", "Know the Anypoint Exchange connector library concept: core connectors (HTTP, Database, File), premium connectors (Salesforce, SAP, Oracle), and how to search and install connectors in Studio."),
        ]
    ),
    "mulesoft-platform-architect": (
        "MuleSoft Platform Architect",
        "The MuleSoft Platform Architect exam tests expertise in designing the Anypoint Platform deployment infrastructure. Focus on Runtime Fabric, CloudHub, on-premise deployment, HA/DR architecture, and platform security.",
        [
            ("Deployment Model Selection", "Know when to use CloudHub 1.0 (managed, simple), CloudHub 2.0 (container-based, more control), Runtime Fabric (self-managed, on-prem or private cloud), and standalone Mule runtimes. Match deployment model to requirements."),
            ("High Availability Design", "Understand how to design HA: multiple workers in CloudHub, Runtime Fabric cluster configuration, persistent queues for message durability, and load balancer configuration for zero-downtime deployments."),
            ("Disaster Recovery Strategy", "Know how to plan DR for Anypoint Platform: multi-region CloudHub deployments, VPC peering, database backup strategies, and RTO/RPO targets for different integration tiers."),
            ("Platform Security Architecture", "Know how to configure VPCs, VPNs, and Dedicated Load Balancers in CloudHub. Understand how Runtime Fabric handles network isolation, TLS termination, and credential management via Anypoint Secrets Manager."),
            ("Capacity Planning", "Understand worker sizing (0.1 vCore to 8 vCore), how to calculate required capacity based on throughput, concurrency, and payload size, and how auto-scaling works in CloudHub 2.0 and Runtime Fabric."),
        ]
    ),
    "mulesoft-catalyst-consultant": (
        "MuleSoft Catalyst Consultant",
        "The MuleSoft Catalyst Consultant exam tests expertise in using the MuleSoft Catalyst methodology to drive integration program success. Focus on the four pillars: Organization, Technology, Delivery, and Engagement.",
        [
            ("Catalyst Methodology Framework", "Know the four Catalyst pillars: Organization (C4E setup, governance), Technology (platform architecture, reuse), Delivery (project delivery, agile), and Engagement (stakeholder alignment, value communication)."),
            ("C4E Establishment", "Know how to establish a Center for Enablement: define the operating model, set up Anypoint Exchange for asset sharing, measure reuse metrics (reuse rate, time-to-market improvement), and grow C4E maturity over time."),
            ("Value Realization", "Understand how to measure integration ROI: time saved through reuse, reduced integration costs, faster time-to-market, and how to present these metrics to executive stakeholders."),
            ("Delivery Best Practices", "Know how Catalyst recommends delivering integration projects: discovery workshops, platform health assessment, phased rollout, and how to prioritize use cases using a value/complexity matrix."),
            ("Stakeholder Engagement", "Catalyst programs succeed through executive sponsorship and business unit engagement. Know how to identify champions, run enablement sessions, and build the internal community of API practitioners."),
        ]
    ),
    "mulesoft-hyperautomation-developer": (
        "MuleSoft Hyperautomation Developer",
        "The MuleSoft Hyperautomation Developer exam tests integration of MuleSoft with RPA (Robotic Process Automation) and IDP (Intelligent Document Processing) capabilities. Focus on designing end-to-end automation solutions.",
        [
            ("Hyperautomation Concepts", "Know what hyperautomation means: combining API-led integration (MuleSoft), RPA (MuleSoft RPA), IDP (Intelligent Document Processing), and AI/ML to automate complex end-to-end business processes."),
            ("MuleSoft RPA Architecture", "Understand how MuleSoft RPA uses bots to automate UI-based tasks that lack APIs. Know how to trigger RPA bots from Mule flows via the RPA API and how to handle bot execution results."),
            ("Intelligent Document Processing", "Know how IDP extracts structured data from unstructured documents (invoices, contracts, forms) using OCR and ML models. Understand how to integrate IDP results back into Mule flows."),
            ("Process Orchestration", "Know how to orchestrate multi-step automations combining API calls, RPA bots, and IDP processes within a single Mule flow. Understand how to handle errors and exceptions in orchestrated automation flows."),
            ("Automation Selection Framework", "Know when to use each automation approach: APIs for systems with integration interfaces, RPA for legacy UI-only systems, IDP for document-heavy processes, and AI/ML for pattern recognition tasks."),
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
