#!/usr/bin/env python3
"""Add Key Concepts sections to missing cert pages — batch 1 (administrator through heroku-developer-ap)."""
import os, re

BASE = '/Users/brahmajikatragadda/Downloads/salesforce-certifications/src/app/certifications'

# Key Concepts HTML template builder
def kc_block(title, concepts):
    """concepts: list of (heading, body) tuples"""
    items = ''
    for h, b in concepts:
        items += f'''              <div>
                <p className="font-semibold text-gray-900 mb-1">{h}</p>
                <p>{b}</p>
              </div>\n'''
    return f'''
          {{/* Key Concepts */}}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="space-y-4 text-sm text-gray-700">
{items}            </div>
          </div>
'''

PAGES = {
  'administrator': kc_block('Salesforce Administrator: Key Concepts for the Exam', [
    ('Objects, Fields & Data Model',
     'Standard Objects (Account, Contact, Lead, Opportunity, Case) are the backbone of Salesforce. Custom Objects extend the platform for business-specific data. Field types include Text, Number, Currency, Date, Picklist, Formula, Lookup, and Master-Detail. Roll-Up Summary fields aggregate child records (count, sum, min, max) — only available on Master-Detail. Junction Objects implement many-to-many relationships using two Master-Detail fields. The ADM-201 exam frequently presents a scenario and asks which field type or relationship to use — know cascade delete rules, sharing implications, and when a Lookup is preferable to Master-Detail.'),
    ('Security Model: Profiles, Permission Sets, Roles & Sharing',
     'Org-wide defaults (OWDs) set the baseline visibility for every record. Role hierarchy opens up access upward — managers see what their subordinates own. Profiles control what users CAN do (CRUD, page layouts, app access). Permission Sets grant additional permissions without changing the profile. Sharing Rules extend access horizontally to peers. Manual Sharing lets record owners share individual records. The exam tests layered security scenarios: know that OWD + Role Hierarchy + Sharing Rules all combine additively — the most permissive rule wins for access.'),
    ('Automation: Flows, Approval Processes & Email Alerts',
     'Record-Triggered Flows are the primary automation tool for administrators — they replace Workflow Rules (retiring) and Process Builder (retiring). Before/After Save triggers fire at different points in the transaction; only After Save can create related records. Scheduled Flows process batches on a time basis. Approval Processes route records through one or more human approvers with entry criteria, approver selection, and final approval/rejection actions. Email Alerts are reusable actions that send templated emails. The exam tests which tool handles a given scenario — Flows for complex logic, Approval Processes for structured human sign-off.'),
    ('Reports, Dashboards & List Views',
     'Report Types determine which objects and fields are available. Tabular: flat row lists. Summary: grouped with subtotals. Matrix: two-dimensional grouping. Joined: up to 5 report blocks side by side. Dashboards display visual components (charts, gauges, metrics, tables) driven by reports; each component points to a single source report. The Running User determines whose data is shown. Dynamic Dashboards let each viewer see their own data (up to 5 per org in Enterprise). List Views are quick filtered record sets — shareable with groups or all users. Schedule Reports to deliver via email automatically.'),
    ('Sales & Service Cloud Fundamentals',
     'The Lead Conversion process creates an Account, Contact, and optionally an Opportunity in one action. Opportunity Stages and Probability drive forecasting. Cases are the unit of customer support — they can be created via Web-to-Case, Email-to-Case, or manually. Queues hold Cases or Leads for team assignment. Escalation Rules auto-escalate cases based on age or criteria. Auto-Assignment Rules route incoming Cases or Leads to the right owner. Service Level Agreements (SLAs) are enforced via Entitlements and Milestones. The exam frequently asks about the correct feature for a given support or sales scenario.'),
  ]),

  'administrator-practice-test': kc_block('ADM-201 Practice Test: Key Concepts to Review', [
    ('Data Model & Object Relationships',
     'The ADM-201 practice exam heavily tests data modeling. Know the difference between Master-Detail (cascade delete, roll-up summaries, child shares parent OWD) and Lookup (no cascade delete, independent sharing, no roll-up summaries). External IDs mark a text field for upsert operations and external system matching. Schema Builder provides a visual canvas to view and create objects and relationships. Junction Objects enable many-to-many. Compound fields (Address, Geolocation) store multiple components in one field. Expect 3–5 data model questions in every practice set.'),
    ('Security & Access Control',
     'Object-level security: set via Profiles and Permission Sets (CRUD). Field-level security: set via Profiles and Permission Sets per field. Record-level security: OWDs, Role Hierarchy, Sharing Rules, Manual Sharing, Teams. The principle of least privilege applies — start restrictive, open up selectively. Login Hours and Login IP Ranges restrict when and where users can log in. Connected Apps and OAuth govern API access. Delegated Administration lets non-sysadmin users manage specific user groups. Practice questions often present a user who can/cannot see something and ask what setting to change.'),
    ('Automation & Process Logic',
     'Flows are the primary answer for most automation questions in ADM-201. Record-Triggered (before/after save), Screen Flows (guided UI), Scheduled Flows (time-based), and Autolaunched Flows (called from other automation). Validation Rules fire before the record saves — use them to enforce data quality. Formula fields are read-only calculated fields that update automatically. Roll-Up Summary fields aggregate child data on the parent. Default field values pre-fill fields on new records. Cross-Object Formulas reference parent object fields (up to 5 levels for Lookup, 1 level for Master-Detail from child to parent in roll-up direction).'),
    ('Reports & Dashboards for Practice Questions',
     'Exam practice questions frequently test who can see what on a dashboard. The Running User setting on a standard dashboard means everyone sees data as that user. Dynamic Dashboards (up to 5) let viewers see their own data — requires "Run Reports" permission. Dashboard components (charts, gauges, tables, metrics, Visualforce) each point to a source report. Report Schedules can be set to run reports and email results on a schedule. Custom Report Types define the objects and join conditions available to report builders. Bucket fields in reports let you group values without a formula field.'),
    ('AppExchange & Change Management',
     'AppExchange packages come in Managed (ISV, upgradeable, code protected) and Unmanaged (source editable, no upgrades) varieties. Always install AppExchange packages in a sandbox first and review required permissions before production install. Change Sets move metadata between orgs in the same Salesforce environment (e.g., sandbox to production). Sandboxes: Developer (small data), Developer Pro (more storage), Partial Copy (subset of data), Full (full copy). The deployment cycle is: develop in sandbox → test → deploy via Change Set, Metadata API, or Salesforce CLI.'),
  ]),

  'advanced-field-service-ap': kc_block('Advanced Field Service AP: Key Concepts for the Exam', [
    ('Scheduling & Optimization Engine',
     'The Field Service Scheduling Optimization Engine (Enhanced Scheduling and Optimization, or ESO) automatically schedules and optimizes work orders across a workforce. Scheduling Policies define rules, objectives, and constraints — balance travel time, skill matching, SLA compliance, and customer time preferences. Work Rules include availability, skills, territories, and travel limits. Optimization Objectives specify what to optimize (minimize travel, maximize utilization). Drip Feed Scheduling releases appointments incrementally to field workers. The Advanced FSL exam tests deep configuration of scheduling policies and understanding of how ESO decisions are made — know which rule types govern which behavior.'),
    ('Work Orders, Work Types & Service Appointments',
     'Work Orders are the central record for field service jobs. Work Types define templates — they set default skills, estimated duration, and required products. Service Appointments are the scheduled instances linked to Work Orders (or Account, Asset, Opportunity, or Work Order Line Items). Appointment Bundles group multiple appointments for efficient scheduling. Service Resources are workers or crews. Resource Absences block scheduling during PTO or non-working periods. Service Territories define geographic or operational coverage areas, with Operating Hours. The exam tests complex scenarios with multi-visit work orders, bundled appointments, and nested territories.'),
    ('Asset Management & Maintenance Plans',
     'Assets represent physical equipment or products owned by customers. Asset Relationships model complex asset hierarchies (parent-child, component-of). Maintenance Plans define recurring service schedules — set work type, frequency, and generation horizon. Work Order Generation automatically creates future work orders from the maintenance plan. Asset Warranties track coverage periods and terms. Service Contracts define the scope and duration of a service agreement. Entitlements within Service Cloud FSL determine response time SLAs. Advanced FSL exam questions often involve configuring proactive maintenance and linking warranty coverage to auto-generated work orders.'),
    ('Inventory & Parts Management',
     'Products Required on Work Order Line Items specify the parts needed for a job. Field technicians consume parts from their truck stock (Location Type: Vehicle). Return Orders handle defective or unused parts returned to a depot. Inventory Transfers move parts between locations (warehouse to van, van to van). Serialized Products track individual items; non-serialized track quantities. Price Books set part costs. The exam tests end-to-end parts flows: requesting parts, transferring from depot to van, consuming on job, and returning unused items. Know the difference between a Product Consumed (used on site) and a Product Requested (pre-job planning).'),
    ('Mobile Worker Experience & Offline',
     'The Salesforce Field Service mobile app provides technicians with work order details, navigation, inventory, and signature capture. Offline mode caches assigned appointments and allows data entry without network connectivity — changes sync when connectivity is restored. Flow for Field Service delivers guided on-site workflows through the mobile app. The Gantt chart in the dispatcher console visualizes all scheduled work across the workforce. Global Actions add quick actions to the mobile app. The exam tests the configuration of mobile settings, what data is available offline, and how to build guided mobile workflows using Flow.'),
  ]),

  'b2b-commerce-admin-ap': kc_block('B2B Commerce Admin AP: Key Concepts for the Exam', [
    ('Store Setup & Storefront Configuration',
     'B2B Commerce stores are built on Experience Cloud sites. The Commerce Setup Assistant guides the initial configuration of a store, including currency, tax, and locale settings. Storefronts use LWC (Lightning Web Components) for the buyer-facing UI. Store Context defines which products, pricebooks, and catalogs are available to buyers. Buyer Groups link accounts to specific catalogs and price books. Guest Browse allows unauthenticated users to view products but not purchase. The AP exam tests how to configure a store for a specific business model — know which settings live in the store vs. the Experience Cloud site.'),
    ('Product Catalog & Pricing',
     'Entitlement Policies define which products a buyer group can see and purchase. Price Books in B2B Commerce work similarly to standard Salesforce Price Books — assign products with list and negotiated prices. Price Adjustments apply tier-based or account-specific discounts. Product media (images, documents) is managed through CMS (Content Management System) connected to the store. Product variations (color, size) use Variation Parents and Child Products. Category hierarchies organize products for navigation. The exam focuses on catalog entitlements, pricing logic order of operations, and how to configure account-specific pricing without custom development.'),
    ('Buyer Account & Contact Management',
     'Buyer accounts in B2B Commerce are standard Salesforce Accounts with a Buyer Account record associating them to the store. Buyer users are Experience Cloud community users. Buyer Group membership determines catalog and price access. Delegated admin users in the buyer organization can manage their own users. Checkout configuration controls which buyer roles can place orders and set shipping addresses. The exam tests the relationship between Accounts, Contacts, Buyer Accounts, and Buyer Groups — understand how adding a new buyer contact and granting access flows through these objects.'),
    ('Order Management & Checkout',
     'The B2B Commerce checkout flow is configurable — admins can add, remove, or reorder checkout steps. Cart-to-Order conversion creates a Salesforce Order record. Order Delivery Groups define shipping destinations and methods. Tax integration (Avalara or custom) calculates tax during checkout. Payment Gateway integration handles credit card and purchase order payments. Order History is surfaced back to the buyer in the storefront. The exam tests checkout configuration steps, how to enable purchase order payments, and how the cart-to-order process maps to standard Salesforce order objects.'),
    ('Integration with Salesforce CRM',
     'B2B Commerce is natively integrated with Salesforce CRM — buyer accounts map to Account records, orders become Order records, and product data uses the standard Product2 and PricebookEntry objects. Reorder functionality uses order history stored in Salesforce. External data (ERP inventory, pricing) is integrated via OCI (Order Management) or custom APIs. The Commerce Storefront uses Connect REST APIs for all front-end data operations. The exam tests the data flow between the storefront, Experience Cloud, and core CRM — know which objects store what and how standard Salesforce security applies to buyer data.'),
  ]),

  'b2b-commerce-developer-ap': kc_block('B2B Commerce Developer AP: Key Concepts for the Exam', [
    ('LWC Commerce Components & Override Pattern',
     'B2B Commerce storefronts use Lightning Web Components. The Component Override pattern allows developers to replace default checkout or product detail components with custom implementations — registered in the Community Builder component map. Custom LWCs use the `@salesforce/commerce` scoped modules to access cart, product, and checkout data. The `NavigationMixin` handles in-store navigation. Wire adapters for commerce provide reactive data binding to store context. The AP exam tests how to implement component overrides, wire data into custom components, and handle error states without breaking the checkout flow.'),
    ('Commerce APIs & Storefront REST APIs',
     'The Commerce Connect API (Connect in Apex) provides programmatic access to storefront operations. REST APIs power all storefront interactions — search, product detail, cart, checkout, and order history. The Product Search API supports faceted search with category and attribute filters. Custom price calculators can be implemented via the Commerce Extension framework. The B2C and B2B APIs share similar patterns but differ in auth context (buyer session vs. guest). The exam tests which API to use for a given scenario, how to authenticate as a buyer, and how to extend standard behavior using the extension framework.'),
    ('Checkout Integrations & Tax/Payment',
     'Custom checkout integrations implement the `CartExtension` or `CheckoutExtension` Apex interfaces. Tax calculation extensions receive a cart and return line-item tax amounts. Shipping calculation extensions provide shipping options and costs. Payment integrations use the Payment Gateway framework — implement `commercepayments.PaymentGatewayAdapter`. Test classes for commerce extensions must mock the cart and checkout context. The exam tests how to implement and register each extension type, how to handle exceptions gracefully, and how to write unit tests for commerce Apex extensions.'),
    ('Search Configuration & Merchandising',
     'B2B Commerce search uses the Salesforce Search Index — products are indexed when published. Search configuration allows field boosts, synonym groups, and exclusion rules. Facets are configured from product attributes and category fields. Sorting options are configurable. Merchandising Rules let admins pin, boost, or bury specific products in search results. CMS-managed banners can appear in search result pages. The developer exam tests how to configure search tuning, how to add custom product attributes to the search index, and how to implement custom search result handling in LWC.'),
    ('Testing, Deployment & Performance',
     'B2B Commerce deployments use standard Salesforce metadata tooling — Salesforce CLI, change sets, or CI/CD pipelines. Commerce metadata types include StoreIntegratedService, CommerceSettings, and custom LWC components. Integration tests for commerce extensions use Apex test utilities to simulate cart operations. Page performance is governed by LWC best practices: avoid unnecessary re-renders, use lazy loading for images, minimize wire adapter calls. CDN configuration for Experience Cloud handles static asset caching. The exam tests the correct deployment sequence for a store update and how to diagnose checkout performance issues.'),
  ]),

  'b2b-solution-architect': kc_block('B2B Solution Architect: Key Concepts for the Exam', [
    ('Solution Architecture Fundamentals',
     'B2B Solution Architects design end-to-end solutions spanning Sales Cloud, Service Cloud, Experience Cloud, B2B Commerce, and external systems. Architecture decisions must balance functional requirements, non-functional requirements (scalability, performance, security), and total cost of ownership. The Salesforce Well-Architected framework (Trusted, Easy, Adaptable) guides design trade-offs. Architects produce solution design documents, data models, integration diagrams, and governance plans. The exam presents business scenarios and tests which combination of Salesforce products and configuration approaches best meets the requirements — always favor declarative over code unless code is clearly necessary.'),
    ('Multi-Cloud Data Architecture',
     'B2B scenarios frequently involve Account, Contact, Opportunity, Order, and custom product data shared across Sales, Service, and Commerce clouds. Data governance decisions include: which cloud is the system of record for each object, how to maintain data consistency, and how to handle conflicts. External Data Sources and Salesforce Connect allow external data to appear in Salesforce without ETL. Data Cloud unifies customer data across channels. Master Data Management (MDM) principles prevent duplicate records. The exam tests scenarios where data must flow between clouds — know the object model for each cloud and how standard sharing applies across Salesforce applications.'),
    ('Integration Architecture Patterns',
     'Common B2B integration patterns: Point-to-Point (simple but brittle), Hub-and-Spoke (MuleSoft as integration hub), Event-Driven (Platform Events, Change Data Capture). MuleSoft API-led connectivity uses System, Process, and Experience API layers. Salesforce Connect enables OData-based external object integration. REST/SOAP callouts from Apex require Named Credentials and remote site settings. Bulk API handles high-volume data loads. Idempotent design prevents duplicate processing on retry. The exam tests which integration pattern fits a given latency, volume, and error-handling requirement — know the trade-offs between synchronous and asynchronous patterns.'),
    ('Security & Compliance Design',
     'B2B solutions must address data residency, access control, and audit requirements. Shield Platform Encryption encrypts data at rest. Event Monitoring captures detailed user activity logs. Field Audit Trail retains field history beyond the standard 18 months. Customer-Managed Keys (Bring Your Own Key) give enterprises control over encryption keys. GDPR and CCPA compliance require Right to Be Forgotten capabilities and data retention policies. Health Check and Security Center provide org-level security scoring. The exam tests how to design security controls that meet enterprise compliance requirements without breaking Salesforce native functionality or Apex logic.'),
    ('Governance, Change Management & Scalability',
     'Governance frameworks define how changes move from concept to production — org strategy (single org vs. multi-org), release management (change sets, CLI, CI/CD), and team structure (center of excellence). Sandbox strategy: scratch orgs for development, full sandboxes for UAT. Governor limits must be designed around — particularly SOQL limits in triggers, callout limits in async processes, and heap size in batch jobs. Scalability considerations include: large data volumes (skinny tables, custom indexes), high API throughput (Bulk API, async), and global deployments (multi-currency, multi-language). The exam tests the right governance approach for a given enterprise scale and deployment cadence.'),
  ]),

  'b2c-commerce-architect': kc_block('B2C Commerce Architect: Key Concepts for the Exam', [
    ('Architecture Patterns & Scalability',
     'B2C Commerce (Salesforce Commerce Cloud) uses a multi-tenant SaaS architecture for high-volume retail. The SFRA (Storefront Reference Architecture) is the recommended development baseline — it provides a cartridge-based override pattern, MVC structure, and responsive templates. Architects must design for Black Friday-level traffic: CDN caching strategy, page cache TTLs, and product recommendation service integration. Instance types (PIG for production, SIG/ATIG for non-prod) differ in capacity and SLA. The exam tests architecture decisions for scalability, caching hierarchy (browser → CDN → application), and when to use headless vs. SFRA approaches.'),
    ('Storefront Architecture & Headless Commerce',
     'SFRA cartridges implement the Controller → Template → Model pattern. Custom cartridges extend base cartridges via the cartridge path (left-to-right override). Headless architecture decouples the front-end from Commerce Cloud, using the OCAPI (Open Commerce API) or SCAPI (Salesforce Commerce API) for data. PWA Kit provides a React-based headless starter with Managed Runtime hosting. The architect must decide between SFRA (monolithic, faster to stand up) and headless (more flexibility, higher development cost). The exam tests the trade-offs between these approaches and how the cartridge override pattern enables maintainable customization.'),
    ('Integration Architecture: OCAPI, SCAPI & Connectors',
     'OCAPI (Open Commerce API) is the REST API for Shop (storefront), Data (admin), and Meta endpoints — used by SFRA and third-party integrations. SCAPI (Salesforce Commerce API) is the newer, more secure API replacing OCAPI for front-end use. Connectors integrate Commerce Cloud with Service Cloud, Marketing Cloud, and Order Management. The Salesforce Connector for Order Management syncs orders to Salesforce OMS. Einstein Recommendations API surfaces personalized product recommendations. B2C Connect (now Commerce to Service Cloud Connector) links shopper profiles to Service Cloud cases. The exam tests the correct API for each use case and the security model (PKCE flow for SCAPI).'),
    ('Performance, Caching & CDN Strategy',
     'B2C Commerce uses a CDN (Akamai) for global delivery. Page cache rules define what can be cached, for how long, and with what cache key variations (country, currency, login state). Dynamic content (personalized recommendations, cart) bypasses the page cache. Pipeline profiler and Log Center are key tools for identifying performance bottlenecks. SFRA uses server-side rendering — minimize business logic in templates. Einstein Recommendations and A/B testing (content experiments) add external dependencies that affect page load time. The exam tests cache hierarchy decisions, how to diagnose slow pages using profiler data, and CDN configuration best practices.'),
    ('Security, Compliance & Site Operations',
     'B2C Commerce security includes PCI DSS compliance for payment flows — use a certified payment integration (Stripe, Adyen, CyberSource) and never log card data. SLAs, disaster recovery, and business continuity are Salesforce-managed at the platform level but architects must design for graceful degradation when external services (tax, recommendations) are unavailable. Site Genesis and SFRA include CSRF tokens, input validation, and secure cookies. GDPR compliance requires cookie consent management and data deletion capabilities. The exam tests the architect&apos;s responsibility boundary: what Salesforce manages vs. what the customer and SI partner must configure and maintain.'),
  ]),

  'b2c-commerce-developer': kc_block('B2C Commerce Developer: Key Concepts for the Exam', [
    ('SFRA Architecture: Cartridges & Override Pattern',
     'SFRA is the Salesforce B2C Commerce reference architecture built on a cartridge system. Cartridges are modular packages containing controllers, templates, models, and static assets. The cartridge path (configured in Business Manager) defines override priority — the leftmost cartridge wins. To customize, create a custom cartridge that overrides specific controllers or templates without editing base cartridges. This keeps base cartridge upgrades non-destructive. The `server.extend` and `server.replace` patterns in controllers allow adding before/after steps or completely replacing a route. The developer exam tests the correct use of the override pattern and common mistakes that break cartridge path resolution.'),
    ('Controllers, Scripts & Server-Side Logic',
     'SFRA controllers are JavaScript modules using the `server` framework. Routes handle GET and POST requests and render templates or return JSON. Middleware functions (authentication, CSRF, consent) can be prepended to any route. Models and helpers contain business logic separated from controllers. `dw.system`, `dw.order`, `dw.catalog` — the Digital SDK — provides access to Commerce Cloud server-side APIs. Custom scripts (`.js` files in `cartridge/scripts/`) encapsulate reusable logic. The exam tests how to add a middleware step to an existing controller route, how to call a custom script from a controller, and common governor limit considerations in server-side scripts.'),
    ('Templates (ISML) & Client-Side Assets',
     'ISML (Internet Store Markup Language) is the server-side templating language. `<isinclude>` embeds sub-templates. `<isloop>` iterates collections. `<isset>` assigns variables. `<isif>` handles conditionals. Resource bundles (properties files) provide localized strings. Static assets (JS, CSS, images) are organized in `cartridge/static/` and referenced via `URLUtils.staticURL()`. Webpack compiles and bundles client-side JS in SFRA. SASS is compiled to CSS. Client-side JavaScript uses jQuery and Bootstrap in SFRA. The exam tests ISML syntax, how to pass data from controller to template via `pdict`, and how to add a new client-side component.'),
    ('Jobs, Feeds & Business Manager Configuration',
     'Commerce Cloud Jobs run server-side scripts on a schedule or on-demand. Jobs process product feeds (import/export), order exports, and inventory updates. The Job Framework uses steps configured in Business Manager. IMPEX (Import/Export) handles large data loads via XML or CSV files placed in the IMPEX directory. Site Preferences store admin-configurable settings accessible in code via `dw.system.Site.current.preferences`. Custom Attributes extend standard objects (products, orders, customers) in Business Manager. The exam tests Job configuration, IMPEX file formats, and how to read custom site preferences in controller logic.'),
    ('Testing, Debugging & Deployment',
     'Commerce Cloud development uses the `sgmf-scripts` (SFRA build tools) and Salesforce Commerce Cloud CLI (`sfcc-ci`) for deployment. Code deployment uploads cartridges to a code version, which is then activated. The Request Log and Custom Log APIs (`dw.system.Logger`) support debugging. The Pipeline Profiler identifies slow controller routes. Functional tests use `mochawesome` reports. Unit testing is done with jest and `dw-api-types` mocks for Digital SDK. The exam tests the deployment sequence (cartridge upload → code version activation), how to write a testable controller with mocked dependencies, and how to diagnose errors using Business Manager logs.'),
  ]),

  'b2c-solution-architect': kc_block('B2C Solution Architect: Key Concepts for the Exam', [
    ('Solution Design for B2C Retail',
     'B2C Solution Architects design solutions spanning Commerce Cloud (storefront), Marketing Cloud (email/journey), Service Cloud (support), and Order Management (fulfillment). The architect balances business requirements (conversion, retention, support cost) against technical constraints (API limits, data residency, licensing). Salesforce Customer 360 provides a unified identity across clouds via Marketing Cloud Personalization and Data Cloud. The exam presents complex multi-cloud business scenarios and tests which combination of products, connectors, and configuration choices best meets the requirements — know the capabilities and limits of each cloud.'),
    ('Multi-Cloud Integration Patterns',
     'Key B2C connectors: Commerce to Marketing Cloud Connector (syncs shopper data and triggers journeys), Commerce to Service Cloud Connector (links shopper profiles to cases), Order Management Connector (syncs orders to Salesforce OMS). Data flows: purchase events → Marketing Cloud → re-engagement journeys; support cases → Service Cloud → order lookup. Marketing Cloud Connect links core Salesforce objects to Marketing Cloud data extensions. Salesforce CDP/Data Cloud unifies identity across all clouds. The architect must know which connector to use, its data latency, and what to do when a connector doesn&apos;t support a required use case (custom integration via API).'),
    ('Data Architecture & Customer Identity',
     'B2C data architecture centers on the shopper profile: anonymous browser → registered account → unified customer identity. Commerce Cloud Customer record (online profile) maps to Marketing Cloud subscriber and Service Cloud Contact. Duplicate management prevents fragmented profiles when the same customer shops across channels. External ID fields align records across systems. Data Cloud resolves identity using deterministic (email match) and probabilistic rules. GDPR and CCPA compliance requires consent management, preference centers, and Right to Be Forgotten across all connected clouds. The exam tests how identity flows across clouds and what an architect designs to ensure a single coherent customer view.'),
    ('Order Management & Fulfillment Architecture',
     'Salesforce Order Management (SOM) handles post-purchase orchestration: order capture, payment settlement, fulfillment routing, returns, and refunds. The Order Summary object is the central record in SOM. Fulfillment flows route orders to the correct warehouse or drop-shipper based on inventory availability and shipping cost. Change Orders handle post-purchase modifications. Distributed Order Management (DOM) optimizes fulfillment location selection. Integration with WMS (Warehouse Management Systems) and ERP happens via API or MuleSoft. The exam tests how an architect designs the order-to-fulfillment flow, handles partial fulfillment scenarios, and integrates SOM with external warehouse systems.'),
    ('Non-Functional Requirements & Governance',
     'B2C solutions must be designed for scale: peak traffic (Black Friday), global reach (multi-language, multi-currency, multi-region), and high availability (99.99% uptime SLA). Caching strategy across CDN, application, and browser layers reduces load time and infrastructure cost. Disaster recovery design defines RPO (Recovery Point Objective) and RTO (Recovery Time Objective). Release management for B2C spans multiple clouds — changes must be coordinated across Commerce Cloud code deployments, Marketing Cloud journey updates, and Salesforce metadata deployments. The exam tests how an architect balances speed to market against risk, and how to structure a release governance model for a multi-cloud B2C platform.'),
  ]),

  'communications-cloud-ap': kc_block('Communications Cloud AP: Key Concepts for the Exam', [
    ('Product Catalog & Offer Management',
     'Communications Cloud uses TM Forum-aligned data models. The Product Catalog manages the hierarchy: Product Specification → Product Offering → Bundled Offering. Product Attributes define configurable options (plan type, data cap, contract term). Qualification Rules control which offerings are available to a customer based on account type, location, or existing subscriptions. Pricing Tiers apply usage-based or tiered pricing to product offerings. The AP exam tests how to configure a product offering for a telecommunications use case, including bundling mobile, broadband, and TV services into a single offer.'),
    ('Industries CPQ for Telco',
     'Industries CPQ (Configure, Price, Quote) in Communications Cloud handles complex telco quoting. Configuration Rules enforce product compatibility (e.g., a 5G plan requires a compatible device). Pricing Procedures calculate the total price including promotions, discounts, and one-time vs. recurring charges. Promotions apply time-limited discounts at the order or line level. Decomposition breaks complex product bundles into fulfillable line items for downstream systems. The exam tests how to configure CPQ for a scenario with bundled products, promotional pricing, and device+plan combinations — know the difference between attribute-based configuration and separate product selection.'),
    ('Order Management & Orchestration',
     'Orders in Communications Cloud follow the TM Forum order lifecycle: Order Received → Feasibility → Order Accepted → Provisioning → Order Completed. Order Orchestration uses Flow Orchestration or a BPM tool to coordinate provisioning steps across fulfillment systems. Fallout Management handles failed provisioning steps — the exam tests retry logic and manual intervention workflows. Change Orders handle service modifications (upgrades, downgrades, add-ons). Cancellation management flows handle both pre-provisioning and post-provisioning cancellations. The exam tests the complete order lifecycle and how to design an orchestration that handles common telco provisioning failure scenarios.'),
    ('Contract & Subscription Lifecycle',
     'Contracts in Communications Cloud manage the term commitment for services — start date, end date, and early termination fees. Auto-Renewal rules trigger renewal or renegotiation workflows before contract expiry. Contract amendments modify in-force services and generate change orders. Asset-Based Ordering (ABO) tracks each active service as an asset on the customer account. The Asset Object in Communications Cloud records the current state of a provisioned service. The exam tests how contract terms flow into billing, how ABO manages the lifecycle of a service from provisioning through cancellation, and how to design amendment workflows.'),
    ('Partner Ecosystem & Channel Management',
     'Communications Cloud supports indirect sales through a partner channel — resellers and agents sell services on behalf of the operator. Partner Community provides the sales and ordering interface for channel partners. Partner Accounts and Partner Users manage access and visibility. Revenue sharing and commission tracking are handled through channel management capabilities. The exam tests how to configure a partner order flow, what data the partner can see vs. what is hidden (margin, cost), and how to design the security model so that partners can only access their own customers and orders.'),
  ]),

  'consumer-goods-cloud-ap': kc_block('Consumer Goods Cloud AP: Key Concepts for the Exam', [
    ('Visit Planning & Route Optimization',
     'Consumer Goods Cloud supports field sales and merchandising teams that visit retail stores. Visit Plans define which stores to visit, visit frequency, and visit activities. Route Optimization calculates the most efficient travel sequence for a sales rep&apos;s daily visits. Visit Templates specify which tasks (surveys, order taking, shelf audits) are required at each store type. Priority scoring ranks stores for visit scheduling based on sales volume or compliance risk. The AP exam tests how to configure visit plans, assign them to field teams, and set up route optimization rules — know the difference between manual route assignment and automated optimization.'),
    ('In-Store Execution & Retail Audits',
     'During a store visit, the field rep uses the Salesforce mobile app to complete Activities: shelf audits (planogram compliance), order capture, promotions execution, and competitive data collection. Surveys capture structured data — product availability, shelf position, facing count. Photos attached to visit records document compliance issues. Einstein Vision can analyze shelf images for planogram compliance. Key Performance Indicators (KPIs) measure execution quality per store and rep. The exam tests how to configure survey questions, how photos are attached and surfaced in reports, and how to set up KPI targets for field team performance management.'),
    ('Order Management & Direct Store Delivery',
     'Van Sales (Direct Store Delivery) orders are captured in the field and fulfilled from a delivery vehicle. The order workflow: create cart → confirm order → generate invoice → collect payment → update inventory. Price Books and Price Rules support store-specific and account-specific pricing. Promotions and trade deals apply discounts at the line item level. Inventory management tracks on-hand stock in the delivery vehicle. Returns are processed on-site with inventory adjustments. The exam tests the end-to-end DSD order flow, how pricing rules stack, and how inventory is tracked at the vehicle location level.'),
    ('Account & Store Management',
     'Retail accounts (stores, chains, distributors) are managed as Account records with consumer goods-specific fields (store type, chain affiliation, territory). Store Clusters group similar accounts for targeted promotional strategies. Assortment Plans define which products should be available at each store or cluster. Planogram compliance measures whether the right products are shelved in the right positions. Account plans and joint business plans track collaborative goals with key retail partners. The exam tests how to configure assortment plans, how to link planograms to store accounts, and how to set up account plan templates for key account management.'),
    ('Analytics & Field Performance Reporting',
     'Consumer Goods Cloud reports and dashboards measure field execution quality, sell-in vs. sell-out performance, and promotional effectiveness. Visit Completion Rate, OSA (On-Shelf Availability), and planogram compliance are key metrics. Einstein Analytics (CRM Analytics) apps for Consumer Goods provide pre-built dashboards for territory managers. Scorecards aggregate KPIs at the rep, territory, and national levels. Alerts notify managers when execution falls below threshold. The exam tests which standard reports are available, how to configure custom KPI scorecards, and how CRM Analytics datasets are populated from visit activity data.'),
  ]),

  'consumer-goods-tpm-ap': kc_block('Consumer Goods TPM AP: Key Concepts for the Exam', [
    ('Trade Promotion Planning & Fund Management',
     'Trade Promotion Management (TPM) in Consumer Goods Cloud helps CPG companies plan, execute, and settle promotional spend with retail partners. Trade Funds define the budget available for promotions — split by account, territory, or brand. Fund Commitments allocate budget to planned promotions. Promotion Templates define the type of promotional activity (off-invoice discount, lump sum, scan data deal). Volume Planning forecasts the expected sales lift from a promotion. Baseline Volume represents the expected sales without promotion. The AP exam tests how to configure trade funds, allocate fund commitments to promotions, and calculate expected ROI from volume lift vs. promotional spend.'),
    ('Promotion Execution & Tactics',
     'A Trade Promotion consists of a header (account, time period, objectives) and one or more Tactics (specific activities: feature, display, temporary price reduction). Each Tactic has its own funding, targets, and conditions. Conditional Deal Logic applies different payout rates based on achieved performance tiers. Calendar views show overlapping promotions for a customer to prevent conflicts. Promotion Approval workflows route high-value or unusual promotions to managers. The exam tests how to configure a multi-tactic promotion, how conditional deals work, and how the calendar tool prevents promotional cannibalization.'),
    ('Settlement & Claims Processing',
     'Trade Promotion settlements reconcile the planned spend against actual retailer claims. Proof of Performance (POP) — scan data, invoices, photos — is required to validate claims. Deductions are amounts the retailer takes off payment; they must be matched to a promotion or flagged as unauthorized. Claim Management workflows route deductions for approval or dispute. Auto-settlement rules can automatically approve claims that match within a tolerance of the plan. Overpayment recovery processes handle situations where the retailer claims more than the agreed amount. The exam tests the settlement lifecycle, how to configure auto-settlement rules, and the deduction-to-promotion matching process.'),
    ('Forecasting & Baseline Analytics',
     'Accurate baselines are critical for measuring promotion ROI. Baseline models use historical scan data to project what sales would have been without the promotion. Lift measurement compares actual sell-out to baseline during the promotional period. Post-promotion dip analysis identifies forward-buying behavior that depresses post-promo sales. CRM Analytics TPM dashboards provide pre-built analysis for fund utilization, promotional effectiveness, and customer P&L. The exam tests how to configure baseline generation, how to interpret lift analysis, and how to use analytics insights to optimize future promotional spend allocation.'),
    ('Integration with ERP & Retailer Data',
     'TPM data flows to and from external systems: ERP (SAP, Oracle) for financial settlement and accrual accounting, retailer portals for scan data feeds, and demand planning systems for volume forecasts. Integration patterns: scheduled batch (daily scan data imports via SFTP), near-real-time (API-based deduction feeds), and event-driven (settlement approval triggers ERP accrual). Data quality is critical — duplicate promotions or mismatched scan data lead to over/under-accruals. The exam tests how to design data integration for a TPM scenario, what data must flow in vs. out of Salesforce TPM, and how to handle data validation errors in incoming scan data feeds.'),
  ]),
}

