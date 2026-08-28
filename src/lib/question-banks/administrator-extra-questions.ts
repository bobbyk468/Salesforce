import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

export const ADMINISTRATOR_EXTRA_QUESTIONS: SampleQuestion[] = [
  {
    question: "Which Lightning App Builder component allows users to filter records on a record page?",
    options: [
      "Related List",
      "Related Record",
      "Filter",
      "List View"
    ],
    correctAnswer: 2,
    explanation: "The Filter component in Lightning App Builder allows users to filter records displayed on a record page using predefined criteria.",
    whyWrong: [
      "Related List displays associated child records — it doesn't provide filtering controls itself.",
      "Related Record shows a linked record's details — it isn't a filtering mechanism.",
      "List View filters a list of records on a tab or app page, not records displayed within a specific record page layout."
    ]
  },
  {
    question: "A company wants to ensure that all Leads are automatically assigned to the correct sales rep based on geographic territory. What should be configured?",
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
      "Flow can be built to reassign records, but it's not the purpose-built, native tool Salesforce provides for lead routing — that's Lead Assignment Rules."
    ]
  },
  {
    question: "What is the purpose of a Validation Rule?",
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
      "Validation Rules block invalid saves — they don't automatically update field values themselves."
    ]
  },
  {
    question: "Which sharing setting allows users to see all records in an org regardless of ownership?",
    options: [
      "Private",
      "Public Read Only",
      "Public Read/Write",
      "Controlled by Parent"
    ],
    correctAnswer: 2,
    explanation: "Public Read/Write sharing setting allows all users to see, edit, and transfer all records regardless of who owns them.",
    whyWrong: [
      "Private restricts visibility to the record owner and their role hierarchy above — the opposite of universal visibility.",
      "Public Read Only lets everyone view records but not edit them, so it doesn't grant full read/write/transfer access.",
      "Controlled by Parent inherits sharing from a related parent record — it doesn't itself grant blanket org-wide visibility."
    ]
  },
  {
    question: "A user needs to create a custom field that calculates the number of days between two date fields. Which field type should be used?",
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
      "A plain Number field stores a manually entered or DML-set value — it can't automatically calculate the difference between two other fields.",
      "A plain Date field just stores a single date — it has no calculation capability on its own."
    ]
  },
  {
    question: "What is the maximum number of master-detail relationships allowed on a custom object?",
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
      "The limit is not unlimited — Salesforce caps master-detail relationships specifically to preserve sharing and cascade-delete integrity."
    ]
  },
  {
    question: "Which feature allows administrators to track changes to specific fields over time?",
    options: [
      "Field History Tracking",
      "Audit Trail",
      "Change Data Capture",
      "Field Updates"
    ],
    correctAnswer: 0,
    explanation: "Field History Tracking allows administrators to track changes to specific fields on standard and custom objects, storing up to 20 fields per object.",
    whyWrong: [
      "Audit Trail (Setup Audit Trail) logs configuration/setup changes made by admins — it doesn't track individual field value changes on records.",
      "Change Data Capture streams record change events for external integration — it isn't the admin-facing feature for tracking field history on the record detail page.",
      "Field Updates are an automation action that changes a field's value — they don't track or display a history of past changes."
    ]
  },
  {
    question: "A company wants to automatically send an email when an Opportunity reaches the 'Closed Won' stage. Which automation tool should be used?",
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
      "Sending email notifications is an automation action — Roll-Up Summary Fields only calculate and display aggregated values."
    ]
  },
]
