import { StarIcon } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/lib/utils";
import { TokenGrid } from "@/components/tokens/token-grid";
import { RadiusPreview } from "@/components/tokens/radius-preview";
import { PrimitiveRamp } from "@/components/tokens/primitive-palette";
import {
  ALL_RAMPS,
  BASE_PRIMITIVES,
  BRAND_PRIMITIVES,
} from "@/components/tokens/primitive-data";
import { CopyChip } from "@/components/tokens/copy-chip";
import {
  surfaceTokens,
  brandTokens,
  stateTokens,
  borderTokens,
  chartTokens,
  sidebarTokens,
  typeScale,
  weightScale,
  radiusScale,
  shadowScale,
  spacingScale,
  iconSizeScale,
  controlHeightScale,
  leadingScale,
  trackingScale,
  zIndexScale,
} from "@/components/tokens/tokens-data";

import { DocHeader, DocSection, DocSubSection } from "../_components/doc-page";

export const metadata = {
  title: "Token — Pipelean Design System",
};

export default function TokensPage() {
  return (
    <div className="flex flex-col gap-14">
      <DocHeader
        title="Token"
        description="Tutti i token del design system: dimensioni, colori primitivi, colori semantici, elevazione e tipografia. I colori semantici e i radius leggono il valore CSS applicato in questo momento — cambia tema per vederli aggiornarsi. Clicca su uno swatch o una classe per copiarla."
      />

      {/* Dimensioni */}
      <DocSection id="dimensioni" title="Dimensioni">
        <DocSubSection id="dimensioni-spaziatura" title="Spaziatura">
          <div className="flex flex-col gap-2 rounded-lg border p-6">
            {spacingScale.map((s) => (
              <button
                key={s.step}
                type="button"
                className="hover:bg-accent/50 flex items-center gap-3 rounded-md px-2 py-1 text-left transition-colors"
              >
                <span className="text-muted-foreground w-6 shrink-0 font-mono text-xs">
                  {s.step}
                </span>
                <span
                  className="bg-primary h-3 shrink-0 rounded-sm"
                  style={{ width: s.rem }}
                />
                <span className="text-muted-foreground font-mono text-[11px]">
                  {s.rem}
                </span>
              </button>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="dimensioni-icone" title="Dimensioni icone">
          <div className="flex flex-wrap items-end gap-6 rounded-lg border p-6">
            {iconSizeScale.map((s) => (
              <div key={s.className} className="flex flex-col items-center gap-2">
                <StarIcon className={s.className} />
                <CopyChip label={s.className} copyValue={s.className} />
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="dimensioni-controlli" title="Altezza controlli">
          <div className="flex flex-wrap items-end gap-4 rounded-lg border p-6">
            {controlHeightScale.map((s) => (
              <div key={s.className} className="flex flex-col items-center gap-2">
                <div className={cn("bg-primary w-16 rounded-md", s.className)} />
                <CopyChip label={s.className} copyValue={s.className} />
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="dimensioni-radius" title="Radius">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {radiusScale.map((r) => (
              <RadiusPreview key={r.className} {...r} />
            ))}
          </div>
        </DocSubSection>
      </DocSection>

      {/* Colori primitivi */}
      <DocSection
        id="colori-primitivi"
        title="Colori primitivi"
        description="Le rampe dai token Figma di Pipelean (Default.tokens.json). Sono vere variabili Tailwind (--color-neutral-500, --color-red-600, …) — utilizzabili ovunque come bg-red-600, text-teal-700, ecc. — e i token semantici qui sotto sono costruiti esattamente su questi valori."
      >
        <div className="flex flex-col gap-6 rounded-lg border p-6">
          {ALL_RAMPS.map((r) => (
            <PrimitiveRamp key={r.name} name={r.name} swatches={r.swatches} />
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-6">
            <PrimitiveRamp name="base" swatches={BASE_PRIMITIVES} />
          </div>
          <div className="rounded-lg border p-6">
            <PrimitiveRamp name="brand (non collegato ai token semantici)" swatches={BRAND_PRIMITIVES} />
          </div>
        </div>
      </DocSection>

      {/* Colori semantici */}
      <DocSection
        id="colori-semantici"
        title="Colori semantici"
        description="Token in OKLCH letti dal vivo da :root / .dark."
      >
        <DocSubSection id="colori-semantici-superfici" title="Superfici">
          <TokenGrid tokens={surfaceTokens} />
        </DocSubSection>
        <DocSubSection id="colori-semantici-brand" title="Brand">
          <TokenGrid tokens={brandTokens} />
        </DocSubSection>
        <DocSubSection id="colori-semantici-stato" title="Stato">
          <TokenGrid tokens={stateTokens} />
        </DocSubSection>
        <DocSubSection id="colori-semantici-bordi" title="Bordi & focus">
          <TokenGrid tokens={borderTokens} />
        </DocSubSection>
        <DocSubSection id="colori-semantici-chart" title="Chart">
          <TokenGrid tokens={chartTokens} />
        </DocSubSection>
        <DocSubSection id="colori-semantici-sidebar" title="Sidebar">
          <TokenGrid tokens={sidebarTokens} />
        </DocSubSection>
      </DocSection>

      {/* Elevazione */}
      <DocSection id="elevazione" title="Elevazione">
        <DocSubSection id="elevazione-ombre" title="Ombre">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {shadowScale.map((s) => (
              <div
                key={s.className}
                className="flex flex-col items-center gap-3 rounded-lg border p-4"
              >
                <div className={cn("bg-card size-14 rounded-md", s.className)} />
                <CopyChip label={s.className} copyValue={s.className} />
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="elevazione-livelli" title="Livelli (z-index)">
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-muted-foreground text-xs">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">z-index</th>
                  <th className="px-4 py-2 text-left font-medium">Uso</th>
                </tr>
              </thead>
              <tbody>
                {zIndexScale.map((z) => (
                  <tr key={z.className} className="border-t">
                    <td className="px-4 py-2 font-mono text-xs">{z.className}</td>
                    <td className="text-muted-foreground px-4 py-2">{z.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSubSection>
      </DocSection>

      {/* Tipografia completa */}
      <DocSection id="tipografia" title="Tipografia completa" description="Font: Inter.">
        <DocSubSection id="tipografia-famiglia" title="Famiglia">
          <div className="rounded-lg border p-6">
            <p className="font-sans text-2xl">Pipelean design system — Aa Bb Cc 0123</p>
            <p className="text-muted-foreground mt-2 font-mono text-xs">
              font-sans → var(--font-inter)
            </p>
          </div>
        </DocSubSection>

        <DocSubSection id="tipografia-scala" title="Scala dimensioni">
          <div className="flex flex-col gap-3 rounded-lg border p-6">
            {typeScale.map((t) => (
              <div
                key={t.className}
                className="flex items-baseline gap-4 border-b pb-3 last:border-b-0"
              >
                <CopyChip label={t.className} copyValue={t.className} />
                <p className={cn(t.className, "truncate")}>Pipelean</p>
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="tipografia-pesi" title="Pesi">
          <div className="flex flex-wrap gap-3">
            {weightScale.map((w) => (
              <div key={w.className} className="rounded-lg border px-4 py-3">
                <p className={cn(w.className, "text-lg")}>Aa Bb Cc</p>
                <CopyChip label={w.className} copyValue={w.className} />
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="tipografia-interlinea" title="Interlinea">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadingScale.map((l) => (
              <div key={l.className} className="rounded-lg border p-4">
                <CopyChip label={l.className} copyValue={l.className} />
                <p className={cn(l.className, "text-muted-foreground mt-2 text-sm")}>
                  Pipelean aiuta i team a costruire prodotti coerenti più
                  velocemente, con un design system condiviso.
                </p>
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="tipografia-tracking" title="Tracking (letter-spacing)">
          <div className="flex flex-col gap-3 rounded-lg border p-6">
            {trackingScale.map((t) => (
              <div
                key={t.className}
                className="flex items-baseline gap-4 border-b pb-3 last:border-b-0"
              >
                <CopyChip label={t.className} copyValue={t.className} />
                <p className={cn(t.className, "text-lg")}>PIPELEAN DESIGN SYSTEM</p>
              </div>
            ))}
          </div>
        </DocSubSection>

        <DocSubSection id="tipografia-heading" title="Sistema di heading">
          <div className="flex flex-col gap-3 rounded-lg border p-6">
            <p className="text-4xl font-bold tracking-tight">Heading 1</p>
            <p className="text-3xl font-semibold tracking-tight">Heading 2</p>
            <p className="text-2xl font-semibold tracking-tight">Heading 3</p>
            <p className="text-xl font-medium">Heading 4</p>
            <p className="text-base">
              Body — testo principale per contenuti descrittivi.
            </p>
            <p className="text-muted-foreground text-sm">
              Muted / caption — testo secondario, didascalie e metadati.
            </p>
          </div>
        </DocSubSection>
      </DocSection>
    </div>
  );
}
