"use client";

import { copyToClipboard } from "@/lib/clipboard";

function CopyChip({
  label,
  copyValue,
  description,
}: {
  label: string;
  copyValue: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => copyToClipboard(copyValue, description ?? copyValue)}
      className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md border px-2 py-1 font-mono text-[11px] transition-colors"
    >
      {label}
    </button>
  );
}

export { CopyChip };
