import type { AssociateSpikeBody, SpikeSampleQuestion } from './types'
import { RELEASE_CURRENT } from '@/lib/release-data'
import advancedAdministratorSampleQuestionsJson from './advanced-administrator-sample-questions.json'

export const ADVANCED_ADMINISTRATOR_SLUG = 'advanced-administrator' as const

const sampleQuestions = advancedAdministratorSampleQuestionsJson as SpikeSampleQuestion[]

export const advancedAdministratorCertPageBody: AssociateSpikeBody = {
  template: 'associate',
  introLead: [
    { type: 'text', text: "If you haven't passed the entry-level admin exam yet, start with our " },
    { type: 'link', href: '/certifications/administrator', label: 'ADM-201 study guide' },
    { type: 'text', text: ' first. For faster prep, use our ' },
    { type: 'link', href: '/adm-201-exam-tips', label: `ADM-201 exam tips (${RELEASE_CURRENT})` },
    { type: 'text', text: ' and ' },
    { type: 'link', href: '/adm-201-vs-app-builder', label: 'ADM-201 vs App Builder guide' },
    { type: 'text', text: '.' },
  ],
  practiceQuestionsIntroSuffix:
    ". Click on an answer to select it, then check your answer to see if you're correct.",
  certificationCard: {
    code: 'ADM-211',
    description:
      'The Advanced Administrator certification validates your advanced knowledge of Salesforce administration, including complex security models, advanced automation, and performance optimization.',
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
        body: 'Record access is built in layers: OWD sets the baseline (Private, Public Read Only, Public Read/Write). Role Hierarchy grants managers access to subordinates\' records. Sharing Rules extend access to groups or roles based on ownership or criteria. Manual Sharing grants one-off access. Object and field access is controlled separately by Profiles and Permission Sets. The exam frequently tests which layer to use for a given access requirement — and that access can only be opened wider, never restricted below OWD.',
      },
      {
        heading: 'Advanced Automation: Flow vs Approval Process',
        body: 'Flows handle complex multi-step logic, branching, loops, and real-time or scheduled automation. Approval Processes handle structured human sign-off workflows with defined approvers, multi-level steps, and approval/rejection actions. The exam tests when to use each — use Approval Processes for discount or contract sign-off scenarios; use Flow for dynamic automation without human involvement. Workflow Rules are legacy and being retired in favor of Flow.',
      },
      {
        heading: 'Delegated Administration and Permission Set Groups',
        body: 'Delegated Administrators can manage users within defined profiles without full admin access — ideal for HR managers or regional admins. Permission Set Groups bundle multiple permission sets for easier assignment. Muting Permission Sets within a group suppress specific permissions without removing the entire set. The exam tests the difference between these features and when each is appropriate.',
      },
      {
        heading: 'Data Management: Duplicate Rules, External IDs, and Custom Metadata',
        body: 'Matching Rules identify duplicate records based on field comparisons. Duplicate Rules define what happens when duplicates are detected (alert, block, or log). External ID fields enable upsert operations via API and Data Loader — critical for integrations. Custom Metadata Types differ from Custom Settings in that metadata records are deployable via Change Sets and packages, while Custom Settings data must be manually recreated in each org.',
      },
      {
        heading: 'Advanced Reporting: Joined Reports and Cross Filters',
        body: 'Joined Reports combine up to 5 report blocks from different report types in a single view — useful for comparing Opportunities vs. Cases for the same account. Cross Filters let you filter report results based on the presence or absence of related records (e.g., Accounts without Open Opportunities). Both are Advanced Administrator-level reporting features the exam regularly tests, along with report subscriptions, bucket fields, and report types.',
      },
    ],
  },
  scenarioTips: {
    h2: 'How to Pass the Salesforce Advanced Administrator Exam',
    intro:
      'The Advanced Administrator exam builds on ADM-201 with deeper feature knowledge and architectural judgment. You are expected to know not just what a feature does, but when and why to choose it over alternatives in complex, multi-requirement scenarios.',
    blocks: [
      {
        heading: 'Advanced Automation: Flows with Custom Metadata',
        body: 'Know how to use Custom Metadata Types and Custom Settings to drive business logic in Flows without hardcoding values. Understand Flow collection variables, loops, and decision elements for complex multi-step automation.',
      },
      {
        heading: 'Change Sets & Deployment',
        body: 'Know change set limitations (what cannot be deployed, dependent components), the difference between outbound and inbound change sets, and how sandboxes relate to production. Understand the full deployment lifecycle.',
      },
      {
        heading: 'Advanced Reporting: Joined Reports & Buckets',
        body: 'Know when to use Joined Reports to combine data from multiple objects, how bucketing fields replaces formula fields for grouping, and how cross-filter reports restrict records based on related data.',
      },
      {
        heading: 'Complex Security: Delegated Administration',
        body: 'Understand how Delegated Administrators work and their limitations. Know how Field-Level Security interacts with page layouts and record access, and how to diagnose access issues using the Access Checker.',
      },
      {
        heading: 'Territory Management',
        body: 'Enterprise Territory Management questions test assignment rules, territory hierarchies, and how territories interact with opportunity and account ownership. Know how to configure and troubleshoot territory-based forecasting.',
      },
    ],
  },
  nextCertsAfter: {
    heading: 'Next Certifications to Consider',
    intro: 'After this certification, common next steps in the admin track or consultant track:',
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
