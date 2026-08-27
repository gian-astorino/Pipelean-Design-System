"use client";

import * as React from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const VARIANTS = ["default", "secondary", "outline", "destructive", "success", "warning"] as const;

export default function BadgeDocPage() {
  const [variant, setVariant] = React.useState<(typeof VARIANTS)[number]>("default");
  const [label, setLabel] = React.useState("Badge");
  const [icon, setIcon] = React.useState(false);

  const props = variant !== "default" ? ` variant="${variant}"` : "";
  const code = `<Badge${props}>\n  ${icon ? "<CheckCircleIcon />\n  " : ""}${label}\n</Badge>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Badge"
        description="Etichetta compatta per stato, categoria o conteggio."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Variant"
                value={variant}
                onChange={(v) => setVariant(v as typeof variant)}
                options={VARIANTS.map((v) => ({ value: v, label: v }))}
              />
              <ControlText label="Testo" value={label} onChange={setLabel} />
              <ControlSwitch label="Icona" checked={icon} onChange={setIcon} />
            </ControlsPanel>
          }
        >
          <Badge variant={variant}>
            {icon && <CheckCircleIcon />}
            {label}
          </Badge>
        </Demo>
      </DocSection>

      <DocSection title="Tutte le varianti">
        <div className="flex flex-wrap gap-2 rounded-lg border p-6">
          {VARIANTS.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
