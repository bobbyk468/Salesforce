import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import CertificationPageShell from '@/components/certifications/CertificationPageShell'
import {
  getCertH1Text,
  getCertExamWeightageHeading,
  getCertPracticeQuestionsHeading,
  getPracticeQuestionsIntro,
  slugToDisplayName,
} from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import type {
  AppBuilderSpikeBody,
  AssociateSpikeBody,
  CertSpikeBodyData,
  IntroSegment,
  LegacySpikeBody,
  MoreQuestionsParagraph,
  RichTextContent,
} from '@/lib/cert-page-spike/types'
import { parseMarkdown, renderMarkdownSegments } from '@/lib/cert-page-spike/markdown-parser'
import AdministratorCertBody from '@/components/certifications/AdministratorCertBody'
import Developer1CertBody from '@/components/certifications/Developer1CertBody'
import dynamic from 'next/dynamic'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import ReleaseNoteBadge from '@/components/certifications/ReleaseNoteBadge'
import type { ReactNode } from 'react'

const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  },
)

function renderIntroSegments(segments: IntroSegment[]): ReactNode {
  return segments.map((s, i) => {
    if (s.type === 'text') return <span key={i}>{s.text}</span>
    if (s.type === 'strong') return <strong key={i}>{s.text}</strong>
    if (s.type === 'link') {
      if (s.href.startsWith('mailto:')) {
        return (
          <a key={i} href={s.href} className="text-salesforce-blue font-medium hover:underline">
            {s.label}
          </a>
        )
      }
      return (
        <Link key={i} href={s.href} className="text-salesforce-blue font-medium hover:underline">
          {s.label}
        </Link>
      )
    }
    return null
  })
}

/**
 * Flexible renderer for RichTextContent (markdown strings or segment arrays).
 * Handles both legacy IntroSegment arrays and new markdown strings.
 * Makes it easy to gradually migrate content to markdown.
 */
function renderRichText(content: RichTextContent): ReactNode {
  if (typeof content === 'string') {
    // Markdown string
    const segments = parseMarkdown(content)
    return renderMarkdownSegments(segments)
  } else {
    // Legacy segment array
    return renderIntroSegments(content)
  }
}

function renderMoreQuestionParagraph(p: MoreQuestionsParagraph, key: string, isLast: boolean): ReactNode {
  const pClass = isLast
    ? 'text-gray-600 text-xs max-w-md mx-auto mb-6'
    : 'text-gray-600 text-sm max-w-md mx-auto mb-1'
  if (p.kind === 'text') {
    return (
      <p key={key} className={pClass}>
        {p.text}
      </p>
    )
  }
  return (
    <p key={key} className={pClass}>
      {renderIntroSegments(p.segments)}
    </p>
  )
}

