import type { AssociateSpikeBody, SpikeSampleQuestion } from './types'
import { RELEASE_CURRENT } from '@/lib/release-data'
import advancedAdministratorSampleQuestionsJson from './advanced-administrator-sample-questions.json'

export const ADVANCED_ADMINISTRATOR_SLUG = 'advanced-administrator' as const

const sampleQuestions = advancedAdministratorSampleQuestionsJson as SpikeSampleQuestion[]

export const advancedAdministratorCertPageBody: AssociateSpikeBody = {
  template: 'associate',
  introLead: [
    { type: 'text', text: "If you have not yet passed the administrator exam, start with the " },
    { type: 'link', href: '/certifications/administrator', label: 'ADM-201 study guide' },
    { type: 'text', text: '. You can also use the ' },
    { type: 'link', href: '/certifications/administrator', label: `ADM-201 exam tips (${RELEASE_CURRENT})` },
    { type: 'text', text: ' and ' },
    { type: 'link', href: '/adm-201-vs-app-builder', label: 'ADM-201 vs App Builder guide' },
    { type: 'text', text: '.' },
  ],
  practiceQuestionsIntroSuffix:
    ". Click on an answer to select it, then check your answer to see if you're correct.",
  whoIsThisFor: {
    heading: 'Who is the Advanced Administrator exam for?',
    personas: [
      { label: 'Experienced admins', description: 'You have passed ADM-201, manage Salesforce, and want to demonstrate more advanced configuration skills.' },
      { label: 'Senior admins', description: 'You manage security, delegated administration, and automation in a complex Salesforce org.' },
      { label: 'Admins moving into consulting', description: 'You want to demonstrate advanced admin knowledge before preparing for a consultant credential.' },
    ],
  },
  examDifficulty: {
    heading: 'Is the Advanced Administrator Exam Hard?',
    summary: 'This exam builds on ADM-201. It asks how you would handle more complex security, automation, and change-management needs.',
    bullets: [
      '<strong>60 multiple-choice questions</strong> in 105 minutes.',
      '<strong>65% passing score</strong>: you can miss up to 21 questions.',
      '<strong>Advanced topics</strong>: review Flow patterns, delegated administration, territories, and sharing.',
      '<strong>Practical experience helps</strong>: practise applying these features in realistic administration scenarios.',
    ],
    passRateGuidance: 'Use timed practice exams to find weak areas. Review advanced security, approval processes, and deployments, then practise the configurations in an org.',
  },
  examFormat: {
    heading: 'Advanced Administrator Exam Format Explained',
    intro: 'You can take the supervised exam online or at a test centre. Review the current guide for the format and booking details.',
    scenarioPercent: 'Practise applying features to a business need. For example, design sharing for different teams, investigate flows, or give regional admins limited user-management duties.',
    bestWayToPass: [
      '<strong>Review security:</strong> Compare delegated administration, sharing rules, Apex-managed sharing, and territory management.',
      '<strong>Practise advanced flows:</strong> Review subflows, fault paths, scheduled paths, and execution order when several automations run on a record.',
      '<strong>Study approval processes:</strong> Review field updates, parallel approvals, recall actions, and routing decisions.',
      '<strong>Review change management:</strong> Compare sandbox types, change sets, and deployment approaches.',
    ],
  },
  certificationCard: {
    code: 'ADM-211',
    description:
      'Platform Administrator II (ADM-211) covers advanced administration, including sharing, security, delegated administration, automation, auditing, and deployments. The exam is 60 scored questions in 105 minutes, with a 65% pass mark, weighted towards Security and Access and Process Automation (20% each).',
    examDetails: {
      questions: 60,
      passingScore: '65%',
      duration: '105 min',
      cost: '$200',
    },
    topics: [
      'Security & Access',
      'Advanced Automation',
      'Approval Processes',
      'Data Management',
      'Advanced Reporting',
      'Performance Optimization',
      'Change Management',
      'Auditing & Monitoring',
      'Content Management',
      'AppExchange',
    ],
  },
  keyConcepts: {
    h2: 'Advanced Administrator: Key Concepts for the Exam',
    blocks: [
      {
        heading: 'The Salesforce Security Model (Layered Access)',
        body: 'Org-wide defaults set the baseline for record access. The role hierarchy, sharing rules, and manual sharing can grant more access. Profiles and permission sets control object and field permissions separately. Practise choosing the right access layer for a requirement.',
      },
      {
        heading: 'Advanced Automation: Flow vs Approval Process',
        body: 'Flows can carry out multi-step logic, decisions, loops, and scheduled work. Approval processes route records to people for sign-off and define actions for approval or rejection. Compare both tools when a requirement needs human review or automatic processing.',
      },
      {
        heading: 'Delegated Administration and Permission Set Groups',
        body: 'Delegated administration gives selected users limited administration duties without full admin access. Permission Set Groups bundle permissions for assignment; a muting permission set can suppress selected permissions within a group. Practise choosing the right feature for each need.',
      },
      {
        heading: 'Data Management: Duplicate Rules, External IDs, and Custom Metadata',
        body: 'Matching rules identify potential duplicates; duplicate rules decide what happens when a match is found. External ID fields help match records during an upsert. Custom Metadata Type records can be deployed as metadata. Review how configuration data moves between environments.',
      },
      {
        heading: 'Advanced Reporting: Joined Reports and Cross Filters',
        body: 'A joined report combines up to five blocks, which can use different report types. A cross filter selects records based on related records, such as accounts without open opportunities. Also review report types, subscriptions, and bucket fields.',
      },
    ],
  },
  scenarioTips: {
    h2: 'How to Pass the Salesforce Advanced Administrator Exam',
    intro:
      'This exam asks you to choose the right feature for a more complex requirement. Practise explaining why your choice fits and why the alternatives do not.',
    blocks: [
      {
        heading: 'Advanced Automation: Flows with Custom Metadata',
        body: 'Practise using Custom Metadata Types and Custom Settings to supply values to flows. Review collections, loops, and decisions for multi-step automation.',
      },
      {
        heading: 'Change Sets & Deployment',
        body: 'Review what change sets can deploy, their dependencies, and the difference between outbound and inbound sets. Understand how sandboxes support the deployment process.',
      },
      {
        heading: 'Advanced Reporting: Joined Reports & Buckets',
        body: 'Use joined reports to bring related views together. Review how buckets group report values and how cross filters select records based on related records.',
      },
      {
        heading: 'Complex Security: Delegated Administration',
        body: 'Review what delegated admins can manage. Practise diagnosing access by checking field permissions, page layouts, and record sharing separately.',
      },
      {
        heading: 'Territory Management',
        body: 'Review territory hierarchies and assignment rules. Practise explaining how territory assignments affect account access and forecasting.',
      },
    ],
  },
  nextCertsAfter: {
    heading: 'Next Certifications to Consider',
    intro: 'Consider these credentials as possible next steps:',
    links: [
      { href: '/certifications/administrator', label: 'Platform Administrator (ADM-201)' },
      { href: '/certifications/app-builder', label: 'Platform App Builder' },
      { href: '/certifications/sales-cloud', label: 'Sales Cloud Consultant' },
      { href: '/certifications/service-cloud', label: 'Service Cloud Consultant' },
    ],
  },
  tocSections: [
    { id: 'exam-prep', title: 'Exam Prep Content' },
    { id: 'key-concepts', title: 'Key Concepts' },
    { id: 'scenario-tips', title: 'How to Pass' },
    { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' },
    { id: 'practice-questions', title: 'Practice Questions' },
    { id: 'more-questions', title: 'Get More Questions' },
    { id: 'related-certs', title: 'Related Certifications' },
    { id: 'faq', title: 'Exam FAQs' },
  ],
  sampleQuestions,
}
