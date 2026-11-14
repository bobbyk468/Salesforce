import type { AssociateSpikeBody } from './types'

export const AI_ASSOCIATE_SLUG = 'ai-associate' as const

export const aiAssociateCertPageBody: AssociateSpikeBody = {
  template: 'associate',
  whoIsThisFor: {
    heading: 'Who is the Salesforce AI Associate exam for?',
    personas: [
      {
        label: 'Salesforce beginners',
        description:
          'You want to learn basic AI concepts, trusted AI principles, and how AI can be used in CRM.',
      },
      {
        label: 'Admins and consultants',
        description:
          'You advise business users and want to explain data quality, grounding, bias, privacy, and responsible AI.',
      },
      {
        label: 'Career switchers',
        description:
          'You want to review historical learning material before studying current Administrator, Agentforce, or Data Cloud topics.',
      },
    ],
  },
  examDifficulty: {
    heading: 'Is the Salesforce AI Associate Exam Hard?',
    summary:
      'The Salesforce AI Associate exam was aimed at beginners. Its questions connected basic AI ideas, responsible data use, and Einstein features to CRM scenarios.',
    bullets: [
      '<strong>40 multiple-choice questions</strong> in 70 minutes.',
      '<strong>65% passing score</strong> was listed for the retired exam.',
      '<strong>Conceptual focus</strong>: the material covers AI ideas rather than Apex, Python, or machine-learning math.',
      '<strong>Responsible AI</strong>: review bias, hallucinations, data quality, privacy, and human oversight.',
    ],
    passRateGuidance:
      'This retired exam cannot be booked. Use the practice material as a historical learning review; verify current Salesforce AI learning options with Salesforce.',
  },
  examFormat: {
    heading: 'Salesforce AI Associate Exam Format Explained',
    intro:
      'The retired AI Associate exam was timed. Use the format below when reviewing historical practice material.',
    scenarioPercent:
      'Many questions describe a situation and ask you to apply a concept. For example, you might choose between predictive and generative AI, identify a data-quality risk, or select a trusted AI principle.',
    bestWayToPass: [
      '<strong>Learn the terms:</strong> Explain how AI, machine learning, predictive AI, and generative AI differ, along with prompts, grounding, and hallucinations.',
      '<strong>Apply trusted AI principles:</strong> Connect responsibility, accountability, transparency, empowerment, and inclusion to CRM examples.',
      '<strong>Check data quality:</strong> Consider how duplicates, missing fields, old records, and biased data can affect results.',
      '<strong>Review Einstein examples:</strong> Identify uses for scoring, recommendations, summaries, generated content, and guided actions.',
    ],
  },
  differentiation: {
    heading: 'AI Associate Traps & Readiness Checklist',
    intro:
      'To understand the material, connect AI terms to Salesforce data, trust, and practical CRM examples.',
    commonTraps: [
      {
        trap: 'Assuming every AI use case is generative AI',
        fix: 'Predictive AI estimates outcomes or suggests actions using data. Generative AI creates content, such as text and summaries, from prompts and context.',
      },
      {
        trap: 'Treating responsible AI as generic ethics vocabulary',
        fix: 'Connect each principle to a practical decision, such as checking for bias, reviewing an output, or protecting customer data.',
      },
      {
        trap: 'Ignoring data quality',
        fix: 'Duplicate, missing, outdated, or biased data can make AI results less reliable.',
      },
      {
        trap: 'Confusing grounding with model training',
        fix: 'Grounding adds relevant CRM context to a prompt. It does not mean retraining the model on your data.',
      },
    ],
    readinessBenchmarks: [
      'You can explain predictive AI, generative AI, prompts, grounding, hallucinations, bias, and model drift in your own words.',
      'You can choose a trusted AI principle for a business scenario and explain why it fits.',
      'You can explain why clean CRM data matters when using AI features.',
      'You score at least 75% on timed practice sets and can finish within 70 minutes.',
    ],
    whoShouldSkip: [
      'You already work deeply with Agentforce configuration and want a more implementation-focused exam.',
      'You need an admin job credential first; ADM-201 carries stronger role-recognition for entry-level admin positions.',
    ],
    adjacentCerts: [
      {
        href: '/certifications/agentforce-specialist',
        label: 'Agentforce Specialist',
        guidance: 'Better if you configure agents, topics, actions, and prompt templates.',
      },
      {
        href: '/certifications/administrator',
        label: 'Salesforce Administrator',
        guidance: 'Better if your goal is a first Salesforce admin role rather than AI literacy.',
      },
    ],
  },
  certificationCard: {
    code: 'AI Associate',
    description:
      'The retired Salesforce AI Associate credential covered basic AI concepts and responsible data use in CRM. It was intended for people with different levels of AI experience.',
    examDetails: { questions: 40, passingScore: '65%', duration: '70 min', cost: '$75' },
    topics: [
      'AI Fundamentals',
      'Ethics & Responsibility',
      'Data in AI',
      'Einstein',
      'CRM & AI',
      'Governance',
      'Trust',
      'Best Practices',
    ],
  },
  keyConcepts: {
    h2: 'Salesforce AI Associate: Key Concepts for the Exam',
    blocks: [
      {
        heading: 'Predictive AI vs Generative AI',
        body: 'Predictive AI uses past data to estimate outcomes. Opportunity Scoring and Lead Scoring are examples. Generative AI creates content from prompts, such as a sales email or case summary. Practice choosing the right type for each use case.',
      },
      {
        heading: 'Einstein Trust Layer',
        body: "The Einstein Trust Layer provides safeguards for AI use, including data masking, secure retrieval, and audit features. Learn how these safeguards help protect customer data, and check the settings and terms that apply to your implementation.",
      },
      {
        heading: "Salesforce's Trusted AI Principles",
        body: 'Salesforce describes five trusted AI principles: Responsible, Accountable, Transparent, Empowering, and Inclusive. Learn how each applies to real decisions, such as protecting data, explaining predictions, and keeping people involved.',
      },
      {
        heading: 'Grounding and Hallucinations',
        body: 'Grounding adds relevant CRM data to a prompt so a response can use real customer context. Generative AI can still produce incorrect information, so review its output even when it is grounded.',
      },
      {
        heading: 'Data Quality and AI Bias',
        body: 'Duplicate, missing, or outdated data can lead to inaccurate predictions. Biased training data can also affect results. Review the data, test for unfair outcomes, and monitor the model after deployment.',
      },
    ],
  },
  scenarioTips: {
    h2: 'How to Pass the Salesforce AI Associate Exam',
    intro:
      "The retired AI Associate exam covered basic AI concepts rather than coding. Review AI ethics, trusted AI principles, and what Einstein features are used for.",
    blocks: [
      {
        heading: "Salesforce's Trusted AI Principles",
        body: 'Review the five principles: Responsible, Accountable, Transparent, Empowering, and Inclusive. Practice explaining what each means in a real situation.',
      },
      {
        heading: 'AI Terminology at a Glance',
        body: 'Learn how AI, machine learning, deep learning, and generative AI differ. Be able to explain training data, models, inference, and prompts without relying on complex math.',
      },
      {
        heading: 'Einstein Features & Use Cases',
        body: 'Review what Einstein Lead Scoring, Opportunity Insights, Einstein Bots, Einstein Search, Next Best Action, and Einstein Copilot do. Practice matching each feature to a business need.',
      },
      {
        heading: 'Bias, Fairness & Model Drift',
        body: 'Learn how biased training data can affect results and what model drift means. Review why people need to monitor models and update them when appropriate.',
      },
      {
        heading: 'Generative AI & Grounding',
        body: 'Learn what large language models do, why hallucinations are a risk, and how grounding can add CRM context to a response.',
      },
    ],
  },
  nextCertsAfter: {
    heading: 'Next Certifications After Associate',
    intro:
      'For current learning, consider these role-based certifications:',
    links: [
      { href: '/certifications/administrator', label: 'Platform Administrator (ADM-201)' },
      { href: '/certifications/developer-1', label: 'Platform Developer I' },
      { href: '/certifications/platform-foundations', label: 'Platform Foundations' },
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
  sampleQuestions: [
    {
      question: 'Who can benefit from the AI Associate credential?',
      options: [
        'Developers only',
        'People with AI knowledge, whether new to the subject or experienced',
        'Architects only',
        'Marketers only',
      ],
      correctAnswer: 1,
      explanation:
        'AI Associate is for people at different levels of AI knowledge, from beginners to experienced users.',
      whyWrong: [
        'The credential is open to people in different roles and does not focus on coding.',
        'You do not need to be an architect to study this material.',
        'The concepts apply to many roles, not just marketing.',
      ],
    },
    {
      question: 'What knowledge does the AI Associate certification check?',
      options: [
        'Coding skills alone',
        'Basic skills for using data ethically and responsibly with AI in CRM',
        'Reporting skills alone',
        'Integration skills alone',
      ],
      correctAnswer: 1,
      explanation:
        'It checks basic knowledge of responsible and ethical data use for AI in CRM.',
      whyWrong: [
        'The certification focused on concepts rather than programming.',
        'Reporting is a separate skill; this question asks about AI and responsible data use.',
        'Integration skills are outside the main focus of this credential.',
      ],
    },
    {
      question: 'What does the Einstein Trust Layer do in Salesforce?',
      options: [
        'Shows AI model performance on a reporting dashboard',
        'Provides built-in safeguards for customer data and AI prompts and responses',
        'Secures payment processing for Salesforce transactions',
        'Authenticates external AI model providers',
      ],
      correctAnswer: 1,
      explanation:
        'The Einstein Trust Layer provides data masking, secure data retrieval, toxicity detection, and audit trails to ensure AI outputs are safe, private, and traceable within the Salesforce platform.',
      whyWrong: [
        'A dashboard displays metrics; it does not provide the Trust Layer safeguards.',
        'The Trust Layer addresses AI privacy and safety, not payment processing.',
        'The Trust Layer is not a login protocol for model providers.',
      ],
    },
    {
      question: 'How do predictive AI and generative AI differ?',
      options: [
        'Predictive AI uses only numbers; generative AI uses only text',
        'Predictive AI estimates outcomes from past patterns; generative AI creates content from prompts',
        'They work the same way in CRM',
        'Generative AI always needs more historical data than predictive AI',
      ],
      correctAnswer: 1,
      explanation:
        'Predictive AI (e.g., Einstein Opportunity Scoring) uses historical data to forecast future outcomes. Generative AI (e.g., Einstein Copilot) generates new content from prompts and context.',
      whyWrong: [
        'Both types can use different kinds of data. The key difference here is prediction versus content generation.',
        'The two types serve different purposes in CRM.',
        'The difference is how the systems use data, not a universal rule about data volume.',
      ],
    },
    {
      question: "Which of Salesforce's trusted AI principles states that AI models should explain their outputs?",
      options: ['Accountability', 'Transparency', 'Fairness', 'Safety'],
      correctAnswer: 1,
      explanation:
        'Transparency means AI systems should be understandable, users and administrators should be able to see why the AI made a recommendation or generated a response.',
      whyWrong: [
        'Accountability concerns responsibility for outcomes; transparency concerns understandable results.',
        'Fairness concerns equitable treatment, rather than explaining a result.',
        'Safety concerns preventing harm, rather than explaining a result.',
      ],
    },
    {
      question: 'What does AI bias mean in CRM and machine learning?',
      options: [
        'A deliberate choice to make AI favor certain customers',
        'Unfair patterns in AI results, which can arise from unrepresentative training data',
        'A difference in response speed between AI and people',
        'An optional setting that changes model sensitivity',
      ],
      correctAnswer: 1,
      explanation:
        'Bias can arise when training data does not represent the people affected, causing results that systematically disadvantage some groups. Teams need to monitor and reduce bias.',
      whyWrong: [
        'Bias can arise unintentionally from data or design choices.',
        'Response speed is a performance measure, not the bias described here.',
        'Bias is a potential problem to monitor and reduce, not a feature setting.',
      ],
    },
    {
      question: 'Why does data quality matter for Salesforce AI results?',
      options: [
        'It matters for dashboards but not AI models',
        'Poor data can lead to inaccurate predictions, biased results, and unreliable recommendations',
        'A large amount of data automatically makes up for poor quality',
        'It affects processing speed but not accuracy',
      ],
      correctAnswer: 1,
      explanation:
        'AI models are only as good as the data they train on. Duplicate records, missing values, and inaccurate data produce unreliable AI outputs. Data governance and hygiene are prerequisites for trustworthy AI.',
      whyWrong: [
        'Poor data can affect AI results as well as reports.',
        'More data does not automatically fix poor data quality.',
        'Data quality can affect whether results are accurate and reliable.',
      ],
    },
    {
      question: 'What does grounding mean for generative AI on Salesforce?',
      options: [
        'Setting a word limit on AI responses',
        'Giving the model relevant CRM data so its response uses customer context',
        'Connecting the model to live internet sources',
        'Blocking the model from accessing Salesforce metadata',
      ],
      correctAnswer: 1,
      explanation:
        'Grounding adds relevant CRM data, such as accounts, cases, or opportunities, to a prompt. This gives the response customer context, although it does not guarantee accuracy.',
      whyWrong: [
        'A word limit changes response length; it does not add CRM context.',
        'This Salesforce example grounds the prompt in relevant CRM data.',
        'Grounding supplies relevant context rather than blocking metadata.',
      ],
    },
    {
      question: 'Which Salesforce AI principle says people remain responsible for AI decisions?',
      options: ['Transparency', 'Fairness', 'Accountability', 'Inclusivity'],
      correctAnswer: 2,
      explanation:
        'Accountability means assigning responsibility for AI outcomes and keeping people involved in oversight, especially for high-stakes decisions.',
      whyWrong: [
        'Transparency concerns understandable outputs; accountability concerns responsibility.',
        'Fairness concerns equitable treatment, not who is responsible for a decision.',
        'Inclusivity concerns the people affected by AI, not who is accountable.',
      ],
    },
    {
      question: 'What is a generative AI hallucination?',
      options: [
        'An intentionally creative piece of marketing copy',
        'A plausible response that contains incorrect or made-up information',
        'A visual error on the Salesforce AI dashboard',
        'A model deliberately hiding information from users',
      ],
      correctAnswer: 1,
      explanation:
        'A hallucination is plausible-sounding content that is inaccurate or invented. Grounding, careful prompts, and human review can help reduce these errors.',
      whyWrong: [
        'A creative response is not necessarily a factual error.',
        'A hallucination concerns the content, not a display error.',
        'A hallucination makes up information; it is not deliberate withholding.',
      ],
    },
    {
      question:
        'Which Einstein feature predicts how likely an opportunity is to close?',
      options: [
        'Einstein Discovery',
        'Einstein Opportunity Scoring',
        'Einstein Copilot',
        'Einstein Vision',
      ],
      correctAnswer: 1,
      explanation:
        'Einstein Opportunity Scoring uses past win and loss patterns to score opportunities, helping sales reps decide where to focus.',
      whyWrong: [
        'Einstein Discovery provides broader analytics; Opportunity Scoring scores opportunities.',
        'Einstein Copilot is an AI assistant, not the scoring feature described.',
        'Einstein Vision handles image recognition, not opportunity scoring.',
      ],
    },
    {
      question: 'How does a prompt template help with Salesforce generative AI?',
      options: [
        'It is a Flow that automatically updates records',
        'It combines reusable instructions with CRM data to guide AI responses',
        'It is an email template using Contact merge fields',
        'It is a permission set for access to Einstein features',
      ],
      correctAnswer: 1,
      explanation:
        'Prompt templates combine business instructions with CRM data, such as account names or case history, to help produce responses with relevant context.',
      whyWrong: [
        'A prompt template provides instructions for AI; it is not a record-update Flow.',
        'A prompt template can include CRM context, but it is not a Contact email template.',
        'A permission set controls access; a prompt template supplies instructions.',
      ],
    },
    {
      question: 'What does the Salesforce AI Associate exam mainly cover?',
      options: [
        'Writing Python scripts to build custom Salesforce AI models',
        'Basic AI concepts, responsible AI, and AI uses in Salesforce CRM',
        'Managing Einstein Analytics dashboards and CRM Analytics datasets',
        'Setting up MuleSoft connectors for external AI services',
      ],
      correctAnswer: 1,
      explanation:
        'The AI Associate focuses on foundational AI concepts, predictive vs generative AI, the Einstein Trust Layer, responsible AI principles, data quality, and how AI is applied across the Salesforce platform. No coding required.',
      whyWrong: [
        'The credential focuses on AI concepts rather than writing Python.',
        'Managing analytics dashboards is a separate skill.',
        'MuleSoft integration setup is outside the main focus of this credential.',
      ],
    },
    {
      question:
        'A company wants to protect customer data when it sends prompts to an external large language model. Which Salesforce feature helps?',
      options: [
        'Einstein Activity Capture, which stores AI interactions locally',
        'Einstein Trust Layer, which can mask personal data in prompts and supports zero data retention with model providers',
        'An Apex trigger that filters records before every AI request',
        'Field-Level Security, which blocks AI from reading sensitive fields',
      ],
      correctAnswer: 1,
      explanation:
        'The Einstein Trust Layer automatically masks PII in prompts sent to external LLMs and enforces a zero data retention agreement with model providers, ensuring customer data is not stored or used for training.',
      whyWrong: [
        'Einstein Activity Capture records activities such as emails and events; it does not provide this masking feature.',
        'A custom trigger is not the built-in AI safeguard described in the question.',
        'Field-Level Security controls field access; the Trust Layer provides safeguards for AI prompts.',
      ],
    },
    {
      question:
        'Which Salesforce AI feature uses past data to predict an opportunity’s chance of closing?',
      options: [
        'Einstein Copilot',
        'Einstein Opportunity Scoring (predictive AI)',
        'Prompt Builder',
        'Data Cloud only',
      ],
      correctAnswer: 1,
      explanation:
        'Einstein Opportunity Scoring uses historical data to estimate outcomes such as the chance of a win.',
      whyWrong: [
        'Einstein Copilot is an AI assistant, not the scoring feature described.',
        'Prompt Builder creates prompt templates; it does not score opportunities.',
        'Data Cloud provides a data platform; a scoring model is needed to predict a win.',
      ],
    },
  ],
}