function KeyConceptsSection({
  id,
  h2,
  blocks,
}: {
  id: string
  h2: string
  blocks: AssociateSpikeBody['keyConcepts']['blocks']
}) {
  return (
    <div id={id} className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2}</h2>
      <div className="space-y-4 text-sm text-gray-700">
        {blocks.map((b) => (
          <div key={b.heading}>
            <p className="font-semibold text-gray-900 mb-1">{b.heading}</p>
            {b.bodySegments?.length ? (
              <p>{renderIntroSegments(b.bodySegments)}</p>
            ) : (
              <p>{b.body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ScenarioTipsSection({
  h2,
  intro,
  blocks,
}: {
  h2: string
  intro: string
  blocks: AssociateSpikeBody['scenarioTips']['blocks']
}) {
  return (
    <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2}</h2>
      <p className="text-sm text-gray-600 mb-5">{intro}</p>
      <div className="space-y-4 text-sm text-gray-700">
        {blocks.map((b) => (
          <div key={b.heading}>
            <p className="font-semibold text-gray-900 mb-1">{b.heading}</p>
            {b.bodySegments?.length ? (
              <p>{renderIntroSegments(b.bodySegments)}</p>
            ) : (
              <p>{b.body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AssociateTemplate({ slug, body }: { slug: string; body: AssociateSpikeBody }) {
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = body.certificationCard

  return (
    <>
      <CertPageSeo slug={slug} certTitle={title} />
      {body.introLead?.length ? (
        <p className="text-sm text-gray-600 mb-6 max-w-7xl mx-auto px-4">{renderIntroSegments(body.introLead)}</p>
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <CertIntroParagraph slug={slug} />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4">
        <CertPageCta slug={slug} certTitle={title} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ReleaseNoteBadge />
      </div>

      <CertificationPageShell tocSections={body.tocSections}>
        <ExamFeesSection slug={slug} />

        <CertificationCard
          slug={slug}
          title={title}
          code={card.code}
          description={card.description}
          examDetails={card.examDetails}
          topics={card.topics}
          examSections={examSections}
          h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
        />

        <div id="exam-prep">
          <ExamPrepContent slug={slug} />
        </div>

        <KeyConceptsSection id="key-concepts" h2={body.keyConcepts.h2} blocks={body.keyConcepts.blocks} />

        <ScenarioTipsSection
          h2={body.scenarioTips.h2}
          intro={body.scenarioTips.intro}
          blocks={body.scenarioTips.blocks}
        />

        <DifficultyHeatmap slug={slug} />

        <PracticeQuestionsSection
          heading={getCertPracticeQuestionsHeading(slug)}
          introText={getPracticeQuestionsIntro(
            body.sampleQuestions.length,
            body.practiceQuestionsIntroSuffix,
          )}
          questions={body.sampleQuestions}
        />

        <FullQuestionBankCta slug={slug} certTitle={title} />

        {body.nextCertsAfter ? (
          <section
            className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6"
            aria-labelledby="next-certs-heading"
          >
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">
              {body.nextCertsAfter.heading}
            </h2>
            <p className="text-sm text-gray-700 mb-2">{body.nextCertsAfter.intro}</p>
            <ul className="space-y-2 text-sm">
              {body.nextCertsAfter.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-salesforce-blue font-medium hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div id="related-certs">
          <RelatedCertifications currentSlug={slug} />
        </div>

        <div id="faq">
          <CertPageFaq slug={slug} certTitle={title} />
        </div>
      </CertificationPageShell>
    </>
  )
}

function AppBuilderTemplate({ slug, body }: { slug: string; body: AppBuilderSpikeBody }) {
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = body.certificationCard

  return (
    <>
      <CertPageSeo slug={slug} certTitle={title} />
      <p className="text-sm text-gray-600 mb-6 max-w-7xl mx-auto px-4">{renderIntroSegments(body.introLead)}</p>
      <div className="max-w-7xl mx-auto px-4">
        <CertPageCta slug={slug} certTitle={title} examCode={body.ctaExamCode} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ReleaseNoteBadge />
      </div>

      <CertificationPageShell tocSections={body.tocSections}>
        <ExamFeesSection slug={slug} />

        <CertificationCard
          slug={slug}
          title={title}
          code={card.code}
          description={card.description}
          examDetails={card.examDetails}
          topics={card.topics}
          examSections={examSections}
          h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
        />

        <div id="exam-prep">
          <ExamPrepContent slug={slug} />
        </div>

        <ScenarioTipsSection
          h2={body.scenarioTips.h2}
          intro={body.scenarioTips.intro}
          blocks={body.scenarioTips.blocks}
        />

        <KeyConceptsSection id="key-concepts" h2={body.keyConcepts.h2} blocks={body.keyConcepts.blocks} />

        <DifficultyHeatmap slug={slug} />

        <PracticeQuestionsSection
          heading={getCertPracticeQuestionsHeading(slug)}
          introText={getPracticeQuestionsIntro(body.sampleQuestions.length, body.practiceIntroSuffix)}
          questions={body.sampleQuestions}
        />

        <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            {body.moreQuestionsBlock.h3}
          </h3>
          {body.moreQuestionsBlock.paragraphs.map((para, idx) =>
            renderMoreQuestionParagraph(
              para,
              `mq-${idx}`,
              idx === body.moreQuestionsBlock.paragraphs.length - 1,
            ),
          )}
          <a
            href={body.moreQuestionsBlock.ctaHref}
            className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
          >
            {body.moreQuestionsBlock.ctaLabel}
          </a>
        </div>

        <div id="related-certs">
          <RelatedCertifications currentSlug={slug} />
        </div>

        <section
          className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6"
          aria-labelledby={body.afterCertSection.id}
        >
          <h2 id={body.afterCertSection.id} className="text-base font-semibold text-gray-900 mb-3">
            {body.afterCertSection.heading}
          </h2>
          <p className="text-sm text-gray-700 mb-2">{body.afterCertSection.intro}</p>
          <ul className="space-y-2 text-sm">
            {body.afterCertSection.items.map((item) => (
              <li key={item.link.href}>
                {item.lead}
                <Link href={item.link.href} className="text-salesforce-blue font-medium hover:underline">
                  {item.link.label}
                </Link>
                {item.tail}
              </li>
            ))}
          </ul>
        </section>

        <div id="faq">
          <CertPageFaq slug={slug} certTitle={title} />
        </div>
      </CertificationPageShell>
    </>
  )
}

/** Legacy cert pages render from `[slug]/page.tsx` via dynamic import; never pass `template: 'legacy'` here. */
type CertBodyForTemplate = Exclude<CertSpikeBodyData, LegacySpikeBody>

type Props = {
  slug: string
  body: CertBodyForTemplate
}

/**
 * Shared certification page shell for the [slug] spike (and future migrations).
 * SEO helpers (metadata, FAQ JSON-LD, exam prep copy) stay keyed by `slug` in lib/*.
 *
 * NOTE: This switch statement is exhaustiveness-checked by TypeScript.
 * If a new template type is added to CertBodyForTemplate, TS will error here.
 */
export default function CertificationBodyTemplate({ slug, body }: Props) {
  const exhaustiveCheck = (x: never): never => {
    throw new Error(`Unknown cert body template: ${x}`)
  }

  switch (body.template) {
    case 'admin':
      return <AdministratorCertBody slug={slug} />
    case 'pd1':
      return <Developer1CertBody slug={slug} />
    case 'app-builder':
      return <AppBuilderTemplate slug={slug} body={body} />
    case 'associate':
      return <AssociateTemplate slug={slug} body={body} />
    default:
      return exhaustiveCheck(body)
  }
}
