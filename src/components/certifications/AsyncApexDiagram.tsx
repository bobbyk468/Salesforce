/** Batch vs. Queueable vs. Future Apex decision map for Platform Developer II. */
export default function AsyncApexDiagram() {
  return (
    <figure id="async-apex-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Batch vs. Queueable vs. Future (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Choose by data volume and chaining needs: <strong>@future</strong> for simple fire-and-forget calls with
        primitive parameters, <strong>Queueable</strong> when you need chaining or complex object parameters, and{' '}
        <strong>Batch</strong> when processing more records than fit in one transaction.
      </p>
      <svg role="img" aria-labelledby="async-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="async-title">Decision map: future for simple async calls, Queueable for chaining and complex parameters, Batch for large record volumes processed in chunks</title>
        <rect x="16" y="16" width="176" height="100" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="104" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">@future</text>
        <text x="104" y="60" textAnchor="middle" fill="#334155">Simple, fire-and-forget</text>
        <text x="104" y="76" textAnchor="middle" fill="#334155">Primitive params only</text>
        <text x="104" y="92" textAnchor="middle" fill="#334155">No chaining, no job ID</text>
        <rect x="212" y="16" width="176" height="100" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="300" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">Queueable</text>
        <text x="300" y="60" textAnchor="middle" fill="#334155">Chains to next job</text>
        <text x="300" y="76" textAnchor="middle" fill="#334155">Complex object params</text>
        <text x="300" y="92" textAnchor="middle" fill="#334155">Returns trackable job ID</text>
        <rect x="408" y="16" width="176" height="100" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="496" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">Batch Apex</text>
        <text x="496" y="60" textAnchor="middle" fill="#334155">Millions of records,</text>
        <text x="496" y="76" textAnchor="middle" fill="#334155">processed in chunks of</text>
        <text x="496" y="92" textAnchor="middle" fill="#334155">200 (default)</text>
        <text x="300" y="150" textAnchor="middle" fill="#475569">Rule of thumb: escalate right only when the simpler tool can't meet the requirement</text>
        <path d="M 60 140 L 550 140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#asyncArrow)" />
        <defs><marker id="asyncArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8" /></marker></defs>
        <text x="300" y="180" textAnchor="middle" fill="#475569">increasing complexity / data volume →</text>
      </svg>
    </figure>
  )
}
