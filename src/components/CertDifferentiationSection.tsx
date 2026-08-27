import Link from 'next/link'
import type { CertDifferentiation } from '@/lib/cert-page-spike/types'

export default function CertDifferentiationSection({ data }: { data: CertDifferentiation }) {
  return (
    <section id="exam-traps" className="mt-12 rounded-xl border border-amber-100 bg-amber-50/40 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">Exam reviewer notes</p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{data.heading}</h2>
        {data.intro ? <p className="mt-2 text-sm text-gray-700">{data.intro}</p> : null}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-lg border border-white bg-white/80 p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-3">Common traps to avoid</h3>
          <div className="space-y-3 text-sm text-gray-700">
            {data.commonTraps.map((item) => (
              <div key={item.trap}>
                <p className="font-medium text-gray-900">{item.trap}</p>
                <p className="text-gray-600">{item.fix}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white bg-white/80 p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-3">Readiness benchmark</h3>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            {data.readinessBenchmarks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {data.whoShouldSkip?.length || data.adjacentCerts?.length ? (
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data.whoShouldSkip?.length ? (
            <div className="rounded-lg border border-white bg-white/80 p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Consider skipping this exam if...</h3>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                {data.whoShouldSkip.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {data.adjacentCerts?.length ? (
            <div className="rounded-lg border border-white bg-white/80 p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Compare before you book</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {data.adjacentCerts.map((cert) => (
                  <li key={cert.href}>
                    <Link href={cert.href} className="font-medium text-salesforce-blue hover:underline">
                      {cert.label}
                    </Link>
                    <span className="text-gray-600"> - {cert.guidance}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}
