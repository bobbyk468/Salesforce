import type { AppBuilderSpikeBody } from './types'

export const APP_BUILDER_SLUG = 'app-builder' as const

export const appBuilderCertPageBody: AppBuilderSpikeBody = {
  template: 'app-builder',
  whoIsThisFor: {
    heading: 'Who is the Platform App Builder exam for?',
    personas: [
      { label: 'Admins levelling up', description: 'You passed ADM-201 and want to prove you can design and build custom Salesforce applications using declarative tools.' },
      { label: 'Business app builders', description: 'You create custom objects, flows, and Lightning pages for your team and want the credential to formalise those skills.' },
      { label: 'Aspiring developers', description: 'You want to understand declarative boundaries before moving into Apex development and PD1.' },
    ],
  },
  examDifficulty: {
    heading: 'Is the Platform App Builder Exam Hard?',
    summary: 'App Builder is considered moderately difficult. It builds on ADM-201 knowledge but goes deeper into data modelling, business logic, and Lightning app configuration.',
    bullets: [
      '<strong>60 multiple-choice questions</strong> in 105 minutes.',
      '<strong>63% passing score</strong> — slightly lower than ADM-201, but the questions are harder.',
      '<strong>Scenario-heavy</strong> — most questions describe a business requirement and ask which declarative tool solves it.',
      '<strong>No coding required</strong> — entirely declarative, but you need to know where declarative ends and code begins.',
    ],
    passRateGuidance: 'Score 75%+ on 3 timed practice exams before booking. Candidates with hands-on ADM-201 experience and custom app-building practice perform best.',
  },
  examFormat: {
    heading: 'App Builder Exam Format Explained',
    intro: 'The exam is proctored online or at a test centre through Webassessor. Here is the format:',
    scenarioPercent: 'About 60-70% of questions are scenario-based. They typically describe a business need and ask which combination of declarative features (objects, relationships, flows, validation rules, page layouts) satisfies it. The hardest scenarios involve choosing between Flow, approval processes, and custom Lightning components.',
    bestWayToPass: [
      '<strong>Master data modelling:</strong> Know when to use lookup vs. master-detail, external objects, junction objects, and roll-up summary fields.',
      '<strong>Study Flow Builder deeply:</strong> Screen flows, record-triggered flows, scheduled flows, and subflows are the most tested automation topics.',
      '<strong>Know declarative vs. code boundaries:</strong> Understand when a requirement exceeds declarative capabilities and needs Apex or LWC.',
      '<strong>Practice Lightning app configuration:</strong> Build apps with dynamic forms, Lightning pages, and utility bar components in a Developer Edition org.',
    ],
  },
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
    h3: 'Request Full DEV-402 Mock Exams & Study Plan',
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
            text: 'Want to ensure you pass on your first try? Request our full 60-question mock exams, a personalized study plan, and pricing details by filling out the contact form. You can also reach out to ',
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
    ctaLabel: 'Request Mock Exams & Study Plan',
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
      whyWrong: [
        'Lookup Relationship keeps child records intact when the parent is deleted — no cascade delete behavior.',
        'External Lookup links to data outside Salesforce and has no cascade delete behavior on internal records.',
        'Hierarchical Relationship is a special lookup limited to the User object — it does not cascade delete.',
      ],
    },
    {
      question: 'What is the maximum number of roll-up summary fields that can be created on a master object?',
      options: ['10', '25', '40', 'Unlimited'],
      correctAnswer: 1,
      explanation: 'Each object can have a maximum of 25 roll-up summary fields.',
      whyWrong: [
        '10 understates the actual platform limit of 25 roll-up summary fields per object.',
        '40 overstates the actual platform limit — the real cap is 25.',
        'The limit isn’t unlimited — Salesforce enforces a specific cap of 25 to protect performance.',
      ],
    },
    {
      question:
        'A user wants to display different page layouts based on the record type. What should be configured?',
      options: ['Profile Assignment', 'Page Layout Assignment', 'Record Type Assignment', 'Permission Set'],
      correctAnswer: 1,
      explanation:
        'Page Layout Assignment allows you to assign different page layouts to different record types and profiles.',
      whyWrong: [
        'Profile Assignment alone controls object/field access, not which page layout displays per record type.',
        'Record Type Assignment controls which record types a profile can use, but the layout itself is set via Page Layout Assignment.',
        'Permission Set grants additional access — it doesn’t control which page layout is shown for a record type.',
      ],
    },
    {
      question:
        'Which automation tool should be used to update a field based on criteria when a record is created or edited?',
      options: ['Workflow Rule', 'Flow', 'Approval Process', 'All of the above'],
      correctAnswer: 1,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for automating field updates when records are created or edited.',
      whyWrong: [
        'Workflow Rule can update fields, but it is deprecated in favor of Flow for new automation.',
        'Approval Process routes records for approval — it isn’t designed for straightforward criteria-based field updates.',
        '"All of the above" is wrong because Salesforce’s current guidance is to build new field-update automation in Flow, not treat all three as equally recommended.',
      ],
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
      whyWrong: [
        'A single master-detail or lookup relationship already handles a one-to-many relationship — no junction object is needed for that.',
        'Storing historical data is a different concept (e.g., field history tracking), unrelated to junction objects.',
        'Linking external systems is handled by external objects/integration tools, not a junction object, which connects two internal Salesforce objects.',
      ],
    },
    {
      question: 'What is the maximum number of master-detail relationships allowed on a custom object?',
      options: ['1', '2', '3', 'Unlimited'],
      correctAnswer: 1,
      explanation:
        'A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models.',
      whyWrong: [
        'A single master-detail relationship is allowed, but the actual platform maximum is higher than 1.',
        '3 exceeds the actual platform limit for master-detail relationships on a custom object.',
        'The limit is not unlimited — Salesforce caps master-detail relationships specifically to preserve sharing and cascade-delete integrity.',
      ],
    },
    {
      question:
        'Which component in Lightning App Builder allows users to see related records on a record page?',
      options: ['Related List', 'Related Record', 'Record Detail', 'List View'],
      correctAnswer: 0,
      explanation:
        'The Related List component displays related records (child records) on a record page, such as Contacts on an Account page or Opportunities on an Account page.',
      whyWrong: [
        'Related Record shows a single linked record\'s fields, not a list of multiple related child records.',
        'Record Detail displays the current record\'s own fields, not related child records.',
        'List View shows a filtered list of records on a tab or app page, not related records embedded within a specific record page.',
      ],
    },
    {
      question:
        'A developer wants to create a custom field that automatically calculates a value when a record is saved. Which field type should be used?',
      options: ['Formula', 'Auto Number', 'Text', 'Number'],
      correctAnswer: 0,
      explanation:
        'Formula fields automatically calculate values based on other fields, expressions, or functions. They are read-only and recalculate whenever referenced fields change.',
      whyWrong: [
        'Auto Number generates a sequential unique value on record creation — it doesn’t calculate values from other fields.',
        'A plain Text field stores manually entered or set text — it has no built-in calculation capability.',
        'A plain Number field stores a value directly — it can’t automatically derive that value from other fields.',
      ],
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
      whyWrong: [
        'Assigning page layouts to users is a downstream effect of Record Types, but layout assignment alone isn’t the core purpose Record Types serve.',
        'Field-level security is controlled separately via profiles/permission sets, not Record Types.',
        'Automating record creation is handled by Flow or other automation tools, not Record Types.',
      ],
    },
    {
      question: 'Which automation tool can be used to create records in related objects automatically?',
      options: ['Workflow Rule', 'Process Builder', 'Flow', 'All of the above'],
      correctAnswer: 2,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for creating records in related objects. Process Builder can also do this but is being deprecated.',
      whyWrong: [
        'Workflow Rule cannot create records at all — it\'s limited to field updates, email alerts, tasks, and outbound messages.',
        'Process Builder can create related records, but it is deprecated in favor of Flow for new automation.',
        '"All of the above" is wrong because Workflow Rule specifically cannot create records — it doesn\'t belong in this group.',
      ],
    },
    {
      question:
        'A user wants to restrict access to specific fields based on user profiles. Which feature should be used?',
      options: ['Field-Level Security', 'Sharing Rules', 'Record Types', 'Page Layouts'],
      correctAnswer: 0,
      explanation:
        'Field-Level Security (FLS) controls whether users can view or edit specific fields, regardless of record-level access.',
      whyWrong: [
        'Sharing Rules control record-level access (which records users can see), not field-level visibility.',
        'Record Types control business process and picklist variation, not field visibility by profile.',
        'Page Layouts control which fields are displayed and their arrangement, but they don\'t enforce security — a field can still be exposed via API even if hidden from a layout.',
      ],
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
      whyWrong: [
        "This reverses the actual behavior — Master-Detail supports cascade delete, not Lookup.",
        "There is a real, meaningful difference between the two relationship types — this option denies it entirely.",
        "Lookup relationships can be used on both standard and custom objects — they aren't restricted to standard objects only.",
      ],
    },
    {
      question: 'Which Lightning App Builder component allows users to navigate between related records?',
      options: ['Related List', 'Related Record', 'Record Detail', 'Navigation Menu'],
      correctAnswer: 1,
      explanation:
        "The Related Record component displays a single related record and allows navigation to that record's detail page.",
      whyWrong: [
        "Related List displays multiple child records in a list, not a single navigable related record.",
        "Record Detail shows the current record's own fields, not a related record to navigate to.",
        "'Navigation Menu' isn't a Lightning App Builder record-page component — it's a separate Experience Cloud/app-level navigation feature.",
      ],
    },
    {
      question:
        'A company wants to ensure data quality by preventing duplicate records. Which feature should be implemented?',
      options: ['Validation Rules', 'Duplicate Rules', 'Matching Rules', 'Both B and C'],
      correctAnswer: 3,
      explanation:
        'Duplicate Rules work with Matching Rules to prevent or alert users about duplicate records. Matching Rules define what constitutes a duplicate, and Duplicate Rules define what action to take.',
      whyWrong: [
        'Validation Rules alone don\'t detect duplicates — they enforce data-quality logic on individual field values, not cross-record matching.',
        'Duplicate Rules alone need Matching Rules to define what counts as a duplicate — one without the other is incomplete.',
        'Matching Rules alone only identify potential duplicates — they need Duplicate Rules to define the action (block, alert, report) taken when a match is found.',
      ],
    },
    {
      question:
        'Which Lightning App Builder component allows filtering records displayed on a record page?',
      options: ['Related List', 'Related Record', 'Filter', 'List View'],
      correctAnswer: 2,
      explanation: 'The Filter component lets users filter records on a record page using predefined criteria.',
      whyWrong: [
        'Related List displays associated child records — it doesn\'t provide filtering controls itself.',
        'Related Record shows a linked record\'s details — it isn\'t a filtering mechanism.',
        'List View filters a list of records on a tab or app page, not records displayed within a specific record page layout.',
      ],
    },
  ],
}
