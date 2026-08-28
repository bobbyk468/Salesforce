/** Anypoint VPC / VPN / DLB network architecture for MuleSoft Platform Architect. */
export default function AnypointNetworkDiagram() {
  return (
    <figure id="anypoint-network-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Anypoint VPC / VPN / DLB network architecture (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A dedicated <strong>VPC</strong> isolates Mule workers on CloudHub. A <strong>VPN</strong> tunnel connects
        that VPC securely to on-prem systems. A <strong>Dedicated Load Balancer (DLB)</strong> sits in front for
        custom domains, TLS termination, and controlled traffic distribution.
      </p>
      <svg role="img" aria-labelledby="ann-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
        <title id="ann-title">External traffic enters through a Dedicated Load Balancer into a VPC containing Mule workers, connected via VPN tunnel to on-premises systems</title>
        <defs><marker id="annArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="56" width="120" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="76" y="80" textAnchor="middle" fill="#1e293b" fontWeight="600">External Client</text>
        <path d="M 136 84 L 168 84" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#annArrow)" />
        <rect x="176" y="56" width="150" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="251" y="78" textAnchor="middle" fill="#0f172a" fontWeight="700">Dedicated Load Balancer</text>
        <text x="251" y="96" textAnchor="middle" fill="#334155">TLS, custom domain</text>
        <path d="M 326 84 L 358 84" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#annArrow)" />
        <rect x="366" y="40" width="160" height="88" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="446" y="62" textAnchor="middle" fill="#0f172a" fontWeight="700">VPC</text>
        <text x="446" y="82" textAnchor="middle" fill="#334155">Isolated Mule workers</text>
        <text x="446" y="98" textAnchor="middle" fill="#334155">on CloudHub</text>
        <path d="M 526 84 L 558 84" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#annArrow)" />
        <text x="592" y="76" textAnchor="middle" fill="#475569" fontSize="9">VPN tunnel</text>
        <rect x="566" y="56" width="120" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="626" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600">On-Prem Systems</text>
      </svg>
    </figure>
  )
}
