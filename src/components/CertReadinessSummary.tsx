import { getCertDifficulty, getExamLogistics, slugToDisplayName, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

const LABELS = {
  easy: { label: 'Entry-level', prep: '2-4 weeks', target: '80%+' },
  medium: { label: 'Moderate', prep: '4-8 weeks', target: '80%+' },
  hard: { label: 'Challenging', prep: '8-16 weeks', target: '85%+' },
} as const

export default function CertReadinessSummary({ slug }: { slug: string }) {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const logistics = getExamLogistics(slug)
  const config = LABELS[getCertDifficulty(slug)]
  const displayName = examCode ? `${certName} (${examCode})` : certName

  return (
    <section id="is-this-exam-hard" className="mt-8 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">Is the {displayName} Exam Hard?</h2>
      <div className="grid gap-3 sm:grid-cols-3 text-sm">
        <p className="rounded-lg bg-amber-50 p-3 text-gray-700">
          <strong className="block text-gray-900">Difficulty</strong>
          {config.label}; plan about {config.prep} of focused prep.
        </p>
        <p className="rounded-lg bg-blue-50 p-3 text-gray-700">
          <strong className="block text-gray-900">Book When Ready</strong>
          Score {config.target} on three timed mocks before scheduling.
        </p>
        <p className="rounded-lg bg-emerald-50 p-3 text-gray-700">
          <strong className="block text-gray-900">Use Practice, Not Dumps</strong>
          Original practice questions build skill without risking your credential.
        </p>
      </div>
      {logistics && (
        <p className="mt-3 text-sm text-gray-600">
          Exam format: {logistics.questions} questions, {logistics.duration}, {logistics.passingScore} passing score.
        </p>
      )}
    </section>
  )
}
