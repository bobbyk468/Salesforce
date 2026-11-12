import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

export const ADMINISTRATOR_EXTRA_QUESTIONS: SampleQuestion[] = [
  {
    question: "An admin wants a component on a Lightning record page to appear only when the Opportunity record’s Stage is Closed Won. Which feature should they configure in Lightning App Builder?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "Component visibility filters",
      "Dynamic Forms",
      "Record-triggered Flow",
      "Page activation"
    ],
    correctAnswer: 0,
    explanation: "Configure component visibility filters on the component in Lightning App Builder. The filter criteria determine when the component appears on the Lightning page.",
    whyWrong: [
      "Dynamic Forms controls how record fields and sections are arranged; it is not the component visibility setting asked for.",
      "A record-triggered Flow automates actions when a record changes; it does not control whether a page component is displayed.",
      "Page activation assigns a Lightning page to users or contexts; component visibility filters control when an individual component appears."
    ]
  },
  {
    question: "A company wants to ensure that all Leads are automatically assigned to the correct sales rep based on geographic territory. What should be configured?",
    examDomain: 'Sales and Marketing Applications',
    options: [
      "Lead Assignment Rules",
      "Workflow Rules",
      "Process Builder",
      "Flow"
    ],
    correctAnswer: 0,
    explanation: "Lead Assignment Rules automatically assign leads to users or queues based on criteria such as geographic territory, industry, or lead source.",
    whyWrong: [
      "Workflow Rules can update fields or send notifications, but they don't handle the record-ownership assignment logic Lead Assignment Rules are built for.",
      "Process Builder can trigger actions on record changes, but lead-to-rep routing by territory is the specific job of Lead Assignment Rules, not a general Process Builder use case.",
      "Flow can be built to reassign records, but it's not the purpose-built, native tool Salesforce provides for lead routing, that's Lead Assignment Rules."
    ]
  },
  {
    question: "What is the purpose of a Validation Rule?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "To automatically assign records to users",
      "To prevent invalid data from being saved",
      "To send email notifications",
      "To update field values automatically"
    ],
    correctAnswer: 1,
    explanation: "Validation Rules enforce data quality by preventing invalid data from being saved. They check data against criteria and display an error message if the criteria are not met.",
    whyWrong: [
      "Assigning records to users is handled by assignment rules, not Validation Rules.",
      "Sending email notifications is an automation action (Flow/Workflow), not what Validation Rules do.",
      "Validation Rules block invalid saves, they don't automatically update field values themselves."
    ]
  },
  {
    question: "Which sharing setting allows users to both view and edit all records in an org, regardless of ownership?",
    examDomain: 'Configuration and Setup',
    options: [
      "Private",
      "Public Read Only",
      "Public Read/Write",
      "Controlled by Parent"
    ],
    correctAnswer: 2,
    explanation: "Public Read/Write allows users to view and edit records regardless of ownership. Public Read Only also allows users to view all records, but does not grant edit access.",
    whyWrong: [
      "Private restricts visibility to the record owner and their role hierarchy above, the opposite of universal visibility.",
      "Public Read Only lets everyone view records but not edit them, so it does not meet the edit-access requirement.",
      "Controlled by Parent inherits sharing from a related parent record, it doesn't itself grant blanket org-wide visibility."
    ]
  },
  {
    question: "A user needs to create a custom field that calculates the number of days between two date fields. Which field type should be used?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "Formula (Number)",
      "Formula (Date)",
      "Number",
      "Date"
    ],
    correctAnswer: 0,
    explanation: "A Formula field with Number return type can calculate the difference between two date fields, returning the number of days as a numeric value.",
    whyWrong: [
      "A Formula field with Date return type produces a date value, not the numeric day-count difference requested here.",
      "A plain Number field stores a manually entered or DML-set value; it can't automatically calculate the difference between two other fields.",
      "A plain Date field just stores a single date; it has no calculation capability on its own."
    ]
  },
  {
    question: "What is the maximum number of master-detail relationships allowed on a custom object?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models.",
    whyWrong: [
      "A single master-detail relationship is allowed, but the actual platform maximum is higher than 1.",
      "3 exceeds the actual platform limit for master-detail relationships on a custom object.",
      "The limit is not unlimited: Salesforce caps master-detail relationships specifically to preserve sharing and cascade-delete integrity."
    ]
  },
  {
    question: "Which feature allows administrators to track changes to specific fields over time?",
    examDomain: 'Data and Analytics Management',
    options: [
      "Field History Tracking",
      "Audit Trail",
      "Change Data Capture",
      "Field Updates"
    ],
    correctAnswer: 0,
    explanation: "Field History Tracking allows administrators to track changes to specific fields on standard and custom objects, storing up to 20 fields per object.",
    whyWrong: [
      "Audit Trail (Setup Audit Trail) logs configuration/setup changes made by admins, it doesn't track individual field value changes on records.",
      "Change Data Capture streams record change events for external integration, it isn't the admin-facing feature for tracking field history on the record detail page.",
      "Field Updates are an automation action that changes a field's value, they don't track or display a history of past changes."
    ]
  },
  {
    question: "A company wants to automatically send an email when an Opportunity reaches the 'Closed Won' stage. Which automation tool should be used?",
    examDomain: 'Automation',
    options: [
      "Workflow Rule",
      "Process Builder",
      "Flow",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Flow (Record-Triggered Flow) is the recommended automation tool for sending emails when records meet specific criteria. Workflow Rules and Process Builder are being deprecated in favor of Flow.",
    whyWrong: [
      "Workflow Rule can technically send an email alert, but Salesforce has deprecated it in favor of Flow for new automation.",
      "Process Builder can also trigger emails, but it's likewise deprecated in favor of Flow going forward.",
      "'All of the above' is incorrect because Salesforce's current best-practice guidance is to build new automation in Flow, not to treat all three tools as equally recommended."
    ]
  },
  {
    question: "What is the purpose of a Roll-Up Summary Field?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "To summarize data from child records",
      "To link two objects together",
      "To validate data entry",
      "To send email notifications"
    ],
    correctAnswer: 0,
    explanation: "Roll-Up Summary Fields calculate values from related records in a master-detail relationship, such as summing amounts, counting records, or finding min/max values.",
    whyWrong: [
      "Linking two objects together is done through the relationship field itself (master-detail/lookup), not the Roll-Up Summary Field.",
      "Validating data entry is the role of Validation Rules, not Roll-Up Summary Fields.",
      "Sending email notifications is an automation action: Roll-Up Summary Fields only calculate and display aggregated values."
    ]
  },
  {
    question: "A sales operations user needs a report of opportunities grouped by owner and stage, with totals shown for each group. Which report format supports this layout?",
    examDomain: 'Data and Analytics Management',
    options: ["Tabular", "Summary", "Joined", "Historical"],
    correctAnswer: 1,
    explanation: "A summary report supports row grouping and subtotals, so it can group opportunities by owner and stage.",
    whyWrong: [
      "A tabular report is a flat list and does not provide grouped subtotals.",
      "A joined report combines report blocks; it is not required for grouping one opportunity dataset.",
      "Historical is not a standard Salesforce report format."
    ]
  },
  {
    question: "A dashboard should show each logged-in manager only the records they are allowed to access. Which dashboard setting should the admin use?",
    examDomain: 'Data and Analytics Management',
    options: ["Run as a specified user", "Run as the dashboard viewer", "Enable subscriptions", "Use a dynamic gauge"],
    correctAnswer: 1,
    explanation: "A dashboard running as the logged-in user respects that viewer's record access and permissions.",
    whyWrong: [
      "A specified running user makes the dashboard use that person's access context rather than each manager's own access.",
      "Subscriptions control delivery of dashboard refreshes; they do not determine the access context used to display data.",
      "A gauge is a display component and does not set record visibility."
    ]
  },
  {
    question: "An analyst needs to compare monthly closed-won revenue by region and product family in one report. Which report format is the best fit?",
    examDomain: 'Data and Analytics Management',
    options: ["Tabular", "Summary", "Matrix", "Joined"],
    correctAnswer: 2,
    explanation: "A matrix report groups records by both rows and columns, which suits a comparison across region and product family.",
    whyWrong: [
      "A tabular report displays a flat list without cross-grouping.",
      "A summary report groups rows but does not provide the same row-and-column grouping layout.",
      "A joined report displays multiple report blocks and is not needed for a two-dimensional grouping of one dataset."
    ]
  },
  {
    question: "A user can open a report but sees no records, while a colleague sees records from the same report. What should the administrator check first?",
    examDomain: 'Data and Analytics Management',
    options: ["The user's record access and report filters", "The dashboard color palette", "The report's chart type", "The user's Chatter email settings"],
    correctAnswer: 0,
    explanation: "Record-level access and report filters determine which records the user can see in a report.",
    whyWrong: [
      "A dashboard color palette does not affect report row visibility.",
      "A chart type changes visualization, not the underlying records returned to a user.",
      "Chatter email settings do not control report data access."
    ]
  },


  {
    question: "An administrator must prevent a group of users from logging in outside business hours. Where should the administrator configure this restriction?",
    examDomain: 'Configuration and Setup',
    options: ["The users' profiles", "A page layout", "A sharing rule", "A compact layout"],
    correctAnswer: 0,
    explanation: "Login hours are configured on profiles and apply to users assigned to those profiles.",
    whyWrong: [
      "Page layouts control record-page fields and actions, not sign-in times.",
      "Sharing rules grant record access and do not restrict login times.",
      "Compact layouts control highlights-panel fields, not authentication."
    ]
  },

  {
    question: "A user needs temporary access to an additional object permission without changing their profile. What is the recommended way to grant it?",
    examDomain: 'Configuration and Setup',
    options: ["Assign a permission set", "Change the user's role", "Add a queue member", "Change the org-wide default"],
    correctAnswer: 0,
    explanation: "Permission sets add permissions to users without requiring a profile change.",
    whyWrong: [
      "A role primarily affects record visibility through the hierarchy; it does not grant object permissions.",
      "Queue membership supports work distribution and access to queue-owned records, not general object permission assignment.",
      "Org-wide defaults set baseline record access for an object and would affect many users."
    ]
  },
  {
    question: "A field should be visible only to users with a specific permission, even when their page layout includes it. Which control should be configured?",
    examDomain: 'Configuration and Setup',
    options: ["Field-level security", "Record type assignment", "List view sharing", "Login IP range"],
    correctAnswer: 0,
    explanation: "Field-level security controls whether users can view or edit a field across the platform.",
    whyWrong: [
      "Record types control available business processes, picklist values, and layouts, not field security by themselves.",
      "List view sharing controls who can access a list view, not individual field visibility.",
      "Login IP ranges restrict sign-in locations and do not control field visibility."
    ]
  },
  {
    question: "A custom object needs a unique, searchable external identifier from an accounting system. Which field setting should the admin select?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: ["External ID", "Auto Number", "Encrypted", "Required"],
    correctAnswer: 0,
    explanation: "An External ID field stores an identifier from an external system and can be indexed for matching and upsert operations.",
    whyWrong: [
      "Auto Number generates Salesforce values instead of preserving the accounting system's identifier.",
      "Encryption protects field data but does not mark it as an external matching key.",
      "Required enforces that a value is entered but does not provide external ID matching behavior."
    ]
  },
  {
    question: "A sales manager wants to allocate opportunity revenue credit among multiple sales reps. Which feature should the administrator enable?",
    examDomain: 'Sales and Marketing Applications',
    options: ["Opportunity splits", "Opportunity teams", "Lead assignment rules", "Campaign influence"],
    correctAnswer: 0,
    explanation: "Opportunity splits let sales teams divide credit for an opportunity among team members, including revenue credit when configured.",
    whyWrong: [
      "Opportunity teams provide collaboration and access; they do not by themselves allocate opportunity credit.",
      "Lead assignment rules route leads to owners and do not split credit on an opportunity.",
      "Campaign influence associates marketing campaigns with opportunity attribution, not sales-rep credit allocation."
    ]
  },
  {
    question: "A flow should collect information interactively from a user who launches it from a button. Which flow type best fits?",
    examDomain: 'Automation',
    options: ["Screen flow", "Before-save record-triggered flow", "Schedule-triggered flow", "Autolaunched flow without a screen"],
    correctAnswer: 0,
    explanation: "A screen flow presents screens and collects input from a user who launches it.",
    whyWrong: [
      "A before-save record-triggered flow runs automatically in a record save transaction and does not present screens.",
      "A schedule-triggered flow runs for records on a schedule rather than collecting input from a user at launch.",
      "An autolaunched flow without screens runs in the background and does not gather interactive user input."
    ]
  },
  {
    question: "A custom child record should remain when its related custom parent is deleted, with its reference field cleared. Which relationship type and behavior fit this requirement?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: ["Lookup relationship configured to clear its field on parent deletion", "Master-detail relationship", "Hierarchical relationship", "Junction relationship"],
    correctAnswer: 0,
    explanation: "A lookup relationship loosely associates records and can be configured to allow the child record to remain when the referenced record is deleted.",
    whyWrong: [
      "A master-detail relationship requires a parent and inherits ownership and sharing; it is not the loosely coupled relationship described.",
      "Hierarchical relationships are a special relationship available on the User object.",
      "A junction object commonly uses two master-detail relationships to model many-to-many associations."
    ]
  },
  {
    question: "A record-triggered flow must update a field on the record that caused the flow to run, before the record is saved. Which flow type should be selected?",
    examDomain: 'Automation',
    options: ["Before-save record-triggered flow", "After-save record-triggered flow", "Screen flow", "Scheduled-triggered flow"],
    correctAnswer: 0,
    explanation: "A before-save record-triggered flow can update fields on its triggering record before the database save completes.",
    whyWrong: [
      "An after-save flow runs after the triggering record is saved and is used when post-save actions or related-record work is needed.",
      "A screen flow is designed for user interaction and is not triggered automatically before a record save.",
      "A scheduled-triggered flow processes records on a schedule, not in the before-save transaction."
    ]
  },
  {
    question: "An administrator wants a flow to notify a sales manager when an opportunity is created with an amount above a threshold. Which start configuration is appropriate?",
    examDomain: 'Automation',
    options: ["Record-triggered flow on Opportunity, when created, with entry criteria", "Screen flow launched from a utility bar", "Schedule-triggered flow on Account", "Autolaunched flow with no trigger"],
    correctAnswer: 0,
    explanation: "A record-triggered flow on Opportunity can run when a qualifying opportunity is created and perform the notification action.",
    whyWrong: [
      "A screen flow requires a user to launch it and would not automatically react to record creation.",
      "A scheduled flow on Account does not immediately react to a new qualifying Opportunity.",
      "An autolaunched flow with no trigger needs another process to invoke it."
    ]
  },
  {
    question: "A flow must send a reminder email three days before a task's due date. Which record-triggered flow feature is designed for this timing?",
    examDomain: 'Automation',
    options: ["Scheduled path", "Before-save update", "Screen component", "Fault connector"],
    correctAnswer: 0,
    explanation: "A scheduled path runs at a defined time relative to a record-triggered flow event, such as before a date field.",
    whyWrong: [
      "A before-save update runs during the save transaction and cannot wait until a future date.",
      "A screen component collects user input and does not schedule an automated action.",
      "A fault connector handles flow errors rather than delaying work until a target time."
    ]
  },
  {
    question: "A manager must approve a discount request before an opportunity can proceed. Which Salesforce feature is designed to route the record for approval?",
    examDomain: 'Automation',
    options: ["Approval process", "Assignment rule", "Duplicate rule", "Escalation rule"],
    correctAnswer: 0,
    explanation: "An approval process defines submission criteria, approvers, and actions for records requiring formal approval.",
    whyWrong: [
      "Assignment rules route qualifying leads or cases to owners; they do not provide an approval decision workflow.",
      "Duplicate rules identify or block potential duplicate records.",
      "Escalation rules route cases based on support criteria and do not approve opportunity discounts."
    ]
  },
  {
    question: "A flow should branch based on whether an opportunity is Closed Won, then take different actions for each outcome. Which flow element should be used?",
    examDomain: 'Automation',
    options: ["Decision", "Assignment", "Loop", "Get Records"],
    correctAnswer: 0,
    explanation: "A Decision element evaluates conditions and routes the flow along the matching outcome path.",
    whyWrong: [
      "Assignment sets variable values but does not route the flow among conditional paths.",
      "Loop iterates through a collection and is not the conditional branching element.",
      "Get Records retrieves records; it does not evaluate outcomes to branch the flow."
    ]
  },
  {
    question: "A company wants to offer different negotiated prices for the same products to different customer segments. Which Salesforce feature should it configure?",
    examDomain: 'Sales and Marketing Applications',
    options: ["Separate price books with appropriate price book entries", "Separate lead assignment rules", "Case escalation rules", "Opportunity teams"],
    correctAnswer: 0,
    explanation: "Price books and their price book entries let a company associate products with different prices for different selling contexts.",
    whyWrong: [
      "Lead assignment rules route lead ownership and do not set product prices on opportunities.",
      "Case escalation rules route support cases based on criteria and time; they do not define product prices.",
      "Opportunity teams provide collaboration and access on opportunities, not customer-specific product pricing."
    ]
  },
  {
    question: "A sales rep wants to see which products and quantities are included in an opportunity's expected sale. Which related records should they add?",
    examDomain: 'Sales and Marketing Applications',
    options: ["Opportunity products", "Assets", "Cases", "Campaign members"],
    correctAnswer: 0,
    explanation: "Opportunity products represent the products and quantities included in an opportunity.",
    whyWrong: [
      "Assets represent products a customer owns or uses, not proposed line items on an open opportunity.",
      "Cases track customer issues and support requests.",
      "Campaign members track people associated with campaigns and their campaign status."
    ]
  },
  {
    question: "A sales user wants to record a customer call and a follow-up meeting on an account so teammates can see the interaction history. What should the user create?",
    examDomain: 'Productivity and Collaboration',
    options: ["Activities related to the account", "A campaign member", "A case milestone", "An opportunity split"],
    correctAnswer: 0,
    explanation: "Calls and meetings can be recorded as activities and related to the account so they appear in its activity history.",
    whyWrong: [
      "Campaign members associate leads or contacts with a marketing campaign and track their campaign status.",
      "Case milestones track service targets and do not record account interactions.",
      "Opportunity splits allocate credit on an opportunity and do not document calls or meetings."
    ]
  },
  {
    question: "Support cases from a particular web form should be routed to a support queue based on their origin. What should the administrator configure?",
    examDomain: 'Service and Support Applications',
    options: ["Case assignment rule", "Lead assignment rule", "Opportunity team", "Forecast hierarchy"],
    correctAnswer: 0,
    explanation: "Case assignment rules can route cases to users or queues based on criteria such as origin or priority.",
    whyWrong: [
      "Lead assignment rules route leads, not cases.",
      "Opportunity teams provide access and collaboration on sales opportunities.",
      "Forecast hierarchy determines forecast rollups, not case ownership."
    ]
  },
  {
    question: "A support organization needs cases meeting a response-time commitment to be tracked against the correct service agreement. Which feature should it use?",
    examDomain: 'Service and Support Applications',
    options: ["Entitlements and milestones", "Campaign influence", "Lead scoring", "Opportunity teams"],
    correctAnswer: 0,
    explanation: "Entitlements and milestones help represent service-level commitments and track their required steps or time targets.",
    whyWrong: [
      "Campaign influence measures marketing's relationship to opportunities, not service commitments.",
      "Lead scoring prioritizes prospects and does not track case response commitments.",
      "Opportunity teams support sales collaboration and do not manage case service levels."
    ]
  },
  {
    question: "An administrator wants agents to find approved troubleshooting articles while working on a case. Which feature should be enabled and made available to agents?",
    examDomain: 'Service and Support Applications',
    options: ["Salesforce Knowledge", "Forecasts", "Campaigns", "Products"],
    correctAnswer: 0,
    explanation: "Salesforce Knowledge stores and surfaces articles that support agents can use to resolve customer issues.",
    whyWrong: [
      "Forecasts help sales teams project revenue and do not provide a support article library.",
      "Campaigns organize marketing initiatives rather than troubleshooting content.",
      "Products describe items for sale and are not a knowledge repository."
    ]
  },
  {
    question: "A case should be assigned to a specialist only after it meets a defined age and priority condition. Which feature is intended to escalate qualifying cases?",
    examDomain: 'Service and Support Applications',
    options: ["Case escalation rule", "Lead assignment rule", "Approval process", "Duplicate rule"],
    correctAnswer: 0,
    explanation: "Case escalation rules can escalate cases based on criteria and elapsed time.",
    whyWrong: [
      "Lead assignment rules handle lead routing, not existing case escalation.",
      "Approval processes collect approval decisions and are not the standard timed case escalation mechanism.",
      "Duplicate rules detect potential duplicates and do not escalate cases."
    ]
  },
  {
    question: "A team needs to share working documents with colleagues and keep them associated with the relevant Salesforce records. Which feature is most appropriate?",
    examDomain: 'Productivity and Collaboration',
    options: ["Salesforce Files", "Login history", "Forecasts", "Field history tracking"],
    correctAnswer: 0,
    explanation: "Salesforce Files lets users upload, share, and relate files to records and collaborate on those files.",
    whyWrong: [
      "Login history shows authentication activity and is unrelated to document collaboration.",
      "Forecasts support sales planning, not file storage and sharing.",
      "Field history tracking records changes to selected fields rather than storing documents."
    ]
  },
  {
    question: "A user wants to notify coworkers about a new product launch and invite discussion in Salesforce. Which collaboration feature should they use?",
    examDomain: 'Productivity and Collaboration',
    options: ["Chatter post", "Approval history", "Record type", "Login flow"],
    correctAnswer: 0,
    explanation: "Chatter supports posts, updates, and discussions with people and groups in Salesforce.",
    whyWrong: [
      "Approval history documents approval actions on records and is not a general discussion space.",
      "A record type segments business processes and layouts.",
      "A login flow guides users through steps at sign-in and is not a collaboration feed."
    ]
  },
  {
    question: "A user wants a personal list of open opportunities closing this month that can be reused from the Opportunities tab. What should they create?",
    examDomain: 'Productivity and Collaboration',
    options: ["A list view with filters", "A queue", "A dashboard subscription", "A campaign"],
    correctAnswer: 0,
    explanation: "A list view can save filters for a focused set of records on an object tab.",
    whyWrong: [
      "A queue is used to own and distribute supported records to a group, not as a personal filtered list.",
      "A dashboard subscription sends refreshed dashboard information and does not create an opportunity list.",
      "A campaign manages marketing efforts and campaign members."
    ]
  },
  {
    question: "A user needs to work with several Salesforce records at once without switching tabs repeatedly. Which feature can keep useful records available in the navigation bar?",
    examDomain: 'Productivity and Collaboration',
    options: ["Recently viewed items and pinned navigation items", "Case milestones", "Field history", "Sharing recalculation"],
    correctAnswer: 0,
    explanation: "The Lightning navigation bar supports pinned items and recently viewed records for quick access during work.",
    whyWrong: [
      "Case milestones track service targets and do not organize a user's navigation.",
      "Field history shows past field changes, not quick links to working records.",
      "Sharing recalculation updates access based on sharing changes and is not a navigation feature."
    ]
  },
  {
    question: "A user should be able to open Salesforce from an approved corporate network without an extra identity challenge, while other networks require additional verification. Which setup is relevant?",
    examDomain: 'Configuration and Setup',
    options: ["Trusted IP ranges and identity verification settings", "Opportunity stages", "Case assignment rules", "Compact layouts"],
    correctAnswer: 0,
    explanation: "Trusted IP ranges can identify network locations treated as trusted for login verification, subject to the org's security configuration.",
    whyWrong: [
      "Opportunity stages track sales progress and do not affect authentication challenges.",
      "Case assignment rules route support records, not sign-ins.",
      "Compact layouts determine highlights-panel fields and do not establish trusted networks."
    ]
  },
  {
    question: "An administrator wants a picklist value to be available only for a particular business process on an object. What should be used?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: ["Record types with appropriate picklist values", "A dashboard filter", "A queue", "A sharing set"],
    correctAnswer: 0,
    explanation: "Record types can expose different picklist value sets for different business processes.",
    whyWrong: [
      "A dashboard filter changes which report data is displayed, not which picklist values users can select on a record.",
      "Queues distribute ownership of supported records and do not configure picklist values.",
      "Sharing sets grant record access in supported external-user scenarios; they do not control picklist values."
    ]
  },
  {
    question: "A user must see records owned by their team but should not receive broad access to records owned by other teams. Which baseline record-access setting should the administrator review first?",
    examDomain: 'Configuration and Setup',
    options: ["Organization-wide defaults", "Field history tracking", "Page layout assignment", "Login hours"],
    correctAnswer: 0,
    explanation: "Organization-wide defaults establish the baseline record access before additional access is granted by hierarchy, sharing rules, teams, or manual sharing.",
    whyWrong: [
      "Field history tracking captures changes and does not determine record visibility.",
      "Page layout assignment controls the record interface, not baseline record access.",
      "Login hours restrict when users may sign in, not which records they can see."
    ]
  },
  {
    question: "An administrator must delete a defined set of records using values in a CSV file. Which tool should be used?",
    examDomain: 'Data and Analytics Management',
    options: ["Data Loader", "Data Import Wizard", "Report Builder", "Schema Builder"],
    correctAnswer: 0,
    explanation: "Data Loader supports bulk data operations including delete from a prepared CSV file.",
    whyWrong: [
      "Data Import Wizard supports common import operations but does not provide the delete operation required here.",
      "Report Builder filters and summarizes records; it does not delete records from Salesforce.",
      "Schema Builder visualizes and edits the data model; it is not a bulk record deletion tool."
    ]
  },
  {
    question: "When an opportunity's amount changes from below a threshold to above it, a manager should receive an in-app notification. Which automation approach is appropriate?",
    examDomain: 'Automation',
    options: ["After-save record-triggered flow that runs when criteria are newly met and uses a notification action", "Before-save flow that changes the amount", "A dashboard subscription only", "A duplicate rule"],
    correctAnswer: 0,
    explanation: "Configure an after-save record-triggered flow to run when the opportunity is updated to meet the amount condition, then use a notification action.",
    whyWrong: [
      "A before-save flow is intended for fast updates to the triggering record and is not the right context for invoking a notification action.",
      "A dashboard subscription sends dashboard updates on a schedule and does not react to a particular opportunity update.",
      "A duplicate rule identifies potential duplicates and does not send a threshold-based notification."
    ]
  },

  {
    question: "An admin wants an AI agent to handle a defined area of work, follow business instructions, and perform only approved actions. Which Agentforce configuration is most relevant?",
    examDomain: 'Agentforce',
    options: ["Configure the agent's subagents, instructions, and actions with appropriate access", "Give the agent a system administrator profile by default", "Use a dashboard as the agent's action", "Disable all record permissions"],
    correctAnswer: 0,
    explanation: "Agentforce behavior is shaped by its subagents, instructions, and available actions; access should follow least-privilege requirements.",
    whyWrong: [
      "A system administrator profile grants broad privileges and is not a safe default for an agent.",
      "A dashboard presents information but is not an action definition for an agent.",
      "Disabling all record permissions would prevent authorized work and does not configure safe, bounded actions."
    ]
  },
  {
    question: "A service agent should answer order-status questions by retrieving approved order data from Salesforce. What should an administrator configure for the Agentforce agent?",
    examDomain: 'Agentforce',
    options: ["A relevant subagent and a governed action that retrieves permitted order information", "A dashboard subscription only", "A public list view with unrestricted access", "A validation rule on the Order object"],
    correctAnswer: 0,
    explanation: "An agent needs a relevant subagent and an appropriately governed action connected to the data it is allowed to retrieve.",
    whyWrong: [
      "A dashboard subscription distributes dashboard updates but does not give a conversational agent a governed order lookup action.",
      "An unrestricted public list view is not an appropriate substitute for access-controlled agent actions.",
      "A validation rule checks data on save and does not retrieve order details for a conversation."
    ]
  },
  {
    question: "An Agentforce agent cannot confidently resolve a customer request that requires a policy exception. What should its configured behavior do?",
    examDomain: 'Agentforce',
    options: ["Use a defined escalation or handoff path to a human", "Invent an exception to satisfy the request", "Repeat the same action without limits", "Expose all internal records to the customer"],
    correctAnswer: 0,
    explanation: "A defined handoff path allows the agent to transfer requests it cannot safely resolve to an appropriate human support process.",
    whyWrong: [
      "The agent should not invent policy decisions beyond its authorized instructions.",
      "Unbounded repeated actions can create errors and do not resolve uncertainty responsibly.",
      "Customer-facing agents must not expose internal records outside their approved access and response scope."
    ]
  },
  {
    question: "Before activating a new Agentforce agent, an administrator wants to confirm its responses and actions for representative scenarios. What should be done?",
    examDomain: 'Agentforce',
    options: ["Test the agent in its configured testing experience and review outcomes", "Activate it immediately for every user", "Replace its instructions with a dashboard", "Remove its subagent definitions"],
    correctAnswer: 0,
    explanation: "Testing representative scenarios before activation helps verify that the agent follows instructions and invokes intended actions.",
    whyWrong: [
      "Immediate org-wide activation skips the review needed to catch configuration issues.",
      "A dashboard is not a replacement for agent instructions or behavior testing.",
      "Removing subagents would remove defined areas of work for the agent rather than verify it."
    ]
  },
]
