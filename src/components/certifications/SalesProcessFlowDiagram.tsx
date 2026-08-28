/**
 * Lead-to-cash sales process flow for Sales Cloud: Lead -> qualification/conversion ->
 * Opportunity -> stage progression -> Quote -> Closed Won, the core object relationship
 * chain tested throughout the exam.
 */
export default function SalesProcessFlowDiagram() {
  return (
    <figure
      id="sales-process-flow-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Lead-to-cash process flow (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A <strong>Lead</strong> is unqualified prospect data. On conversion, Salesforce creates an{' '}
        <strong>Account</strong>, <strong>Contact</strong>, and <strong>Opportunity</strong> together. The
        Opportunity progresses through sales stages, generates a <strong>Quote</strong> with products and pricing,
        and reaching Closed Won marks the deal complete — this Lead→Account/Contact/Opportunity relationship is one
        of the most tested object flows on Sales Cloud exams.
      </p>
      <svg
        role="img"
        aria-labelledby="sales-flow-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="sales-flow-diagram-title">
          Diagram: Lead converts into Account, Contact, and Opportunity; Opportunity progresses through sales
          stages; Quote is generated with products and pricing; Closed Won completes the cycle
        </title>
        <defs>
          <marker id="spfArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="88" width="130" height="72" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="81" y="112" textAnchor="middle" fill="#1e293b" fontWeight="600">Lead</text>
        <text x="81" y="130" textAnchor="middle" fill="#475569">Unqualified</text>
        <text x="81" y="146" textAnchor="middle" fill="#475569">prospect data</text>

        <path d="M 146 124 L 178 124" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#spfArrow)" />
        <text x="162" y="112" textAnchor="middle" fill="#475569" fontSize="9">convert</text>

        <rect x="186" y="20" width="130" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="251" y="44" textAnchor="middle" fill="#0f172a" fontWeight="600">Account</text>
        <text x="251" y="60" textAnchor="middle" fill="#334155">Company created</text>

        <rect x="186" y="88" width="130" height="56" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="251" y="112" textAnchor="middle" fill="#0f172a" fontWeight="600">Contact</text>
        <text x="251" y="128" textAnchor="middle" fill="#334155">Person created</text>

        <rect x="186" y="156" width="130" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="251" y="180" textAnchor="middle" fill="#0f172a" fontWeight="700">Opportunity</text>
        <text x="251" y="196" textAnchor="middle" fill="#334155">Deal created</text>

        <path d="M 316 124 L 348 124" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#spfArrow)" />
        <rect x="356" y="88" width="180" height="72" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="446" y="110" textAnchor="middle" fill="#0f172a" fontWeight="600">Stage Progression</text>
        <text x="446" y="128" textAnchor="middle" fill="#334155">Prospecting → Qualification →</text>
        <text x="446" y="144" textAnchor="middle" fill="#334155">Proposal → Negotiation</text>

        <path d="M 536 124 L 568 124" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#spfArrow)" />
        <rect x="576" y="88" width="170" height="72" rx="8" fill="url(#spfBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <defs>
          <linearGradient id="spfBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <text x="661" y="110" textAnchor="middle" fill="#1e293b" fontWeight="600">Quote</text>
        <text x="661" y="128" textAnchor="middle" fill="#475569">Products, pricing,</text>
        <text x="661" y="144" textAnchor="middle" fill="#475569">and terms</text>

        <path d="M 661 160 L 661 190 L 340 190" stroke="#059669" strokeWidth="2" markerEnd="url(#spfArrow)" />
        <rect x="200" y="198" width="220" height="40" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="310" y="222" textAnchor="middle" fill="#0f172a" fontWeight="700">Closed Won</text>
      </svg>
    </figure>
  )
}
