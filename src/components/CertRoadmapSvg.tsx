/**
 * SVG certification roadmap visuals for each learning path.
 * Optimised for Google Image Search indexing and E-E-A-T content signals.
 * Each roadmap is an accessible, purely declarative SVG — no JS required.
 */

// ─── Admin Path ────────────────────────────────────────────────────────────────
export function AdminCertRoadmap() {
  return (
    <figure className="my-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 overflow-x-auto">
      <figcaption className="text-sm font-semibold text-gray-900 mb-4">
        Salesforce Admin Certification Roadmap
      </figcaption>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 760 320"
        role="img"
        aria-label="Salesforce Admin Certification Path: ADM-201, then App Builder or Advanced Admin, leading to Sales Cloud, Service Cloud, or Field Service consultant roles"
        className="w-full max-w-[760px] h-auto"
      >
        {/* Defs */}
        <defs>
          <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1589EE" />
          </marker>
          <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#059669" />
          </marker>
        </defs>

        {/* Step 1 — ADM-201 (centre top) */}
        <rect x="280" y="10" width="200" height="52" rx="10" fill="#1589EE" />
        <text x="380" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">STEP 1 — START HERE</text>
        <text x="380" y="48" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">ADM-201 Administrator</text>

        {/* Arrow down from ADM-201 */}
        <line x1="380" y1="62" x2="380" y2="95" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowA)" />

        {/* Branch label */}
        <text x="380" y="112" textAnchor="middle" fill="#6B7280" fontSize="11">Choose your next step</text>

        {/* Arrow left — App Builder */}
        <line x1="330" y1="120" x2="200" y2="145" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowA)" />
        {/* Arrow right — Advanced Admin */}
        <line x1="430" y1="120" x2="560" y2="145" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowA)" />

        {/* Step 2a — App Builder */}
        <rect x="60" y="145" width="200" height="52" rx="10" fill="#0070D2" />
        <text x="160" y="165" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">STEP 2A</text>
        <text x="160" y="183" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Platform App Builder</text>

        {/* Step 2b — Advanced Admin */}
        <rect x="500" y="145" width="200" height="52" rx="10" fill="#0070D2" />
        <text x="600" y="165" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">STEP 2B</text>
        <text x="600" y="183" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Advanced Administrator</text>

        {/* Arrows down to specialist level */}
        <line x1="100" y1="197" x2="80" y2="245" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG)" />
        <line x1="200" y1="197" x2="290" y2="245" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG)" />
        <line x1="600" y1="197" x2="560" y2="245" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG)" />
        <line x1="660" y1="197" x2="700" y2="245" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowG)" />

        {/* Step 3 specialist boxes */}
        <rect x="20" y="245" width="140" height="50" rx="8" fill="#059669" />
        <text x="90" y="265" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPECIALIST</text>
        <text x="90" y="281" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Sales Cloud</text>

        <rect x="215" y="245" width="150" height="50" rx="8" fill="#059669" />
        <text x="290" y="265" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPECIALIST</text>
        <text x="290" y="281" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Service Cloud</text>

        <rect x="430" y="245" width="150" height="50" rx="8" fill="#059669" />
        <text x="505" y="265" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPECIALIST</text>
        <text x="505" y="281" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Experience Cloud</text>

        <rect x="630" y="245" width="120" height="50" rx="8" fill="#059669" />
        <text x="690" y="265" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">SPECIALIST</text>
        <text x="690" y="281" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Field Service</text>
      </svg>
    </figure>
  )
}

