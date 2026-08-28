import type { ExamSection } from '@/lib/exam-weightage-data'
import DifficultyBadge from '@/components/DifficultyBadge'
import PrerequisiteAlert from '@/components/PrerequisiteAlert'

interface CertificationCardProps {
  title: string
  code: string
  description: string
  slug: string
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
  slug,
  examDetails,
  topics,
  examSections,
  h1Text,
  examWeightageHeading,
  headingLevel = 'h1',
}: CertificationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-blue-100 cert-card [content-visibility:auto] [contain-intrinsic-size:auto_400px]">
      {/* Header: heading with exam name and primary keyword for SEO */}
      <div className="gradient-bg p-6 text-white">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {code}
          </span>
          <DifficultyBadge slug={slug} size="sm" />
        </div>
        {headingLevel === 'h1' ? (
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">{h1Text ?? title}</h1>
        ) : (
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">{h1Text ?? title}</h2>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Prerequisite Alert */}
        <PrerequisiteAlert slug={slug} className="mb-6" />

        {/* Exam Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
            <div className="text-2xl font-bold text-gray-900">{examDetails.questions}</div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Questions</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-100">
            <div className="text-2xl font-bold text-gray-900">{examDetails.passingScore}</div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Passing Score</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center border border-amber-100">
            <div className="text-2xl font-bold text-gray-900">{examDetails.duration}</div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Duration</div>
          </div>
          <div className="bg-violet-50 rounded-lg p-4 text-center border border-violet-100">
            <div className="text-2xl font-bold text-gray-900">{examDetails.cost}</div>
            <div className="text-sm text-gray-600 mt-1 font-medium">Exam Fee</div>
          </div>
        </div>

        {/* Exam weightage by section */}
        {examSections && examSections.length > 0 && (
          <div id="exam-weightage" className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{examWeightageHeading ?? 'Exam Weightage by Section'}</h2>
            <div className="space-y-3">
              {examSections.map((section, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="text-gray-700 font-medium truncate pr-2">{section.name}</span>
                      <span className="text-salesforce-dark font-bold bg-salesforce-blue/10 px-2 py-0.5 rounded-md">
                        {section.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-salesforce-blue rounded-full progress-bar"
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
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Exam Topics</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="bg-salesforce-blue/10 text-salesforce-blue px-3 py-1.5 rounded-full text-sm font-medium border border-salesforce-blue/20"
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
