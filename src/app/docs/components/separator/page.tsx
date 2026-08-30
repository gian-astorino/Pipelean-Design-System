"use client";

import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect } from "../../_components/controls";

export default function SeparatorDocPage() {
  const [orientation, setOrientation] = React.useState<"horizontal" | "vertical">("horizontal");

  const code = `<Separator orientation="${orientation}" />`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Separator"
        description="Divisore visivo tra sezioni di contenuto, orizzontale o verticale."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Orientation"
                value={orientation}
                onChange={(v) => setOrientation(v as typeof orientation)}
                options={[
                  { value: "horizontal", label: "horizontal" },
                  { value: "vertical", label: "vertical" },
                ]}
              />
            </ControlsPanel>
          }
        >
          {orientation === "horizontal" ? (
            <div className="w-full max-w-xs">
              <p className="text-sm">Sopra</p>
              <Separator className="my-3" />
              <p className="text-sm">Sotto</p>
            </div>
          ) : (
            <div className="flex h-16 items-center gap-3">
              <p className="text-sm">Sinistra</p>
              <Separator orientation="vertical" />
              <p className="text-sm">Destra</p>
            </div>
          )}
        </Demo>
      </DocSection>
    </div>
  );
}
