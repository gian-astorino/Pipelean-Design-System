"use client";

import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

import type { PrimitiveSwatch } from "./primitive-data";

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
export type { PrimitiveSwatch };
