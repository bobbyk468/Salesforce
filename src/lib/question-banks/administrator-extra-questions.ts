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
    explanation: "The Filter component in Lightning App Builder allows users to filter records displayed on a record page using predefined criteria."
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
    explanation: "Lead Assignment Rules automatically assign leads to users or queues based on criteria such as geographic territory, industry, or lead source."
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
    explanation: "Validation Rules enforce data quality by preventing invalid data from being saved. They check data against criteria and display an error message if the criteria are not met."
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
    explanation: "Public Read/Write sharing setting allows all users to see, edit, and transfer all records regardless of who owns them."
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
    explanation: "A Formula field with Number return type can calculate the difference between two date fields, returning the number of days as a numeric value."
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
    explanation: "A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models."
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
    explanation: "Field History Tracking allows administrators to track changes to specific fields on standard and custom objects, storing up to 20 fields per object."
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
    explanation: "Flow (Record-Triggered Flow) is the recommended automation tool for sending emails when records meet specific criteria. Workflow Rules and Process Builder are being deprecated in favor of Flow."
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
    explanation: "Roll-Up Summary Fields calculate values from related records in a master-detail relationship, such as summing amounts, counting records, or finding min/max values."
  },
]
