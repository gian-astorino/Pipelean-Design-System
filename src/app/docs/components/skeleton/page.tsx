"use client";

import * as React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect } from "../../_components/controls";

const SHAPES = {
  line: "h-4 w-48",
  circle: "size-12 rounded-full",
  card: "h-24 w-48",
} as const;

export default function SkeletonDocPage() {
  const [shape, setShape] = React.useState<keyof typeof SHAPES>("line");

  const code = `<Skeleton className="${SHAPES[shape]}" />`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Skeleton"
        description="Placeholder animato da mostrare durante il caricamento dei contenuti."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Forma"
                value={shape}
                onChange={(v) => setShape(v as keyof typeof SHAPES)}
                options={Object.keys(SHAPES).map((s) => ({ value: s, label: s }))}
              />
            </ControlsPanel>
          }
        >
          <Skeleton className={SHAPES[shape]} />
        </Demo>
      </DocSection>

      <DocSection title="Esempio: card di caricamento">
        <div className="flex items-center gap-3 rounded-lg border p-6">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      </DocSection>
    </div>
  );
}
