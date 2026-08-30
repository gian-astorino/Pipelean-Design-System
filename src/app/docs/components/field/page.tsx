"use client";

import * as React from "react";

import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const ORIENTATIONS = ["vertical", "horizontal"] as const;

export default function FieldDocPage() {
  const [orientation, setOrientation] = React.useState<(typeof ORIENTATIONS)[number]>(
    "vertical"
  );
  const [label, setLabel] = React.useState("Nome completo");
  const [description, setDescription] = React.useState(
    "Come apparirà sul tuo profilo pubblico."
  );
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [];
  if (orientation !== "vertical") props.push(`orientation="${orientation}"`);
  const propsStr = props.length ? " " + props.join(" ") : "";

  const code =
    orientation === "horizontal"
      ? `<Field${propsStr}>\n  <FieldLabel htmlFor="notif">${label}</FieldLabel>\n  <Switch id="notif"${disabled ? " disabled" : ""} />\n</Field>`
      : `<Field${propsStr}>\n  <FieldLabel htmlFor="name">${label}</FieldLabel>\n  <Input id="name"${disabled ? " disabled" : ""} />\n  <FieldDescription>${description}</FieldDescription>\n</Field>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Field"
        description="Impila un'etichetta (FieldLabel), un controllo e un testo di supporto (FieldDescription) con spacing consistente. FieldLabel si attenua automaticamente quando il controllo al suo interno è disabled."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Orientation"
                value={orientation}
                onChange={(v) => setOrientation(v as typeof orientation)}
                options={ORIENTATIONS.map((o) => ({ value: o, label: o }))}
              />
              <ControlText label="Label" value={label} onChange={setLabel} />
              {orientation === "vertical" && (
                <ControlText label="Description" value={description} onChange={setDescription} />
              )}
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          {orientation === "horizontal" ? (
            <Field orientation="horizontal" className="w-full max-w-xs">
              <FieldLabel htmlFor="demo-notif">{label}</FieldLabel>
              <Switch id="demo-notif" disabled={disabled} />
            </Field>
          ) : (
            <Field className="w-full max-w-xs">
              <FieldLabel htmlFor="demo-name">{label}</FieldLabel>
              <Input id="demo-name" disabled={disabled} />
              {description && <FieldDescription>{description}</FieldDescription>}
            </Field>
          )}
        </Demo>
      </DocSection>

      <DocSection
        title="Disabled"
        description="FieldLabel legge lo stato disabled del controllo tramite group-has-[[disabled]]/field, senza bisogno di passargli una prop a parte."
      >
        <div className="rounded-lg border p-6">
          <Field className="w-full max-w-xs">
            <FieldLabel htmlFor="field-disabled-demo">Piano</FieldLabel>
            <Input id="field-disabled-demo" defaultValue="Pro" disabled />
            <FieldDescription>Gestito dal tuo amministratore.</FieldDescription>
          </Field>
        </div>
      </DocSection>
    </div>
  );
}
