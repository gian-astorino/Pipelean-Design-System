"use client";

import * as React from "react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch, ControlText } from "../../_components/controls";

export default function SwitchDocPage() {
  const [checked, setChecked] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [label, setLabel] = React.useState("Notifiche email");

  const props: string[] = [`checked={${checked}}`, "onCheckedChange={setChecked}"];
  if (disabled) props.push("disabled");
  const code = `<div className="flex items-center gap-2">\n  <Switch id="notify" ${props.join(" ")} />\n  <Label htmlFor="notify">${label}</Label>\n</div>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Switch"
        description="Interruttore on/off per impostazioni booleane."
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
            <Switch
              id="doc-notify"
              checked={checked}
              onCheckedChange={setChecked}
              disabled={disabled}
            />
            <Label htmlFor="doc-notify">{label}</Label>
          </div>
        </Demo>
      </DocSection>
    </div>
  );
}
