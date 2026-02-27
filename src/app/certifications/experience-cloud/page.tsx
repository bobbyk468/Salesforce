import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'experience-cloud'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Experience Cloud template is best suited for a self-service portal where customers can submit and track cases?",
    options: ["Partner Central", "Customer Service", "Build Your Own", "Help Center"],
    correctAnswer: 1,
    explanation: "The Customer Service template is optimised for self-service portals — it includes pre-built components for case creation, case tracking, Knowledge article search, and community discussion.",
  },
  {
    question: "What is the purpose of Audience Targeting in Experience Cloud?",
    options: ["To restrict site access to authenticated users only", "To display different content, components, or page variations to different user groups based on defined criteria", "To track visitor analytics and report on site engagement", "To manage user authentication and single sign-on settings"],
    correctAnswer: 1,
    explanation: "Audience Targeting lets site builders define audiences (e.g., Gold Partners, UK Customers) based on criteria, then assign specific pages, components, or content variations to each audience — enabling personalised experiences without building multiple sites.",
  },
  {
    question: "Which sharing mechanism allows external users to access records associated with their Account or Contact in Experience Cloud?",
    options: ["Role Hierarchy", "External Account Hierarchy", "Sharing Sets", "Manual Sharing"],
    correctAnswer: 2,
    explanation: "Sharing Sets grant external users (Customer Community or Partner Community licence holders) access to records that match their Account or Contact via a defined access mapping — without requiring sharing rules or roles.",
  },
  {
    question: "What is required to enable case deflection in an Experience Cloud site?",
    options: ["Einstein Case Classification", "Knowledge Articles surfaced in the site search and case creation flow", "Web-to-Case configured in Setup", "Email-to-Case with routing rules"],
    correctAnswer: 1,
    explanation: "Case deflection presents Knowledge Articles to users before they submit a case — suggesting solutions that may resolve the issue without agent involvement. Knowledge must be enabled and articles published to the site for deflection to work.",
  },
  {
    question: "Which feature allows partners to register deals and track their pipeline in an Experience Cloud site?",
    options: ["Lead Conversion", "Partner Relationship Management", "Opportunity Management", "Deal Registration"],
    correctAnswer: 3,
    explanation: "Deal Registration allows channel partners to claim credit for potential deals by registering them through the partner portal. It prevents channel conflict and ensures partners receive appropriate credit when a deal closes.",
  },
  {
    question: "Which types of users can access an Experience Cloud site?",
    options: [
      "Only Salesforce internal users with a full Salesforce licence",
      "External users (customers, partners) with Community or Partner licences, and unauthenticated guest users without a login",
      "Only authenticated users — guest access is not supported in Experience Cloud",
      "Only users with the System Administrator profile"
    ],
    correctAnswer: 1,
    explanation: "Experience Cloud supports three user types: internal Salesforce users, external authenticated users (with Customer Community, Customer Community Plus, or Partner Community licences), and guest users who access the site without logging in. Each has different object and record access capabilities.",
  },
  {
    question: "What is the role of the Branding Editor in Experience Cloud?",
    options: [
      "A code editor for writing custom CSS and JavaScript for site pages",
      "A declarative tool that allows site administrators to configure colours, fonts, and logos without writing code",
      "An analytics panel that shows visitor demographics and engagement metrics",
      "A tool for managing brand assets uploaded to Salesforce Files"
    ],
    correctAnswer: 1,
    explanation: "The Branding Editor within Experience Builder allows non-technical admins to apply a consistent brand by setting primary colours, background colours, text fonts, and button styles — all via point-and-click configuration.",
  },
  {
    question: "Which Experience Cloud feature allows an organisation to manage and publish structured content across multiple channels including sites, emails, and apps?",
    options: [
      "Salesforce Knowledge",
      "Salesforce CMS (Content Management System)",
      "Chatter Groups",
      "Document Generation with Experience Cloud"
    ],
    correctAnswer: 1,
    explanation: "Salesforce CMS is a headless content management system that enables content teams to create and publish structured content (news articles, product descriptions, banners) and deliver it to Experience Cloud sites, Marketing Cloud, and external channels via APIs.",
  },
  {
    question: "What is Experience Builder Workspaces in Experience Cloud?",
    options: [
      "The admin panel used to configure, publish, and manage Experience Cloud sites from a central location in Setup",
      "A collaborative space where external users can work together on shared documents",
      "A reporting dashboard that shows site traffic and member engagement metrics",
      "A sandboxed environment for testing Experience Cloud customisations before publishing"
    ],
    correctAnswer: 0,
    explanation: "Workspaces is the central administration area for Experience Cloud sites — accessible from Setup. It contains Experience Builder (visual page editor), Administration (members, login, security), Moderation, Analytics, and Content management panels.",
  },
  {
    question: "What is a Lightning Bolt Solution in Experience Cloud?",
    options: [
      "A pre-built, packaged Experience Cloud site template with pages, themes, and components that can be installed from AppExchange and customised",
      "A Lightning Component that adds a live chat widget to an Experience Cloud site",
      "A Salesforce-managed integration that connects Experience Cloud with Slack channels",
      "A mobile app accelerator for generating native iOS and Android apps from a site"
    ],
    correctAnswer: 0,
    explanation: "Lightning Bolt Solutions are pre-built site packages on AppExchange created by Salesforce ISV partners. They bundle a complete site template — including pages, themes, flows, and custom components — that can be installed and configured for rapid deployment.",
  },
  {
    question: "How are Guest User permissions managed in Experience Cloud?",
    options: [
      "Guest users share the same profile as authenticated external users",
      "A dedicated Guest User profile controls what unauthenticated visitors can see and do — including object permissions, field visibility, and record access via guest user sharing rules",
      "Guest users are automatically assigned the Minimum Access - Salesforce profile",
      "Guest user access is managed exclusively through Experience Cloud Workspaces settings"
    ],
    correctAnswer: 1,
    explanation: "Each Experience Cloud site has a dedicated Guest User profile. Admins control which objects guest users can read, which fields are visible, and which records they can access via guest user sharing rules. Salesforce has tightened guest user security in recent releases — the exam tests which access types require authentication.",
  },
  {
    question: "Which feature in Experience Cloud allows site admins to show different content to logged-in members vs. unauthenticated guest visitors?",
    options: [
      "Record Detail Page Layouts",
      "Audience-Based Visibility rules applied to components or pages",
      "Profile-Based Page Assignments",
      "Site.com Studio Component Visibility"
    ],
    correctAnswer: 1,
    explanation: "Audience-Based Visibility in Experience Builder allows admins to define when a component or page is visible — such as showing a login prompt to guests and a personalised dashboard to authenticated members. Audiences can be based on login status, user attributes, or record data.",
  },
  {
    question: "A company wants to allow its reseller partners to update shared Opportunity records directly from an Experience Cloud partner portal. What configuration is required?",
    options: [
      "Give partners full Salesforce CRM licences to access the standard Sales Console",
      "Assign partners a Partner Community licence and configure sharing rules or an External Account Hierarchy to grant access to the relevant Opportunity records",
      "Install a custom Apex trigger to sync opportunity updates from the portal to the internal org",
      "Enable the Opportunity object for guest user access in the site settings"
    ],
    correctAnswer: 1,
    explanation: "Partner Community licences enable external partner users to access Salesforce objects including Opportunities. Sharing must be configured — via sharing rules, sharing sets, or External Account Hierarchy — to grant access to the specific records. Guest user access cannot be used for write operations on CRM records.",
  },
  {
    question: "Which reporting feature in Experience Cloud allows site members to view reports and dashboards based on their own data?",
    options: [
      "Einstein Analytics embedded in the site via CRM Analytics iFrame",
      "Reports and Dashboards made accessible to external users via sharing settings and the Reports tab in the site",
      "Chatter Feed analytics showing individual post engagement",
      "Salesforce CMS publishing metrics in the content management panel"
    ],
    correctAnswer: 1,
    explanation: "Standard Salesforce Reports and Dashboards can be made accessible in Experience Cloud sites by adding the Reports tab and configuring sharing so external users see only their own data. For more advanced analytics, CRM Analytics can be embedded within site pages.",
  },
  {
    question: "What is the purpose of Sharing Sets in Experience Cloud?",
    options: ["To share dashboards only", "To grant external users access to records based on their associated Account or Contact", "To share files with internal users", "To configure site branding"],
    correctAnswer: 1,
    explanation: "Sharing Sets grant record access to external users based on the Account or Contact linked to their community user record."
  },
]

