import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import Link from 'next/link'

const slug = 'slack-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Slack API is used to build interactive components like buttons and menus?",
    options: ["REST API only", "Block Kit", "Web API", "Events API only"],
    correctAnswer: 1,
    explanation: "Block Kit is the UI framework for designing interactive message surfaces in Slack apps.",
  },
  {
    question: "What is the purpose of Slack App Manifests?",
    options: ["To deploy to Heroku", "To define app configuration in YAML", "To send emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "App Manifests allow you to define Slack app configuration (scopes, events, shortcuts) in YAML.",
  },
  {
    question: "Which Slack event type is fired when a user joins a channel?",
    options: ["message", "member_joined_channel", "app_mention", "reaction_added"],
    correctAnswer: 1,
    explanation: "member_joined_channel is the event emitted when a user joins a public or private channel.",
  },
  {
    question: "What does the Slack Web API method chat.postMessage do?",
    options: ["Delete a message", "Post a message to a channel", "Create a channel", "List users"],
    correctAnswer: 1,
    explanation: "chat.postMessage sends a message to a channel, user DM, or other conversation.",
  },
  {
    question: "Which OAuth scope is required to post messages as your app?",
    options: ["users:read", "chat:write", "channels:history", "im:read"],
    correctAnswer: 1,
    explanation: "chat:write allows the app to post messages to channels and conversations.",
  },
  {
    question: "What is the Bolt Framework in Slack app development?",
    options: [
      "A deployment pipeline for Slack apps",
      "Slack's official framework for building apps in JavaScript, Python, and Java with built-in handlers for events, actions, and shortcuts",
      "A database management tool for Slack data",
      "A UI design kit for Block Kit layouts"
    ],
    correctAnswer: 1,
    explanation: "Bolt abstracts Slack API complexity, providing a framework with built-in handling for events, actions, shortcuts, and commands.",
  },
  {
    question: "How do you register and handle a slash command in a Slack app?",
    options: [
      "Define it in the app's package.json file",
      "Register it in the App Manifest or App Settings under Slash Commands, then handle the incoming POST payload in your app server",
      "Add it directly to a Block Kit message surface",
      "Use only the Slack Web API chat.postMessage method"
    ],
    correctAnswer: 1,
    explanation: "Slash commands are registered in App Settings (or App Manifest), and your server must respond to the incoming POST payload within 3 seconds.",
  },
  {
    question: "What Slack API method is used to open a modal in response to a user interaction?",
    options: ["chat.postMessage", "views.open", "conversations.open", "users.info"],
    correctAnswer: 1,
    explanation: "views.open opens a modal dialog using a trigger_id obtained from an interaction payload. The modal must be opened within 3 seconds of the trigger.",
  },
  {
    question: "What is Socket Mode in Slack apps and when should you use it?",
    options: [
      "A real-time database sync method for Slack data",
      "A connection method that delivers event payloads over a WebSocket, allowing apps to receive events without exposing a public HTTP endpoint",
      "An OAuth token type for machine-to-machine apps",
      "A Block Kit interactive element type"
    ],
    correctAnswer: 1,
    explanation: "Socket Mode is ideal for development or firewalled environments — it eliminates the need for a publicly accessible HTTPS endpoint to receive events.",
  },
  {
    question: "What is an Incoming Webhook in Slack?",
    options: [
      "A method for receiving messages sent to your app from Slack users",
      "A simple URL that accepts HTTP POST requests to post messages to a specific Slack channel, without needing a full app installation",
      "A Block Kit element for embedding external content",
      "An event fired when a webhook URL is triggered from outside Slack"
    ],
    correctAnswer: 1,
    explanation: "Incoming Webhooks provide a pre-configured URL that accepts HTTP POST requests to post messages to a channel — useful for notifications from external systems.",
  },
  {
    question: "What is the difference between a Global Shortcut and a Message Shortcut in Slack?",
    options: [
      "They are identical in functionality and scope",
      "Global Shortcuts are accessible from the shortcut menu anywhere in Slack; Message Shortcuts appear in the context menu of a specific message",
      "Message Shortcuts require workspace admin approval before use",
      "Global Shortcuts only work in direct messages, not channels"
    ],
    correctAnswer: 1,
    explanation: "Global Shortcuts launch from the lightning bolt icon anywhere in Slack; Message Shortcuts appear when right-clicking a specific message.",
  },
  {
    question: "How does Slack enforce API rate limits and what happens when they are exceeded?",
    options: [
      "There are no rate limits — all methods are unlimited",
      "Methods have tiered rate limits per minute per workspace (Tier 1–4). Exceeding limits returns HTTP 429 with a Retry-After header indicating when to retry",
      "All methods share a single fixed limit of 100 requests per hour",
      "Rate limits only apply to Incoming Webhooks, not Web API methods"
    ],
    correctAnswer: 1,
    explanation: "Slack Web API methods have tiered rate limits (Tier 1–4). The 429 response includes a Retry-After header — apps must back off and retry after the specified delay.",
  },
  {
    question: "What is the App Home tab in a Slack app?",
    options: [
      "A Slack channel automatically created for app notifications",
      "A dedicated, persistent space where an app displays a customised view for each user, built with Block Kit via views.publish",
      "The app's settings page in the Slack App Directory",
      "A tab for managing the app's channel memberships"
    ],
    correctAnswer: 1,
    explanation: "The App Home tab provides each user a private, personalised space. Your app controls the content by calling views.publish with the user ID and Block Kit layout.",
  },
  {
    question: "How must a Slack app respond to an interactive component action such as a button click?",
    options: [
      "Send a new message to the channel immediately",
      "Acknowledge the action within 3 seconds with HTTP 200, then perform any async processing and update the message or open a modal",
      "Call chat.delete to remove the original message containing the button",
      "Reply in the message thread only, without acknowledging the payload"
    ],
    correctAnswer: 1,
    explanation: "Slack requires acknowledgement within 3 seconds to avoid showing a timeout error to the user. Use ack() or respond() first, then process asynchronously.",
  },
  {
    question: "Which Slack API delivers event notifications to your app when subscribed events occur in a workspace?",
    options: ["Web API", "Events API", "Block Kit API", "SCIM Provisioning API"],
    correctAnswer: 1,
    explanation: "The Events API sends event payloads to your app's endpoint (or Socket Mode connection) whenever a subscribed event fires — message posted, reaction added, member joined, etc.",
  },
]

export default function SlackDeveloperPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <p className="text-sm text-gray-600 mb-6">
        If you are managing Slack workspaces rather than building apps, start with{' '}
        <Link href="/certifications/slack-administrator" className="text-salesforce-blue font-medium hover:underline">
          Slack Administrator prep
        </Link>. For client-facing implementation paths, explore{' '}
        <Link href="/certifications/slack-consultant" className="text-salesforce-blue font-medium hover:underline">
          Slack Consultant prep
        </Link>.
        {' '}Ready to book? Read our{' '}
        <Link href="/slack-developer-exam-tips" className="text-salesforce-blue font-medium hover:underline">Slack Developer exam tips and 4-week study plan</Link>.
      </p>
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Slack Developer"
            description="Certified Slack Developers have deep knowledge of the Slack Platform and Slack's APIs and possess the knowledge, skills, and experience to design and build custom applications within Slack."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '105 min', cost: '$200' }}
            topics={['Slack APIs', 'Block Kit', 'Events', 'Interactivity', 'OAuth', 'Bolt Framework', 'App Manifests', 'Security', 'Testing', 'Deployment']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
          </div>
          
                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* FAQ section - rendered after H1 for proper SEO structure */}
          <div id="faq">
            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
