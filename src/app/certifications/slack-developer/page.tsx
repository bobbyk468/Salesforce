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
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import Link from 'next/link'

import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Slack Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Slack API: Bolt Framework and Authentication</p>
                <p>The Bolt framework (available for Node.js, Python, Java) simplifies Slack app development by handling OAuth, event dispatching, and middleware. App authentication: Bot token (scoped to workspace, long-lived) vs User token (acts on behalf of a specific user). OAuth 2.0 installation flow for distributing apps to other workspaces. Socket Mode enables the app to receive events without a public HTTP endpoint — useful for development and firewalled environments. HTTP mode requires a public URL and event subscription verification.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Slack Surfaces: Home Tab, Messages, and Modals</p>
                <p>Home Tab: a persistent, personalised app canvas shown when the user clicks the app in the sidebar — updated via views.publish API. Messages: posted in channels or DMs — can include Block Kit UI elements (buttons, select menus, input fields) for interactivity. Modals: triggered by button clicks or slash commands — multi-step forms with view.push/update/open. Each surface has different use cases: Home Tab for dashboards, Messages for notifications with actions, Modals for data entry. The exam tests which surface to use for a given app interaction pattern.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Block Kit: Interactive UI Components</p>
                <p>Block Kit is Slack&apos;s UI framework. Block types: Section (text + accessory), Actions (buttons, select menus), Input (form fields), Context (supporting text/images), Header (bold title), Divider. Elements: button (click actions), static_select (dropdown), datepicker, plain_text_input. Block Kit Builder (online tool) lets developers compose and preview UI. Interactivity payloads (block_actions for button clicks, view_submission for modal forms) are sent to the app&apos;s interaction endpoint. The exam tests composing Block Kit payloads for common app UIs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Events API and Slash Commands</p>
                <p>Events API delivers workspace events (messages posted, users joining, reactions added) to the app&apos;s endpoint. Subscribe to specific event types to minimise payload volume. 3-second response requirement: acknowledge the event with HTTP 200 immediately, process asynchronously if the task takes longer. Slash Commands provide custom commands (/myapp action) — configured in app settings, delivered as HTTP POST to the command endpoint. The exam tests how to subscribe to the correct events and how to handle slash command payloads.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security: Token Management and Signature Verification</p>
                <p>Never expose bot tokens in client-side code or version control. Store tokens in environment variables or secrets management systems. Slack signs all inbound payloads with a signing secret — verify the X-Slack-Signature header using HMAC-SHA256 to prevent spoofed requests. Token rotation: OAuth tokens can be rotated programmatically. App scopes should follow least privilege — request only the OAuth scopes the app actually needs. The exam tests signature verification implementation and token security best practices.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Slack Developer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Slack Developer exam tests technical development skills for building Slack apps. Focus on the Slack API, Bolt framework, event handling, and building interactive workflows using Block Kit.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Bolt Framework Architecture</p>
                <p>Know how to build Slack apps using the Bolt framework (Node.js, Python, Java): app initialization, event handling, action handling, shortcut handling, and how OAuth 2.0 app installation works.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Block Kit UI Framework</p>
                <p>Know how to build rich interactive messages using Block Kit: block types (section, actions, input, context), element types (button, select, date picker, text input), and how to use Block Kit Builder for prototyping.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Event API &amp; Interactivity</p>
                <p>Know how Slack&apos;s Event API delivers events to your app (message events, reaction events, app_mention), how to configure event subscriptions, and how to respond to interactive components (modals, actions).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Workflow Steps</p>
                <p>Know how to build custom Workflow Steps using the workflow_step_edit and workflow_step_execute events. Understand how to create the configuration modal and process step execution callbacks.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">App Distribution &amp; Security</p>
                <p>Know how to distribute Slack apps through the Slack App Directory, implement scoped OAuth for multi-workspace apps, and security best practices: token storage, request signature verification, and HTTPS requirements.</p>
              </div>
            </div>
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
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
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
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
