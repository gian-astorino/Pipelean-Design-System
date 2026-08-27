"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const TYPES = ["text", "email", "password", "number", "search"] as const;

export default function InputDocPage() {
  const [type, setType] = React.useState<(typeof TYPES)[number]>("text");
  const [placeholder, setPlaceholder] = React.useState("Mario Rossi");
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [];
  if (type !== "text") props.push(`type="${type}"`);
  if (placeholder) props.push(`placeholder="${placeholder}"`);
  if (disabled) props.push("disabled");

  const code = `<Input ${props.join(" ")} />`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Input"
        description="Campo di testo a singola riga, stilizzato per stati di focus, errore e disabilitazione."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Type"
                value={type}
                onChange={(v) => setType(v as typeof type)}
                options={TYPES.map((t) => ({ value: t, label: t }))}
              />
              <ControlText label="Placeholder" value={placeholder} onChange={setPlaceholder} />
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <Input type={type} placeholder={placeholder} disabled={disabled} className="max-w-xs" />
        </Demo>
      </DocSection>

      <DocSection title="Stato di errore" description="Applicato tramite aria-invalid.">
        <div className="rounded-lg border p-6">
          <Input aria-invalid placeholder="Email non valida" className="max-w-xs" />
        </div>
      </DocSection>
    </div>
  );
}
