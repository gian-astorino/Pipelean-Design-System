"use client";

import { useCssVar } from "@/hooks/use-css-var";
import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

function TokenSwatch({
  varName,
  label,
  className,
}: {
  varName: string;
  label: string;
  className?: string;
}) {
  const value = useCssVar(varName);

  return (
    <button
      type="button"
      onClick={() => copyToClipboard(`var(${varName})`, `${label} · ${value}`)}
      className={cn(
        "group flex flex-col gap-2 rounded-lg border p-3 text-left transition-colors hover:bg-accent/50",
        className
      )}
    >
      <div
        className="h-14 w-full rounded-md border"
        style={{ background: `var(${varName})` }}
      />
      <div className="flex flex-col gap-0.5">
        <p className="text-xs font-medium">{label}</p>
        <p className="text-muted-foreground font-mono text-[11px]">{varName}</p>
        <p className="text-muted-foreground/70 font-mono text-[10px] tabular-nums">
          {value || "…"}
        </p>
      </div>
    </button>
  );
}

export { TokenSwatch };
