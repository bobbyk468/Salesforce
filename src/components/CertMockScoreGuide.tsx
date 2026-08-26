import { Target } from 'lucide-react'
import { getCertDifficulty, getExamLogistics, slugToDisplayName, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

interface Props {
  slug: string
}

const SCORE_CONFIG = {
  easy: { target: 80, buffer: 15 },
  medium: { target: 80, buffer: 15 },
  hard: { target: 85, buffer: 20 },
} as const

export default function CertMockScoreGuide({ slug }: Props) {
  const difficulty = getCertDifficulty(slug)
  const config = SCORE_CONFIG[difficulty]
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const logistics = getExamLogistics(slug)
  const passingScore = logistics?.passingScore ?? '65%'

  return (
    <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
      <div className="flex items-start gap-3">
        <Target className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-2">
            When Should You Book the {examCode ?? certName} Exam?
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            The official passing score is <strong>{passingScore}</strong>. We recommend booking when you consistently score{' '}
            <strong>{config.target}%+</strong> on timed mock exams — that gives you a{' '}
            <strong>{config.buffer}%+ buffer</strong> above the pass mark to account for exam-day nerves and unfamiliar question wording.
          </p>
          <p className="text-sm text-gray-700">
            Take at least <strong>3 full-length timed mocks</strong> under exam conditions (no notes, no pausing) before booking. If your scores swing more than 10 points between attempts, you have knowledge gaps to close first.
          </p>
        </div>
      </div>
    </div>
  )
}
