/**
 * Freshness badge shown on each certification page, signals that the exam
 * weightage, practice questions, and study content are current.
 */

import { Sparkles, CheckCircle, Smartphone, ShieldCheck } from 'lucide-react'

export default function ReleaseNoteBadge() {
  return (
    <div className="mt-8 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50/50 p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
        <div className="flex-1">
          {/*
            Deliberately a <p>, not a heading. This is a trust badge that sits
            above the page H1; as an <h3> it made the document outline start at
            level 3, which SEO crawlers flag as a broken heading structure.
          */}
          <p className="text-lg font-bold text-gray-900">Independent study resource</p>
          <p className="mt-1 text-sm text-gray-600">Exam objectives and policies can change. Confirm current details with the certification issuer.</p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Check current objectives</p>
            <p className="mt-1 text-sm text-gray-600">Use the official exam guide as the source for current objectives and section weights.</p>
          </div>
        </div>

        <div className="flex gap-3 rounded-lg bg-white p-4">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Practice for learning</p>
            <p className="mt-1 text-sm text-gray-600">Use sample questions to review concepts and identify topics for further study.</p>
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
            <p className="mt-1 text-sm text-gray-600">Start practicing immediately, no account or email required</p>
          </div>
        </div>
      </div>
    </div>
  )
}
