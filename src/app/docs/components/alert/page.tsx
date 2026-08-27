"use client";

import * as React from "react";
import { RocketLaunchIcon, TrashIcon, WarningIcon, CheckCircleIcon } from "@phosphor-icons/react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const VARIANTS = ["default", "destructive", "success", "warning"] as const;

const ICONS: Record<(typeof VARIANTS)[number], React.ElementType> = {
  default: RocketLaunchIcon,
  destructive: TrashIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
};

const ICON_NAMES: Record<(typeof VARIANTS)[number], string> = {
  default: "RocketLaunchIcon",
  destructive: "TrashIcon",
  success: "CheckCircleIcon",
  warning: "WarningIcon",
};

export default function AlertDocPage() {
  const [variant, setVariant] = React.useState<(typeof VARIANTS)[number]>("default");
  const [title, setTitle] = React.useState("Nuova versione disponibile");
  const [icon, setIcon] = React.useState(true);

  const Icon = ICONS[variant];
  const props = variant !== "default" ? ` variant="${variant}"` : "";
  const code = `<Alert${props}>\n  ${icon ? `<${ICON_NAMES[variant]} />\n  ` : ""}<AlertTitle>${title}</AlertTitle>\n  <AlertDescription>\n    Aggiorna il pacchetto per le ultime componenti.\n  </AlertDescription>\n</Alert>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Alert"
        description="Messaggio in evidenza per informazioni, errori, successi o avvisi."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Variant"
                value={variant}
                onChange={(v) => setVariant(v as typeof variant)}
                options={VARIANTS.map((v) => ({ value: v, label: v }))}
              />
              <ControlText label="Titolo" value={title} onChange={setTitle} />
              <ControlSwitch label="Icona" checked={icon} onChange={setIcon} />
            </ControlsPanel>
          }
        >
          <Alert variant={variant} className="w-full max-w-md">
            {icon && <Icon />}
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
              Aggiorna il pacchetto per le ultime componenti.
            </AlertDescription>
          </Alert>
        </Demo>
      </DocSection>

      <DocSection title="Tutte le varianti">
        <div className="flex flex-col gap-3 rounded-lg border p-6">
          {VARIANTS.map((v) => {
            const VIcon = ICONS[v];
            return (
              <Alert key={v} variant={v}>
                <VIcon />
                <AlertTitle className="capitalize">{v}</AlertTitle>
                <AlertDescription>Esempio di alert in variante {v}.</AlertDescription>
              </Alert>
            );
          })}
        </div>
      </DocSection>
    </div>
  );
}
