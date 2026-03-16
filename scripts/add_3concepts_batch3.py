#!/usr/bin/env python3
"""Add '3 Concepts That Fail Most Candidates' sections — Batch 3 of 3."""
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
  'omnistudio-consultant-exam-tips': make_section(
    'OmniStudio Consultant',
    '1. OmniScript vs FlexCard — Process vs Display',
    'OmniScripts orchestrate guided, multi-step processes (wizards, intake forms, service interactions) with conditional branching and data operations. FlexCards display contextual summary information about a record in a compact card format — they are read-oriented, not process-oriented. Candidates use OmniScripts to display record summaries — the exam expects FlexCards for at-a-glance display and OmniScripts for interactive workflows.',
    '2. DataRaptor Load vs DataRaptor Transform vs DataRaptor Turbo Extract',
    'DataRaptor Load writes data to Salesforce objects (DML). DataRaptor Transform reshapes data between JSON structures without touching Salesforce records. DataRaptor Turbo Extract reads Salesforce data quickly using bulk SOQL. Candidates use DataRaptor Load for data transformations — the exam expects Transform for reshaping payloads and Load only when writing to Salesforce objects.',
    '3. Integration Procedures — Server-Side, Invocable by OmniScript or API',
    'Integration Procedures run server-side (no browser round-trip) and can call external APIs, DataRaptors, and Apex. OmniScripts can invoke them via Remote Action. They can also be called directly via REST API. Candidates design all external API calls inside OmniScript client steps — the exam expects Integration Procedures for server-side orchestration to reduce browser-to-server trips.',
  ),
  'omnistudio-developer-exam-tips': make_section(
    'OmniStudio Developer',
    '1. Custom LWC in OmniScript — Override vs Embed',
    'You can embed a custom LWC inside an OmniScript as a custom component (extends LightningElement, uses omniscript-mixin). You can also override a built-in OmniScript element with a custom LWC. These are different extension patterns. Candidates write standalone LWCs and try to integrate them — the exam expects the correct mixin-based pattern for embedding custom components in OmniScript context.',
    '2. Activation — OmniScripts and FlexCards Must Be Activated Before Use',
    'After creating or editing an OmniScript or FlexCard in OmniStudio, the component must be Activated (compiled and deployed) before end users can interact with it. Changes made after activation require re-activation. Candidates edit components and expect changes to appear immediately — the exam expects Activation as a required step after any modification.',
    '3. Type vs Sub-Type — OmniScript Identity Keys',
    'Every OmniScript is identified by a Type and Sub-Type (e.g., Type: "Order", SubType: "NewOrder"). The combination must be unique. Versioning creates new versions under the same Type/Sub-Type. FlexCards use a similar naming convention. Candidates name OmniScripts without understanding the Type/Sub-Type identity model — the exam tests how to locate, version, and call specific OmniScripts using their Type/Sub-Type.',
  ),
  'order-management-admin-ap-exam-tips': make_section(
    'Order Management Admin',
    '1. Fulfillment Orders vs Order Summaries — Operational vs Commercial',
    'Order Summaries represent the customer-facing order (what was ordered, total price, status). Fulfillment Orders represent the operational fulfilment split (sent from warehouse A vs warehouse B). One Order Summary can generate multiple Fulfillment Orders based on routing rules. Candidates update Order Summaries for operational status changes — the exam expects Fulfillment Order updates for warehouse and shipping status.',
    '2. Order Routing Rules — Not Configured in Flow by Default',
    'Order routing assigns line items to fulfilment locations based on inventory availability, location proximity, or business rules. In Salesforce OMS, routing rules are configured in the Routing Engine (not via standard Flow). Candidates build custom Flow routing logic — the exam expects Routing Rule configuration within Order Management&apos;s built-in routing framework.',
    '3. Return Merchandise Authorisation (RMA) — Separate Process from Cancellation',
    'A Cancellation stops an order before it ships (no physical return required). An RMA processes a post-shipment return: the customer ships back the goods, inventory is restocked, and a refund is issued. These are separate workflows in Salesforce OMS. Candidates use Cancellation logic for post-shipment returns — the exam expects the RMA workflow with return order, return line items, and refund processing.',
  ),
  'order-management-developer-ap-exam-tips': make_section(
    'Order Management Developer',
    '1. Order Management APIs — REST vs Connect API vs APEX',
    'Salesforce OMS exposes Connect API endpoints for storefront integrations (cart-to-order, checkout). REST API is for general programmatic access. Apex classes (OrderManagement namespace) are available for server-side custom logic. Candidates use general REST endpoints for checkout integrations — the exam expects Connect API (specifically the OMS Connect endpoints) for storefront-to-order creation workflows.',
    '2. Inventory Availability Check — Not a Default Order Creation Step',
    'Inventory availability checks are NOT automatically performed when an Order is created in Salesforce OMS unless explicitly configured. Developers must implement the check via the Inventory Integration or a custom callout. Candidates assume OMS validates inventory automatically — the exam expects explicit inventory availability check configuration as part of the order capture workflow.',
    '3. Payment Integration — Capture vs Authorisation vs Void',
    'Authorisation reserves funds on a payment method without charging. Capture charges the authorised amount (typically after shipment). Void cancels an authorisation before capture. In OMS, these correspond to separate Payment Gateway API calls. Candidates design a single payment operation — the exam expects separate Auth and Capture calls in the correct fulfilment sequence.',
  ),
  'pardot-consultant-exam-tips': make_section(
    'Pardot (Account Engagement) Consultant',
    '1. Completion Actions vs Automation Rules vs Dynamic Lists — Three Trigger Mechanisms',
    'Completion Actions fire once when a specific form/email/link action occurs (form submit triggers email send). Automation Rules run continuously, checking all prospects against criteria at intervals — they can fire multiple times. Dynamic Lists update list membership in real time based on criteria but do not trigger actions. Candidates use Completion Actions for ongoing nurture logic — the exam expects Automation Rules for criteria-based continuous processing.',
    '2. Prospect Grades vs Scores — Profile Fit vs Engagement',
    'Score measures engagement: points added for email opens, clicks, form fills. Grade measures profile fit: how well a prospect matches the ideal customer profile (industry, company size, title). Candidates use Score to prioritise all leads — the exam expects both to be used together: high score + high grade = prioritise; high score + low grade = nurture; low score + high grade = re-engage.',
    '3. Pardot Business Units — Separate Instances Under One Salesforce Org',
    'Pardot Business Units (BUs) allow multiple separate Pardot environments under one Salesforce org — each BU has its own prospects, lists, campaigns, and sending domains. Prospects are NOT shared between BUs by default. Candidates assume all Pardot BUs share one prospect database — the exam expects BU-specific prospect isolation and the Connected Campaigns feature for aligning Pardot and Salesforce campaign reporting.',
  ),
  'pardot-specialist-exam-tips': make_section(
    'Pardot (Account Engagement) Specialist',
    '1. Engagement Studio vs Automation Rules — Nurture vs Batch Processing',
    'Engagement Studio (Engagement Programs) orchestrates time-based, multi-step nurture sequences triggered by prospect actions or timing. Automation Rules run batch evaluations of all prospects against a criteria set and apply actions — they are not time-based sequences. Candidates use Automation Rules to build multi-step nurture — the exam expects Engagement Studio for time-sequenced, event-triggered nurture paths.',
    '2. Email Preference Centre vs Unsubscribe — Opt-Down vs Opt-Out',
    'Unsubscribing removes a prospect from ALL email communication. The Email Preference Centre lets prospects choose which specific email types they receive (product updates, events, newsletters) — they opt out of some but not all. Candidates treat all unsubscribes as permanent global opt-outs — the exam expects the Preference Centre for selective opt-down scenarios to reduce list attrition.',
    '3. Visitor vs Prospect — Anonymous vs Known',
    'A Visitor is an anonymous person who has visited a Pardot-tracked page but has not yet identified themselves (no form fill, no email click). A Prospect is an identified person with an email address in Pardot. Visitors are tracked by cookie but cannot be emailed or nurtured. Candidates design nurture sequences for Visitors — the exam expects Prospects only for email and engagement activities.',
  ),
  'platform-foundations-exam-tips': make_section(
    'Platform Foundations',
    '1. Standard Objects vs Custom Objects — What You Can and Cannot Modify',
    'Standard Objects (Account, Contact, Opportunity, Case) are provided by Salesforce and cannot be deleted — you can add fields, page layouts, and validation rules but cannot remove the core fields. Custom Objects are fully user-defined and can be deleted if no records exist. Candidates try to delete standard objects or standard fields — the exam expects knowledge of what is modifiable on standard vs custom objects.',
    '2. Profiles vs Permission Sets — Baseline vs Extension',
    'Profiles define the baseline permissions for a group of users: what objects they can access, what apps they see, login hours. Permission Sets add permissions ON TOP of a profile — they cannot restrict what a profile already grants. Candidates use Permission Sets to restrict access — the exam expects Profiles for restriction and Permission Sets for expansion.',
    '3. App Launcher vs Navigation Bar vs Home Page — Three Separate Customisation Areas',
    'The App Launcher shows all apps available to a user (customised via profiles and permission sets). The Navigation Bar (within a Lightning App) defines the tabs visible in a specific app. The Home Page displays components relevant to the user&apos;s role. Candidates customise the App Launcher when they mean the Navigation Bar — the exam distinguishes these as separate customisation surfaces.',
  ),
  'process-automation-ap-exam-tips': make_section(
    'Process Automation',
    '1. Record-Triggered Flow — Before Save vs After Save: When Records Can Be Created',
    'Before-Save Record-Triggered Flows can update fields on the triggering record without consuming DML limits — they cannot create or update other records. After-Save flows run post-commit and can create/update related records but consume DML. Candidates use Before-Save to create child records — that is only possible in After-Save. Getting this wrong causes "invalid cross-reference" errors in the exam scenarios.',
    '2. Invocable Apex vs Flow — Declarative-First Unless Code Is Required',
    'Invocable Apex (@InvocableMethod) is called from Flow when the required logic exceeds Flow&apos;s declarative capabilities (HTTP callouts, complex data manipulation). Do not use Invocable Apex for logic Flow can handle natively. Candidates add Invocable Apex for simple field updates or assignments — the exam expects pure Flow for those and Apex only when a scenario explicitly cannot be solved declaratively.',
    '3. Scheduled Flows vs Time-Based Workflows vs Scheduled Paths',
    'Scheduled Flows run on a defined schedule (daily, hourly) and process all records matching criteria at runtime. Time-Based Workflow actions fire relative to a date field on a specific record. Scheduled Paths (in Record-Triggered Flows) execute a path at a time relative to the trigger event for that specific record. Candidates confuse Scheduled Flows (batch) with Scheduled Paths (per-record, relative timing).',
  ),
  'public-sector-solutions-ap-exam-tips': make_section(
    'Public Sector Solutions',
    '1. Licences vs Permits vs Inspections — The PSS Object Hierarchy',
    'Public Sector Solutions uses a structured hierarchy: Business Licence Application → Business Licence → Inspection. An Application is submitted by the constituent, reviewed, and either approved (creating a Licence) or rejected. Inspections are linked to Licences to verify ongoing compliance. Candidates model these as Cases and Tasks — the exam expects PSS-specific objects and the application-to-licence workflow.',
    '2. OmniStudio in PSS — Portal Interactions Use OmniScripts',
    'PSS relies heavily on OmniStudio: OmniScripts power the constituent-facing application and renewal flows on the Experience Cloud portal. FlexCards display permit status, case summaries, and inspection results. DataRaptors read and write application data. Candidates design custom LWC forms for PSS portal interactions — the exam expects OmniScript-based guided processes for constituent self-service.',
    '3. Business Rules Engine (BRE) — Eligibility and Decision Automation',
    'The Business Rules Engine evaluates eligibility criteria for licences, benefits, and permits using a rules-based decision table — no code required. Candidates write Apex or Flow decision logic for eligibility checks — the exam expects BRE configuration for complex multi-condition eligibility scenarios, keeping logic maintainable by non-developers.',
  ),
  'revenue-cloud-consultant-exam-tips': make_section(
    'Revenue Cloud Consultant',
    '1. CPQ Product Rules vs Revenue Cloud Contract Amendments — Different Lifecycles',
    'CPQ Product Rules govern what a sales rep can configure during quoting (compatibility, validation, selection). Contract Amendments in Revenue Cloud handle post-signature changes to active contracts (add products, change quantities, update pricing). Candidates apply CPQ quoting rules to amendment scenarios — the exam expects the Amendment workflow on the Contract record, not the quoting flow.',
    '2. Asset-Based Ordering — Assets Drive Renewal and Amendment Logic',
    'Revenue Cloud creates Assets when a CPQ Quote Line is ordered. Renewals and amendments are driven by the Asset record (current entitlement), not the original Opportunity or Quote. Candidates trace amendments back to the original Opportunity — the exam expects Asset-Based Ordering logic where the Asset is the authoritative record of what a customer currently owns.',
    '3. Order vs Contract vs Subscription — Sequence Matters',
    'The Revenue Cloud lifecycle: Quote → Order → Contract → Asset/Subscription. An Order activates the agreement. A Contract is created from the Order and represents the legally binding term. Subscriptions and Assets represent the ongoing entitlements. Candidates create Contracts directly from Opportunities — the exam expects the Quote → Order → Contract sequence with Subscriptions auto-created from Order Lines.',
  ),
  'sales-cloud-exam-tips': make_section(
    'Sales Cloud Consultant',
    '1. Forecasting Categories — Not the Same as Opportunity Stage',
    'Salesforce Forecast Categories are rollup buckets: Pipeline, Best Case, Commit, Closed Won, Omitted. They map from Opportunity Stage but can be overridden. Candidates answer "what determines the forecast category?" with Stage — but the exam tests the distinction: Stage drives the default category, but sales reps can override the category independently of Stage. Forecast visibility is driven by the Forecast Category, not the Stage directly.',
    '2. Collaborative Forecasting vs Territory Forecasting — Role Hierarchy vs Territory Model',
    'Collaborative Forecasting rolls up quota and pipeline through the standard Role Hierarchy. Territory Forecasting rolls up through the Territory Model (which may differ from the role structure). They are separate systems — enabling one does not enable the other. Candidates assume one forecast setup covers both — the exam expects explicit configuration of each independently.',
    '3. Lead Conversion Field Mapping — Not All Fields Map Automatically',
    'When converting a Lead, Salesforce maps standard Lead fields to standard Account, Contact, and Opportunity fields automatically. Custom Lead fields do NOT map to converted object fields unless explicitly configured in Lead Field Mapping. Candidates expect all custom Lead data to appear on the converted Contact — the exam expects Lead Field Mapping configuration for every custom field that should survive conversion.',
  ),
  'sales-foundations-exam-tips': make_section(
    'Sales Foundations',
    '1. Opportunity Stages vs Forecast Categories — Two Different Picklists',
    'Opportunity Stages are the user-defined steps in the sales process (Prospecting, Qualification, Proposal, Closed Won). Forecast Categories are the rollup buckets for forecasting (Pipeline, Best Case, Commit, Closed). Each Stage maps to a Forecast Category, but they are separate fields. Candidates report on Forecast Categories expecting Stage-level granularity — the exam tests that multiple Stages can map to the same Forecast Category.',
    '2. Products vs Price Books — You Need Both',
    'Products define what you are selling (name, description, product code). Price Books define the prices at which products are sold (standard and custom price books). A Product must be added to a Price Book before it appears on an Opportunity. Candidates create Products expecting them to appear automatically on quotes — the exam expects both Product and Price Book Entry configuration.',
    '3. Activity Timeline vs Activity Reports — Different Views of the Same Data',
    'The Activity Timeline on a record page shows past and upcoming activities in a chronological list. Activity Reports (Tasks and Events report type) query the same activity data across multiple records for analysis. Candidates use Activity Timeline to answer "how many calls did the team make this month?" — the exam expects an Activity Report for cross-record activity analytics.',
  ),
  'sharing-visibility-architect-exam-tips': make_section(
    'Sharing &amp; Visibility Architect',
    '1. OWD + Role Hierarchy + Sharing Rules — The Correct Evaluation Order',
    'Salesforce evaluates record access in this order: OWD (baseline) → Role Hierarchy (opens access upward) → Sharing Rules (open access horizontally) → Manual Sharing (record-by-record grants). Candidates apply sharing rules expecting them to restrict access below OWD — sharing rules can only OPEN access, never restrict below OWD. The only way to restrict below OWD is to change OWD itself.',
    '2. With Sharing vs Without Sharing vs Inherited Sharing in Apex',
    'Apex classes declared "with sharing" enforce the running user&apos;s sharing rules. "Without sharing" bypasses sharing (runs as admin). "Inherited sharing" passes the sharing context from the calling class. Candidates use "without sharing" for all utility classes to avoid access issues — the exam expects "with sharing" for user-facing operations and "without sharing" only for system-level operations with a documented security justification.',
    '3. Territory Management vs Role Hierarchy — Two Separate Sharing Mechanisms',
    'The Role Hierarchy extends record access to managers above the record owner. Territory Management grants access to accounts and their related records based on geographic or segment-based territory assignment — independent of the Role Hierarchy. A user can gain access to an Account through Territory assignment even if they are not above the owner in the Role Hierarchy. Candidates assume territory access is role-based.',
  ),
  'slack-administrator-exam-tips': make_section(
    'Slack Administrator',
    '1. Workspace vs Organisation vs Enterprise Grid — Three Admin Scopes',
    'A Workspace is a single Slack instance (company.slack.com). An Organisation groups multiple Workspaces under shared admin controls. Enterprise Grid connects many Organisations under one enterprise umbrella with centralised security. Candidates apply Workspace-level settings to Enterprise Grid problems — the exam distinguishes admin scope: Workspace Admin (one workspace), Org Admin (multiple workspaces), Enterprise Grid Admin (enterprise-wide).',
    '2. Public vs Private vs Shared Channels — Visibility and External Access',
    'Public channels are visible and joinable by all workspace members. Private channels require an invitation — members cannot search or join uninvited. Shared channels (Slack Connect) connect internal channels with external organisations. Candidates recommend Private channels for External Partner collaboration — the exam expects Shared Channels (Slack Connect) for cross-organisation communication.',
    '3. User Groups vs Channels — @mention Broadcast vs Conversation Space',
    'User Groups are @mentionable sets of users (e.g., @engineering-team) — mentioning the group notifies all members but does not create a conversation space. Channels are conversation spaces where messages are posted and archived. Candidates create new channels when a scenario just needs a way to notify a team — the exam expects User Groups for broadcast notifications without needing a new channel.',
  ),
  'slack-consultant-exam-tips': make_section(
    'Slack Consultant',
    '1. Workflow Builder vs Slack API — No-Code vs Pro-Code',
    'Workflow Builder is a no-code tool for automating Slack-native actions: sending messages, collecting form responses, posting to channels on a trigger. The Slack API is for complex integrations requiring custom logic, external data, or dynamic responses. Candidates recommend Workflow Builder for all automation — the exam expects Workflow Builder for simple, Slack-native automations and API/Bolt for complex custom integrations.',
    '2. Canvas vs Posts vs Bookmarks — Persistent Content Types',
    'Canvas is the collaborative document surface in a channel for shared notes, meeting agendas, and project details. Posts are formatted messages — they appear in the channel timeline. Bookmarks are pinned links/resources in a channel header. Candidates use Posts for all persistent reference content — the exam expects Canvas for collaborative, editable documents and Bookmarks for quick-access links.',
    '3. Salesforce for Slack Integration — Connected App vs Custom Integration',
    'The Salesforce for Slack app is a pre-built integration (Salesforce Records app) that lets users view, create, and update Salesforce records from Slack using the official AppExchange app. Custom Slack-Salesforce integrations use the Slack API + Salesforce REST API. Candidates design custom integrations for standard CRM lookups — the exam expects the AppExchange-native Salesforce for Slack app for standard record operations.',
  ),
  'strategy-designer-exam-tips': make_section(
    'Strategy Designer',
    '1. Futures Thinking vs Current-State Analysis — Speculative vs Descriptive',
    'Futures Thinking projects potential future scenarios based on emerging trends and signals — it is speculative and explores "what could be." Current-state analysis (journey mapping, user research) documents what exists today. Strategy Design work starts with current state but must include futures framing to avoid solving only today&apos;s problems. Candidates present only current-state research as their strategy answer — the exam expects futures framing alongside research.',
    '2. Jobs To Be Done vs User Stories — Motivation vs Task',
    'Jobs To Be Done (JTBD) captures the fundamental motivation behind a user&apos;s behaviour: "When I [situation], I want to [motivation], so I can [outcome]." User Stories capture task-level requirements: "As a [role], I want [feature], so that [benefit]." JTBD is broader and more durable — features change but motivations stay constant. Candidates use User Stories for strategy framing — the exam expects JTBD for understanding root motivations before defining solutions.',
    '3. Hypothesis vs Assumption vs Insight — Research Rigour Distinctions',
    'An Assumption is an unvalidated belief you are acting on. A Hypothesis is a testable prediction derived from an assumption. An Insight is a validated, evidence-backed finding from research. Candidates present assumptions as insights in design reviews — the exam tests research rigour: insights require evidence, hypotheses require testing, and assumptions must be explicitly flagged as risks.',
  ),
  'system-architect-exam-tips': make_section(
    'System Architect',
    '1. System Architect Role Credential — Requires Four Domain Exams',
    'The System Architect credential requires passing all four Domain Architect exams: Data Architect, Integration Architect, Sharing &amp; Visibility Architect, and Development Lifecycle &amp; Deployment Architect. There is no separate "System Architect exam." Candidates study for System Architect as a single test — understand that each domain exam is a standalone test and all four are required before the credential is awarded.',
    '2. API Rate Limits vs Concurrency Limits — Volume vs Parallelism',
    'API Rate Limits cap the total number of API calls per 24 hours (org-based). Concurrency Limits cap the number of simultaneous long-running API requests (5 for Apex REST). Candidates troubleshoot integration failures by increasing API rate limits — when errors occur under moderate volume but with complex queries, concurrency limits are more likely the cause.',
    '3. Event-Driven Architecture — When to Use Platform Events Over Direct Integration',
    'Platform Events decouple publishers (senders) from subscribers (receivers) — the publisher does not need to know who is listening or whether they are available. Direct API calls couple the caller to the called system (if the external system is down, the call fails). Candidates use direct callouts for all real-time data sharing — the exam expects Platform Events when decoupling, buffering, or fan-out (one event, multiple subscribers) is needed.',
  ),
  'tableau-architect-exam-tips': make_section(
    'Tableau Architect',
    '1. Extracts vs Live Connections — Performance vs Currency Trade-Off',
    'Extracts are snapshots of data stored in Tableau&apos;s columnar format (.hyper files) — fast query performance but data is only as fresh as the last refresh. Live connections query the source database directly — always current but performance depends on source database speed. Candidates use Live connections for all scenarios to ensure data freshness — the exam expects Extracts when performance is the priority and query load on the source must be minimised.',
    '2. Row-Level Security — Data Source Filters vs User Attribute Functions',
    'Row-Level Security in Tableau can be implemented via Data Source Filters (a fixed filter applied to the published data source) or User Attribute Functions (ISMEMBEROF, USERNAME — dynamic filters based on logged-in user). Data Source Filters apply to all users of the data source. User Attribute Functions filter per user. Candidates apply Data Source Filters for multi-user security — the exam expects User Attribute Functions for individual user-based data access control.',
    '3. Tableau Server Roles — Creator vs Explorer vs Viewer',
    'Creator can connect to new data, build and publish workbooks, and manage projects. Explorer can edit published workbooks and create new content from existing data sources. Viewer can only view published workbooks. Candidates assign Creator licences to all power users — the exam expects Explorer for users who need to edit dashboards but not connect to raw data, reducing licence cost.',
  ),
  'tableau-consultant-exam-tips': make_section(
    'Tableau Consultant',
    '1. Blending vs Joining — Same Tool, Different Data Architecture',
    'Joins combine data from multiple tables before querying (done at the data source level, creating a single combined row set). Data Blending queries each data source separately and combines results in the view using a linking field — used when data sources cannot be joined (different databases, granularity mismatch). Candidates use Joins for all multi-source scenarios — the exam expects Blending when joining is not possible or appropriate.',
    '2. Calculated Fields vs Table Calculations — Where Computation Happens',
    'Calculated Fields are computed at the data source level (pre-aggregation) or during aggregation — they are persistent and can be reused across views. Table Calculations run after aggregation, on the data already displayed in the view (e.g., Running Total, Percent of Total, Rank). Candidates build Running Total using a Calculated Field — that is a Table Calculation, not a row-level formula.',
    '3. Context Filters vs Regular Filters — Execution Order Matters',
    'Regular Filters each query the entire data source independently, which can be slow for complex views. Context Filters create a temporary table of filtered data that all other filters then apply to — they improve performance when multiple filters are applied to a large data source. Candidates add more Regular Filters to improve performance — the exam expects the highest-selectivity filter to be promoted to Context Filter.',
  ),
  'tableau-data-analyst-exam-tips': make_section(
    'Tableau Data Analyst',
    '1. Dimensions vs Measures — Blue vs Green Pills Affect How Data Is Aggregated',
    'Dimensions are categorical fields (name, region, date — shown as blue pills) that slice data. Measures are numerical fields (sales, count, profit — shown as green pills) that are aggregated. Dragging a dimension to the Rows shelf creates headers. Dragging a measure creates an axis. Candidates put Measures on Rows without understanding that Tableau will aggregate them — know that converting a measure to a Discrete dimension creates header rows, not an axis.',
    '2. LOD Expressions — FIXED vs INCLUDE vs EXCLUDE',
    'FIXED calculates a value at a specified dimension level regardless of what is in the view. INCLUDE adds dimensions to the calculation beyond what is in the view. EXCLUDE removes dimensions from the calculation. Candidates use FIXED for all LOD calculations — the exam tests which LOD expression to use: computing revenue per customer independent of view filters = FIXED; computing average per sub-category when only category is in the view = INCLUDE.',
    '3. Filters Order of Operations — Data Source Filters Run First, Table Calculations Last',
    'Tableau applies filters in this order: Extract → Data Source → Context → Sets → Dimension Filters → Measure Filters → Table Calculations. A Measure Filter applied before aggregation behaves differently than one applied after. Candidates apply Measure Filters expecting them to remove rows before aggregation — Measure Filters run after aggregation by default and filter out aggregated results, not individual rows.',
  ),
  'tableau-desktop-foundations-exam-tips': make_section(
    'Tableau Desktop Foundations',
    '1. Connecting to Data — Live vs Extract in Desktop',
    'In Tableau Desktop, connecting Live keeps data in the original source and queries it each time the view is opened. Creating an Extract saves data to a local .hyper file for faster performance. Candidates use Live for all connections assuming it is always "better" — the exam expects Extracts for offline use, performance improvement, and reducing database load.',
    '2. Show Me vs Drag-and-Drop — When Tableau Automatically Selects Chart Types',
    '"Show Me" recommends chart types based on the current fields on the canvas. Drag-and-drop lets you manually control marks and shelves for custom visualisations. Candidates use Show Me for all visualisations then struggle to modify the result — the exam expects you to understand which shelves (Rows, Columns, Marks card) drive which visual encoding so you can manually build views Show Me cannot create.',
    '3. Groups vs Sets — Static vs Dynamic Membership',
    'Groups manually combine members of a dimension into named categories (North + South = "Southern Region") — static, created by the user. Sets are saved subsets of dimension members based on conditions or manual selection — they can be dynamic (update when data changes) or fixed. Candidates use Groups when they need a condition-based dynamic category — the exam expects Dynamic Sets for criteria-driven grouping.',
  ),
  'tableau-server-administrator-exam-tips': make_section(
    'Tableau Server Administrator',
    '1. Sites vs Projects vs Workbooks — The Permission Hierarchy',
    'Sites are the top-level tenant isolation unit (similar to Salesforce Business Units). Projects are folders within a site for organising content. Workbooks contain views and dashboards. Permissions can be set at Site → Project → Workbook level — more specific permissions override broader ones. Candidates set permissions at the Workbook level for all users — the exam expects Project-level permissions for efficient group-based access management.',
    '2. TSM vs tabcmd vs REST API — Three Admin Interfaces',
    'TSM (Tableau Services Manager) is the server administration CLI for server configuration, backups, and restart. tabcmd is the command-line tool for automating content tasks (publish, download, refresh). REST API enables programmatic server management from applications. Candidates use tabcmd for server restarts — the exam expects TSM for infrastructure operations and tabcmd for content automation.',
    '3. Extract Refresh — Scheduled vs Manual vs Incremental',
    'Full Refresh replaces all data in the extract. Incremental Refresh appends only new rows (requires a date/ID field to identify new records). Scheduled refreshes run automatically on a defined schedule. Candidates use Full Refresh for all scheduled refreshes — the exam expects Incremental Refresh for large data sources where only new records change, to reduce refresh time and database load.',
  ),
  'technical-architect-exam-tips': make_section(
    'Technical Architect',
    '1. CTA Is a Review Board — Not a Written Exam',
    'The Certified Technical Architect credential is awarded via a Review Board presentation: a panel of existing CTAs evaluates a candidate on a scenario they prepare and defend live. There is no multiple-choice exam. Candidates prepare for CTA like a standard exam — the Review Board requires deep scenario analysis, architecture defence, and communication skills, not just technical knowledge recall.',
    '2. Holistic Architecture — Every Decision Involves Trade-Offs',
    'The CTA Review Board evaluates whether candidates can make defensible architecture decisions under constraints (budget, timeline, org maturity, data volume). "Best practice" answers that ignore constraints are penalised. Candidates recommend ideal-state architectures — the exam expects pragmatic recommendations that explicitly acknowledge trade-offs and justify the chosen approach given the scenario constraints.',
    '3. Governance and Delivery — Architecture Without Delivery Plan Is Incomplete',
    'A sound CTA proposal covers not just the technical architecture but also: governance model (who owns what), release/deployment strategy, testing approach, and post-go-live support model. Candidates present technology-only solutions — the board expects end-to-end delivery considerations including team structure, change management, and risk mitigation.',
  ),
  'technical-architect-evaluation-exam-tips': make_section(
    'Technical Architect Evaluation',
    '1. Evaluation Format — Two Proctored Exams Before the Review Board',
    'The Salesforce Technical Architect path includes two proctored multiple-choice assessments (Technical Architect Evaluation exams) before candidates are eligible for the Review Board. These exams test architecture knowledge across all domain areas. Candidates underestimate these proctored exams — they are rigorous and assess whether a candidate has the breadth of knowledge required to enter the Review Board process.',
    '2. Covering All Salesforce Architecture Domains in Evaluation',
    'The Technical Architect evaluation covers all architecture domains: Data Architecture, Integration, Sharing &amp; Visibility, Development Lifecycle, Security, Identity, and Solution Design. Candidates focus on their strongest domain — the exam requires breadth across all domains, with especially high expectations on Integration Patterns, Deployment Strategy, and Data Architecture.',
    '3. Scenario-Based Reasoning Over Feature Recall',
    'The TA Evaluation exams are scenario-based: given a complex business requirement with constraints, choose the best architecture. Correct answers require justifying the approach based on the full context, not just identifying the "best practice." Candidates choose the textbook answer ignoring constraints — the exam penalises technically correct answers that do not fit the scenario constraints.',
  ),
  'technical-architect-review-board-exam-tips': make_section(
    'Technical Architect Review Board',
    '1. The Scenario Is Deliberately Ambiguous — You Must Ask Clarifying Questions',
    'The Review Board scenario intentionally omits details to see if candidates proactively identify and resolve ambiguity. Candidates who proceed on assumptions without questioning constraints will design solutions that do not fit the actual requirements. The first 10 minutes of the board should include explicit clarifying questions: "What is the data volume?" "Is multi-org on the table?" "What are the timeline constraints?"',
    '2. Defence Matters as Much as the Solution',
    'Board members will challenge your design choices. A technically correct architecture that you cannot defend is scored lower than a pragmatic architecture you can explain under pressure. Candidates over-engineer their architecture to impress — the board expects a defensible, constraint-aware design with clear rationale for every major decision.',
    '3. End-to-End Solution — Security, Deployment, and Governance Are Scored',
    'The Review Board scores the full solution, not just the technical architecture. Missing sections include: data security and sharing model, deployment and release strategy, integration governance, and post-launch support model. Candidates present only the data model and integration diagrams — the board expects a complete solution narrative covering all scored dimensions.',
  ),
  'ux-designer-exam-tips': make_section(
    'UX Designer',
    '1. User Research vs Usability Testing — Discovery vs Validation',
    'User Research is done early to understand user needs, mental models, and pain points before designing (interviews, contextual inquiry, surveys). Usability Testing validates a specific design prototype or working product by observing users attempting tasks. Candidates use Usability Testing to discover user needs — the exam expects User Research for discovery and Usability Testing for design validation.',
    '2. Wireframes vs Prototypes vs Mockups — Fidelity Levels',
    'Wireframes are low-fidelity structural layouts (boxes and lines) showing information architecture and layout without visual design. Mockups are high-fidelity static visuals showing exactly what the final product looks like. Prototypes are interactive (low or high fidelity) simulating user interactions. Candidates use "wireframe" and "prototype" interchangeably — the exam distinguishes these by fidelity and interactivity.',
    '3. Accessibility — WCAG AA Is the Standard Minimum',
    'WCAG (Web Content Accessibility Guidelines) Level AA is the standard minimum for enterprise web accessibility: 4.5:1 contrast ratio for normal text, keyboard navigability, screen reader support. Level AAA is aspirational but not required. Candidates design for visual aesthetics first and treat accessibility as optional — the exam expects WCAG AA compliance as a baseline design requirement, not a post-development add-on.',
  ),
  'ai-associate-exam-tips': make_section(
    'AI Associate',
    '1. Supervised vs Unsupervised vs Reinforcement Learning — Three Distinct Paradigms',
    'Supervised learning trains on labelled data (correct answers provided) — used for classification and regression. Unsupervised learning finds patterns in unlabelled data — used for clustering and anomaly detection. Reinforcement learning trains an agent by rewarding desired behaviours — used for sequential decision-making. Candidates use "machine learning" as a catch-all — the exam expects correct identification of which paradigm applies to a given scenario.',
    '2. Bias Types — Where Bias Enters the AI Pipeline',
    'Historical bias: training data reflects past human decisions that were unfair. Representation bias: a group is underrepresented in training data. Measurement bias: the feature used as a proxy for the target variable is flawed. Candidates identify all AI bias as "algorithmic" — the exam expects specific bias type identification and knows that bias enters at the data collection and feature selection stages, not just the model.',
    '3. Salesforce Trusted AI Principles — All Five Must Be Known',
    'Salesforce&apos;s five Trusted AI Principles: Responsible (be accountable), Transparent (explain decisions), Empowering (augment humans, not replace), Inclusive (work for everyone), Respectful (protect privacy and dignity). Candidates memorise three or four — the exam tests all five by name and expects understanding of which principle applies to a given AI deployment scenario.',
  ),
  'pd2-exam-tips-2026': make_section(
    'Platform Developer II (PD2)',
    '1. Apex Design Patterns — Separation of Concerns in Trigger Architecture',
    'PD2 tests Apex design patterns: Trigger Handler pattern separates trigger logic from the trigger file. Service Layer pattern contains reusable business logic. Selector pattern centralises SOQL queries. Domain Layer validates and processes records. Candidates write all logic directly in Apex triggers — the exam expects Trigger Handler pattern at minimum, and asks which layer a specific piece of logic belongs in.',
    '2. Asynchronous Apex: Future vs Queueable vs Batch vs Scheduled',
    '@future: runs one asynchronous method, no chaining, no state. Queueable: like @future but supports chaining, object parameters, and monitoring. Batch: processes large data volumes in chunks (up to 50M records). Scheduled: executes on a cron-like schedule. Candidates use @future for all async operations — the exam expects Queueable when chaining is needed, Batch for large data sets, and Scheduled for recurring jobs.',
    '3. Platform Cache — Partitioned Storage That Does Not Persist Across Deployments',
    'Platform Cache stores computed values (formula results, complex SOQL outputs) in an in-memory cache with a defined TTL, reducing repeated computation. Org Cache is shared across all users; Session Cache is user-session-specific. Cache is NOT persistent — values are lost on deployment, maintenance, or TTL expiry. Candidates design Platform Cache as a permanent data store — the exam expects fallback logic to regenerate values on cache miss.',
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

print('Batch 3 done.')
