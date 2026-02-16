import { Award, Clock, Target, BookOpen } from 'lucide-react'
import type { ExamSection } from '@/lib/exam-weightage-data'

interface CertificationCardProps {
  title: string
  code: string
  description: string
  examDetails: {
    questions: number | string
    passingScore: string
    duration: string
    cost: string
  }
  topics: string[]
  /** Section-wise exam weightage (%) - shown when provided */
  examSections?: ExamSection[]
  /** Optional SEO heading text: exam name + keyword (e.g. "Salesforce Administrator (ADM-201) Practice Questions & Exam Study Guide") */
  h1Text?: string
  /** Optional SEO H3 for exam weightage: e.g. "[Cert Name] Exam Weightage by Section" */
  examWeightageHeading?: string
  /** Heading level for the card title: 'h1' (default, for pages where this IS the H1) or 'h2' (when H1 is rendered elsewhere on the page) */
  headingLevel?: 'h1' | 'h2'
}

export default function CertificationCard({
  title,
  code,
  description,
  examDetails,
  topics,
  examSections,
  h1Text,
  examWeightageHeading,
  headingLevel = 'h1',
}: CertificationCardProps) {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-blue-100/50 cert-card backdrop-blur-sm">
      {/* Header: heading with exam name and primary keyword for SEO */}
      <div className="gradient-bg p-5 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Award className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0" aria-label="Certification badge icon" />
          <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/30">
            {code}
          </span>
        </div>
        {headingLevel === 'h1' ? (
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{h1Text ?? title}</h1>
        ) : (
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{h1Text ?? title}</h2>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-8">
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">{description}</p>

        {/* Exam Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-blue-200/60 hover:shadow-lg hover:border-blue-300 transition-all duration-200 hover:scale-105">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-salesforce-blue mx-auto mb-2" aria-label="Number of exam questions" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{examDetails.questions}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Questions</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-emerald-200/60 hover:shadow-lg hover:border-emerald-300 transition-all duration-200 hover:scale-105">
            <Target className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mx-auto mb-2" aria-label="Passing score percentage" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{examDetails.passingScore}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Passing Score</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-amber-200/60 hover:shadow-lg hover:border-amber-300 transition-all duration-200 hover:scale-105">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 mx-auto mb-2" aria-label="Exam duration" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{examDetails.duration}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Duration</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-purple-200/60 hover:shadow-lg hover:border-purple-300 transition-all duration-200 hover:scale-105">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mx-auto mb-2" aria-label="Exam fee cost" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{examDetails.cost}</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Exam Fee</div>
          </div>
        </div>

        {/* Exam weightage by section */}
        {examSections && examSections.length > 0 && (
          <div id="exam-weightage" className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5">{examWeightageHeading ?? 'Exam Weightage by Section'}</h3>
            <div className="space-y-3 sm:space-y-4">
              {examSections.map((section, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5 sm:mb-2">
                      <span className="text-gray-700 font-medium truncate pr-2">{section.name}</span>
                      <span className="text-salesforce-blue font-bold flex-shrink-0 bg-salesforce-blue/10 px-2 py-0.5 rounded-md">
                        {section.percentage}%
                      </span>
                    </div>
                    <div className="h-2 sm:h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-salesforce-blue via-salesforce-light to-salesforce-blue rounded-full progress-bar shadow-sm"
                        style={{ width: `${section.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topics */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Exam Topics</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="bg-gradient-to-r from-salesforce-blue/10 to-salesforce-light/10 text-salesforce-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-salesforce-blue/20 hover:bg-salesforce-blue/20 transition-colors duration-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
