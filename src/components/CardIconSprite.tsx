/**
 * One SVG sprite for the three icons the 91 certification cards repeat.
 *
 * Each lucide icon renders as a full inline <svg> with xmlns, viewBox, six
 * stroke attributes and its paths. Across the cards that was 219 copies of
 * near-identical markup: about 74KB of the homepage HTML, and another ~73KB
 * once React serialised the same elements into the RSC payload. Defining
 * each path once and referencing it with <use> removes both copies.
 *
 * Render <CardIconSprite /> once per page that uses <CardIcon>.
 */

const ICONS = {
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  'book-open': 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  'external-link': 'M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6',
} as const

export type CardIconName = keyof typeof ICONS

export function CardIconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <defs>
        {Object.entries(ICONS).map(([name, d]) => (
          <symbol
            key={name}
            id={`ci-${name}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={d} />
          </symbol>
        ))}
      </defs>
    </svg>
  )
}

export function CardIcon({
  name,
  className = 'h-4 w-4',
}: {
  name: CardIconName
  className?: string
}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`#ci-${name}`} />
    </svg>
  )
}
