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

/**
 * ?cert=<slug> pre-selects an exam, so a blog post about one certification
 * can embed the calculator already set to it.
 *
 * Resolved on the server rather than from window.location on the client:
 * the selection is then in the first HTML the iframe paints, with no flash
 * of the wrong exam and no hydration mismatch. Reading searchParams makes
 * the route render on demand, which is fine — worker.mjs keys its edge cache
 * on the full URL, so each ?cert= value caches as its own object.
 */
export default async function ScoreCalculatorEmbedPage({
  searchParams,
}: {
  searchParams: Promise<{ cert?: string }>
}) {
  const { cert } = await searchParams
  const exams = getCalculatorExams()
  const initialSlug = exams.some((e) => e.slug === cert) ? cert : undefined
  return <ScoreCalculatorEmbedBody exams={exams} initialSlug={initialSlug} />
}
