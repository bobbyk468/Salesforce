/**
 * Release Note Badge Component
 * Displays "What's New in Spring '26" section on each certification page
 * Highlights major changes from Winter '26 to Spring '26
 */

import { Sparkles, CheckCircle, Zap, Smartphone, Shield } from 'lucide-react'

export default function ReleaseNoteBadge() {
  return (
    <div className="mt-8 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-50/50 p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900">What&apos;s New in Spring &apos;26</h3>
          <p className="mt-1 text-sm text-gray-600">Major improvements from Winter &apos;26</p>
        </div>
      </div>

      {/* Changes Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Change 1: Dynamic Routes */}
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <Zap className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Dynamic Routes</p>
            <p className="mt-1 text-sm text-gray-600">All 93 certs migrated to [slug] architecture</p>
          </div>
        </div>

        {/* Change 2: Mobile Optimized */}
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <Smartphone className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Mobile First</p>
            <p className="mt-1 text-sm text-gray-600">Optimized for phones, tablets, desktop</p>
          </div>
        </div>

        {/* Change 3: Type Safety */}
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <Shield className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Type Safety</p>
            <p className="mt-1 text-sm text-gray-600">Zero TypeScript errors, runtime validation</p>
          </div>
        </div>

        {/* Change 4: SEO Improved */}
        <div className="flex gap-3 rounded-lg bg-white p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">SEO Improved</p>
            <p className="mt-1 text-sm text-gray-600">Fixed canonicals, better ranking signals</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 border-t border-blue-100 pt-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-gray-900">100% Migration Complete:</span> All certification content migrated with enhanced architecture. No content changes—same great info, better experience.
        </p>
      </div>

    </div>
  )
}
