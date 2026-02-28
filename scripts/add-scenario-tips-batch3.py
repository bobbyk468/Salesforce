#!/usr/bin/env python3
"""Batch 3: Tableau/Slack/OmniStudio/Designer + Industry AP certs — 37 cert pages."""
import os

BASE = "/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app/certifications"

CERTS = {
    "tableau-architect": (
        "Tableau Architect",
        "The Tableau Architect exam tests enterprise-scale Tableau deployment design. Focus on server architecture, performance optimization, security configuration, and designing scalable self-service analytics environments.",
        [
            ("Tableau Server Architecture", "Know the Tableau Server component topology: Gateway, Application Server, VizQL Server, Data Server, Backgrounder, and Repository. Understand how each component scales and where bottlenecks occur in high-usage environments."),
            ("Performance Optimization", "Know how to optimize extract refreshes (incremental vs. full), optimize workbook performance (data source optimization, context filters, reducing marks), and configure Backgrounder for large extract loads."),
            ("Security Architecture", "Understand Tableau&apos;s multi-layer security: server-level (authentication), site-level (content permissions), data-level (row-level security via user filters or VPD). Know how to implement data-level security at scale."),
            ("High Availability &amp; Disaster Recovery", "Know how to configure Tableau Server for HA: multi-node cluster, repository failover (PostgreSQL clustering), and backup strategies. Understand TSM backup/restore and the Tableau Cloud migration options."),
            ("Governance Framework", "Know how to design a data governance framework in Tableau: certified data sources, data quality warnings, column-level descriptions, and Tableau Catalog for data lineage and impact analysis."),
        ]
    ),
    "tableau-consultant": (
        "Tableau Consultant",
        "The Tableau Consultant exam tests implementation and solution design skills for Tableau projects. Focus on discovery, solution architecture, performance best practices, and advising clients on Tableau deployment strategies.",
        [
            ("Discovery &amp; Requirements", "Know how to run a Tableau discovery: understanding existing data sources, report inventory, user personas, and governance requirements. Map business requirements to Tableau features and identify migration complexity."),
            ("Solution Architecture Decisions", "Know when to use Tableau Server vs. Tableau Cloud, Desktop vs. Prep, live vs. extract connections, and published data sources vs. embedded data. Justify each decision based on security, performance, and governance needs."),
            ("Data Preparation Strategy", "Know when to use Tableau Prep vs. database-side transformations vs. Tableau Desktop calculated fields. Understand the performance implications of each approach for large data volumes."),
            ("User Adoption Strategy", "Know how to drive Tableau adoption: training plans for different user personas, Tableau Champions programs, usage analytics, and how to measure ROI through Tableau&apos;s usage data."),
            ("Performance Best Practices", "Know how to advise clients on workbook performance: minimizing marks, using context filters effectively, optimizing data source queries, and using extracts to improve dashboard responsiveness."),
        ]
    ),
    "tableau-data-analyst": (
        "Tableau Data Analyst",
        "The Tableau Data Analyst exam tests hands-on skills in building visualizations and analyzing data in Tableau Desktop. Focus on calculated fields, LOD expressions, chart selection, and dashboard interactivity.",
        [
            ("Chart Selection Logic", "Know which chart type communicates each data story: bar (comparison), line (trend), scatter (correlation), heat map (density/pattern), map (geographic), and when to use combined or dual-axis charts."),
            ("Calculated Fields &amp; LOD Expressions", "Know how to write basic calculated fields and the three LOD expression types: FIXED (independent of view), INCLUDE (adds granularity), and EXCLUDE (removes granularity). LOD expressions are heavily tested."),
            ("Filters &amp; Filter Order", "Understand the filter order of operations: Extract → Data Source → Context → Dimension → Measure → Table Calculation. Know how context filters change which data other filters act on."),
            ("Dashboard Interactivity", "Know how to configure actions: Filter Actions (clicking to filter), Highlight Actions, and URL Actions. Understand how to design dashboards for mobile using device-specific layouts."),
            ("Data Preparation in Tableau Prep", "Know basic Tableau Prep operations: cleaning steps (data type changes, null handling, rename), aggregation steps, join/union steps, and how to output flows to extracts or published data sources."),
        ]
    ),
    "tableau-desktop-foundations": (
        "Tableau Desktop Specialist",
        "The Tableau Desktop Specialist exam tests foundational Tableau Desktop skills. Focus on connecting to data, building basic visualizations, and using core features. This is a practical knowledge exam — understand the UI and feature capabilities.",
        [
            ("Connecting to Data", "Know how to connect to file-based sources (Excel, CSV, JSON), database sources, and how to configure joins and unions in the Data Source pane. Understand the difference between live and extract connections."),
            ("Building Basic Visualizations", "Know the Show Me panel chart types and when Tableau recommends each. Understand how to use Rows/Columns shelf, Marks card (color, size, label, detail, tooltip), and filters pane."),
            ("Sorting &amp; Grouping", "Know how to sort data (field sort, manual sort, nested sort) and how to create groups (custom groups from dimension members) and sets (dynamic or fixed subsets of dimension members)."),
            ("Basic Calculations", "Know how to create simple calculated fields: string functions (LEFT, MID, CONTAINS), date functions (DATEDIFF, DATEPART), and aggregate functions (SUM, AVG, COUNT, COUNTD) applied to measures."),
            ("Sharing &amp; Publishing", "Know how to publish workbooks and data sources to Tableau Server or Cloud, export views to images/PDFs/PowerPoint, and use Tableau Reader for offline sharing."),
        ]
    ),
    "tableau-server-administrator": (
        "Tableau Server Certified Administrator",
        "The Tableau Server Administrator exam tests server administration skills: installation, configuration, performance monitoring, and troubleshooting. Focus on TSM commands, backup/restore, and user management at scale.",
        [
            ("TSM Command-Line Interface", "Know key TSM commands: tsm status, tsm configuration set/get, tsm restart, tsm maintenance backup/restore, and tsm sites export/import. Administrators need command-line fluency for the exam."),
            ("User &amp; Content Management", "Know how to manage users (local vs. Active Directory), site roles and their capabilities, groups, and how to bulk-import users with CSV. Understand how to configure site limits (storage, user counts)."),
            ("Performance Monitoring", "Know how to use Tableau Server&apos;s built-in monitoring: the Admin views (Background Tasks, Stats for Space Used, Traffic to Views), Resource Monitoring Tool (RMT), and PostgreSQL repository queries."),
            ("Backup &amp; Recovery", "Know how to configure backup schedules using TSM, what is included in a TSM backup (content, configuration, PostgreSQL), and how to restore from backup including the recovery process for failed nodes."),
            ("Authentication Configuration", "Know how to configure local authentication, Active Directory/LDAP, SAML SSO, OpenID Connect, and Kerberos. Understand how authentication method affects user provisioning and session management."),
        ]
    ),
    "slack-administrator": (
        "Salesforce Slack Administrator",
        "The Slack Administrator exam tests workspace administration skills: user management, channel governance, app management, and security configuration. Focus on enterprise-grade Slack management for large organizations.",
        [
            ("Workspace &amp; Org Administration", "Know the difference between single-workspace organizations and Enterprise Grid (multi-workspace). Understand how to manage users, channels, and settings at both the workspace and org level."),
            ("Channel Governance", "Know how to configure channel naming conventions, default channels, required channels, and channel management policies. Understand how to use channel manager settings to control who can create channels."),
            ("App Management &amp; Security", "Know how to manage the Slack App Directory: approving apps, restricting app installation, and configuring app permissions. Understand how to use App Approval workflows for enterprise compliance."),
            ("Compliance &amp; DLP", "Know Slack&apos;s Enterprise Mobility Management (EMM), message retention policies, eDiscovery/export capabilities, and how to configure Data Loss Prevention (DLP) integrations for regulated industries."),
            ("User Provisioning &amp; SSO", "Know how to configure SAML SSO for Slack, SCIM provisioning for automated user lifecycle management, and how to use Slack&apos;s Directory to manage user profiles and deactivations."),
        ]
    ),
    "slack-consultant": (
        "Salesforce Slack Consultant",
        "The Slack Consultant exam tests solution design and implementation planning for Slack deployments. Focus on use case design, workflow automation, Salesforce integration, and driving organizational adoption.",
        [
            ("Use Case Design", "Know how to map business processes to Slack use cases: executive communication, project collaboration, customer support channels, incident response, and approval workflows. Match each use case to the right Slack features."),
            ("Workflow Builder", "Know how to build Workflow Builder automations: trigger types (message shortcut, schedule, emoji reaction, channel join), step types (send message, form, add to channel, webhook), and use cases for each."),
            ("Salesforce for Slack Integration", "Know how Salesforce for Slack features work: Salesforce record previews, deal rooms, Salesforce Flows triggered from Slack, and Slack alerts from Salesforce record changes. Understand configuration requirements."),
            ("Adoption Strategy", "Know how to drive Slack adoption: executive sponsorship, champions program, use case-driven rollout (start with high-value use cases), and how to measure adoption with Slack analytics."),
            ("Governance Framework", "Know how to design a Slack governance framework: channel naming conventions, workspace vs. channel structure, acceptable use policies, and how to handle the transition from email to Slack."),
        ]
    ),
    "slack-developer": (
        "Salesforce Slack Developer",
        "The Slack Developer exam tests technical development skills for building Slack apps. Focus on the Slack API, Bolt framework, event handling, and building interactive workflows using Block Kit.",
        [
            ("Bolt Framework Architecture", "Know how to build Slack apps using the Bolt framework (Node.js, Python, Java): app initialization, event handling, action handling, shortcut handling, and how OAuth 2.0 app installation works."),
            ("Block Kit UI Framework", "Know how to build rich interactive messages using Block Kit: block types (section, actions, input, context), element types (button, select, date picker, text input), and how to use Block Kit Builder for prototyping."),
            ("Event API &amp; Interactivity", "Know how Slack&apos;s Event API delivers events to your app (message events, reaction events, app_mention), how to configure event subscriptions, and how to respond to interactive components (modals, actions)."),
            ("Workflow Steps", "Know how to build custom Workflow Steps using the workflow_step_edit and workflow_step_execute events. Understand how to create the configuration modal and process step execution callbacks."),
            ("App Distribution &amp; Security", "Know how to distribute Slack apps through the Slack App Directory, implement scoped OAuth for multi-workspace apps, and security best practices: token storage, request signature verification, and HTTPS requirements."),
        ]
    ),
    "omnistudio-developer": (
        "Salesforce OmniStudio Developer",
        "The OmniStudio Developer exam tests technical development of OmniStudio components: FlexCards, OmniScripts, DataRaptors, and Integration Procedures. Focus on configuration logic and custom development extensions.",
        [
            ("OmniScript Design", "Know how to configure OmniScript elements: Text/Number/Date inputs, Select (picklist/multi-select), File Upload, Validation, Set Values, and Navigate. Understand Step navigation, conditional visibility, and error handling patterns."),
            ("DataRaptor Transforms", "Know the four DataRaptor types: Extract (reads Salesforce data), Load (writes to Salesforce), Transform (reformats data without CRM access), and Turbo Extract (simplified read). Know input/output JSON mapping configuration."),
            ("Integration Procedures", "Know how to build Integration Procedures for server-side data orchestration: HTTP Action (external API calls), DataRaptor Turbo Action, Loop Action, Conditional Action, and Set Values. Understand how they differ from DataRaptors."),
            ("FlexCard Development", "Know how to configure FlexCard elements (field blocks, action blocks, state management) and how to embed FlexCards in Lightning pages and OmniScripts. Understand datasource configuration and card state transitions."),
            ("Custom LWC in OmniStudio", "Know how to create custom LWC components that extend OmniStudio: OmniscriptBaseMixin for accessing OmniScript context, custom components in FlexCards, and how to register custom components as OmniStudio elements."),
        ]
    ),
    "omnistudio-consultant": (
        "Salesforce OmniStudio Consultant",
        "The OmniStudio Consultant exam tests solution design and business requirements analysis for OmniStudio implementations. Focus on choosing the right OmniStudio tool for each business scenario and designing scalable configurations.",
        [
            ("Tool Selection Framework", "Know when to use each OmniStudio tool: FlexCards for contextual data display, OmniScripts for guided user processes, DataRaptors for Salesforce data integration, and Integration Procedures for complex orchestration."),
            ("Business Process to OmniScript Mapping", "Know how to decompose a business process into OmniScript steps, identify reusable components, and design the data flow between steps. Understand when sub-OmniScripts improve reusability."),
            ("Data Integration Architecture", "Know when to use DataRaptor Extract vs. Integration Procedure for data retrieval, how to handle complex data transformations, and when to call external APIs from Integration Procedures."),
            ("FlexCard Use Cases", "Know common FlexCard use cases: account/contact dashboards, case summaries, 360-degree customer views. Understand how FlexCard states manage different data scenarios (loading, empty, error, data)."),
            ("Performance &amp; Scalability", "Know best practices for OmniStudio performance: minimizing DataRaptor steps, using Turbo Extract for simple reads, caching Integration Procedure results, and structuring OmniScripts to minimize server calls."),
        ]
    ),
    "industries-cpq-developer": (
        "Salesforce Industries CPQ Developer",
        "The Industries CPQ Developer exam tests technical development of Vlocity/Industries CPQ solutions. Focus on product catalog configuration, pricing logic, custom development, and integration with order management.",
        [
            ("Industries CPQ Product Catalog", "Know how to configure Products, Product Characteristics, Attribute Categories, and how attribute values drive product configuration. Understand the Industries CPQ product hierarchy and how bundles are built."),
            ("Pricing Architecture", "Know how Pricing Plans, Price Lists, Price List Entries, and Promotion Sets work together. Understand how the pricing engine applies promotions, discounts, and charge definitions to calculate the final price."),
            ("Transaction Items &amp; Decomposition", "Know the transaction item data model: how products decompose into order items, how asset-based ordering (ABO) tracks existing subscriber assets, and how amendments and disconnections update asset records."),
            ("Custom Development Patterns", "Know how to extend Industries CPQ with Apex: custom pricing engine hooks, custom product validation rules, and how to integrate custom calculation logic without overriding managed package logic."),
            ("Order Management Integration", "Know how Industries CPQ integrates with Order Management for order fulfillment: decomposition rules, order templates, and how CPQ orders trigger downstream fulfillment processes."),
        ]
    ),
    "strategy-designer": (
        "Salesforce Strategy Designer",
        "The Strategy Designer exam tests design thinking and human-centered design applied to Salesforce projects. Focus on research methods, journey mapping, problem framing, and how to facilitate design workshops.",
        [
            ("Design Thinking Process", "Know the five-stage design thinking process: Empathize, Define, Ideate, Prototype, Test. Understand when to apply each stage and how to move between stages iteratively based on research findings."),
            ("Research Methods", "Know quantitative vs. qualitative research methods: surveys, interviews, contextual inquiry, diary studies, and usability testing. Know how to select the right method based on the research question."),
            ("Journey Mapping", "Know how to create current-state and future-state journey maps: identifying touchpoints, emotions, pain points, and opportunities. Understand the difference between journey maps, service blueprints, and experience maps."),
            ("Problem Framing &amp; HMW Statements", "Know how to write &apos;How Might We&apos; (HMW) statements that reframe problems as opportunities. Understand how to use the POV (Point of View) statement to align on the design challenge."),
            ("Facilitation Techniques", "Know how to facilitate design workshops: affinity mapping, dot voting, crazy 8s ideation, and how to use the Lightning Decision Jam framework to move from problem to solution efficiently."),
        ]
    ),
    "ux-designer": (
        "Salesforce UX Designer",
        "The UX Designer exam tests user experience principles applied to Salesforce implementations. Focus on the Lightning Design System, accessibility standards, user research methods, and how to design usable Salesforce configurations.",
        [
            ("Lightning Design System (SLDS)", "Know the SLDS component library, design tokens, utility classes, and how SLDS ensures visual consistency across Salesforce. Understand when to use standard components vs. custom-styled components."),
            ("Accessibility Standards", "Know WCAG 2.1 AA requirements: keyboard navigation, screen reader support (ARIA labels), color contrast ratios (4.5:1 for normal text), and how to use Salesforce Accessibility Checker to audit Lightning components."),
            ("User Research in Salesforce Projects", "Know how to conduct user interviews, usability tests, and card sorting exercises for Salesforce page layout and navigation design. Understand how to translate findings into actionable design recommendations."),
            ("Page Layout &amp; App Design", "Know how to design Lightning page layouts: component placement, progressive disclosure, and how to use visibility rules to reduce cognitive load. Understand how the Lightning App Builder enables no-code page customization."),
            ("Prototyping &amp; Testing", "Know how to create wireframes and clickable prototypes for Salesforce configurations using tools like Figma or SLDS prototyping kits. Understand how to run usability tests with real Salesforce users."),
        ]
    ),
    "advanced-field-service-ap": (
        "Salesforce Advanced Field Service Accredited Professional",
        "The Advanced Field Service AP exam tests deep expertise in complex Field Service configurations: optimization engine, advanced scheduling policies, and resource management at scale.",
        [
            ("Optimization Engine Architecture", "Know how the Field Service Optimization engine works: the relationship between Scheduling Policies, Work Rules (Service Objectives and Constraints), and how the optimizer balances competing objectives."),
            ("Complex Scheduling Scenarios", "Know how to configure scheduling for complex scenarios: multi-day work orders, crew management (multi-resource), preferred technician logic, and skills-based routing with proficiency levels."),
            ("Resource Capacity Planning", "Understand how to use the Optimization engine&apos;s global optimization to plan capacity, manage overtime, and handle emergency work insertion. Know how service territories and operating hours define scheduling windows."),
            ("Field Service Analytics", "Know how to build Field Service analytics: first-time fix rate, travel time efficiency, SLA compliance, technician utilization, and how to use CRM Analytics for advanced field service reporting."),
            ("Mobile App Advanced Configuration", "Know how to configure advanced mobile features: offline data synchronization, custom mobile flows, barcode scanning for parts lookup, and how to configure the mobile app for different technician roles."),
        ]
    ),
    "b2b-commerce-admin-ap": (
        "Salesforce B2B Commerce Administrator Accredited Professional",
        "The B2B Commerce Admin AP exam tests administration of B2B Commerce stores: catalog management, pricing, buyer groups, and order configuration. Focus on the B2B Commerce data model and store setup.",
        [
            ("Store Setup &amp; Configuration", "Know how to configure a B2B Commerce store: create a store, configure the storefront theme (Builder Studio), set up locales/currencies, and configure the guest browsing and buyer authentication experience."),
            ("Product Catalog Management", "Know how to organize the catalog: Category tree structure, Products, Product Attributes (SKU variants), and how to publish catalog data to the storefront. Understand price book associations for B2B buyers."),
            ("Buyer Groups &amp; Entitlements", "Know how Buyer Groups control catalog and pricing entitlements: associating accounts to buyer groups, configuring entitlement policies, and how B2B buyers see only their entitled products and prices."),
            ("Cart &amp; Checkout Configuration", "Know how to configure the checkout flow: delivery methods, payment methods, tax calculation integration, and how to configure CartItem rules for minimum order quantities and increments."),
            ("Order Management Integration", "Know how B2B Commerce orders flow to Order Management: order creation triggers, order summary creation, and how to configure the post-order experience (order tracking, returns)."),
        ]
    ),
    "b2b-commerce-developer-ap": (
        "Salesforce B2B Commerce Developer Accredited Professional",
        "The B2B Commerce Developer AP exam tests custom development for B2B Commerce stores. Focus on the B2B Commerce extensibility framework, LWC development, and integration patterns.",
        [
            ("B2B Commerce Extensibility Framework", "Know the key extension points: Custom LWC components in the storefront, Cart Extension Apex classes for custom cart logic, Integration APIs for external catalog and pricing, and checkout step overrides."),
            ("Storefront LWC Development", "Know how to create custom LWC components for the B2B storefront: using the ConnectApi in JavaScript, styling with the B2B CSS framework, and deploying components to the Experience Cloud site."),
            ("Apex Extension Points", "Know how to implement CartExtension.CartCalculate for custom pricing/promotions, CartExtension.CartOrchestrator for cart validation, and how to register extensions in the Cart Lifecycle class."),
            ("External Catalog Integration", "Know how to integrate an external PIM or catalog system: using the Integration APIs to sync product data, configuring data feeds, and how real-time pricing calls from external systems work."),
            ("Order Fulfillment Integration", "Know how to integrate B2B Commerce orders with external ERP systems: order creation events, custom order processing logic, and how to implement order status updates from external systems."),
        ]
    ),
    "b2b-solution-architect": (
        "Salesforce B2B Solution Architect",
        "The B2B Solution Architect exam tests multi-cloud architecture design for B2B scenarios. Focus on designing solutions that span Sales Cloud, Service Cloud, B2B Commerce, and CPQ for complex B2B customer experiences.",
        [
            ("Multi-Cloud B2B Architecture", "Know how to design end-to-end B2B solutions spanning Sales Cloud (opportunity management), Service Cloud (support), B2B Commerce (self-service purchasing), and CPQ (complex configuration). Understand data flow between clouds."),
            ("B2B Data Model Design", "Know how to model complex B2B relationships: Account hierarchies (parent/subsidiary), multiple contacts per account, multiple ship-to addresses, and how the B2B Commerce buyer/account model maps to Sales Cloud."),
            ("Integration Architecture for B2B", "Know common B2B integration scenarios: ERP integration for order fulfillment (SAP, Oracle), PIM integration for product data, and how Platform Events or MuleSoft orchestrate these integrations."),
            ("CPQ for B2B Commerce", "Know how CPQ and B2B Commerce complement each other: CPQ for complex configured products (bundles, rules) vs. B2B Commerce for catalog-driven self-service purchasing. Know when to recommend each."),
            ("Customer 360 for B2B", "Know how to design a unified customer view for B2B: Account 360 dashboards, Relationship Maps, Account hierarchies, and how Data Cloud unifies B2B customer data from multiple systems."),
        ]
    ),
    "b2c-commerce-architect": (
        "Salesforce B2C Commerce Architect",
        "The B2C Commerce (SFCC) Architect exam tests enterprise-scale Salesforce Commerce Cloud architecture. Focus on multi-site design, performance optimization, integration patterns, and the cartridge development model.",
        [
            ("SFCC Architecture &amp; Multi-Site", "Know how SFCC organizes deployments: Business Manager, Organizations, Sites, and how to share catalogs and price books across sites. Understand the multi-site configuration for different brands, regions, and locales."),
            ("Cartridge Architecture", "Know the cartridge layering model: base cartridges (Commerce Cloud Storefront Reference Architecture — SFRA), site cartridges, and custom cartridges. Understand cartridge path override and module resolution."),
            ("Performance Optimization", "Know SFCC performance levers: page caching (full-page, partial), lazy loading for product tiles, CDN configuration for static assets, and how to use the Business Manager performance reports."),
            ("Integration Patterns", "Know SFCC integration approaches: REST/SOAP web services from cartridges, Job Frameworks for batch data exchange, and how SFCC integrates with Salesforce CRM via Marketing Cloud Connector and Order Management."),
            ("Security Architecture", "Know SFCC security: PCI compliance requirements, tokenization for payment data, account locking policies, and how to configure access control lists (ACLs) for Business Manager roles."),
        ]
    ),
    "b2c-commerce-developer": (
        "Salesforce B2C Commerce Developer",
        "The B2C Commerce Developer exam tests hands-on SFCC development: ISML templates, controller development (SFRA), and script development. Focus on the SFRA architecture and how to implement common storefront customizations.",
        [
            ("SFRA Architecture", "Know the Storefront Reference Architecture (SFRA) MVC pattern: Routes (controllers), Models (data layer), Templates (ISML views), and how cartridges layer on top of SFRA using the cartridge path."),
            ("Controller Development", "Know how to create custom routes (server.get/post/append/prepend/replace), use middleware for authentication/CSRF protection, and how to return JSON responses or render ISML templates from controllers."),
            ("ISML Templates", "Know ISML syntax: <isset>, <isif>, <isloop>, <isinclude>, <isreplace>, and how to use locale, currency, and content asset tags. Understand how template caching affects dynamic content rendering."),
            ("Script Development", "Know how to write CommonJS-style scripts in SFCC, use the dw.* API (dw.catalog, dw.order, dw.customer), and how to call web services from scripts using the dw.net.HTTPClient."),
            ("Business Manager Configuration", "Know key Business Manager configurations: catalog setup, pricebook management, promotion configuration, storefront configuration (site preferences), and how to use the UX Studio for cartridge management."),
        ]
    ),
    "b2c-solution-architect": (
        "Salesforce B2C Solution Architect",
        "The B2C Solution Architect exam tests multi-cloud architecture for B2C customer experiences. Focus on designing solutions spanning Commerce Cloud, Marketing Cloud, Service Cloud, and CDP/Data Cloud for seamless customer journeys.",
        [
            ("Multi-Cloud B2C Journeys", "Know how to design customer journeys that span SFCC (shopping), Marketing Cloud (engagement), Service Cloud (support), and Data Cloud (unified profile). Understand the data flows and integration touchpoints between each cloud."),
            ("Identity &amp; Profile Unification", "Know how Customer 360 identity unification works across B2C channels: matching on email, mobile, cookie, and loyalty ID. Understand how Data Cloud resolves identity across SFCC, Marketing Cloud, and Service Cloud."),
            ("Commerce-to-Marketing Integration", "Know the integration between SFCC and Marketing Cloud: abandoned cart triggers, post-purchase confirmation emails, and how SFCC transaction data flows to Marketing Cloud for segmentation and retargeting."),
            ("Order Management Integration", "Know how SFCC orders integrate with Salesforce Order Management: the Order On Behalf Of (OBO) pattern, order status sync, return/refund flows, and how Service Cloud agents access order data."),
            ("Architecture Trade-off Decisions", "Solution Architect questions test trade-off reasoning: when to use a shared Salesforce org vs. separate, when to use Data Cloud vs. Marketing Cloud audiences for segmentation, and how to balance performance vs. data freshness."),
        ]
    ),
    "communications-cloud-ap": (
        "Salesforce Communications Cloud Accredited Professional",
        "The Communications Cloud AP exam tests configuration of Vlocity/Industries solutions for communications service providers (CSPs). Focus on product catalog, CPQ, order management, and the CSP-specific data model.",
        [
            ("Communications Cloud Data Model", "Know the CSP-specific objects: Account (residential/business), Service Account, Service Point, Subscription, Product (service plans), and how they map to standard Salesforce objects."),
            ("Industries CPQ for Telecom", "Know how Industries CPQ manages telecom product configuration: voice, data, and value-added services as products with attributes (data allowance, speeds). Understand bundled plan configuration."),
            ("Order Management for CSPs", "Know the telecom order lifecycle: order capture, decomposition (splitting into work items), fallout management, and order tracking. Understand how service activation triggers downstream provisioning."),
            ("Customer 360 for Telecom", "Know how to configure the Communications Cloud customer view: account hierarchy for business customers, service account billing, usage data display, and churn prediction with Einstein."),
            ("OmniStudio in Communications Cloud", "Know how Communications Cloud uses OmniStudio (FlexCards, OmniScripts) for agent desktop and self-service portal experiences. Understand standard Communication Cloud OmniScripts like &apos;Add a Line.&apos;"),
        ]
    ),
    "consumer-goods-cloud-ap": (
        "Salesforce Consumer Goods Cloud Accredited Professional",
        "The Consumer Goods Cloud AP exam tests configuration of field execution solutions for CPG companies. Focus on visit planning, in-store execution, retail audits, and the Consumer Goods data model.",
        [
            ("Consumer Goods Data Model", "Know the CG Cloud objects: Retail Store, Account (retailer), Product, Planogram, Assessment, and Visit. Understand how these objects relate and how the data model supports field rep execution."),
            ("Visit Planning &amp; Scheduling", "Know how to configure visit plans: route planning, call cycle rules, visit frequency by store tier, and how the route management optimization engine assigns visits to reps efficiently."),
            ("In-Store Execution &amp; Audits", "Know how to configure Assessment Tasks (shelf audits, compliance checks) within visits. Understand how tasks are assigned, how survey responses are captured, and how photos are attached via the mobile app."),
            ("Einstein Vision for Shelf Recognition", "Know how Einstein Vision (image recognition) is used in Consumer Goods Cloud for shelf compliance: training the model with planogram data, capturing shelf photos, and how compliance scores are calculated."),
            ("Analytics &amp; Reporting", "Know the standard CG Cloud reports and dashboards: visit compliance rates, distribution KPIs, survey response trends, and how CRM Analytics is used for advanced territory and account performance analysis."),
        ]
    ),
    "consumer-goods-tpm-ap": (
        "Salesforce Consumer Goods Trade Promotion Management Accredited Professional",
        "The Consumer Goods TPM AP exam tests trade promotion management for CPG companies. Focus on promotion planning, fund management, account planning, and promotion settlement workflows.",
        [
            ("Trade Promotion Planning", "Know how to create and manage promotions: promotion types (display, price reduction, bonus case), promotion calendar management, and how promotions link to customer (retailer) accounts."),
            ("Fund Management", "Know how trade promotion funds are structured: Fixed Amount vs. Percentage of Net Sales (PONS), fund allocation across accounts, and how to track fund consumption vs. budget throughout the promotion cycle."),
            ("Account Planning", "Know how Account Plans define annual volume and spend targets by account. Understand how promotions are created against account plans and how planned spending rolls up to the account plan."),
            ("Promotion Settlement &amp; Claims", "Know the settlement process: deduction matching (linking retailer deductions to promotions), claim approval workflows, and how to handle disputes and short payments in the settlement process."),
            ("Analytics for TPM", "Know the key TPM reports: ROI by promotion type, fund utilization rates, compliance rates (actual vs. planned), and post-event analysis. Understand how CRM Analytics dashboards visualize trade spend effectiveness."),
        ]
    ),
    "contact-center-ap": (
        "Salesforce Contact Center Accredited Professional",
        "The Contact Center AP exam tests implementation of contact center solutions using Salesforce. Focus on voice channel configuration, routing strategies, IVR design, and agent experience optimization.",
        [
            ("Service Cloud Voice Architecture", "Know how Service Cloud Voice integrates telephony: Amazon Connect or partner CTI, how voice calls create cases automatically, and how real-time transcription and Einstein Conversation Insights work."),
            ("Omni-Channel Routing for Contact Center", "Know how to configure Omni-Channel for contact center: Queue-Based vs. Skills-Based routing, capacity rules, and how voice, chat, and case channels share agent capacity through a single routing engine."),
            ("IVR Design &amp; Self-Service", "Know how to design IVR flows for contact center deflection: menu options, DTMF input, speech recognition, and how Einstein Bots handle chat/voice self-service before transferring to an agent."),
            ("Agent Experience Configuration", "Know how to configure the agent console for contact center: Service Console with voice controls, CTI Softphone in the utility bar, screen pop configuration based on ANI/DNIS, and wrap-up codes."),
            ("Reporting &amp; Analytics", "Know the key contact center KPIs: Average Handle Time (AHT), First Contact Resolution (FCR), CSAT, and how to build reports using Omni-Channel Supervisor and CRM Analytics for supervisor dashboards."),
        ]
    ),
    "cpq-billing-ap": (
        "Salesforce CPQ and Billing Accredited Professional",
        "The CPQ &amp; Billing AP exam tests the full quote-to-cash process. Focus on CPQ configuration, Billing order generation, invoice processing, and revenue recognition — the complete lifecycle from quoting to recognizing revenue.",
        [
            ("CPQ-to-Billing Object Chain", "Master the object chain: Quote → Quote Line → Order → Order Product → Asset/Subscription → Contract → Invoice Line → Invoice. Know what triggers each object&apos;s creation and the key fields at each step."),
            ("Billing Order Generation", "Know how to configure Order generation: Order Start Date, billing frequency, and how Billing handles co-termination for amendments. Understand how Net New vs. Upgrade vs. Downgrade orders generate different billing actions."),
            ("Invoice Processing", "Know the Invoice Run process: how to configure run schedules, what constitutes an invoice (grouping by account, billing day), and how the Legal Entity and Invoice Status workflow controls invoice approval."),
            ("Subscription Management", "Know how to handle subscription changes mid-term: Cancel (immediate/end-of-term), Reduce Quantity, Add Products, and how proration is calculated for each type of change."),
            ("Revenue Recognition", "Know how Revenue Schedules distribute revenue across periods, how the Accounting Period configuration controls recognition timing, and how to handle ramp deals with non-linear revenue schedules."),
        ]
    ),
    "energy-utilities-ap": (
        "Salesforce Energy &amp; Utilities Accredited Professional",
        "The Energy &amp; Utilities AP exam tests Salesforce implementation for utility companies. Focus on the Energy &amp; Utilities data model, service point management, and how the Industries platform addresses utility-specific business processes.",
        [
            ("Energy &amp; Utilities Data Model", "Know the key objects: Service Point (physical connection), Service Account (billing relationship), Premise (physical address), Meter, and how they relate to standard Account and Contact records."),
            ("Customer Service for Utilities", "Know how to configure utility-specific service requests: start/stop service, high bill inquiries, outage reporting, and how these map to Case types in Service Cloud with utility-specific case processes."),
            ("Asset Management", "Know how Salesforce Assets track utility infrastructure: meters, transformers, poles, and how the asset maintenance schedule integrates with Field Service for preventive maintenance work orders."),
            ("Billing &amp; Revenue", "Know how utility billing integrates with Salesforce: smart meter data ingestion, usage-based billing calculations, time-of-use rate plans, and how Salesforce Revenue Cloud handles utility billing scenarios."),
            ("Industry-Specific Analytics", "Know the utility KPIs tracked in CRM Analytics: customer satisfaction, outage metrics, service request volumes, energy efficiency program adoption, and how predictive analytics identifies at-risk customers."),
        ]
    ),
    "financial-services-cloud-ap": (
        "Salesforce Financial Services Cloud Accredited Professional",
        "The Financial Services Cloud AP exam tests FSC implementation for banking, insurance, and wealth management. Focus on the FSC data model, financial account tracking, advisor experience, and compliance requirements.",
        [
            ("FSC Data Model Extensions", "Know FSC-specific objects: Financial Account (checking, savings, investment), Financial Account Transaction, Financial Goal, Life Event, and how they extend the standard Account/Contact model for financial services."),
            ("Client 360 &amp; Relationship Manager", "Know how to configure the FSC client view: Relationship Map (household members, referral networks), Financial Accounts, Goals, and Life Events. Understand how advisors use this 360-degree view to serve clients."),
            ("Household &amp; Relationship Management", "Know how FSC models households: primary household member, financial account roles (owner, beneficiary), and how household-level rollup fields aggregate assets under management (AUM) across the household."),
            ("Insurance-Specific Features", "Know FSC features for insurance: Policy objects, Claim Management, Producer Management, and how Independent Agents differ from Employees in the FSC data model."),
            ("Compliance &amp; Audit Trail", "Know how FSC addresses compliance requirements: audit logging, consent management, and how Salesforce Shield (Field Audit Trail, Event Monitoring) helps meet regulatory obligations for financial data."),
        ]
    ),
    "health-cloud-ap": (
        "Salesforce Health Cloud Accredited Professional",
        "The Health Cloud AP exam tests Salesforce implementation for healthcare and life sciences. Focus on the Health Cloud data model, patient/member journey design, care plan configuration, and interoperability standards.",
        [
            ("Health Cloud Data Model", "Know the key Health Cloud objects: Patient/Member (Contact extension), Care Plan, Care Plan Problem, Care Plan Goal, Care Plan Task, and how they relate to Cases and standard objects."),
            ("Patient 360 View", "Know how to configure the Patient 360: Timeline (chronological health events), Care Team (multi-disciplinary team members), Social Determinants of Health, and how providers use the console to manage patient interactions."),
            ("Care Plan Configuration", "Know how to create care plan templates (problems, goals, tasks), how care coordinators assign care plans to patients, and how task completion tracking and progress notes work in the care plan workflow."),
            ("Interoperability: FHIR &amp; HL7", "Know the basics of Health Cloud&apos;s interoperability capabilities: FHIR R4 API for EHR integration, HL7 message handling, and how Health Cloud maps clinical data to Salesforce objects."),
            ("Utilization Management &amp; Prior Auth", "Know how Health Cloud supports payer use cases: prior authorization workflows, utilization management case types, and how Care Gaps drive proactive outreach for quality program management."),
        ]
    ),
    "heroku-developer-ap": (
        "Heroku Developer Accredited Professional",
        "The Heroku Developer AP exam tests hands-on Heroku development: deploying applications, configuring dynos, working with add-ons, and integrating with Salesforce via Heroku Connect.",
        [
            ("Heroku Deployment Workflow", "Know the Heroku deployment flow: git push heroku main, Procfile configuration (web/worker dyno types), buildpack selection (auto-detected or explicit), and how release commands run post-deploy tasks."),
            ("Dyno Configuration &amp; Scaling", "Know dyno types (eco, basic, standard, performance), how to scale horizontally (heroku ps:scale web=3) and vertically (dyno size), and how the Heroku Router distributes requests across web dynos."),
            ("Heroku Postgres", "Know Heroku Postgres tiers, how to provision a database (heroku addons:create heroku-postgresql), run psql console sessions, create and restore backups, and promote a follower database during failover."),
            ("Heroku Connect Setup", "Know how to configure Heroku Connect: creating the connection, mapping Salesforce objects to Postgres tables, configuring sync direction (bidirectional, Salesforce to Heroku, Heroku to Salesforce), and troubleshooting sync errors."),
            ("Config Vars &amp; Add-ons", "Know how to manage Heroku config vars (environment variables) for storing credentials, how to provision common add-ons (Redis, SendGrid, Papertrail), and how to use the Heroku CLI to manage your application."),
        ]
    ),
    "loyalty-management-ap": (
        "Salesforce Loyalty Management Accredited Professional",
        "The Loyalty Management AP exam tests configuration of Salesforce Loyalty Management for customer loyalty programs. Focus on program setup, tier management, points accrual, and partner integration.",
        [
            ("Loyalty Program Setup", "Know how to configure a loyalty program: Program Currency (points, miles), Tier Groups with qualifying criteria (points threshold, transaction count), and Member Portal configuration for self-service member management."),
            ("Accrual &amp; Redemption Rules", "Know how to configure Transaction Journal rules: earning rules (fixed points, multipliers, bonus events) and redemption rules (points-to-currency conversion, minimum redemption threshold). Understand how rule conditions restrict eligibility."),
            ("Member Enrollment &amp; Lifecycle", "Know how members enroll (self-service, agent-assisted, bulk import), how tier assignment is calculated at the program period end, and how expiry rules manage points and tier status requalification."),
            ("Partner Management", "Know how to configure partner programs in Loyalty Management: Partner Accounts, Partner Promotions (earn miles at partner merchants), and how partner transaction data is imported and processed."),
            ("Loyalty Analytics", "Know key loyalty KPIs: member acquisition rate, tier distribution, redemption rate, points liability, and how to use CRM Analytics dashboards to track program health and identify at-risk members."),
        ]
    ),
    "manufacturing-cloud-ap": (
        "Salesforce Manufacturing Cloud Accredited Professional",
        "The Manufacturing Cloud AP exam tests Salesforce implementation for manufacturers. Focus on Sales Agreements, Account-Based Forecasting, and how Manufacturing Cloud bridges sales planning with operations.",
        [
            ("Sales Agreements", "Know the Sales Agreement data model: Agreement Header, Agreement Terms (product-level commitments), and how actual order data flows from opportunities or orders to populate agreement actuals vs. planned quantities."),
            ("Account-Based Forecasting", "Know how Account-Based Forecasting works: forecast periods, forecast metrics (planned revenue, actual revenue, adjustments), and how forecasts roll up from account to regional and global levels."),
            ("Rebate Management", "Know how Rebate Management tracks manufacturer incentive programs: Rebate Types (volume rebate, tiered discount), Payout definitions, and how the rebate calculation engine processes eligible transactions."),
            ("Partner &amp; Channel Management", "Know how Manufacturing Cloud supports channel partner management: partner onboarding, partner sales agreements, PRM (Partner Relationship Management) portal configuration for dealers and distributors."),
            ("Manufacturing Analytics", "Know the standard Manufacturing Cloud CRM Analytics dashboards: sales agreement compliance, forecast accuracy, rebate program performance, and how these dashboards help operations teams identify supply/demand mismatches."),
        ]
    ),
    "media-cloud-ap": (
        "Salesforce Media Cloud Accredited Professional",
        "The Media Cloud AP exam tests Salesforce implementation for media and advertising companies. Focus on deal management, campaign execution, revenue management, and the media-specific data model.",
        [
            ("Media Cloud Data Model", "Know media-specific objects: Advertising Deals (linear and digital), Ad Products (ad slots, digital placements), Campaign Budgets, and how they relate to standard Opportunity and Order objects."),
            ("Deal Management", "Know how to configure the deal lifecycle in Media Cloud: proposal generation, rate card pricing for media inventory, deal approval workflows, and how deals activate into campaign execution."),
            ("Campaign Execution", "Know how campaigns are activated: trafficking (sending orders to ad servers), pacing management, and how delivery data flows back from ad servers to update actuals against booked inventory."),
            ("Revenue Management &amp; Billing", "Know how Media Cloud integrates with Revenue Cloud for billing: invoice generation from delivered campaign data, makegoods for underdelivery, and how revenue recognition handles media-specific scenarios."),
            ("Programmatic &amp; Digital Integration", "Know how Media Cloud handles programmatic advertising: integration with DSPs/SSPs, private marketplace deals, and how digital campaign data from Google Ad Manager or FreeWheel integrates with Media Cloud."),
        ]
    ),
    "net-zero-cloud-ap": (
        "Salesforce Net Zero Cloud Accredited Professional",
        "The Net Zero Cloud AP exam tests implementation of Salesforce&apos;s sustainability platform. Focus on carbon accounting, emissions tracking, supply chain data collection, and sustainability reporting.",
        [
            ("Emissions Data Model", "Know the Net Zero Cloud data model: Stationary Assets (facilities), Mobile Assets (fleet), Purchased Electricity, Business Travel, and how each emission source category maps to Scope 1, 2, and 3 emissions."),
            ("Carbon Calculation Methodology", "Know how Net Zero Cloud calculates emissions: emission factors (IPCC, EPA, IEA), activity data (kWh, fuel gallons, miles traveled), and how the calculation engine applies factors to produce CO2e metrics."),
            ("Supply Chain Reporting", "Know how Net Zero Cloud collects Scope 3 supply chain emissions: supplier surveys, supplier data entry portal configuration, and how supplier emissions roll up into the customer&apos;s total Scope 3 footprint."),
            ("Sustainability Goals &amp; Targets", "Know how to configure sustainability goals (net zero by year X, renewable energy percentage), track progress against targets using Progress Records, and how SBTi (Science Based Targets initiative) targets are represented."),
            ("Regulatory Reporting", "Know which reporting frameworks Net Zero Cloud supports: GRI, CDP, TCFD, and how to generate reports aligned to these standards. Understand how audit trails and data lineage support third-party verification."),
        ]
    ),
    "order-management-admin-ap": (
        "Salesforce Order Management Administrator Accredited Professional",
        "The Order Management Admin AP exam tests administration of Salesforce Order Management for omnichannel fulfillment. Focus on order lifecycle configuration, fulfillment routing, and inventory allocation.",
        [
            ("Order Management Data Model", "Know the OM data model: Order Summary (master order record), Fulfillment Order (fulfillment unit), Fulfillment Order Line Item, Order Delivery Group (ship-to address), and how these relate to standard Order objects."),
            ("Order Routing &amp; Allocation", "Know how to configure routing rules: Order Routing Rule Sets, Inventory allocation logic (allocate from nearest location), and how the routing engine selects fulfillment locations based on inventory availability."),
            ("Order Lifecycle Configuration", "Know the standard OM order statuses and the actions that transition between them: Activated → Fulfillment → Shipped → Delivered → Return/Refund. Know how Process Builders or Flows automate status transitions."),
            ("Return &amp; Refund Processing", "Know how to configure return orders: Return Merchandise Authorizations (RMA), return reason codes, refund payment processing, and how restocking updates inventory counts."),
            ("OM Integration with Commerce", "Know how Salesforce Order Management integrates with B2B Commerce and B2C Commerce (SFCC): order creation via API, order status sync back to the storefront, and how the customer order history portal works."),
        ]
    ),
    "order-management-developer-ap": (
        "Salesforce Order Management Developer Accredited Professional",
        "The Order Management Developer AP exam tests custom development for Salesforce Order Management. Focus on API integration, custom routing logic, and extending the OM platform with Apex and Flow.",
        [
            ("OM Connect REST API", "Know the key Order Management REST API endpoints: create orders, cancel order items, create return orders, and query order summaries. Understand the authentication model and how to structure API requests."),
            ("Custom Routing Logic", "Know how to extend Order Management routing: custom Apex routing rules for complex allocation scenarios, custom Flow actions for routing decisions, and how to integrate with external WMS systems for inventory queries."),
            ("Event-Driven Order Processing", "Know how to use Platform Events and Change Data Capture to trigger external systems when OM order status changes. Understand how to build event subscribers that react to fulfillment milestones."),
            ("Custom Order Lifecycle Actions", "Know how to build custom Apex actions that transition order status, custom quick actions on the Order Summary page, and how to use Invocable Methods to call Apex from Flow within the OM context."),
            ("Integration with External Systems", "Know integration patterns for OM: ERP integration (outbound order confirmation, inbound ship confirmation), WMS integration (inventory queries, fulfillment instructions), and how to handle integration failures gracefully."),
        ]
    ),
    "public-sector-solutions-ap": (
        "Salesforce Public Sector Solutions Accredited Professional",
        "The Public Sector Solutions AP exam tests Salesforce implementation for government agencies. Focus on grants management, licensing and permitting, case management, and constituent service.",
        [
            ("Public Sector Data Model", "Know PSS-specific objects: Application (grants, licenses, permits), Inspection, Visit, and how they extend standard Cases and Accounts for government constituent management."),
            ("Grants Management", "Know how to configure grants programs: grant application lifecycle (intake → review → award), scoring and review workflows, disbursement tracking, and grantee reporting requirements."),
            ("Licensing &amp; Permitting", "Know how to configure the licensing lifecycle: application submission (portal or in-person), automated eligibility checks, inspection scheduling (FSL integration), and license issuance with expiry and renewal management."),
            ("Constituent 360 &amp; Self-Service", "Know how to configure the constituent portal (Experience Cloud) for government: identity verification, application submission, case status tracking, and how constituents manage their permits and licenses online."),
            ("OmniStudio for Government", "Know how PSS uses OmniStudio: OmniScripts for guided application intake, FlexCards for agent desktop views, and Integration Procedures for backend system lookups. Understand the standard PSS OmniStudio components."),
        ]
    ),
    "sales-foundations": (
        "Salesforce Sales Foundations",
        "The Sales Foundations exam tests foundational knowledge of Sales Cloud features for new Salesforce users and sales professionals. Focus on the core sales process, account and opportunity management, and daily rep workflows.",
        [
            ("Leads &amp; Lead Management", "Know the Lead lifecycle: capture, qualify, assign (assignment rules), and convert. Understand what data transfers to Account, Contact, and Opportunity during conversion and what does not."),
            ("Account &amp; Contact Management", "Know how to create and manage accounts (company) and contacts (individuals). Understand account hierarchy for parent/child relationships and how to track relationships between contacts across accounts."),
            ("Opportunity Management", "Know the Opportunity stages, sales process configuration, and how Stage-to-Stage movement drives pipeline reporting. Understand key opportunity fields: Amount, Close Date, Probability, and Forecast Category."),
            ("Activity Management", "Know how to log calls, create tasks, and schedule events from Salesforce. Understand how Activity Timeline shows the history of interactions and how Einstein Activity Capture syncs emails and calendar events."),
            ("Reports &amp; Dashboards for Sales", "Know the standard Sales Cloud reports: Pipeline report, Activities report, and Forecast summary. Understand how managers use dashboards to monitor team performance and how reps track their individual pipeline."),
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
