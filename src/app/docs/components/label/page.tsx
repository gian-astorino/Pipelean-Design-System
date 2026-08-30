"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlText } from "../../_components/controls";

export default function LabelDocPage() {
  const [text, setText] = React.useState("Indirizzo email");

  const code = `<div className="grid gap-1.5">\n  <Label htmlFor="email">${text}</Label>\n  <Input id="email" type="email" />\n</div>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Label"
        description="Etichetta per campi di form, accessibile via htmlFor/id."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlText label="Testo" value={text} onChange={setText} />
            </ControlsPanel>
          }
        >
          <div className="grid w-full max-w-xs gap-1.5">
            <Label htmlFor="doc-email">{text}</Label>
            <Input id="doc-email" type="email" placeholder="mario@pipelean.com" />
          </div>
        </Demo>
      </DocSection>
    </div>
  );
}
