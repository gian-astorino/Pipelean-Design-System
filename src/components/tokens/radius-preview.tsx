"use client";

import { useCssVar } from "@/hooks/use-css-var";
import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

function RadiusPreview({
  varName,
  className,
  label,
}: {
  varName: string;
  className: string;
  label: string;
}) {
  const value = useCssVar(varName);

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(className, `${label} · ${value}`)}
      className="hover:bg-accent/50 flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors"
    >
      <div className={cn("bg-primary size-14", className)} />
      <div className="text-center">
        <p className="font-mono text-xs font-medium">{className}</p>
        <p className="text-muted-foreground text-[11px] tabular-nums">
          {value || "…"}
        </p>
      </div>
    </button>
  );
}

export { RadiusPreview };
