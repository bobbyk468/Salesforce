/**
 * Freshness badge shown on each certification page — signals that the exam
 * weightage, practice questions, and study content are current.
 */

import { Sparkles, CheckCircle, Smartphone, ShieldCheck } from 'lucide-react'
import { RELEASE_CURRENT } from '@/lib/release-data'

export default function ReleaseNoteBadge() {
  return (
    <div className="mt-8 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50/50 p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">Updated for {RELEASE_CURRENT}</h3>
          <p className="mt-1 text-sm text-gray-600">This page is reviewed every release to stay aligned with the current exam blueprint.</p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Exam Blueprint Aligned</p>
            <p className="mt-1 text-sm text-gray-600">Section weightages match the official {RELEASE_CURRENT} exam guide</p>
          </div>
        </div>

        <div className="flex gap-3 rounded-lg bg-white p-4">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Questions Reviewed</p>
            <p className="mt-1 text-sm text-gray-600">Practice questions and explanations checked each release cycle</p>
          </div>
        </div>

        <div className="flex gap-3 rounded-lg bg-white p-4">
          <Smartphone className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Works on Any Device</p>
            <p className="mt-1 text-sm text-gray-600">Full practice experience on phone, tablet, or desktop</p>
          </div>
        </div>

        <div className="flex gap-3 rounded-lg bg-white p-4">
          <Sparkles className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Free, No Sign-Up</p>
            <p className="mt-1 text-sm text-gray-600">Start practicing immediately — no account or email required</p>
          </div>
        </div>
      </div>
    </div>
  )
}
