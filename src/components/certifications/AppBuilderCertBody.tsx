import { serializeJsonLd } from '@/lib/serialize-json-ld'
import { getPracticeQuestionsForExam, hasImportedPracticeQuestions } from '@/lib/git-practice-questions'
import Link from '@/components/AppLink'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'

import PracticeQuestionsSection from '@/components/PracticeQuestionsSection'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CredentialSchema from '@/components/CredentialSchema'
import ExpertInsightCallout from '@/components/ExpertInsightCallout'
import { getQuizJsonLd } from '@/lib/schema-data'
import { SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'

import ExamFeesSection from '@/components/ExamFeesSection'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import FlowVsApexDiagram from '@/components/certifications/FlowVsApexDiagram'
import AppBuilderMergedGuide from '@/components/certifications/AppBuilderMergedGuide'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import CertInsightBlock from '@/components/CertInsightBlock'
import { WhoIsThisForSection, ExamDifficultySection, ExamFormatSection } from '@/components/CertAdminStyleSections'
import {
  getInitialPracticeQuestions,
  getVisiblePracticeQuestions,
} from '@/lib/practice-question-lite'
import { appBuilderCertPageBody } from '@/lib/cert-page-spike/app-builder-data'
import LastUpdated from '@/components/LastUpdated'
import CiteThisPage from '@/components/CiteThisPage'
import { RELEASE_YEAR } from '@/lib/release-data'

export default function AppBuilderCertBody({ slug }: { slug: string }) {
  const body = appBuilderCertPageBody
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = body.certificationCard
  const authoredQuestions = getPracticeQuestionsForExam(slug, body.sampleQuestions)
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
          extraAlternateNames={['Platform App Builder', 'Salesforce Platform App Builder', 'Plat-Admn-202', 'DEV-402', 'CRT-402']}
          extraIdentifiers={[
            { propertyID: 'Exam Code', value: 'Plat-Admn-202' },
            { propertyID: 'Legacy Exam Code', value: 'DEV-402' },
            { propertyID: 'Official Prep Course Code', value: 'CRT-402' },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              getQuizJsonLd(`${title} Practice Questions`, getVisiblePracticeQuestions(initialQuestions), SLUG_TO_EXAM_CODE[slug]),
            ),
          }}
        />
        <p className="text-sm text-gray-600 mb-6">
          New to Salesforce admin? Our{' '}
          <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Administrator (ADM-201) exam prep
          </Link>{' '}
          is the usual first step. See our{' '}
          <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
            ADM-201 vs App Builder comparison
          </Link>{' '}
          to choose the right certification order. Ready to book? The exam tips and study plan are further down this page.
        </p>

        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Independent study resource &bull; Check the current Salesforce exam guide before booking
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Platform App Builder (Plat-Admn-202 / DEV-402) Exam Questions &amp; Study Guide
          </h1>
          <LastUpdated />
          <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
            Prepare with free Platform App Builder practice questions, plus a study plan and section weightage. No sign-up required.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-2xl mb-6">
            Platform App Builder is listed on Trailhead Academy under the exam code Plat-Admn-202. It is still widely known by its earlier code, DEV-402, and by CRT-402, the code of the certification prep course. All three refer to the same Salesforce Certified Platform App Builder credential.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5">
            <Link
              href="#practice-questions"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-salesforce-blue rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-base sm:text-lg w-full sm:w-auto border-2 border-white/90"
            >
              Start Free DEV-402 Practice
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
            {body.whoIsThisFor && <WhoIsThisForSection data={body.whoIsThisFor} />}

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
              to see where you stand against the 73% pass mark.
            </p>

            {body.examDifficulty && <ExamDifficultySection data={body.examDifficulty} />}
            {body.examFormat && <ExamFormatSection slug={slug} data={body.examFormat} />}

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

            {body.expertInsight && <ExpertInsightCallout insight={body.expertInsight} />}

            {body.keyConcepts && (
              <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{body.keyConcepts.h2}</h2>
                <div className="space-y-4 text-sm text-gray-700">
                  {body.keyConcepts.blocks.map((b) => (
                    <div key={b.heading}>
                      <h3 className="font-semibold text-gray-900 mb-1">{b.heading}</h3>
                      <p>{b.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <FlowVsApexDiagram />

            <AppBuilderMergedGuide />

            <DifficultyHeatmap slug={slug} />

            <CertInsightBlock certSlug={slug} />

            {body.scenarioTips && (
              <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{body.scenarioTips.h2}</h2>
                <p className="text-sm text-gray-600 mb-5">{body.scenarioTips.intro}</p>
                <div className="space-y-4 text-sm text-gray-700">
                  {body.scenarioTips.blocks.map((b) => (
                    <div key={b.heading}>
                      <h3 className="font-semibold text-gray-900 mb-1">{b.heading}</h3>
                      <p>{b.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(initialQuestions.length, ". Select the requested number of answers, then check your selection.")}
              questions={initialQuestions}
            />

            <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Request Full DEV-402 Mock Exams &amp; Study Plan
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
                Use practice exams to check your readiness. A personal target of <strong>85%+</strong> on full mocks can help you identify areas to revisit.
              </p>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
                Leave time after your practice tests to review the topics you missed before your exam.
              </p>
              <p className="text-gray-600 text-xs max-w-md mx-auto mb-6">
                Contact us for more information on our full 60-question mock exams and a personalized study plan. Use the{' '}
                <Link href="/contact#contact-form" className="text-salesforce-blue font-medium hover:underline">
                  contact form
                </Link>{' '}
                and mention DEV-402.
              </p>
              <a
                href="/contact#exam=DEV-402"
                className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
              >
                Request Mock Exams &amp; Study Plan
              </a>
            </div>

            <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="app-builder-next-steps-heading">
              <h2 id="app-builder-next-steps-heading" className="text-base font-semibold text-gray-900 mb-3">After App Builder: Where to Go Next</h2>
              <p className="text-sm text-gray-700 mb-2">
                After App Builder, consider a consultant credential that matches the work you enjoy. Your next step can depend on whether you build solutions for sales, service, or Experience Cloud users.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  For sales-heavy orgs, the natural next step is{' '}
                  <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">
                    Sales Cloud Consultant
                  </Link>.
                </li>
                <li>
                  If you spend most of your time on support queues and case workflows, look at{' '}
                  <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">
                    Service Cloud Consultant
                  </Link>.
                </li>
                <li>
                  Working with Experience Cloud sites or portals? The{' '}
                  <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">
                    Experience Cloud Consultant
                  </Link>{' '}
                  certification is a strong follow-on once you&apos;re comfortable with App Builder page design.
                </li>
                <li>
                  Want to go deeper on the admin track instead?{' '}
                  <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
                    Advanced Administrator
                  </Link>{' '}
                  covers complex security, governance, and auditing scenarios.
                </li>
              </ul>
            </section>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="app-builder-guides-heading">
              <h2 id="app-builder-guides-heading" className="text-base font-semibold text-gray-900 mb-3">DEV-402 Study Resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#section-deep-dives" className="text-salesforce-blue font-medium hover:underline">
                    All 5 Exam Sections in Detail →
                  </Link>
                  <span className="text-gray-600 ml-2">Review the topics and weighting for each section of the official outline.</span>
                </li>
                <li>
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    4-Week DEV-402 Study Plan →
                  </Link>
                  <span className="text-gray-600 ml-2">Plan your reading and hands-on practice over four weeks.</span>
                </li>
                <li>
                  <Link href="#day-before" className="text-salesforce-blue font-medium hover:underline">
                    Day-Before Review Checklist →
                  </Link>
                  <span className="text-gray-600 ml-2">Review ten topics before exam day.</span>
                </li>
                <li>
                  <Link href="/app-builder-vs-developer-i" className="text-salesforce-blue font-medium hover:underline">
                    App Builder vs Platform Developer I →
                  </Link>
                  <span className="text-gray-600 ml-2">Compare the two exams and decide which one fits your goals first.</span>
                </li>
                <li>
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder →
                  </Link>
                  <span className="text-gray-600 ml-2">See how these two exams compare before you book.</span>
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
                { id: 'section-deep-dives', title: 'Exam Sections in Detail' },
                { id: 'study-plan', title: '4-Week Study Plan' },
                { id: 'scenario-rules', title: 'Scenario Decision Rules' },
                { id: 'common-mistakes', title: 'Common Mistakes' },
                { id: 'day-before', title: 'Day-Before Review' },
                { id: 'scenario-tips', title: 'How to Pass' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'more-questions', title: 'Get More Questions' },
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
