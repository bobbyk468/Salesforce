import type { Metadata } from 'next'
import ScoreCalculatorEmbedBody from '@/components/ScoreCalculatorEmbedBody'
import { getCalculatorExams } from '@/lib/score-calculator-data'

const siteUrl = 'https://www.trailblazeprep.com'

export const metadata: Metadata = {
  title: { absolute: 'Salesforce Exam Score Calculator (embed)' },
  description:
    'Embeddable version of the Salesforce exam score calculator, for use inside an iframe on another site.',
  alternates: { canonical: `${siteUrl}/tools/score-calculator` },
  /*
    noindex, follow. The embed is the same tool as /tools/score-calculator
    with the page furniture removed, so indexing it would put a thinner
    duplicate of a ranking page into the index. follow is kept so the
    attribution links are still crawled.
  */
  robots: { index: false, follow: true },
}

export default function ScoreCalculatorEmbedPage() {
  return <ScoreCalculatorEmbedBody exams={getCalculatorExams()} />
}
