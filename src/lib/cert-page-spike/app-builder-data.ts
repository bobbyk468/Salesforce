import type { AppBuilderSpikeBody } from './types'

export const APP_BUILDER_SLUG = 'app-builder' as const

export const appBuilderCertPageBody: AppBuilderSpikeBody = {
  template: 'app-builder',
  expertInsight: "App Builder is deceptively scenario-heavy — most questions aren't \"what does this feature do\" but \"which tool is the right choice here.\" The dividing line between Flow, Process Builder legacy knowledge, and custom Lightning components shows up constantly. I found the hardest section to be governor limits in declarative context: when does a screen flow hit CPU time limits vs. when does it hit DML limits? That nuance doesn't appear in most study guides.",
  introLead: [
    { type: 'text', text: 'New to Salesforce admin? Our ' },
    {
      type: 'link',
      href: '/certifications/administrator',
      label: 'Salesforce Administrator (ADM-201) exam prep',
    },
    { type: 'text', text: ' is the usual first step. See our ' },
    {
      type: 'link',
      href: '/adm-201-vs-app-builder',
      label: 'ADM-201 vs App Builder comparison',
    },
    {
      type: 'text',
      text: ' to choose the right certification order. Ready to book? Read our ',
    },
    {
      type: 'link',
      href: '/app-builder-exam-tips',
      label: 'DEV-402 exam tips and study plan',
    },
    { type: 'text', text: '.' },
  ],
  ctaExamCode: 'DEV-402',
  practiceIntroSuffix:
    ". Click on an answer to select it, then check your answer to see if you're correct.",
  certificationCard: {
    code: 'DEV-402',
    description:
      'The Platform App Builder certification validates your skills in designing, building, and deploying custom applications on the Salesforce platform.',
    examDetails: {
      questions: 60,
      passingScore: '66%',
      duration: '105 min',
      cost: '$200',
    },
    topics: [
      'Data Modeling',
      'Security',
      'Business Logic',
      'Process Automation',
      'User Interface',
      'Reporting',
      'Mobile',
      'App Development',
      'Social',
      'Deployment',
    ],
  },
  scenarioTips: {
    h2: 'How to Pass the Platform App Builder Exam (DEV-402)',
    intro:
      'The DEV-402 exam is scenario-based — most questions describe a business requirement and ask which declarative tool or configuration best meets it. Understanding when to use each Salesforce feature matters more than memorising field limits.',
    blocks: [
      {
        heading: 'Data Modelling Scenarios',
        body: 'When a question asks about relationships: use Master-Detail when child records only make sense in the context of the parent (cascade delete, roll-up summaries). Use Lookup when the child can exist independently. Junction objects solve many-to-many — always two Master-Detail relationships, not two Lookups. Roll-up summary fields only work on Master-Detail relationships.',
      },
      {
        heading: 'Automation Decision Tree',
        body: 'For most automation questions, the answer is Flow. Record-Triggered Flows handle field updates, record creation, and cross-object automation. Approval Processes handle multi-step human approvals with rejection paths. Workflow Rules and Process Builder are legacy — do not choose them unless the question specifies a constraint preventing Flow use.',
      },
      {
        heading: 'Security and Visibility Layering',
        body: 'The DEV-402 tests the Salesforce security model in sequence: OWD (baseline record access) → Role Hierarchy (opens up) → Sharing Rules (grants access to groups) → Manual Sharing → Field-Level Security → Page Layouts. Permission Sets grant additional permissions beyond profiles. Record Types control picklist values and page layout assignment — not field visibility.',
      },
      {
        heading: 'App Design and Lightning App Builder',
        body: 'Know the difference between App Page, Record Page, and Home Page in Lightning App Builder. Dynamic Forms move fields out of page layouts onto the Lightning Record Page directly, enabling visibility rules per field. Custom tabs, apps, and navigation items are all configured declaratively — no code required for standard app design.',
      },
      {
        heading: 'Exam Strategy',
        body: 'Read every scenario for the constraint: “without code” means declarative only; “most efficient” usually means the native feature over a custom-built solution. Watch for “administrators only” (profile-based) vs “certain users” (permission sets or sharing rules). Passing score is 66% (40/60 questions) — aim for 76%+ on full mocks before booking.',
      },
    ],
  },
  keyConcepts: {
    h2: 'Platform App Builder: Key Concepts for the Exam',
    blocks: [
      {
        heading: 'Data Modeling: Objects, Fields, and Relationships',
        body: 'Custom Objects extend Salesforce to store your business-specific data. Master-Detail relationships create tight parent-child bonds (child inherits sharing, supports roll-up summaries). Lookup relationships are looser — the child can exist without the parent. Junction Objects implement many-to-many relationships using two master-detail relationships. Schema Builder provides a visual data model canvas. The exam presents a business requirement and asks which relationship type and object design is appropriate — know when to choose M-D vs Lookup based on cascade delete, sharing, and roll-up needs.',
      },
      {
        heading: 'Business Logic and Process Automation',
        body: 'Flows are the primary automation tool for App Builders. Record-Triggered Flows replace Workflow Rules (retiring) and Process Builder (retiring). Screen Flows provide guided multi-step experiences for users. Scheduled Flows run on a time-based schedule. Approval Processes handle multi-step human sign-off with defined approvers and entry criteria. The exam tests which automation tool handles a given scenario — know that Flow replaces Workflow Rules for field updates and email alerts, and Approval Processes are for structured multi-person sign-off.',
      },
      {
        heading: 'User Interface: Lightning App Builder and Page Layouts',
        body: 'Lightning App Builder lets admins compose pages by dragging standard and custom components onto a canvas — for Record Pages, Home Pages, and App Pages. Dynamic Forms move fields from traditional page layouts into the page itself, enabling conditional field visibility based on record values. Path provides stage guidance. Dynamic Actions control button visibility. List Views filter and display records without reports. The exam tests the difference between page layouts (profile/record type-based) and Dynamic Forms (component-level conditions).',
      },
      {
        heading: 'Mobile Design: Compact Layouts and Navigation',
        body: 'Salesforce Mobile App uses Compact Layouts to determine which fields appear in record highlights, related list previews, and push notifications — the top fields in the layout appear first. Mobile Navigation defines which items appear in the mobile sidebar. Quick Actions appear in the action bar on mobile. The exam tests how to configure the mobile experience and which settings affect which mobile surfaces.',
      },
      {
        heading: 'Analytics: Reports, Dashboards, and AppExchange',
        body: 'Report Types determine which objects and relationships are available in a report. Tabular reports list records in rows; Summary adds grouping and subtotals; Matrix adds two dimensions of grouping; Joined combines up to 5 report blocks. Dashboards display visual components (charts, gauges, tables) from report data. AppExchange provides pre-built apps, components, and flows — always install in a sandbox first, review required permissions, and check for governor limit implications.',
      },
    ],
  },
  moreQuestionsBlock: {
    h3: 'Get the Full DEV-402 Question Bank',
    paragraphs: [
      { kind: 'segments', segments: [
        { type: 'text', text: 'Most candidates book the exam after scoring ' },
        { type: 'strong', text: '75%+' },
        { type: 'text', text: ' on full mocks.' },
      ]},
      {
        kind: 'text',
        text: "If you're planning to test this quarter, aim to complete full mocks at least 10–14 days before your exam date.",
      },
      {
        kind: 'segments',
        segments: [
          {
            type: 'text',
            text: 'Candidates who complete full mock exams report strong first-time pass rates. For pricing and access, use the contact form below or kindly reach out to ',
          },
          {
            type: 'link',
            href: 'mailto:km.krishnamohan25@gmail.com',
            label: 'km.krishnamohan25@gmail.com',
          },
          { type: 'text', text: '—mention DEV-402.' },
        ],
      },
    ],
    ctaHref: '/contact#exam=DEV-402',
    ctaLabel: 'Get Full Question Bank',
  },
  afterCertSection: {
    id: 'app-builder-next-steps-heading',
    heading: 'After App Builder: Where to Go Next',
    intro:
      'Most admins take App Builder after ADM-201, then move into cloud-specific consultant roles. If you enjoy designing data models and automation, consider specialising as a consultant on the clouds your org uses most.',
    items: [
      {
        lead: 'For sales-heavy orgs, the natural next step is ',
        link: { href: '/certifications/sales-cloud', label: 'Sales Cloud Consultant' },
        tail: '.',
      },
      {
        lead: 'If you spend most of your time on support queues and case workflows, look at ',
        link: { href: '/certifications/service-cloud', label: 'Service Cloud Consultant' },
        tail: '.',
      },
      {
        lead: 'Working with Experience Cloud sites or portals? The ',
        link: { href: '/certifications/experience-cloud', label: 'Experience Cloud Consultant' },
        tail: " certification is a strong follow-on once you're comfortable with App Builder page design.",
      },
    ],
  },
  tocSections: [
    { id: 'exam-prep', title: 'Exam Prep Content' },
    { id: 'scenario-tips', title: 'How to Pass DEV-402' },
    { id: 'key-concepts', title: 'Key Concepts' },
    { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' },
    { id: 'practice-questions', title: 'Practice Questions' },
    { id: 'more-questions', title: 'Get More Questions' },
    { id: 'related-certs', title: 'Related Certifications' },
    { id: 'faq', title: 'Exam FAQs' },
  ],
  sampleQuestions: [
    {
      question:
        'Which relationship type should be used when the child record should be deleted if the parent record is deleted?',
      options: ['Lookup Relationship', 'Master-Detail Relationship', 'External Lookup', 'Hierarchical Relationship'],
      correctAnswer: 1,
      explanation:
        'Master-Detail relationships create a cascade delete behavior where child records are automatically deleted when the parent is deleted.',
    },
    {
      question: 'What is the maximum number of roll-up summary fields that can be created on a master object?',
      options: ['10', '25', '40', 'Unlimited'],
      correctAnswer: 1,
      explanation: 'Each object can have a maximum of 25 roll-up summary fields.',
    },
    {
      question:
        'A user wants to display different page layouts based on the record type. What should be configured?',
      options: ['Profile Assignment', 'Page Layout Assignment', 'Record Type Assignment', 'Permission Set'],
      correctAnswer: 1,
      explanation:
        'Page Layout Assignment allows you to assign different page layouts to different record types and profiles.',
    },
    {
      question:
        'Which automation tool should be used to update a field based on criteria when a record is created or edited?',
      options: ['Workflow Rule', 'Flow', 'Approval Process', 'All of the above'],
      correctAnswer: 1,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for automating field updates when records are created or edited.',
    },
    {
      question: 'What is the purpose of a Junction Object?',
      options: [
        'To create a one-to-many relationship',
        'To create a many-to-many relationship',
        'To store historical data',
        'To link external systems',
      ],
      correctAnswer: 1,
      explanation:
        'A Junction Object is a custom object with two master-detail relationships used to create a many-to-many relationship between two objects.',
    },
    {
      question: 'What is the maximum number of master-detail relationships allowed on a custom object?',
      options: ['1', '2', '3', 'Unlimited'],
      correctAnswer: 1,
      explanation:
        'A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models.',
    },
    {
      question:
        'Which component in Lightning App Builder allows users to see related records on a record page?',
      options: ['Related List', 'Related Record', 'Record Detail', 'List View'],
      correctAnswer: 0,
      explanation:
        'The Related List component displays related records (child records) on a record page, such as Contacts on an Account page or Opportunities on an Account page.',
    },
    {
      question:
        'A developer wants to create a custom field that automatically calculates a value when a record is saved. Which field type should be used?',
      options: ['Formula', 'Auto Number', 'Text', 'Number'],
      correctAnswer: 0,
      explanation:
        'Formula fields automatically calculate values based on other fields, expressions, or functions. They are read-only and recalculate whenever referenced fields change.',
    },
    {
      question: 'What is the purpose of a Record Type?',
      options: [
        'To assign different page layouts to different users',
        'To create different business processes and picklist values for the same object',
        'To control field-level security',
        'To automate record creation',
      ],
      correctAnswer: 1,
      explanation:
        'Record Types allow you to offer different business processes, picklist values, and page layouts to different users for the same object.',
    },
    {
      question: 'Which automation tool can be used to create records in related objects automatically?',
      options: ['Workflow Rule', 'Process Builder', 'Flow', 'All of the above'],
      correctAnswer: 2,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for creating records in related objects. Process Builder can also do this but is being deprecated.',
    },
    {
      question:
        'A user wants to restrict access to specific fields based on user profiles. Which feature should be used?',
      options: ['Field-Level Security', 'Sharing Rules', 'Record Types', 'Page Layouts'],
      correctAnswer: 0,
      explanation:
        'Field-Level Security (FLS) controls whether users can view or edit specific fields, regardless of record-level access.',
    },
    {
      question: 'What is the difference between a Lookup and Master-Detail relationship?',
      options: [
        'Lookup allows cascade delete, Master-Detail does not',
        'Master-Detail allows cascade delete and roll-up summary fields, Lookup does not',
        'There is no difference',
        'Lookup is only for standard objects',
      ],
      correctAnswer: 1,
      explanation:
        "Master-Detail relationships support cascade delete (deleting parent deletes children) and roll-up summary fields. Lookup relationships are more flexible but don't support these features.",
    },
    {
      question: 'Which Lightning App Builder component allows users to navigate between related records?',
      options: ['Related List', 'Related Record', 'Record Detail', 'Navigation Menu'],
      correctAnswer: 1,
      explanation:
        "The Related Record component displays a single related record and allows navigation to that record's detail page.",
    },
    {
      question:
        'A company wants to ensure data quality by preventing duplicate records. Which feature should be implemented?',
      options: ['Validation Rules', 'Duplicate Rules', 'Matching Rules', 'Both B and C'],
      correctAnswer: 3,
      explanation:
        'Duplicate Rules work with Matching Rules to prevent or alert users about duplicate records. Matching Rules define what constitutes a duplicate, and Duplicate Rules define what action to take.',
    },
    {
      question:
        'Which Lightning App Builder component allows filtering records displayed on a record page?',
      options: ['Related List', 'Related Record', 'Filter', 'List View'],
      correctAnswer: 2,
      explanation: 'The Filter component lets users filter records on a record page using predefined criteria.',
    },
  ],
}