def build_kc_toc_entry():
    return "{ id: 'key-concepts', title: 'Key Concepts' },"

def insert_key_concepts(slug, kc_html):
    path = os.path.join(BASE, slug, 'page.tsx')
    if not os.path.exists(path):
        print(f"SKIP (not found): {slug}")
        return

    content = open(path, encoding='utf-8').read()

    if 'id="key-concepts"' in content:
        print(f"SKIP (already has KCs): {slug}")
        return

    # Special handling for administrator page (uses PracticeQuestionsSection component)
    if slug == 'administrator':
        # Insert after </div>\n following exam-prep, before <PracticeQuestionsSection
        target = '\n            <PracticeQuestionsSection'
        if target not in content:
            print(f"WARN: could not find PracticeQuestionsSection in {slug}")
            return
        content = content.replace(target, kc_html + '          <PracticeQuestionsSection', 1)
        # Add to ToC: after { id: 'exam-prep' ... } entry
        content = re.sub(
            r"(\{ id: 'exam-prep', title: '[^']+' \},)",
            r"\1\n                { id: 'key-concepts', title: 'Key Concepts' },",
            content, count=1
        )
    else:
        # Standard: insert before <div id="practice-questions"
        target = '          <div id="practice-questions"'
        if target not in content:
            # Try with extra indentation
            target = '            <div id="practice-questions"'
        if target not in content:
            print(f"WARN: could not find practice-questions div in {slug}")
            return
        content = content.replace(target, kc_html + target, 1)
        # Add to ToC
        content = re.sub(
            r"(\{ id: 'practice-questions', title: '[^']+' \})",
            "{ id: 'key-concepts', title: 'Key Concepts' },\n              \\1",
            content, count=1
        )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  OK: {slug}")

print("Batch 1: processing pages...")
for slug, html in PAGES.items():
    insert_key_concepts(slug, html)
print("Done.")