// ─── Developer Path ─────────────────────────────────────────────────────────────
export function DeveloperCertRoadmap() {
  return (
    <figure className="my-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 overflow-x-auto">
      <figcaption className="text-sm font-semibold text-gray-900 mb-4">
        Salesforce Developer Certification Roadmap
      </figcaption>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 360"
        role="img"
        aria-label="Salesforce Developer Certification Path: PD1, optional JavaScript Developer I, then PD2, leading to Integration Architect"
        className="w-full max-w-[700px] h-auto"
      >
        <defs>
          <marker id="arrowD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1589EE" />
          </marker>
          <marker id="arrowDG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#7C3AED" />
          </marker>
        </defs>

        {/* PD1 */}
        <rect x="250" y="10" width="200" height="52" rx="10" fill="#1589EE" />
        <text x="350" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">STEP 1 — START HERE</text>
        <text x="350" y="48" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Platform Developer I (PD1)</text>

        <line x1="350" y1="62" x2="350" y2="100" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowD)" />

        {/* Branch: optional JS Dev I */}
        <text x="350" y="118" textAnchor="middle" fill="#6B7280" fontSize="11">Optional branch</text>

        {/* Arrow left optional */}
        <line x1="290" y1="128" x2="180" y2="152" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#arrowD)" />
        {/* Arrow right main */}
        <line x1="410" y1="128" x2="480" y2="152" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowD)" />

        {/* JS Dev I (optional) */}
        <rect x="40" y="152" width="200" height="52" rx="10" fill="#94A3B8" />
        <text x="140" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">OPTIONAL</text>
        <text x="140" y="190" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">JavaScript Developer I</text>

        {/* PD2 */}
        <rect x="430" y="152" width="200" height="52" rx="10" fill="#0070D2" />
        <text x="530" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">STEP 2</text>
        <text x="530" y="190" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Platform Developer II (PD2)</text>

        {/* Arrows down to architect level */}
        <line x1="140" y1="204" x2="250" y2="248" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#arrowDG)" />
        <line x1="530" y1="204" x2="530" y2="248" stroke="#7C3AED" strokeWidth="2" markerEnd="url(#arrowDG)" />

        {/* Integration Architect */}
        <rect x="380" y="248" width="230" height="52" rx="10" fill="#7C3AED" />
        <text x="495" y="268" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">STEP 3 — ARCHITECT TRACK</text>
        <text x="495" y="286" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Integration Architect</text>

        <line x1="495" y1="300" x2="495" y2="335" stroke="#7C3AED" strokeWidth="2" markerEnd="url(#arrowDG)" />

        {/* CTA aspirational */}
        <rect x="380" y="335" width="230" height="18" rx="5" fill="#F3E8FF" stroke="#7C3AED" strokeWidth="1" />
        <text x="495" y="348" textAnchor="middle" fill="#7C3AED" fontSize="10" fontWeight="600">→ Application Architect → CTA</text>
      </svg>
    </figure>
  )
}

// ─── Consultant Path ─────────────────────────────────────────────────────────────
export function ConsultantCertRoadmap() {
  return (
    <figure className="my-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 overflow-x-auto">
      <figcaption className="text-sm font-semibold text-gray-900 mb-4">
        Salesforce Consultant Certification Roadmap
      </figcaption>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 780 300"
        role="img"
        aria-label="Salesforce Consultant Certification Path: ADM-201 prerequisite, then choose Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, or Revenue Cloud consultant track"
        className="w-full max-w-[780px] h-auto"
      >
        <defs>
          <marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1589EE" />
          </marker>
          <marker id="arrowCG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#059669" />
          </marker>
        </defs>

        {/* ADM-201 prerequisite */}
        <rect x="290" y="10" width="200" height="52" rx="10" fill="#1589EE" />
        <text x="390" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">PREREQUISITE</text>
        <text x="390" y="48" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">ADM-201 Administrator</text>

        <line x1="390" y1="62" x2="390" y2="100" stroke="#1589EE" strokeWidth="2" markerEnd="url(#arrowC)" />
        <text x="390" y="118" textAnchor="middle" fill="#6B7280" fontSize="11">Pick your cloud specialisation</text>

        {/* Fan-out arrows */}
        <line x1="300" y1="128" x2="70"  y2="158" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowCG)" />
        <line x1="340" y1="128" x2="210" y2="158" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowCG)" />
        <line x1="390" y1="128" x2="390" y2="158" stroke="#059669" strokeWidth="2"   markerEnd="url(#arrowCG)" />
        <line x1="440" y1="128" x2="570" y2="158" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowCG)" />
        <line x1="480" y1="128" x2="710" y2="158" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowCG)" />

        {/* Consultant boxes */}
        <rect x="10"  y="158" width="120" height="52" rx="8" fill="#059669" />
        <text x="70"  y="178" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">CONSULTANT</text>
        <text x="70"  y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Sales Cloud</text>

        <rect x="145" y="158" width="130" height="52" rx="8" fill="#059669" />
        <text x="210" y="178" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">CONSULTANT</text>
        <text x="210" y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Service Cloud</text>

        <rect x="320" y="158" width="140" height="52" rx="8" fill="#059669" />
        <text x="390" y="178" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">CONSULTANT</text>
        <text x="390" y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Marketing Cloud</text>

        <rect x="500" y="158" width="140" height="52" rx="8" fill="#059669" />
        <text x="570" y="178" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">CONSULTANT</text>
        <text x="570" y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Experience Cloud</text>

        <rect x="650" y="158" width="120" height="52" rx="8" fill="#059669" />
        <text x="710" y="178" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">CONSULTANT</text>
        <text x="710" y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Revenue Cloud</text>

        {/* Convergence label */}
        <text x="390" y="242" textAnchor="middle" fill="#6B7280" fontSize="11">Multiple certs → Senior Consultant / Solution Architect track</text>
        <rect x="240" y="250" width="300" height="36" rx="8" fill="#7C3AED" opacity="0.15" stroke="#7C3AED" strokeWidth="1" />
        <text x="390" y="272" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="600">Application / System Architect (next level)</text>
      </svg>
    </figure>
  )
}

