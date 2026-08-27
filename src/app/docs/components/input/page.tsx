"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const TYPES = ["text", "email", "password", "number", "search"] as const;

export default function InputDocPage() {
  const [type, setType] = React.useState<(typeof TYPES)[number]>("text");
  const [placeholder, setPlaceholder] = React.useState("Mario Rossi");
  const [label, setLabel] = React.useState("Nome completo");
  const [description, setDescription] = React.useState(
    "Come apparirà sul tuo profilo pubblico."
  );
  const [disabled, setDisabled] = React.useState(false);

  const inputProps: string[] = [];
  if (type !== "text") inputProps.push(`type="${type}"`);
  if (placeholder) inputProps.push(`placeholder="${placeholder}"`);
  if (disabled) inputProps.push("disabled");

  const code = `<Field>
  <FieldLabel htmlFor="name">${label}</FieldLabel>
  <Input id="name"${inputProps.length ? " " + inputProps.join(" ") : ""} />
  <FieldDescription>${description}</FieldDescription>
</Field>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Input"
        description="Campo di testo a singola riga, stilizzato per stati di focus, errore e disabilitazione. Si compone con Field, FieldLabel e FieldDescription per etichetta e testo di supporto."
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
              <ControlText label="Label" value={label} onChange={setLabel} />
              <ControlText label="Description" value={description} onChange={setDescription} />
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="demo-input">{label}</FieldLabel>
            <Input
              id="demo-input"
              type={type}
              placeholder={placeholder}
              disabled={disabled}
            />
            {description && <FieldDescription>{description}</FieldDescription>}
          </Field>
        </Demo>
      </DocSection>

      <DocSection
        title="Field, FieldLabel, FieldDescription"
        description="Field impila etichetta, controllo e testo di supporto con lo spacing corretto; FieldLabel si disabilita insieme al controllo (via group-has-disabled)."
      >
        <div className="flex flex-col gap-6 rounded-lg border p-6 sm:flex-row sm:gap-10">
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input id="field-email" type="email" placeholder="mario.rossi@email.com" />
            <FieldDescription>Useremo questo indirizzo solo per l&apos;accesso.</FieldDescription>
          </Field>
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="field-disabled">Piano</FieldLabel>
            <Input id="field-disabled" defaultValue="Pro" disabled />
            <FieldDescription>Gestito dal tuo amministratore.</FieldDescription>
          </Field>
        </div>
      </DocSection>

      <DocSection title="Stato di errore" description="Applicato tramite aria-invalid.">
        <div className="rounded-lg border p-6">
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="field-error">Email</FieldLabel>
            <Input id="field-error" aria-invalid placeholder="Email non valida" />
            <FieldDescription className="text-destructive">
              Inserisci un indirizzo email valido.
            </FieldDescription>
          </Field>
        </div>
      </DocSection>
    </div>
  );
}
