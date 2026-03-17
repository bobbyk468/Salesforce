import Link from 'next/link'
import { Award, ChevronRight } from 'lucide-react'
import type { PathStage, CertificationPath } from '@/lib/certification-path-data'

const STAGE_STYLES: Record<PathStage, { bg: string; border: string; label: string }> = {
  foundational: { bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Foundational' },
  intermediate: { bg: 'bg-blue-50', border: 'border-blue-200', label: 'Intermediate' },
  advanced: { bg: 'bg-violet-50', border: 'border-violet-200', label: 'Advanced' },
  specialist: { bg: 'bg-amber-50', border: 'border-amber-200', label: 'Specialist' },
  architect: { bg: 'bg-indigo-50', border: 'border-indigo-200', label: 'Architect' },
  ap: { bg: 'bg-teal-50', border: 'border-teal-200', label: 'AP' },
}

export default function CertificationPathContent({ paths }: { paths: CertificationPath[] }) {
  if (!paths || paths.length === 0) return null

  return (
    <div className="space-y-16">
      {paths.map((path) => (
        <section key={path.id} id={path.id} className="scroll-mt-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-salesforce-dark to-salesforce-blue flex items-center justify-center text-white shadow-md">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{path.name}</h2>
              <p className="text-gray-600 mt-1">{path.description}</p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-[11rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-salesforce-blue/30 to-salesforce-blue/10 rounded-full" />
            <div className="space-y-10">
              {path.stages.map((stageGroup, stageIndex) => {
                const style = STAGE_STYLES[stageGroup.stage]
                return (
                  <div key={stageIndex} className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-48 flex-shrink-0">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold text-sm ${style.bg} ${style.border} text-gray-800`}
                      >
                        <span className="text-gray-600 font-normal">Step {stageIndex + 1}</span>
                        <ChevronRight className="h-4 w-4 text-gray-600" aria-hidden="true" />
                        {stageGroup.label}
                      </div>
                      {stageGroup.description && (
                        <p className="mt-2 text-sm text-gray-600 lg:max-w-[12rem]">{stageGroup.description}</p>
                      )}
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {stageGroup.nodes.map((node) => (
                        <div
                          key={node.href}
                          className="flex flex-col p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-salesforce-blue/40 hover:shadow-md transition-all card-hover"
                        >
                          <Link href={node.href} className="group flex flex-col flex-1">
                            <span className="font-medium text-gray-900 group-hover:text-salesforce-blue transition-colors">
                              {node.name}
                            </span>
                            {node.note && <span className="text-xs text-gray-600 mt-1 block">{node.note}</span>}
                            <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-salesforce-blue mt-2 self-start transition-colors" aria-hidden="true" />
                          </Link>
                          {node.prerequisites && node.prerequisites.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-xs font-medium text-gray-600 mb-1.5">Prerequisites (exams):</p>
                              <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                                {node.prerequisites.map((pre, i) => (
                                  <Link
                                    key={pre.href}
                                    href={pre.href}
                                    className="text-xs text-salesforce-blue hover:text-salesforce-dark hover:underline font-medium py-1 inline-block"
                                  >
                                    {pre.name}
                                    {i < node.prerequisites!.length - 1 ? ',' : ''}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
