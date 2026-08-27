"use client";

import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

export interface PrimitiveSwatch {
  step: string;
  value: string;
}

// The raw color ramps the theme is built from (Tailwind CSS v4's neutral and
// blue scales, in OKLCH). These aren't exposed as CSS variables — the
// semantic tokens in globals.css are literal values taken from this ramp —
// so they're listed here as a static reference.
export const NEUTRAL_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "oklch(0.985 0 0)" },
  { step: "100", value: "oklch(0.97 0 0)" },
  { step: "200", value: "oklch(0.922 0 0)" },
  { step: "300", value: "oklch(0.87 0 0)" },
  { step: "400", value: "oklch(0.708 0 0)" },
  { step: "500", value: "oklch(0.556 0 0)" },
  { step: "600", value: "oklch(0.439 0 0)" },
  { step: "700", value: "oklch(0.371 0 0)" },
  { step: "800", value: "oklch(0.269 0 0)" },
  { step: "900", value: "oklch(0.205 0 0)" },
  { step: "950", value: "oklch(0.145 0 0)" },
];

export const BLUE_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "oklch(0.970 0.014 254.604)" },
  { step: "100", value: "oklch(0.932 0.032 255.585)" },
  { step: "200", value: "oklch(0.882 0.059 254.128)" },
  { step: "300", value: "oklch(0.809 0.105 251.813)" },
  { step: "400", value: "oklch(0.707 0.165 254.624)" },
  { step: "500", value: "oklch(0.623 0.214 259.815)" },
  { step: "600", value: "oklch(0.546 0.245 262.881)" },
  { step: "700", value: "oklch(0.488 0.243 264.376)" },
  { step: "800", value: "oklch(0.424 0.199 265.638)" },
  { step: "900", value: "oklch(0.379 0.146 265.522)" },
  { step: "950", value: "oklch(0.282 0.091 267.935)" },
];

function PrimitiveRamp({
  name,
  swatches,
}: {
  name: string;
  swatches: PrimitiveSwatch[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-xs font-medium capitalize">{name}</p>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11">
        {swatches.map((s) => (
          <button
            key={s.step}
            type="button"
            onClick={() => copyToClipboard(s.value, `${name}-${s.step}`)}
            className={cn(
              "hover:ring-ring flex flex-col items-center gap-1.5 rounded-md p-1.5 transition-shadow hover:ring-2"
            )}
          >
            <div
              className="h-10 w-full rounded-md border"
              style={{ background: s.value }}
            />
            <p className="font-mono text-[10px] font-medium">{s.step}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export { PrimitiveRamp };
