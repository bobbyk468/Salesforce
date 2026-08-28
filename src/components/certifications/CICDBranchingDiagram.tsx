/** CI/CD branching strategy for Dev Lifecycle & Deployment Architect: feature branches
 * merging through a release branch, validated by sandbox promotion before production. */
export default function CICDBranchingDiagram() {
  return (
    <figure id="cicd-branching-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">CI/CD branching strategy (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Feature branches merge into a <strong>release branch</strong>, which is validated in a full/partial-copy
        sandbox, then promoted to production. Each merge triggers automated tests before advancing.
      </p>
      <svg role="img" aria-labelledby="cicd-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
        <title id="cicd-title">Feature branches merge into a release branch, validated in a sandbox with automated tests, then promoted to production</title>
        <defs><marker id="cicdArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {[16, 16, 16].map((_, i) => (
          <g key={i}>
            <rect x="16" y={16 + i * 44} width="140" height="32" rx="6" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
            <text x="86" y={36 + i * 44} textAnchor="middle" fill="#1e293b" fontWeight="600" fontSize="10">Feature Branch {i + 1}</text>
            <path d={`M 156 ${32 + i * 44} L 200 88`} stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#cicdArrow)" />
          </g>
        ))}
        <rect x="208" y="72" width="150" height="48" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="283" y="92" textAnchor="middle" fill="#0f172a" fontWeight="700">Release Branch</text>
        <text x="283" y="108" textAnchor="middle" fill="#334155">Automated tests run</text>
        <path d="M 358 96 L 390 96" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#cicdArrow)" />
        <rect x="398" y="72" width="140" height="48" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="468" y="92" textAnchor="middle" fill="#0f172a" fontWeight="600">Sandbox Validation</text>
        <text x="468" y="108" textAnchor="middle" fill="#334155">Full/Partial Copy</text>
        <path d="M 538 96 L 570 96" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#cicdArrow)" />
        <rect x="578" y="72" width="106" height="48" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="631" y="96" textAnchor="middle" fill="#0f172a" fontWeight="700">Production</text>
      </svg>
    </figure>
  )
}
