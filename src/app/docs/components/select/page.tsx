"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch } from "../../_components/controls";

const OPTIONS = [
  { value: "admin", label: "Amministratore" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Visualizzatore" },
];

export default function SelectDocPage() {
  const [value, setValue] = React.useState("editor");
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [`value="${value}"`, "onValueChange={setValue}"];
  if (disabled) props.push("disabled");
  const code = `<Select ${props.join(" ")}>\n  <SelectTrigger>\n    <SelectValue placeholder="Seleziona un ruolo" />\n  </SelectTrigger>\n  <SelectContent>\n${OPTIONS.map(
    (o) => `    <SelectItem value="${o.value}">${o.label}</SelectItem>`
  ).join("\n")}\n  </SelectContent>\n</Select>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Select"
        description="Menu a tendina per scegliere un'opzione tra una lista, costruito su Base UI Select."
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
          <Select value={value} onValueChange={(v) => setValue(String(v))} disabled={disabled}>
            <SelectTrigger className="w-56">
              <SelectValue placeholder="Seleziona un ruolo" />
            </SelectTrigger>
            <SelectContent>
              {OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Demo>
      </DocSection>
    </div>
  );
}
