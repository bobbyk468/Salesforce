/** Pardot/MCAE form and landing page lifecycle for Pardot Specialist. */
export default function PardotFormLifecycleDiagram() {
  return (
    <figure id="pardot-form-lifecycle-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Form &amp; landing page lifecycle (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A visitor submits a <strong>Form</strong> or <strong>Form Handler</strong> on a landing page, which creates
        or updates a Prospect, triggers <strong>Completion Actions</strong>, and can advance the prospect through{' '}
        <strong>progressive profiling</strong> on their next visit.
      </p>
      <svg role="img" aria-labelledby="pfl-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
        <title id="pfl-title">Visitor submits a Form or Form Handler, creating or updating a Prospect record, triggering Completion Actions, with progressive profiling shown on repeat visits</title>
        <defs><marker id="pflArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="140" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="86" y="72" textAnchor="middle" fill="#1e293b" fontWeight="600">Landing Page</text>
        <text x="86" y="90" textAnchor="middle" fill="#475569">Form or Form Handler</text>
        <path d="M 156 80 L 188 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#pflArrow)" />
        <rect x="196" y="48" width="150" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="271" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Prospect Record</text>
        <text x="271" y="90" textAnchor="middle" fill="#334155">Created or updated</text>
        <path d="M 346 80 L 378 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#pflArrow)" />
        <rect x="386" y="48" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="461" y="72" textAnchor="middle" fill="#0f172a" fontWeight="600">Completion Actions</text>
        <text x="461" y="90" textAnchor="middle" fill="#334155">Score, assign, add to list</text>
        <path d="M 536 80 L 568 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#pflArrow)" />
        <rect x="576" y="48" width="130" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="641" y="72" textAnchor="middle" fill="#0f172a" fontWeight="600">Next Visit</text>
        <text x="641" y="90" textAnchor="middle" fill="#334155">Progressive profiling</text>
      </svg>
    </figure>
  )
}
