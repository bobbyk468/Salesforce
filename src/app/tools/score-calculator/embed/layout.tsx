/**
 * Chromeless shell for the embeddable calculator.
 *
 * Next allows one root layout per app, and the site&apos;s root layout owns the
 * <html>/<body> and the header, footer and sidebar. Rather than restructure
 * every route into a group to escape it, this layout hides that chrome for
 * this one route — the embed itself renders no header, footer or aside, so
 * the selectors have nothing else to catch.
 */
export default function ScoreCalculatorEmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body > div > header,
        body > div > footer,
        main[data-main-layout] > aside { display: none !important; }
        main[data-main-layout] { display: block !important; }
        html, body { background: #fff; }
      `}</style>
      {children}
    </>
  )
}
