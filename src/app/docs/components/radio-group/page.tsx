"use client";

import * as React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch } from "../../_components/controls";

const OPTIONS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupDocPage() {
  const [value, setValue] = React.useState("pro");
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [`value="${value}"`, "onValueChange={setValue}"];
  if (disabled) props.push("disabled");
  const code = `<RadioGroup ${props.join(" ")}>\n${OPTIONS.map(
    (o) =>
      `  <div className="flex items-center gap-2">\n    <RadioGroupItem value="${o.value}" id="${o.value}" />\n    <Label htmlFor="${o.value}">${o.label}</Label>\n  </div>`
  ).join("\n")}\n</RadioGroup>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Radio Group"
        description="Selezione singola tra un insieme di opzioni mutuamente esclusive."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <RadioGroup
            value={value}
            onValueChange={(v) => setValue(String(v))}
            disabled={disabled}
            className="gap-3"
          >
            {OPTIONS.map((o) => (
              <div key={o.value} className="flex items-center gap-2">
                <RadioGroupItem value={o.value} id={`doc-${o.value}`} />
                <Label htmlFor={`doc-${o.value}`}>{o.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </Demo>
      </DocSection>
    </div>
  );
}
