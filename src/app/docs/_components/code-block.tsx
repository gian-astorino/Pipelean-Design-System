"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className={cn("bg-muted/50 relative rounded-lg border", className)}>
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copia il codice"
        className="bg-background hover:bg-accent hover:text-accent-foreground text-muted-foreground absolute top-2 right-2 flex size-7 items-center justify-center rounded-md border transition-colors"
      >
        {copied ? (
          <CheckIcon className="size-3.5" />
        ) : (
          <CopyIcon className="size-3.5" />
        )}
      </button>
      <pre className="overflow-x-auto p-4 pr-12 text-[13px] leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

export { CodeBlock };
