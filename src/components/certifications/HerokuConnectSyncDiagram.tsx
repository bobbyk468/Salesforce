/** Heroku Connect bidirectional sync pattern for Heroku Architect. */
export default function HerokuConnectSyncDiagram() {
  return (
    <figure id="heroku-connect-sync-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Heroku Connect bidirectional sync (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Heroku Connect maps Salesforce objects to Postgres tables and polls both sides on a schedule (or via
        streaming), writing changes in whichever direction is configured — this lets a Heroku app read/write
        Salesforce data without direct API calls.
      </p>
      <svg role="img" aria-labelledby="hcs-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">
        <title id="hcs-title">Salesforce objects sync bidirectionally through Heroku Connect to Postgres tables, which the Heroku app reads and writes directly</title>
        <defs><marker id="hcsArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="160" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="96" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Salesforce</text>
        <text x="96" y="90" textAnchor="middle" fill="#334155">Objects (Account, custom)</text>
        <path d="M 176 70 L 208 70" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#hcsArrow)" />
        <path d="M 208 90 L 176 90" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#hcsArrow)" />
        <rect x="216" y="48" width="180" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="306" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Heroku Connect</text>
        <text x="306" y="90" textAnchor="middle" fill="#334155">Mapping + polling/streaming</text>
        <path d="M 396 70 L 428 70" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#hcsArrow)" />
        <path d="M 428 90 L 396 90" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#hcsArrow)" />
        <rect x="436" y="48" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="511" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Postgres</text>
        <text x="511" y="90" textAnchor="middle" fill="#334155">Mapped tables</text>
        <path d="M 596 80 L 628 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#hcsArrow)" />
        <rect x="636" y="48" width="64" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="668" y="76" textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="9">Heroku</text>
        <text x="668" y="92" textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="9">App</text>
      </svg>
    </figure>
  )
}
