"use client";

import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch, ControlText } from "../../_components/controls";

export default function CheckboxDocPage() {
  const [checked, setChecked] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [label, setLabel] = React.useState("Accetto i termini");

  const props: string[] = [`checked={${checked}}`, "onCheckedChange={setChecked}"];
  if (disabled) props.push("disabled");
  const code = `<div className="flex items-center gap-2">\n  <Checkbox id="terms" ${props.join(" ")} />\n  <Label htmlFor="terms">${label}</Label>\n</div>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Checkbox"
        description="Casella di spunta accessibile, con stato indeterminato disponibile via prop."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlText label="Etichetta" value={label} onChange={setLabel} />
              <ControlSwitch label="Checked" checked={checked} onChange={setChecked} />
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <div className="flex items-center gap-2">
            <Checkbox
              id="doc-terms"
              checked={checked}
              onCheckedChange={setChecked}
              disabled={disabled}
            />
            <Label htmlFor="doc-terms">{label}</Label>
          </div>
        </Demo>
      </DocSection>

      <DocSection title="Indeterminato">
        <div className="flex items-center gap-2 rounded-lg border p-6">
          <Checkbox indeterminate />
          <Label>Selezione parziale</Label>
        </div>
      </DocSection>
    </div>
  );
}
