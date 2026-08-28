/** Quote-to-cash process for CPQ Administrator: Opportunity -> Quote (products, pricing,
 * discounts, approvals) -> Contract -> Renewal, the core CPQ object flow. */
export default function QuoteToCashDiagram() {
  return (
    <figure id="quote-to-cash-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Quote-to-cash process flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        An Opportunity generates a <strong>Quote</strong>, where Product Rules, Price Rules, and Discount Schedules
        determine the final price. Advanced Approvals route discounts above threshold. Once Primary and Closed Won,
        CPQ can generate a <strong>Contract</strong> that drives future <strong>Renewals</strong>.
      </p>
      <svg role="img" aria-labelledby="qtc-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
        <title id="qtc-title">Opportunity generates a Quote configured with Product/Price Rules and Discount Schedules, routed through Advanced Approvals, then Contract, then Renewal</title>
        <defs><marker id="qtcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="68" width="120" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="76" y="94" textAnchor="middle" fill="#1e293b" fontWeight="600">Opportunity</text>
        <text x="76" y="112" textAnchor="middle" fill="#475569">Deal in progress</text>
        <path d="M 136 100 L 168 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#qtcArrow)" />
        <rect x="176" y="52" width="170" height="96" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="261" y="76" textAnchor="middle" fill="#0f172a" fontWeight="700">Quote (QLE)</text>
        <text x="261" y="94" textAnchor="middle" fill="#334155">Product Rules · Price Rules</text>
        <text x="261" y="110" textAnchor="middle" fill="#334155">Discount Schedules ·</text>
        <text x="261" y="126" textAnchor="middle" fill="#334155">Advanced Approvals</text>
        <path d="M 346 100 L 378 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#qtcArrow)" />
        <rect x="386" y="68" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="461" y="94" textAnchor="middle" fill="#0f172a" fontWeight="600">Closed Won</text>
        <text x="461" y="112" textAnchor="middle" fill="#334155">Primary Quote marked</text>
        <path d="M 536 100 L 568 100" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#qtcArrow)" />
        <rect x="576" y="68" width="150" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="651" y="90" textAnchor="middle" fill="#0f172a" fontWeight="600">Contract</text>
        <text x="651" y="108" textAnchor="middle" fill="#334155">Subscription terms,</text>
        <text x="651" y="122" textAnchor="middle" fill="#334155">amendments</text>
        <path d="M 651 132 L 651 150 L 460 150 L 460 148" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" fill="none" markerEnd="url(#qtcArrow)" />
        <text x="555" y="164" textAnchor="middle" fill="#059669" fontSize="10">auto-generates Renewal Opportunity + Quote</text>
      </svg>
    </figure>
  )
}
