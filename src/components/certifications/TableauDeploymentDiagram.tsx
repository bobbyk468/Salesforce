/** Tableau deployment architecture vs. dashboarding scope for Tableau Consultant —
 * distinguishes consulting-level implementation concerns from dashboard-building. */
export default function TableauDeploymentDiagram() {
  return (
    <figure id="tableau-deployment-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Deployment architecture vs. dashboard building (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        The Consultant exam tests project-level decisions — <strong>data source strategy</strong>, <strong>
        governance/certification</strong>, and <strong>stakeholder requirements</strong> — layered above the actual
        dashboard-building skill tested at the Data Analyst level.
      </p>
      <svg role="img" aria-labelledby="td-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="td-title">Consultant-level concerns of requirements gathering, data source strategy, and governance sit above the dashboard-building layer tested at the Data Analyst level</title>
        <rect x="90" y="16" width="420" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="300" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">Consultant Layer</text>
        <text x="300" y="58" textAnchor="middle" fill="#334155">Requirements, data source strategy, governance/certification</text>
        <path d="M 300 80 L 300 104" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#tdArrow)" />
        <defs><marker id="tdArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="90" y="112" width="420" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="300" y="136" textAnchor="middle" fill="#0f172a" fontWeight="700">Dashboard-Building Layer</text>
        <text x="300" y="154" textAnchor="middle" fill="#334155">LOD, calculated fields, chart selection (Data Analyst exam scope)</text>
        <text x="300" y="204" textAnchor="middle" fill="#475569">Consultant questions layer requirements/governance ON TOP of Data Analyst skills</text>
      </svg>
    </figure>
  )
}
