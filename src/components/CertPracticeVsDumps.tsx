import { ShieldCheck } from 'lucide-react'

export default function CertPracticeVsDumps() {
  return (
    <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6">
      <div className="flex items-start gap-3 mb-3">
        <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
        <h3 className="text-base font-bold text-gray-900">
          Practice Questions vs Exam Dumps: Why It Matters
        </h3>
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <strong>Exam dumps</strong> are leaked or memorised real exam questions shared illegally online. Using them violates Salesforce’s certification agreement, risks permanent credential revocation, and teaches you to recognise answers rather than understand concepts — which fails you on scenario-based questions that change every release.
        </p>
        <p>
          <strong>Practice tests on Trailblaze Prep</strong> are original, scenario-based questions written to match the official exam outline and difficulty. They test the same skills without copying real exam content. When you pass using practice questions, you actually know the material — and your certification holds up in interviews and on the job.
        </p>
      </div>
    </div>
  )
}
