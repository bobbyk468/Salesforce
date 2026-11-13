import type { PlatformFoundationsSpikeBody, SpikeSampleQuestion, WhoIsThisFor, ExamDifficulty, ExamFormat } from './types'
import platformFoundationsSampleQuestionsJson from './platform-foundations-sample-questions.json'

export const PLATFORM_FOUNDATIONS_SLUG = 'platform-foundations' as const

export const platformFoundationsSampleQuestions =
  platformFoundationsSampleQuestionsJson as SpikeSampleQuestion[]

export const platformFoundationsCertPageBody: PlatformFoundationsSpikeBody = {
  template: 'platform-foundations',
}

export const platformFoundationsWhoIsThisFor: WhoIsThisFor = {
  heading: 'Who is the Platform Foundations exam for?',
  personas: [
    {
      label: 'People new to Salesforce',
      description: 'You have used Salesforce for a few months and want to earn your first Salesforce credential.',
    },
    {
      label: 'People exploring a new career',
      description: 'You are considering CRM work and want to learn the basics employers expect.',
    },
    {
      label: 'Salesforce business users',
      description: 'You use Salesforce in sales, service, or operations and want to show what you know.',
    },
  ],
}

export const platformFoundationsExamDifficulty: ExamDifficulty = {
  heading: 'Is the Platform Foundations Exam Hard?',
  summary:
    'This exam covers many parts of Salesforce at an introductory level. You will need a broad overview of the data model, products, access, reports, automation, and the Salesforce ecosystem.',
  bullets: [
    '<strong>40 multiple-choice questions</strong> in 70 minutes.',
    '<strong>62% to pass</strong>, or about 25 correct answers out of 40. Check the current exam guide before booking.',
    '<strong>Many topics, basic detail.</strong> Expect a little about each area rather than deep questions on one topic.',
    '<strong>Learn the exact terms.</strong> Several answer choices may sound reasonable, so know what each feature is called and does.',
  ],
  passRateGuidance:
    'You are ready when you can describe the standard objects, explain the difference between Salesforce clouds, and tell profiles, roles, and sharing apart. Try to score at least 75% on two full practice tests.',
}

export const platformFoundationsExamFormat: ExamFormat = {
  heading: 'Platform Foundations Exam Format Explained',
  intro: 'You can take the exam online with a proctor or at a test centre. The questions cover a range of basic Salesforce topics.',
  scenarioPercent:
    'About one-third of the questions use short scenarios. They describe a business need and ask which object, cloud, or feature would help.',
  bestWayToPass: [
    '<strong>Learn the standard objects:</strong> Know what a Lead, Account, Contact, Opportunity, and Case represent.',
    '<strong>Compare the clouds:</strong> Sales Cloud supports sales work, Service Cloud supports customer service, and Marketing Cloud supports campaigns. Learn where Data 360 fits.',
    '<strong>Review access controls:</strong> Understand who can log in, which objects and fields they can use, and which records they can see.',
    '<strong>Know the ecosystem:</strong> Learn what AppExchange and Trailhead offer, and why teams use sandboxes before changing production.',
  ],
}