// ─── Architect Path ─────────────────────────────────────────────────────────────
export function ArchitectCertRoadmap() {
  return (
    <figure className="my-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 overflow-x-auto">
      <figcaption className="text-sm font-semibold text-gray-900 mb-4">
        Salesforce Architect Certification Roadmap
      </figcaption>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 420"
        role="img"
        aria-label="Salesforce Architect Certification Path: Domain Architect certs (Data, Integration, Sharing/Visibility, Dev Lifecycle), then System Architect, Application Architect, leading to Certified Technical Architect (CTA)"
        className="w-full max-w-[700px] h-auto"
      >
        <defs>
          <marker id="arrowAR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#7C3AED" />
          </marker>
        </defs>

        {/* Prerequisites */}
        <rect x="150" y="10" width="180" height="46" rx="8" fill="#0070D2" />
        <text x="240" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">PREREQUISITE</text>
        <text x="240" y="44" textAnchor="middle" fill="white" fontSize="11">App Builder + ADM-201</text>

        <rect x="370" y="10" width="180" height="46" rx="8" fill="#0070D2" />
        <text x="460" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">PREREQUISITE</text>
        <text x="460" y="44" textAnchor="middle" fill="white" fontSize="11">PD1 (recommended)</text>

        {/* Arrows to domain level */}
        <line x1="240" y1="56" x2="180" y2="105" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="310" y1="56" x2="350" y2="105" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="420" y1="56" x2="390" y2="105" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="500" y1="56" x2="560" y2="105" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />

        {/* Domain architect boxes */}
        <rect x="20"  y="105" width="155" height="50" rx="8" fill="#7C3AED" />
        <text x="97"  y="124" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">DOMAIN ARCHITECT</text>
        <text x="97"  y="140" textAnchor="middle" fill="white" fontSize="10">Data Architect</text>

        <rect x="200" y="105" width="155" height="50" rx="8" fill="#7C3AED" />
        <text x="277" y="124" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">DOMAIN ARCHITECT</text>
        <text x="277" y="140" textAnchor="middle" fill="white" fontSize="10">Integration Architect</text>

        <rect x="375" y="105" width="155" height="50" rx="8" fill="#7C3AED" />
        <text x="452" y="124" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">DOMAIN ARCHITECT</text>
        <text x="452" y="140" textAnchor="middle" fill="white" fontSize="10">Sharing &amp; Visibility</text>

        <rect x="550" y="105" width="135" height="50" rx="8" fill="#7C3AED" />
        <text x="617" y="124" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">DOMAIN ARCHITECT</text>
        <text x="617" y="140" textAnchor="middle" fill="white" fontSize="10">Dev Lifecycle</text>

        {/* Convergence lines to System Architect */}
        <line x1="97"  y1="155" x2="250" y2="218" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="277" y1="155" x2="300" y2="218" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="452" y1="155" x2="390" y2="218" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />
        <line x1="617" y1="155" x2="440" y2="218" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowAR)" />

        {/* System Architect */}
        <rect x="200" y="218" width="200" height="52" rx="10" fill="#5B21B6" />
        <text x="300" y="238" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">ROLE CREDENTIAL</text>
        <text x="300" y="256" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">System Architect</text>

        <line x1="300" y1="270" x2="300" y2="308" stroke="#5B21B6" strokeWidth="2" markerEnd="url(#arrowAR)" />

        {/* Application Architect */}
        <rect x="200" y="308" width="200" height="52" rx="10" fill="#4C1D95" />
        <text x="300" y="328" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">ROLE CREDENTIAL</text>
        <text x="300" y="346" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Application Architect</text>

        <line x1="300" y1="360" x2="300" y2="395" stroke="#4C1D95" strokeWidth="2" markerEnd="url(#arrowAR)" />

        {/* CTA */}
        <rect x="175" y="395" width="250" height="20" rx="6" fill="#DC2626" />
        <text x="300" y="409" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Certified Technical Architect (CTA)</text>
      </svg>
    </figure>
  )
}

