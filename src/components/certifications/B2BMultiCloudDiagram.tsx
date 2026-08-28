/** B2B multi-cloud data flow (Sales Cloud + B2B Commerce + Order Management) for
 * B2B Solution Architect. */
export default function B2BMultiCloudDiagram() {
  return (
    <figure id="b2b-multicloud-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">B2B multi-cloud data flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A buyer account created in <strong>Sales Cloud</strong> feeds pricing/catalog into <strong>B2B
        Commerce</strong>; orders placed there flow to <strong>Order Management</strong> for fulfillment — the
        architect designs identity and data consistency across all three.
      </p>
      <svg role="img" aria-labelledby="b2bmc-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
        <title id="b2bmc-title">Sales Cloud account and pricing data flows to B2B Commerce storefront, orders placed there flow to Order Management for fulfillment</title>
        <defs><marker id="b2bmcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="180" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="106" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Sales Cloud</text>
        <text x="106" y="90" textAnchor="middle" fill="#334155">Accounts, pricing, contracts</text>
        <path d="M 196 80 L 228 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#b2bmcArrow)" />
        <rect x="236" y="48" width="180" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="326" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">B2B Commerce</text>
        <text x="326" y="90" textAnchor="middle" fill="#334155">Storefront, checkout, cart</text>
        <path d="M 416 80 L 448 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#b2bmcArrow)" />
        <rect x="456" y="48" width="180" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="546" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Order Management</text>
        <text x="546" y="90" textAnchor="middle" fill="#334155">Fulfillment, inventory</text>
        <text x="360" y="140" textAnchor="middle" fill="#475569">Identity and data consistency must be maintained end to end</text>
      </svg>
    </figure>
  )
}
