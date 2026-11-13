import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

export const ADMINISTRATOR_EXTRA_QUESTIONS: SampleQuestion[] = [
  {
    question: "An admin wants a component on a Lightning record page to show up only when the Opportunity's Stage is Closed Won. What should they configure in Lightning App Builder?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "Component visibility filters",
      "Dynamic Forms",
      "Record-triggered Flow",
      "Page activation"
    ],
    correctAnswer: 0,
    explanation: "Component visibility filters, set right on the component in Lightning App Builder. The filter criteria decide when it shows up.",
    whyWrong: [
      "Dynamic Forms is about arranging fields and sections, not about showing or hiding a component based on a condition.",
      "A record-triggered Flow reacts to record changes, it doesn't control whether a page component is visible.",
      "Page activation decides who sees the page at all. It's the visibility filter that decides when one component on it appears."
    ]
  },
  {
    question: "What's the max number of master-detail relationships a custom object can have?",
    examDomain: 'Object Manager and Lightning App Builder',
    options: [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "Two. A custom object can carry up to two master-detail relationship fields.",
    whyWrong: [
      "One is allowed, but the real cap is higher than that.",
      "Three is over the actual limit.",
      "It's not unlimited. Salesforce caps this to keep sharing and cascade-delete behavior sane."
    ]
  },
  {
    question: "A flow needs to branch depending on whether an opportunity is Closed Won, then do different things for each case. Which element handles that?",
    examDomain: 'Automation',
    options: ["Decision", "Assignment", "Loop", "Get Records"],
    correctAnswer: 0,
    explanation: "A Decision element. It checks the condition and sends the flow down the matching path.",
    whyWrong: [
      "Assignment just sets variable values, it doesn't route the flow between paths.",
      "Loop walks through a collection, that's not how you branch on a condition.",
      "Get Records just fetches data. It doesn't evaluate anything to decide a path."
    ]
  },
  {
    question: "An admin assigns a Sales Operations Permission Set Group to 15 users. Three of them should keep every permission in the group except Delete on Opportunity. How should the admin set this up without touching other groups that reuse the same underlying permission sets?",
    examDomain: 'Configuration and Setup',
    options: [
      "Create a Muting Permission Set inside the Sales Operations Permission Set Group and mute Delete on Opportunity",
      "Clone the underlying permission sets, strip out Delete on Opportunity, and assign those clones individually",
      "Change the Organization-Wide Default (OWD) for Opportunity to Public Read Only",
      "Remove the Delete permission from the users' baseline Profile"
    ],
    correctAnswer: 0,
    explanation: "A Muting Permission Set, added inside that Permission Set Group. It strips out just the one permission for that group, and leaves the underlying permission sets untouched for everyone else reusing them.",
    whyWrong: [
      "Cloning permission sets for a small exception just creates duplicate maintenance work, which defeats the point of a reusable Permission Set Group.",
      "OWD controls record visibility, not object-level permissions like Delete.",
      "Permissions stack across Profile and Permission Sets. If the group already grants Delete, pulling it from the Profile won't take it away."
    ]
  },
  {
    question: "A regional sales director is leaving right now. The admin needs to block their login immediately, but the director is the running user on several executive dashboards and gets active workflow email alerts. What should the admin do first?",
    examDomain: 'Configuration and Setup',
    options: [
      "Freeze the user, reassign the dashboards and automation references, then deactivate",
      "Delete the user record from Setup",
      "Deactivate the user right away and ignore the dependency warnings",
      "Move the user's Role to an inactive branch of the hierarchy"
    ],
    correctAnswer: 0,
    explanation: "Freeze them first. That blocks login instantly without breaking the dashboards or email alerts that depend on them. Once those dependencies are reassigned, deactivate to free up the license.",
    whyWrong: [
      "You can't delete a user record in Salesforce, full stop. Freeze or deactivate are the only options.",
      "Salesforce won't let you deactivate someone who's the sole recipient of active workflow emails or tied to critical automation, and the dashboards would break too.",
      "Moving a Role affects what gets shared up the hierarchy. It doesn't stop anyone from logging in."
    ]
  },
  {
    question: "After a Full Sandbox refresh, an admin tests a record-triggered Flow that's supposed to email external customers. The Flow logs show no errors, but no emails arrive. What should the admin check first?",
    examDomain: 'Productivity and Collaboration',
    options: [
      "Setup → Deliverability → Access to Send Email is set to System email only",
      "The Organization-Wide Default on Contact is Private",
      "The admin's own user record is missing the Marketing User checkbox",
      "Field History Tracking is off for the Email field"
    ],
    correctAnswer: 0,
    explanation: "Check Email Deliverability first. Every sandbox refresh resets it to System email only, so only password resets and system notices go out, nothing to real customers. Flip it to All email to let Flow and alert emails through again.",
    whyWrong: [
      "OWD is about record visibility. It won't silently swallow an email action that already ran clean.",
      "Marketing User just controls Campaign creation. It has nothing to do with sandbox email settings.",
      "Field History Tracking logs field changes. It can't block an outbound email."
    ]
  },
  {
    question: "Account execs keep hosting kickoff meetings with up to 12 client stakeholders from the same Account, and want one Event logged that shows up on every attendee's timeline. What should the admin turn on?",
    examDomain: 'Productivity and Collaboration',
    options: [
      "Shared Activities in Activity Settings",
      "Einstein Activity Capture",
      "A custom Junction Object between Event and Contact",
      "Opportunity Contact Roles"
    ],
    correctAnswer: 0,
    explanation: "Shared Activities. Turn on 'Allow Users to Relate Multiple Contacts to Tasks and Events' and reps can tie up to 50 Contacts to one Event or Task.",
    whyWrong: [
      "Einstein Activity Capture syncs email and calendar from Google or Microsoft. Relating multiple Contacts to a native Event still needs Shared Activities.",
      "You can't build a custom master-detail or junction object on Event or Task, Salesforce doesn't allow that.",
      "Opportunity Contact Roles link Contacts to an Opportunity, not to a Task or Event."
    ]
  },
  {
    question: "The VP of Sales wants a weekly report of active Accounts with zero open or closed Opportunities, and doesn't want the admin to build a new Custom Report Type for it. What feature fits?",
    examDomain: 'Data and Analytics Management',
    options: [
      "A standard Accounts report with a Cross Filter set to Accounts without Opportunities",
      "A Bucket Field on the Opportunity Stage column",
      "A Reporting Snapshot that runs every Monday",
      "A Row-Level Formula on an Opportunities report"
    ],
    correctAnswer: 0,
    explanation: "A Cross Filter, right inside a standard Accounts report. It can filter by whether related Opportunities (or Cases, or Activities) exist or don't, with sub-filters on top, no custom report type needed.",
    whyWrong: [
      "Bucket Fields just group values that are already in the report. An Opportunities report only ever shows Accounts that already have Opportunities.",
      "A Reporting Snapshot saves report results into a custom object over time, it's for trend tracking, not for finding parents missing a child record.",
      "A Row-Level Formula works on rows that are already in the report. It can't surface Accounts that are missing from an Opportunities report in the first place."
    ]
  },
  {
    question: "An admin updates a customer-facing Agentforce Service Agent and adds a Flow action that reads a custom Warranty_Status__c field on Asset. In testing, the agent picks the right action but says it can't read the warranty status. What should the admin fix, and how should they confirm it before going live?",
    examDomain: 'Agentforce',
    options: [
      "Grant Read on Asset and Warranty_Status__c to the Agent User's Permission Set, then verify with Conversation Preview in Agentforce Builder",
      "Set Asset's Organization-Wide Default to Public Read/Write and tweak the tone in Prompt Builder",
      "Turn off the Einstein Trust Layer so the agent can read custom fields without masking",
      "Rebuild the Flow action as a legacy Workflow Rule"
    ],
    correctAnswer: 0,
    explanation: "Customer-facing Service Agents run as a dedicated Agent User, kept on a tight leash by design. No object or field access on Warranty_Status__c for that user means the action fails. Grant the access, then confirm it actually works with Conversation Preview before activating.",
    whyWrong: [
      "OWD is about record sharing, not field-level security, and Prompt Builder just manages prompt wording, not permissions.",
      "The Trust Layer masks sensitive data going to the LLM and doesn't retain it. It's not what's blocking an internal Flow from reading a field, and turning off a security control isn't the fix anyway.",
      "Workflow Rules were retired at the end of 2025. They can't be wired up as an Agentforce action at all."
    ]
  },
]
