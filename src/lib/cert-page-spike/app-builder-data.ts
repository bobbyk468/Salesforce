import type { AppBuilderSpikeBody } from './types'

export const APP_BUILDER_SLUG = 'app-builder' as const

export const appBuilderCertPageBody: AppBuilderSpikeBody = {
  template: 'app-builder',
  whoIsThisFor: {
    heading: 'Who is the Platform App Builder exam for?',
    personas: [
      { label: 'Admins levelling up', description: 'You have admin experience and want to show that you can build custom apps with Salesforce’s declarative tools.' },
      { label: 'Business app builders', description: 'You build custom objects, flows, and Lightning pages and want a credential for those skills.' },
      { label: 'Aspiring developers', description: 'You want to learn what declarative tools can do before studying Apex and Platform Developer I.' },
    ],
  },
  examDifficulty: {
    heading: 'Is the Platform App Builder Exam Hard?',
    summary: 'The exam builds on admin knowledge and asks you to apply data modelling, business logic, and Lightning configuration to app-building scenarios.',
    bullets: [
      '<strong>60 multiple-choice questions</strong> in 105 minutes.',
      '<strong>73% passing score</strong>, as listed in the current exam guide.',
      '<strong>Scenario-based</strong>: questions can describe a business need and ask which declarative tool best meets it.',
      '<strong>No coding required</strong>: know what declarative tools can do and when a requirement may need code.',
    ],
    passRateGuidance: 'Use timed practice tests to find weak areas. Build a small app yourself to practise the concepts before booking.',
  },
  examFormat: {
    heading: 'App Builder Exam Format Explained',
    intro: 'The exam is proctored online or at a test centre. Here is the format:',
    scenarioPercent: 'Many questions use business scenarios. They ask which declarative features, such as objects, relationships, Flow, validation rules, or page layouts, meet a requirement. Some scenarios ask you to choose between automation, approval processes, and a custom component.',
    bestWayToPass: [
      '<strong>Model data:</strong> Know when to use lookup and master-detail relationships, external objects, junction objects, and roll-up summary fields.',
      '<strong>Practise Flow:</strong> Review screen flows, record-triggered flows, scheduled flows, and subflows.',
      '<strong>Know when code is needed:</strong> Recognize when a requirement goes beyond declarative tools and needs Apex or Lightning Web Components.',
      '<strong>Configure Lightning apps:</strong> Practise with Dynamic Forms, Lightning pages, and utility bar components in a Developer Edition org.',
    ],
  },
  expertInsight: "Many App Builder questions ask you to choose a tool for a business requirement. Be ready to compare declarative options, such as Flow, with custom code when a requirement calls for it. Also review how Flow runs within platform limits.",
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
      text: ' to choose the right certification order. Ready to book? The exam tips and study plan are further down this page.',
    },
  ],
  ctaExamCode: 'DEV-402',
  practiceIntroSuffix:
    ". Click on an answer to select it, then check your answer to see if you're correct.",
  certificationCard: {
    code: 'DEV-402',
    description:
      'Platform App Builder tests whether you can design, build and deploy custom Salesforce applications with declarative tools: the data model, Flow and business logic, Lightning App Builder, and deployment. The exam is 60 scored questions in 105 minutes, with a 73% pass mark, weighted towards Business Logic and Process Automation (32%) and Data Modeling and Management (20%).',
    examDetails: {
      questions: 60,
      passingScore: '73%',
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
      'The DEV-402 exam uses business scenarios to test how you choose and configure Salesforce features. Focus on when each declarative tool fits a requirement.',
    blocks: [
      {
        heading: 'Data Modelling Scenarios',
        body: 'Use master-detail when the detail record depends on its master. Deleting a master deletes its detail records, and roll-up summary fields require a master-detail relationship. Use lookup when the related record can exist independently; lookup deletion behavior can be configured. A junction object uses two master-detail relationships to model a many-to-many relationship.',
      },
      {
        heading: 'Automation Decision Tree',
        body: 'For new automation, Salesforce recommends Flow. Record-triggered flows can update fields, create records, and automate work across related records. Approval Processes manage structured human approvals. Workflow Rules and Process Builder are legacy tools; know their capabilities, but use Flow for new automation unless the question gives a specific constraint.',
      },
      {
        heading: 'Security and Visibility Layering',
        body: 'Understand the difference between record access and field access. Organization-Wide Defaults set baseline record access; role hierarchy, sharing rules, and manual sharing can open record access further. Profiles and permission sets control object and field permissions. Page layouts affect how fields appear, not whether a user has permission to access them. Record Types can provide different business processes, picklist values, and page layouts.',
      },
      {
        heading: 'App Design and Lightning App Builder',
        body: 'Know the difference between App Pages, Record Pages, and Home Pages in Lightning App Builder. Dynamic Forms let admins place supported fields on a Record Page and set visibility rules. Standard apps, tabs, and navigation items can be configured without code.',
      },
      {
        heading: 'Exam Strategy',
        body: 'Look for constraints such as “without code,” which points to declarative tools. Compare standard Salesforce features with custom solutions, and distinguish field permissions from record sharing when a scenario limits access. The current listed passing score is 73%. Use timed practice to find gaps before booking.',
      },
    ],
  },
  keyConcepts: {
    h2: 'Platform App Builder: Key Concepts for the Exam',
    blocks: [
      {
        heading: 'Data Modeling: Objects, Fields, and Relationships',
        body: 'Custom objects store business-specific data. Master-detail creates a dependent relationship: the detail record inherits sharing from its master, and the master can have roll-up summary fields. A lookup is more flexible, and the related record can exist independently. Junction Objects implement many-to-many relationships using two master-detail relationships. Schema Builder provides a visual data model canvas. Exam scenarios ask you to choose a relationship and object design for a business need. Compare master-detail and lookup based on record dependency, sharing, deletion behavior, and roll-up summaries.',
      },
      {
        heading: 'Business Logic and Process Automation',
        body: 'Flow is Salesforce’s recommended tool for new automation. Record-triggered flows respond to record changes; screen flows guide users through a process; scheduled flows run at a set time. Approval Processes manage formal human approvals with defined approvers and criteria. Be able to select the tool that fits a scenario, and recognize Workflow Rules and Process Builder as legacy automation.',
      },
      {
        heading: 'User Interface: Lightning App Builder and Page Layouts',
        body: 'Lightning App Builder lets admins arrange standard and custom components on Record Pages, Home Pages, and App Pages. Dynamic Forms place supported fields on a Record Page and allow field visibility rules. Path guides users through stages, and Dynamic Actions can control when actions appear. List Views filter and display records. Know how page layouts differ from Lightning Record Pages and Dynamic Forms.',
      },
      {
        heading: 'Mobile Design: Compact Layouts and Navigation',
        body: 'Compact Layouts choose the fields shown in record highlights and other compact record displays; field order matters. Mobile Navigation controls which items appear in the Salesforce mobile navigation menu. Quick Actions provide shortcuts to common tasks. Know which setting controls each part of the mobile experience.',
      },
      {
        heading: 'Analytics: Reports, Dashboards, and AppExchange',
        body: 'Report Types determine which objects and relationships are available in a report. Tabular reports list records; Summary reports add grouping and subtotals; Matrix reports group by rows and columns; Joined reports combine up to five report blocks. Dashboards show charts, tables, and other components based on report data. AppExchange offers apps, components, and flows. Review permissions and test a package in a sandbox before installing it in production.',
      },
    ],
  },
  moreQuestionsBlock: {
    h3: 'Request Full DEV-402 Mock Exams & Study Plan',
    paragraphs: [
      { kind: 'segments', segments: [
        { type: 'text', text: 'Use practice exams to check your readiness. A personal target of ' },
        { type: 'strong', text: '85%+' },
        { type: 'text', text: ' on full mocks can help you identify areas to revisit.' },
      ]},
      {
        kind: 'text',
        text: "Leave time after your practice tests to review the topics you missed before your exam.",
      },
      {
        kind: 'segments',
        segments: [
          {
            type: 'text',
            text: 'Contact us for more information on our full 60-question mock exams and a personalized study plan. Use the ',
          },
          {
            type: 'link',
            href: '/contact#contact-form',
            label: 'contact form',
          },
          { type: 'text', text: ' and mention DEV-402.' },
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
      'After App Builder, consider a consultant credential that matches the work you enjoy. Your next step can depend on whether you build solutions for sales, service, or Experience Cloud users.',
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
        'By default, which relationship type deletes detail records when its master is deleted?',
      options: ['Lookup Relationship', 'Master-Detail Relationship', 'External Lookup', 'Hierarchical Relationship'],
      correctAnswer: 1,
      explanation:
        'Deleting a master record also deletes its related detail records. Lookup relationships normally clear the lookup value or block deletion, though some custom lookup fields can be configured for cascade deletion.',
      whyWrong: [
        'A lookup usually clears its value or prevents the parent from being deleted. Cascade deletion is an optional setting for eligible custom lookups, not the standard behavior.',
        'External Lookup links to data outside Salesforce and has no cascade delete behavior on internal records.',
        'Hierarchical Relationship is a special lookup limited to the User object; it does not cascade delete.',
      ],
    },
    {
      question: 'What is the default limit of roll-up summary fields on an object?',
      options: ['10', '25', '40', 'Unlimited'],
      correctAnswer: 1,
      explanation: 'The default limit is 25 per object. Salesforce Support can increase it to a maximum of 40.',
      whyWrong: [
        'The default limit is 25, not 10.',
        '40 is the maximum after an approved increase, not the default.',
        'There is a limit: the default is 25 and the maximum after an increase is 40.',
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
        'Permission Set grants additional access, it doesn’t control which page layout is shown for a record type.',
      ],
    },
    {
      question:
        'Which tool is recommended for a new field update when a record is created or edited?',
      options: ['Workflow Rule', 'Flow', 'Approval Process', 'All of the above'],
      correctAnswer: 1,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for automating field updates when records are created or edited.',
      whyWrong: [
        'Workflow Rules can update fields, but Salesforce recommends Flow for new automation.',
        'Approval Process routes records for approval, it isn’t designed for straightforward criteria-based field updates.',
        '"All of the above" is wrong because Salesforce’s current guidance is to build new field-update automation in Flow, not treat all three as equally recommended.',
      ],
    },
    {
      question: 'Why would you create a Junction Object?',
      options: [
        'Create a one-to-many relationship',
        'Create a many-to-many relationship',
        'Store historical data',
        'Connect external systems',
      ],
      correctAnswer: 1,
      explanation:
        'A Junction Object uses two master-detail relationships to connect records in a many-to-many relationship.',
      whyWrong: [
        'A single master-detail or lookup relationship already handles a one-to-many relationship, no junction object is needed for that.',
        'Storing historical data is a different concept (e.g., field history tracking), unrelated to junction objects.',
        'Linking external systems is handled by external objects/integration tools, not a junction object, which connects two internal Salesforce objects.',
      ],
    },
    {
      question: 'How many master-detail relationships can a custom object have at most?',
      options: ['1', '2', '3', 'Unlimited'],
      correctAnswer: 1,
      explanation:
        'A custom object can have up to two master-detail relationships.',
      whyWrong: [
        'A single master-detail relationship is allowed, but the actual platform maximum is higher than 1.',
        '3 exceeds the actual platform limit for master-detail relationships on a custom object.',
        'The limit is not unlimited: Salesforce caps master-detail relationships specifically to preserve sharing and cascade-delete integrity.',
      ],
    },
    {
      question:
        'Which Lightning App Builder component displays all related lists on a record page?',
      options: ['Related Lists', 'Related Record', 'Record Detail', 'List View'],
      correctAnswer: 0,
      explanation:
        'The Related Lists component displays the related lists included on the record page. For example, it can show Contacts or Opportunities on an Account page.',
      whyWrong: [
        'Related Record shows a single linked record\'s fields, not a list of multiple related child records.',
        'Record Detail displays the current record\'s own fields, not related child records.',
        'List View shows a filtered list of records on a tab or app page, not related records embedded within a specific record page.',
      ],
    },
    {
      question:
        'A developer needs a read-only field that calculates a value from other fields. Which type should they choose?',
      options: ['Formula', 'Auto Number', 'Text', 'Number'],
      correctAnswer: 0,
      explanation:
        'Formula fields automatically calculate values based on other fields, expressions, or functions. They are read-only and recalculate whenever referenced fields change.',
      whyWrong: [
        'Auto Number generates a sequential unique value on record creation, it doesn’t calculate values from other fields.',
        'A plain Text field stores manually entered or set text; it has no built-in calculation capability.',
        'A plain Number field stores a value directly; it can’t automatically derive that value from other fields.',
      ],
    },
    {
      question: 'Besides page layout assignment, what can Record Types control on the same object?',
      options: [
        'Field-level security settings',
        'Different business processes and picklist values',
        'Record-level access to records',
        'Automatic record creation',
      ],
      correctAnswer: 1,
      explanation:
        'Record Types can provide different business processes and picklist values for the same object. Page layouts can also be assigned by record type and profile.',
      whyWrong: [
        'Field-level security is controlled with profiles and permission sets, not Record Types.',
        'Record-level access is controlled with organization-wide defaults, roles, and sharing, not Record Types.',
        'Automating record creation is handled by Flow or other automation tools, not Record Types.',
      ],
    },
    {
      question: 'Which tool does Salesforce recommend for new automation that creates related records?',
      options: ['Workflow Rule', 'Process Builder', 'Flow', 'All of the above'],
      correctAnswer: 2,
      explanation:
        'Flow (Record-Triggered Flow) is the recommended tool for creating records in related objects. Process Builder can create related records, but Salesforce recommends Flow for new automation.',
      whyWrong: [
        'Workflow Rule cannot create records at all, it\'s limited to field updates, email alerts, tasks, and outbound messages.',
        'Process Builder can create related records, but Salesforce no longer supports it and recommends Flow for new automation.',
        '"All of the above" is wrong because Workflow Rule specifically cannot create records, it doesn\'t belong in this group.',
      ],
    },
    {
      question:
        'An admin needs to limit which fields users can view or edit. Which feature should they use?',
      options: ['Field-Level Security', 'Sharing Rules', 'Record Types', 'Page Layouts'],
      correctAnswer: 0,
      explanation:
        'Field-Level Security (FLS) controls whether users can view or edit specific fields, regardless of record-level access.',
      whyWrong: [
        'Sharing Rules control record-level access (which records users can see), not field-level visibility.',
        'Record Types control business process and picklist variation, not field visibility by profile.',
        'Page Layouts control which fields are displayed and their arrangement, but they don\'t enforce security, a field can still be exposed via API even if hidden from a layout.',
      ],
    },
    {
      question: 'Which feature is supported by a master-detail relationship but not a standard lookup relationship?',
      options: [
        'Lookup supports roll-up summaries, but master-detail does not',
        'Master-detail supports roll-up summary fields; lookup does not',
        'There is no difference',
        'Lookup is only for standard objects',
      ],
      correctAnswer: 1,
      explanation:
        "A master-detail relationship supports roll-up summary fields on the master. A standard lookup relationship does not.",
      whyWrong: [
        "This reverses the roll-up summary behavior of these relationship types.",
        "There is a real, meaningful difference between the two relationship types, this option denies it entirely.",
        "Lookup relationships can be used on both standard and custom objects, they aren't restricted to standard objects only.",
      ],
    },
    {
      question: 'Which Lightning App Builder component displays fields from one related record?',
      options: ['Related List–Single', 'Related Record', 'Record Detail', 'Navigation Menu'],
      correctAnswer: 1,
      explanation:
        "The Related Record component displays a single related record and allows navigation to that record's detail page.",
      whyWrong: [
        "Related List–Single displays child records rather than fields from one related record.",
        "Record Detail shows the current record's own fields, not a related record to navigate to.",
        "'Navigation Menu' isn't a Lightning App Builder record-page component, it's a separate Experience Cloud/app-level navigation feature.",
      ],
    },
    {
      question:
        'A company wants to detect and block duplicate records. Which features work together to do this?',
      options: ['Validation Rules', 'Duplicate Rules', 'Matching Rules', 'Both B and C'],
      correctAnswer: 3,
      explanation:
        'Duplicate Rules work with Matching Rules to prevent or alert users about duplicate records. Matching Rules define what constitutes a duplicate, and Duplicate Rules define what action to take.',
      whyWrong: [
        'Validation Rules alone don\'t detect duplicates, they enforce data-quality logic on individual field values, not cross-record matching.',
        'Duplicate Rules alone need Matching Rules to define what counts as a duplicate, one without the other is incomplete.',
        'Matching Rules alone only identify potential duplicates; they need Duplicate Rules to define the action (block, alert, report) taken when a match is found.',
      ],
    },
    {
      question:
        'Which Lightning App Builder component lets an admin filter a related list on a record page?',
      options: ['Related List Quick Links', 'Related Record', 'Dynamic Related List–Single', 'Record Detail'],
      correctAnswer: 2,
      explanation: 'Dynamic Related List–Single lets an admin add filters to a related list in Lightning App Builder.',
      whyWrong: [
        'Related List Quick Links provides links to related lists, not configured list filters.',
        'Related Record displays a related record, not a filtered list.',
        'Record Detail displays fields on the current record, not a filtered related list.',
      ],
    },
    {
      question: 'An admin builds and tests a new app in a sandbox. Which tool should they use to move that work into production?',
      options: ['A change set', 'A validation rule', 'A dashboard', 'A permission set'],
      correctAnswer: 0,
      explanation: 'A change set moves metadata, like objects, fields, and flows, from one org to a related org, such as sandbox to production.',
      whyWrong: [
        "A validation rule checks data on save, it isn't a deployment tool.",
        "A dashboard displays report data, it has nothing to do with moving metadata between orgs.",
        "A permission set grants access, it doesn't deploy configuration changes.",
      ],
    },
    {
      question: 'A team wants to remove a field that was deployed by mistake. Can an inbound change set do that?',
      options: [
        "No, change sets can't delete components, that needs the Metadata API or a destructive-changes package",
        "Yes, change sets can delete any component",
        "Only an admin with the System Administrator profile can delete it this way",
        "Yes, but only on the first deployment"
      ],
      correctAnswer: 0,
      explanation: "Change sets only add or update components. Removing something already deployed needs the Metadata API or Change Set Deployments with a destructive-changes manifest.",
      whyWrong: [
        "Change sets are an additive tool, deletion isn't one of their capabilities.",
        "Profile has nothing to do with what a change set itself is capable of.",
        "The limitation isn't about which deployment attempt it is, change sets simply don't delete."
      ],
    },
    {
      question: "A sales manager should see every Opportunity owned by their direct reports, but reps shouldn't see each other's records. What combination controls this?",
      options: [
        "Organization-wide defaults set to Private, with the role hierarchy giving managers visibility upward",
        "A single validation rule on Opportunity",
        "A custom report type",
        "A Lightning page component visibility rule"
      ],
      correctAnswer: 0,
      explanation: "Setting the OWD to Private creates the baseline (reps only see their own), and the role hierarchy then opens visibility upward to managers over their reports, without opening it sideways between reps.",
      whyWrong: [
        "A validation rule checks data on save, it doesn't control record visibility.",
        "A custom report type determines what fields and objects a report can use, it doesn't grant record access.",
        "Component visibility rules control what's shown on a Lightning page, not which records a user can see."
      ],
    },
    {
      question: "A team needs to import 200,000 Account records from a CSV file using a repeatable, schedulable process. Which tool fits?",
      options: ["Data Loader", "Import Wizard", "Report Builder", "Schema Builder"],
      correctAnswer: 0,
      explanation: "Data Loader handles bulk operations on any object, has no 50,000-record cap, and can run from the command line, which supports scheduling.",
      whyWrong: [
        "Import Wizard supports standard objects and some custom objects but caps out at 50,000 records and has no command-line or scheduling option.",
        "Report Builder creates and filters reports, it doesn't import data.",
        "Schema Builder visualizes and edits the data model, it isn't a data-loading tool."
      ],
    },
    {
      question: "A discount request over $10,000 needs sign-off from a manager, then a director, before the Opportunity can proceed. Which feature fits this requirement?",
      options: ["An Approval Process", "A Record-Triggered Flow", "A validation rule", "Component visibility rules"],
      correctAnswer: 0,
      explanation: "An Approval Process defines entry criteria, a sequence of approval steps, and the actions to take on approval or rejection, exactly the multi-step human sign-off described here.",
      whyWrong: [
        "A Record-Triggered Flow automates logic without a human approval step built in, it's not designed for sequential sign-off.",
        "A validation rule blocks a save based on a condition, it doesn't route a record for approval.",
        "Component visibility rules control what's shown on a page, they have nothing to do with approval routing."
      ],
    },
  ],
}
