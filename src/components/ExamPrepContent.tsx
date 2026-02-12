import Link from 'next/link'
import { Lightbulb, Target, BookOpen, Zap, Award } from 'lucide-react'
import { getExamPrepContent } from '@/lib/exam-prep-content-data'
import { slugToDisplayName } from '@/lib/cert-seo-data'

interface ExamPrepContentProps {
  slug: string
}

export default function ExamPrepContent({ slug }: ExamPrepContentProps) {
  const content = getExamPrepContent(slug)
  const certName = slugToDisplayName(slug)
  const showSharedFormatSection = slug !== 'administrator'

  return (
    <div className="mt-10 sm:mt-12 lg:mt-16 space-y-6 sm:space-y-8">
      {/* Why it matters (optional) */}
      {content.whyItMatters && (
        <div className="bg-gradient-to-br from-salesforce-blue/10 via-salesforce-light/5 to-salesforce-blue/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-salesforce-blue/30 shadow-md backdrop-blur-sm">
          <div className="flex items-start gap-3 sm:gap-4">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-salesforce-blue flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Why This Certification Matters</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{content.whyItMatters}</p>
            </div>
          </div>
        </div>
      )}

      {/* Exam tips */}
      <div className="bg-gradient-to-br from-white via-amber-50/20 to-white rounded-xl sm:rounded-2xl shadow-lg border border-amber-100/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 p-4 sm:p-5 text-white flex items-center gap-3">
          <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <h3 className="font-semibold text-base sm:text-lg">Exam Tips</h3>
        </div>
        <ul className="p-4 sm:p-5 lg:p-6 space-y-2.5 sm:space-y-3">
          {content.examTips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-xs sm:text-sm text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shadow-sm">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prerequisites & Focus areas side by side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-xl sm:rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-salesforce-dark/90 to-salesforce-blue/90 p-4 sm:p-5 text-white flex items-center gap-3">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <h3 className="font-semibold text-base sm:text-lg">Prerequisites</h3>
          </div>
          <ul className="p-4 sm:p-5 lg:p-6 space-y-2 sm:space-y-2.5 bg-gradient-to-br from-blue-50/20 to-white">
            {content.prerequisites.map((item, i) => (
              <li key={i} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700">
                <span className="text-salesforce-blue mt-1 font-bold">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-green-600/90 to-emerald-600/90 p-4 sm:p-5 text-white flex items-center gap-3">
            <Target className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <h3 className="font-semibold text-base sm:text-lg">Focus Areas</h3>
          </div>
          <ul className="p-4 sm:p-5 lg:p-6 space-y-2 sm:space-y-2.5 bg-gradient-to-br from-emerald-50/20 to-white">
            {content.focusAreas.map((area, i) => (
              <li key={i} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-700">
                <span className="text-green-600 mt-1 font-bold">•</span>
                <span className="leading-relaxed">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Study strategy */}
      <div className="bg-gradient-to-br from-white via-indigo-50/20 to-white rounded-xl sm:rounded-2xl shadow-lg border border-indigo-100/50 overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 p-4 sm:p-5 text-white flex items-center gap-3">
          <Zap className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <h3 className="font-semibold text-base sm:text-lg">Study Strategy</h3>
        </div>
        <p className="p-4 sm:p-5 lg:p-6 text-gray-700 text-xs sm:text-sm leading-relaxed">{content.studyStrategy}</p>
      </div>

      {/* Shared depth section for all certs (ADM-201 has custom detailed version on-page) */}
      {showSharedFormatSection && (
        <div className="bg-gradient-to-br from-white via-gray-50/40 to-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100/70 overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-slate-700/90 to-slate-800/90 p-4 sm:p-5 text-white">
            <h3 className="font-semibold text-base sm:text-lg">Exam Format and First-Attempt Readiness</h3>
          </div>
          <div className="p-4 sm:p-5 lg:p-6 space-y-4">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Most Salesforce certification exams test applied, scenario-based decision making. For <strong className="text-gray-900">{certName}</strong>,
              focus on understanding when to use each feature, not just memorizing terms.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc list-inside">
              <li>Practice with timed question sets to improve exam-day pacing and confidence.</li>
              <li>Review why wrong options are wrong; this builds stronger scenario reasoning.</li>
              <li>Prioritize high-weight topics first, then close gaps with focused revision.</li>
              <li>Aim for consistent mock performance before booking the exam.</li>
            </ul>
            <div className="text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-3">
              <span className="font-medium text-gray-800">Next steps:</span>{' '}
              <Link href="#practice-questions" className="text-salesforce-blue font-medium hover:underline">
                start practice questions
              </Link>
              {' '}or review the{' '}
              <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
                certification path
              </Link>
              {' '}for your next credential.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
