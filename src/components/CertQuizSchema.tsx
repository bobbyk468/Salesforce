import type { SampleQuestion } from '@/components/PracticeQuestionsSection'
import { getVisiblePracticeQuestions } from '@/lib/practice-question-lite'
import { getQuizJsonLd } from '@/lib/schema-data'
import { serializeJsonLd } from '@/lib/serialize-json-ld'

interface CertQuizSchemaProps {
  certTitle: string
  slug: string
  questions: SampleQuestion[]
}

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export default function CertQuizSchema({ certTitle, slug, questions }: CertQuizSchemaProps) {
  if (!questions?.length) return null

  const quizJsonLd = {
    ...getQuizJsonLd(`${certTitle} Practice Questions`, getVisiblePracticeQuestions(questions)),
    educationalLevel: 'professional',
    assesses: certTitle,
    url: `${siteBaseUrl}/certifications/${slug}#practice-questions`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(quizJsonLd) }}
    />
  )
}
