import { getCertDifficulty, getExamLogistics, slugToDisplayName, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

interface Props {
  slug: string
}

const DIFFICULTY_CONFIG = {
  easy: {
    label: 'Entry-Level',
    color: 'text-green-700 bg-green-50 border-green-200',
    prepTime: '2-4 weeks',
    tip: 'Focus on Trailhead modules and the official exam guide, then practice the skills in a hands-on environment.',
  },
  medium: {
    label: 'Moderate',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    prepTime: '4-8 weeks',
    tip: 'Combine Trailhead trailmix with hands-on practice and timed mock exams. Prioritise the highest-weighted sections.',
  },
  hard: {
    label: 'Challenging',
    color: 'text-red-700 bg-red-50 border-red-200',
    prepTime: '8-16 weeks',
    tip: 'Requires deep hands-on experience. Study the hardest sections first, take multiple timed mocks, and review wrong answers until you understand every distractor.',
  },
} as const

export default function CertDifficultySection({ slug }: Props) {
  const difficulty = getCertDifficulty(slug)
  const config = DIFFICULTY_CONFIG[difficulty]
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const logistics = getExamLogistics(slug)

  const displayName = examCode ? `${certName} (${examCode})` : certName

  return (
    <div id="is-this-exam-hard" className="mt-8 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Is the {displayName} Exam Hard?
      </h2>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${config.color}`}>
          {config.label}
        </span>
        <span className="text-sm text-gray-500">Recommended prep: {config.prepTime}</span>
      </div>
      <div className="space-y-3 text-sm text-gray-700">
        <p>
          We rate the {certName} exam as <strong>{config.label.toLowerCase()}</strong> for study planning. Difficulty and preparation time vary by experience.
          {logistics && (
            <> You have <strong>{logistics.duration}</strong> to answer <strong>{logistics.questions} questions</strong> and need <strong>{logistics.passingScore}</strong> to pass.</>
          )}
        </p>
        <p>{config.tip}</p>
      </div>
    </div>
  )
}
