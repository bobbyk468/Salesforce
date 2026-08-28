/** Experience Cloud license comparison for the Experience Cloud exam: Customer Community,
 * Partner Community, and internal licenses differ in object access and cost. */
export default function ExperienceLicenseDiagram() {
  const rows = [
    { license: 'Customer Community', access: 'Own Account/Contact records via Sharing Sets', use: 'Self-service, case tracking' },
    { license: 'Customer Community Plus', access: 'Adds role hierarchy, more sharing options', use: 'Larger self-service portals' },
    { license: 'Partner Community', access: 'Full role hierarchy, Opportunity/Lead access', use: 'Reseller/partner deal registration' },
  ]
  return (
    <figure id="experience-license-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Experience Cloud license comparison (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        License choice determines both <strong>cost</strong> and <strong>access model</strong>. Customer licenses use
        Sharing Sets tied to Account/Contact; Partner licenses use the full role hierarchy for deeper CRM access —
        this distinction drives most license-selection exam scenarios.
      </p>
      <svg role="img" aria-labelledby="el-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg">
        <title id="el-title">Table comparing Customer Community, Customer Community Plus, and Partner Community licenses by access model and typical use case</title>
        <rect x="10" y="8" width="180" height="28" fill="#0b5cab" />
        <text x="100" y="27" textAnchor="middle" fill="white" fontWeight="700">License</text>
        <rect x="190" y="8" width="240" height="28" fill="#0b5cab" />
        <text x="310" y="27" textAnchor="middle" fill="white" fontWeight="700">Access Model</text>
        <rect x="430" y="8" width="180" height="28" fill="#0b5cab" />
        <text x="520" y="27" textAnchor="middle" fill="white" fontWeight="700">Typical Use</text>
        {rows.map((r, i) => (
          <g key={r.license}>
            <rect x="10" y={36 + i * 46} width="600" height="46" fill={i % 2 === 0 ? '#f8fafc' : '#f1f5f9'} stroke="#e2e8f0" />
            <text x="20" y={36 + i * 46 + 27} fill="#0f172a" fontWeight="600">{r.license}</text>
            <text x="200" y={36 + i * 46 + 20} fill="#334155">{r.access.slice(0, 38)}</text>
            <text x="200" y={36 + i * 46 + 36} fill="#334155">{r.access.slice(38)}</text>
            <text x="440" y={36 + i * 46 + 27} fill="#334155">{r.use}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
