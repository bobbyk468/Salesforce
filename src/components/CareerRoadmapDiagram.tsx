/** Generic visual career roadmap: parses a "Step 1 → Step 2 → Step 3" string into a
 * connected flow diagram. Used across all role hub pages so each career path renders
 * as a scannable visual instead of a single line of plain text.
 *
 * Rendered as a wrapping CSS grid rather than a fixed-width SVG row. The SVG version
 * clamped each step to three wrapped lines of 22 characters and sized the canvas at
 * 168px per step, so five-step paths (developer, consultant, architect) overflowed into
 * a horizontal scroll container and multi-certification steps such as
 * "Agentforce Sales Consultant (Sales-Con-201) or" clipped mid-sentence. A grid has no
 * fixed track height and no fixed canvas width, so every step renders in full at any
 * viewport width.
 */
interface CareerRoadmapDiagramProps {
  roleName: string
  path: string
}

/** Tailwind needs literal class names, so the per-length column counts are a lookup
 *  rather than an interpolated `lg:grid-cols-${n}`. */
const STEP_COLUMNS: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-5',
}

const STEP_ACCENTS = [
  { border: 'border-[#0b5cab]', bg: 'bg-[#0b5cab]/[0.08]', text: 'text-[#0b5cab]' },
  { border: 'border-[#059669]', bg: 'bg-[#059669]/[0.08]', text: 'text-[#047857]' },
  { border: 'border-[#d97706]', bg: 'bg-[#d97706]/[0.08]', text: 'text-[#b45309]' },
  { border: 'border-[#dc2626]', bg: 'bg-[#dc2626]/[0.08]', text: 'text-[#b91c1c]' },
  { border: 'border-[#7c3aed]', bg: 'bg-[#7c3aed]/[0.08]', text: 'text-[#6d28d9]' },
]

export default function CareerRoadmapDiagram({ roleName, path }: CareerRoadmapDiagramProps) {
  const steps = path.split('→').map((s) => s.trim()).filter(Boolean)
  const columns = STEP_COLUMNS[steps.length] ?? 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <figure id="career-roadmap-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        {roleName} career roadmap (visual)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Each step below is a real credential or role milestone, most candidates spend 6&ndash;18 months at each stage
        before advancing to the next.
      </p>
      <ol className={`grid grid-cols-1 ${columns} gap-3 list-none m-0 p-0`} aria-label={`${roleName} career progression: ${steps.join(' leading to ')}`}>
        {steps.map((step, i) => {
          const accent = STEP_ACCENTS[i % STEP_ACCENTS.length]
          return (
            <li
              key={`${step}-${i}`}
              className={`relative flex flex-col rounded-lg border ${accent.border} ${accent.bg} p-3`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wide ${accent.text} mb-1`}>
                Step {i + 1}
              </span>
              <span className="text-[13px] font-semibold leading-snug text-gray-900 break-words">
                {step}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-[#0b5cab] text-xs leading-none sm:hidden">
                  &#9660;
                </span>
              )}
            </li>
          )
        })}
      </ol>
      <p className="mt-4 text-[11px] text-gray-500">
        Steps run left to right, then wrap. A step naming two credentials with &quot;or&quot; is a choice, not two
        exams you have to pass.
      </p>
    </figure>
  )
}
