"use client";

import * as React from "react";

import { Textarea } from "@/components/ui/textarea";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch, ControlText } from "../../_components/controls";

export default function TextareaDocPage() {
  const [placeholder, setPlaceholder] = React.useState("Scrivi qualcosa...");
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [];
  if (placeholder) props.push(`placeholder="${placeholder}"`);
  if (disabled) props.push("disabled");
  const code = `<Textarea ${props.join(" ")} />`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Textarea"
        description="Campo di testo multilinea, si espande con field-sizing-content."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlText label="Placeholder" value={placeholder} onChange={setPlaceholder} />
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <Textarea placeholder={placeholder} disabled={disabled} className="max-w-sm" />
        </Demo>
      </DocSection>
    </div>
  );
}