export default function ExperienceCloudPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
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
            code="Experience Cloud"
            description="The Experience Cloud Consultant certification validates your expertise in designing and implementing Experience Cloud sites for customers, partners, and employees."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Experience Cloud Basics",
              "Templates & Themes",
              "Sharing & Visibility",
              "Content Management",
              "Personalization",
              "Site Administration",
              "Community Engagement",
              "Partner Management",
              "Analytics",
              "Integration"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Site Templates and Their Use Cases</p>
                <p>Salesforce provides purpose-built templates: <strong>Customer Service</strong> for self-service portals with case management and Knowledge, <strong>Partner Central</strong> for channel partner portals with deal registration and lead distribution, <strong>Help Center</strong> for knowledge-first sites without case creation, and <strong>Build Your Own</strong> for maximum flexibility. The exam frequently presents a business requirement and asks which template fits — know the key differentiators of each.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sharing Model for External Users</p>
                <p>External user record access follows a different model than internal users. <strong>Sharing Sets</strong> grant access to records matching the user&apos;s Account or Contact — without roles or sharing rules. <strong>External Account Hierarchy</strong> allows partner users to see records owned by users below them in the partner account hierarchy. <strong>Sharing Rules</strong> extend access beyond these mechanisms. Guest users get access only through explicit guest user sharing rules. Know which mechanism to apply for each access scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Licensing: Customer, Partner, and Guest Users</p>
                <p>Experience Cloud supports multiple external user licence types: <strong>Customer Community</strong> (limited access, no roles), <strong>Customer Community Plus</strong> (supports roles and advanced sharing), and <strong>Partner Community</strong> (full CRM access for channel partners including Leads, Opportunities, and Campaigns). <strong>Guest Users</strong> have no licence and access via the dedicated Guest User profile. Licence type determines which objects and features are available — the exam tests licence selection for given scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Audience Targeting and Personalisation</p>
                <p>Audiences define groups of users based on criteria — login status, profile, record field values, or geography. Components and pages can be shown or hidden based on audience membership. This enables a single site to serve multiple user types with different content without building multiple sites. The exam tests how to configure audiences and how visibility rules interact with page-level settings.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce CMS and Knowledge for Content</p>
                <p><strong>Salesforce Knowledge</strong> stores articles for FAQ, troubleshooting, and procedure content — surfaced in search and case creation for deflection. <strong>Salesforce CMS</strong> is a headless content management system for structured marketing content (banners, news, product pages) delivered across channels. Know when to use Knowledge (support content, case deflection) vs CMS (marketing content, multi-channel delivery) and how each is configured in Experience Cloud.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
