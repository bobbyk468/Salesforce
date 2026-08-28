import type { SampleQuestion } from '@/components/PracticeQuestionsSection'

interface CertQuizSchemaProps {
  certTitle: string
  slug: string
  questions: SampleQuestion[]
}

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export default function CertQuizSchema({ certTitle, slug, questions }: CertQuizSchemaProps) {
  if (!questions?.length) return null

  const quizJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: `${certTitle} Practice Questions`,
    about: {
      '@type': 'Thing',
      name: certTitle,
    },
    educationalLevel: 'professional',
    assesses: certTitle,
    url: `${siteBaseUrl}/certifications/${slug}#practice-questions`,
    hasPart: questions.slice(0, 3).map((q, i) => ({
      '@type': 'Question',
      name: q.question,
      position: i + 1,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.options[q.correctAnswer],
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }}
    />
  )
}
