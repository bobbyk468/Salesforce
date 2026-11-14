import { serializeJsonLd } from '@/lib/serialize-json-ld'
import { getPracticeQuestionsForExam, hasImportedPracticeQuestions } from '@/lib/git-practice-questions'
import Link from '@/components/AppLink'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'

import PracticeQuestionsSection from '@/components/PracticeQuestionsSection'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertNamingLead from '@/components/CertNamingLead'
import CredentialSchema from '@/components/CredentialSchema'
import { getQuizJsonLd } from '@/lib/schema-data'
import { SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'

import ExamFeesSection from '@/components/ExamFeesSection'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import AgentforceArchitectureDiagram from '@/components/certifications/AgentforceArchitectureDiagram'
import AgentforceSpecialistMergedGuide from '@/components/certifications/AgentforceSpecialistMergedGuide'
import { markdown } from '@/lib/cert-page-spike/markdown-parser'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import CertInsightBlock from '@/components/CertInsightBlock'
import { WhoIsThisForSection, ExamDifficultySection, ExamFormatSection } from '@/components/CertAdminStyleSections'
import {
  getInitialPracticeQuestions,
  getVisiblePracticeQuestions,
} from '@/lib/practice-question-lite'
import { agentforceSpecialistContent } from '@/lib/cert-page-spike/agentforce-specialist-data'
import LastUpdated from '@/components/LastUpdated'
import CiteThisPage from '@/components/CiteThisPage'
import { RELEASE_YEAR } from '@/lib/release-data'

export default function AgentforceSpecialistCertBody({ slug }: { slug: string }) {
  const content = agentforceSpecialistContent
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = content.certificationCard
  const authoredQuestions = getPracticeQuestionsForExam(slug, content.sampleQuestions)
  const initialQuestions = getInitialPracticeQuestions(authoredQuestions)

  return (
    <div className="min-h-screen bg-pattern">
      <div data-critical-content className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={title} />
        <CredentialSchema
          certSlug={slug}
          certName={title}
          description={card.description}
          pageUrl={`/certifications/${slug}`}
          extraAlternateNames={['Agentforce Specialist', 'Salesforce Agentforce Specialist', 'Agent Force Specialist', 'Salesforce AI Specialist']}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              getQuizJsonLd(`${title} Practice Questions`, getVisiblePracticeQuestions(initialQuestions), SLUG_TO_EXAM_CODE[slug]),
            ),
          }}
        />
        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Independent study resource &bull; Check the current Salesforce exam guide before booking
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Agentforce Specialist (AI-201) Study Guide &amp; Practice Questions
          </h1>
          <CertNamingLead slug={slug} />
          <LastUpdated />
          <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
            {content.introLead.map((s, i) =>
              s.type === 'strong' ? <strong key={i}>{s.text}</strong> : s.type === 'text' ? <span key={i}>{s.text}</span> : null,
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5">
            <Link
              href="#practice-questions"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-salesforce-blue rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-base sm:text-lg w-full sm:w-auto border-2 border-white/90"
            >
              Start Free AI-201 Practice
            </Link>
            <Link
              href="#exam-weightage"
              className="hidden sm:flex items-center justify-center gap-2 px-6 py-3 bg-white/15 text-white rounded-lg font-semibold hover:bg-white/25 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto border border-white/30"
            >
              See Exam Weightage
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
            <span>Use this material alongside the current official exam guide.</span>
          </div>
        </section>

        <ContentPageAuthor />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <WhoIsThisForSection data={content.whoIsThisFor} />

            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

            <CertificationCard
              slug={slug}
              title={title}
              code={card.code}
              description={card.description}
              examDetails={card.examDetails}
              topics={card.topics}
              examSections={examSections}
              examWeightageHeading={getCertExamWeightageHeading(slug)}
              headingLevel="h2"
            />

            <p className="mt-3 text-sm text-gray-700">
              Already have section-level scores from a practice test? Run them through the{' '}
              <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
                Salesforce Exam Score Calculator
              </Link>{' '}
              to see where you stand against the 72% pass mark.
            </p>

            <ExamDifficultySection data={content.examDifficulty} />
            <ExamFormatSection slug={slug} data={content.examFormat} />

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

            {/* Key Concepts */}
            <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.keyConcepts.h2}</h2>
              <div className="space-y-4 text-sm text-gray-700">
                {content.keyConcepts.blocks.map((b) => (
                  <div key={b.heading}>
                    <h3 className="font-semibold text-gray-900 mb-1">{b.heading}</h3>
                    <p>{markdown(b.body)}</p>
                  </div>
                ))}
              </div>
            </div>

            <AgentforceArchitectureDiagram />

            <AgentforceSpecialistMergedGuide />

            <DifficultyHeatmap slug={slug} />

            <CertInsightBlock certSlug={slug} />

            {/* How to Pass */}
            <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.scenarioTips.h2}</h2>
              <p className="text-sm text-gray-600 mb-5">{content.scenarioTips.intro}</p>
              <div className="space-y-4 text-sm text-gray-700">
                {content.scenarioTips.blocks.map((b) => (
                  <div key={b.heading}>
                    <h3 className="font-semibold text-gray-900 mb-1">{b.heading}</h3>
                    <p>{markdown(b.body)}</p>
                  </div>
                ))}
              </div>
            </div>

            <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(initialQuestions.length, ". Select the requested number of answers, then check your selection.")}
              questions={initialQuestions}
            />

            <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
              <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">{content.nextCertsAfter.heading}</h2>
              <p className="text-sm text-gray-700 mb-2">{content.nextCertsAfter.intro}</p>
              <ul className="space-y-2 text-sm">
                {content.nextCertsAfter.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-salesforce-blue font-medium hover:underline">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="af-guides-heading">
              <h2 id="af-guides-heading" className="text-base font-semibold text-gray-900 mb-3">AI-201 Study Resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#section-deep-dives" className="text-salesforce-blue font-medium hover:underline">
                    All 6 Exam Sections in Detail →
                  </Link>
                  <span className="text-gray-600 ml-2">Review the topics and weighting for each section of the official outline.</span>
                </li>
                <li>
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    6-Week AI-201 Study Plan →
                  </Link>
                  <span className="text-gray-600 ml-2">Plan your reading and hands-on practice over six weeks.</span>
                </li>
                <li>
                  <Link href="#day-before" className="text-salesforce-blue font-medium hover:underline">
                    Day-Before Review Checklist →
                  </Link>
                  <span className="text-gray-600 ml-2">Review ten topics before exam day.</span>
                </li>
                <li>
                  <Link href="/agentforce-specialist-vs-ai-associate" className="text-salesforce-blue font-medium hover:underline">
                    Agentforce Specialist vs. Retired AI Associate →
                  </Link>
                  <span className="text-gray-600 ml-2">How this credential relates to the retired AI Associate exam.</span>
                </li>
                <li>
                  <Link href="/certifications/data-360-consultant" className="text-salesforce-blue font-medium hover:underline">
                    Data 360 Consultant →
                  </Link>
                  <span className="text-gray-600 ml-2">Go deeper on the grounding and retrieval side.</span>
                </li>
              </ul>
            </section>

            <CertPageFaq slug={slug} certTitle={title} />
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <CertTableOfContents
              sections={[
                { id: 'exam-prep', title: 'Exam Prep Content' },
                { id: 'key-concepts', title: 'Key Concepts' },
                { id: 'agentforce-architecture-overview', title: 'Architecture Overview' },
                { id: 'section-deep-dives', title: 'Exam Sections in Detail' },
                { id: 'study-plan', title: '6-Week Study Plan' },
                { id: 'scenario-rules', title: 'Scenario Decision Rules' },
                { id: 'common-mistakes', title: 'Concepts to Distinguish' },
                { id: 'day-before', title: 'Day-Before Review' },
                { id: 'scenario-tips', title: 'How to Prepare' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'related-certs', title: 'Related Certifications' },
              ]}
            />
          </aside>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <CiteThisPage certName={title} slug={slug} year={RELEASE_YEAR} />
      </div>
    </div>
  )
}