// ─── Overview / All Paths ────────────────────────────────────────────────────────
export function OverviewCertRoadmap() {
  return (
    <figure className="my-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 overflow-x-auto">
      <figcaption className="text-sm font-semibold text-gray-900 mb-4">
        Salesforce Certification Paths: All Tracks Overview
      </figcaption>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 780 320"
        role="img"
        aria-label="Salesforce certification overview: ADM-201 is the foundation. Admin track leads to Advanced Admin, App Builder, and Specialist certs. Developer track starts with PD1 and advances to PD2 and Architect credentials. Consultant track covers Sales, Service, Marketing, and Experience clouds. Architect track culminates in CTA."
        className="w-full max-w-[780px] h-auto"
      >
        <defs>
          <marker id="arrowOV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1589EE" />
          </marker>
        </defs>

        {/* Foundation */}
        <rect x="290" y="10" width="200" height="50" rx="10" fill="#1589EE" />
        <text x="390" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">FOUNDATION</text>
        <text x="390" y="47" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">ADM-201 Administrator</text>

        {/* Branch lines */}
        <line x1="320" y1="60" x2="100"  y2="108" stroke="#1589EE" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="355" y1="60" x2="280"  y2="108" stroke="#1589EE" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="420" y1="60" x2="470"  y2="108" stroke="#1589EE" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="460" y1="60" x2="660"  y2="108" stroke="#1589EE" strokeWidth="1.5" markerEnd="url(#arrowOV)" />

        {/* Admin track */}
        <rect x="10" y="108" width="180" height="48" rx="8" fill="#0070D2" />
        <text x="100" y="126" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">ADMIN TRACK</text>
        <text x="100" y="142" textAnchor="middle" fill="white" fontSize="11">Adv. Admin &bull; App Builder</text>

        {/* Developer track */}
        <rect x="205" y="108" width="170" height="48" rx="8" fill="#9333EA" />
        <text x="290" y="126" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">DEVELOPER TRACK</text>
        <text x="290" y="142" textAnchor="middle" fill="white" fontSize="11">PD1 &bull; PD2 &bull; JS Dev I</text>

        {/* Consultant track */}
        <rect x="390" y="108" width="175" height="48" rx="8" fill="#059669" />
        <text x="477" y="126" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">CONSULTANT TRACK</text>
        <text x="477" y="142" textAnchor="middle" fill="white" fontSize="11">Sales &bull; Service &bull; Mktg</text>

        {/* Architect track */}
        <rect x="580" y="108" width="190" height="48" rx="8" fill="#DC2626" />
        <text x="675" y="126" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">ARCHITECT TRACK</text>
        <text x="675" y="142" textAnchor="middle" fill="white" fontSize="11">Domain → CTA</text>

        {/* Down arrows */}
        <line x1="100" y1="156" x2="100" y2="198" stroke="#0070D2" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="290" y1="156" x2="290" y2="198" stroke="#9333EA" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="477" y1="156" x2="477" y2="198" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowOV)" />
        <line x1="675" y1="156" x2="675" y2="198" stroke="#DC2626" strokeWidth="1.5" markerEnd="url(#arrowOV)" />

        {/* Specialist boxes */}
        <rect x="20" y="198" width="160" height="44" rx="8" fill="#DBEAFE" stroke="#0070D2" strokeWidth="1" />
        <text x="100" y="214" textAnchor="middle" fill="#1E40AF" fontSize="9" fontWeight="700">SPECIALIST</text>
        <text x="100" y="230" textAnchor="middle" fill="#1E40AF" fontSize="10">Salesforce Specialist certs</text>

        <rect x="210" y="198" width="160" height="44" rx="8" fill="#F3E8FF" stroke="#9333EA" strokeWidth="1" />
        <text x="290" y="214" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">ADVANCED</text>
        <text x="290" y="230" textAnchor="middle" fill="#7C3AED" fontSize="10">Integration Architect</text>

        <rect x="395" y="198" width="165" height="44" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
        <text x="477" y="214" textAnchor="middle" fill="#065F46" fontSize="9" fontWeight="700">ADVANCED</text>
        <text x="477" y="230" textAnchor="middle" fill="#065F46" fontSize="10">Experience &bull; Revenue Cloud</text>

        <rect x="595" y="198" width="160" height="44" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1" />
        <text x="675" y="214" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="700">PINNACLE</text>
        <text x="675" y="230" textAnchor="middle" fill="#991B1B" fontSize="10">Certified Technical Architect</text>

        {/* Legend */}
        <text x="390" y="275" textAnchor="middle" fill="#9CA3AF" fontSize="10">All tracks require ADM-201 or equivalent Salesforce hands-on experience.</text>
        <text x="390" y="292" textAnchor="middle" fill="#9CA3AF" fontSize="10">Start with ADM-201 unless you have a specific development background (begin PD1).</text>
      </svg>
    </figure>
  )
}
