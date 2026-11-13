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
    question: "What is the maximum number of master-detail relationships allowed on a custom object?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A custom object can have up to two master-detail relationship fields.",
    whyWrong: [
      "A single master-detail relationship is allowed, but the actual platform maximum is higher than 1.",
      "3 exceeds the actual platform limit for master-detail relationships on a custom object.",
      "The limit is not unlimited: Salesforce caps master-detail relationships specifically to preserve sharing and cascade-delete integrity."
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
    question: "An administrator assigns a Sales Operations Permission Set Group to 15 users. Three of those users should have all permissions in the group except the Delete permission on the Opportunity object. How should the administrator configure this without affecting other groups that reuse the same underlying permission sets?",
    examDomain: 'Configuration and Setup',
    options: [
      "Create a Muting Permission Set within the Sales Operations Permission Set Group and mute the Delete permission on Opportunity",
      "Clone the underlying permission sets, remove Delete on Opportunity, and assign them individually",
      "Change the Organization-Wide Default (OWD) for Opportunity to Public Read Only",
      "Remove the Delete permission from the users' baseline Profile"
    ],
    correctAnswer: 0,
    explanation: "Muting Permission Sets work inside a Permission Set Group to revoke specific object, field, or system permissions for that group while keeping the underlying permission sets intact for other groups.",
    whyWrong: [
      "Cloning permission sets for minor exceptions creates administrative bloat and defeats the purpose of reusable Permission Set Groups.",
      "Organization-Wide Defaults (OWD) control record-level visibility, not object-level CRUD permissions like Delete.",
      "Permissions in Salesforce are additive across Profiles and Permission Sets; if the Permission Set Group grants Delete on Opportunity, removing it from the Profile will not revoke Delete access."
    ]
  },
  {
    question: "A regional sales director is leaving the company immediately. The administrator must prevent the director from logging into Salesforce right away, but the director is the running user of several executive dashboards and the recipient of active workflow email alerts. What should the administrator do first?",
    examDomain: 'Configuration and Setup',
    options: [
      "Freeze the user record, reassign the dashboards and automation references, and then deactivate the user",
      "Delete the user record from Setup",
      "Deactivate the user record immediately and ignore the dependency warnings",
      "Change the user's Role in the Role Hierarchy to an inactive branch"
    ],
    correctAnswer: 0,
    explanation: "Clicking Freeze on the user record immediately blocks the user from logging in without breaking active dashboard running-user configurations or workflow email alerts. Once dependencies and records are transferred, the admin can deactivate the user to release the license.",
    whyWrong: [
      "User records can never be deleted in Salesforce; they can only be frozen or deactivated.",
      "Salesforce blocks immediate deactivation when a user is the sole recipient of workflow email alerts or tied to critical system automation, and deactivating a dashboard running user causes dashboards to fail.",
      "Changing a user's Role affects record sharing visibility upward in the hierarchy but does not prevent the user from logging in."
    ]
  },
  {
    question: "After refreshing a Full Sandbox, an administrator tests a record-triggered Flow that sends an email alert to external customer addresses, but no emails are received. The Flow interview logs show the email action executed without errors. What should the administrator check first?",
    examDomain: 'Productivity and Collaboration',
    options: [
      "Setup → Deliverability → Access to Send Email (Access Level) is set to System email only",
      "The Organization-Wide Default for Contact is set to Private",
      "The administrator's user record is missing the Marketing User checkbox",
      "Field History Tracking is disabled on the Email field"
    ],
    correctAnswer: 0,
    explanation: "Whenever a sandbox is created or refreshed, Salesforce automatically sets Email Deliverability to System email only, allowing only password resets and system notifications, to prevent accidental emails to real customers. Changing it to All email enables outbound emails from Flows and alerts.",
    whyWrong: [
      "OWD settings govern record visibility and do not silently block Flow email actions that have already executed.",
      "The Marketing User feature license checkbox controls Campaign creation and management, not sandbox email deliverability.",
      "Field History Tracking logs changes to field values and has no effect on outbound email delivery."
    ]
  },
  {
    question: "Account executives frequently host project kickoff meetings attended by up to 12 client stakeholders from the same Account. They want to log a single Event in Salesforce and relate it to all 12 Contact records so the meeting appears on every attendee's activity timeline. Which feature should the administrator enable?",
    examDomain: 'Productivity and Collaboration',
    options: [
      "Shared Activities in Activity Settings",
      "Einstein Activity Capture",
      "A custom Junction Object between Event and Contact",
      "Opportunity Contact Roles"
    ],
    correctAnswer: 0,
    explanation: "Enabling Allow Users to Relate Multiple Contacts to Tasks and Events (Shared Activities) in Activity Settings lets reps associate up to 50 Contacts with a single Event or Task.",
    whyWrong: [
      "Einstein Activity Capture syncs emails and calendar events between Google/Microsoft and Salesforce, but relating multiple Contact records to a native Salesforce Event requires Shared Activities.",
      "Salesforce does not allow creating custom Master-Detail relationships or standard junction objects on the Event/Task activity objects.",
      "Opportunity Contact Roles link Contacts to an Opportunity, not to individual Task or Event activity records."
    ]
  },
  {
    question: "The VP of Sales wants a weekly report of all active Accounts that currently have zero open or closed Opportunities, without requiring the administrator to create a new Custom Report Type. Which reporting feature should the administrator use?",
    examDomain: 'Data and Analytics Management',
    options: [
      "A standard Accounts report with a Cross Filter set to Accounts without Opportunities",
      "A Bucket Field on the Opportunity Stage column",
      "A Reporting Snapshot scheduled to run every Monday",
      "A Row-Level Formula on an Opportunities report"
    ],
    correctAnswer: 0,
    explanation: "Cross Filters let you filter the primary object in a report (Accounts) by whether related records (Opportunities, Cases, Activities) exist or do not exist, with or without, plus optional subfilters, right inside a standard Accounts report.",
    whyWrong: [
      "Bucket Fields group existing report values into categories; an Opportunities report only includes Accounts that already have Opportunities.",
      "Reporting Snapshots save tabular or summary report results into a custom object over time for historical trend analysis; they do not filter for parent records lacking child records.",
      "A Row-Level Formula evaluates fields on existing rows in a report and cannot surface Accounts that are absent from an Opportunities report."
    ]
  },
  {
    question: "An administrator updates the instructions for a customer-facing Agentforce Service Agent and adds a new Flow action that queries a custom Warranty_Status__c field on the Asset object. When testing in Agentforce Builder, the agent selects the action correctly, but returns an error stating it cannot read the warranty status. What should the administrator check and use to validate the fix before activating the agent?",
    examDomain: 'Agentforce',
    options: [
      "Grant Read access on Asset and the Warranty_Status__c field to the Agent User's Permission Set, then test using Conversation Preview in Agentforce Builder",
      "Set the Asset Organization-Wide Default to Public Read/Write and edit the tone in Prompt Builder",
      "Disable the Einstein Trust Layer so the agent can read custom fields without masking",
      "Convert the Flow action into a legacy Workflow Rule"
    ],
    correctAnswer: 0,
    explanation: "Customer-facing Service Agents run under a dedicated Agent User following least-privilege security. If the Agent User lacks object permissions or field-level security on Warranty_Status__c, the action fails. After updating the Agent User's Permission Set, the admin validates the reasoning and output in Conversation Preview inside Agentforce Builder before activating.",
    whyWrong: [
      "OWD controls record sharing, not field-level security, and Prompt Builder manages prompt templates rather than field permissions.",
      "The Einstein Trust Layer protects sensitive data sent to LLMs via data masking and zero retention; it does not block an internal Flow action from reading a custom field, and disabling security controls violates Salesforce best practices.",
      "Workflow Rules are retired (end of support December 31, 2025) and cannot be invoked as conversational Agentforce actions."
    ]
  },
]
