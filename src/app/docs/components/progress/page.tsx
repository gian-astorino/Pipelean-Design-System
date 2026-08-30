"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel } from "../../_components/controls";

export default function ProgressDocPage() {
  const [value, setValue] = React.useState(38);

  const code = `<Progress value={${value}} />`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Progress"
        description="Barra di avanzamento indeterminata o con valore controllato (0–100)."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <div className="grid gap-1.5">
                <p className="text-muted-foreground text-xs">Value: {value}%</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" onClick={() => setValue((v) => Math.max(0, v - 10))}>
                    -10
                  </Button>
                  <Button size="sm" variant="secondary" onClick={() => setValue((v) => Math.min(100, v + 10))}>
                    +10
                  </Button>
                </div>
              </div>
            </ControlsPanel>
          }
        >
          <Progress value={value} className="w-64" />
        </Demo>
      </DocSection>
    </div>
  );
}
