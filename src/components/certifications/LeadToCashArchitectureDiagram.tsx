/** Lead-to-cash architecture flow for Revenue Cloud Consultant: full P2C lifecycle
 * across CPQ, Billing, and Revenue Recognition. */
export default function LeadToCashArchitectureDiagram() {
  const steps = [
    { t: 'Configure', s: 'Product & pricing (CPQ)' },
    { t: 'Quote', s: 'Discount, approve, generate' },
    { t: 'Contract & Order', s: 'Terms, fulfillment' },
    { t: 'Billing', s: 'Invoice, usage-based charges' },
    { t: 'Revenue Recognition', s: 'ASC 606 / IFRS 15' },
  ]
  return (
    <figure id="lead-to-cash-architecture-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Lead-to-cash (Product-to-Cash) architecture (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Revenue Cloud spans the full P2C lifecycle — CPQ configures and quotes, Billing invoices per subscription or
        usage terms, and Revenue Recognition allocates revenue to accounting periods per ASC 606/IFRS 15.
      </p>
      <svg role="img" aria-labelledby="ltc-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 130" xmlns="http://www.w3.org/2000/svg">
        <title id="ltc-title">Configure product and pricing, generate a Quote, create Contract and Order, run Billing, then allocate Revenue Recognition per accounting standards</title>
        <defs><marker id="ltcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {steps.map((s, i) => (
          <g key={s.t}>
            <rect x={16 + i * 152} y="20" width="136" height="76" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="46" textAnchor="middle" fill="#0f172a" fontWeight="700">{s.t}</text>
            <text x={84 + i * 152} y="66" textAnchor="middle" fill="#334155">{s.s.split(' (')[0]}</text>
            {i < steps.length - 1 && <path d={`M ${152 + i * 152} 58 L ${168 + i * 152} 58`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ltcArrow)" />}
          </g>
        ))}
      </svg>
    </figure>
  )
}
