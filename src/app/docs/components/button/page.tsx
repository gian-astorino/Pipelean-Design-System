"use client";

import * as React from "react";
import { RocketLaunchIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const VARIANTS = ["default", "secondary", "ghost", "link", "destructive"] as const;
const SIZES = ["default", "sm", "lg", "icon"] as const;

export default function ButtonDocPage() {
  const [variant, setVariant] = React.useState<(typeof VARIANTS)[number]>("default");
  const [size, setSize] = React.useState<(typeof SIZES)[number]>("default");
  const [label, setLabel] = React.useState("Bottone");
  const [icon, setIcon] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const props: string[] = [];
  if (variant !== "default") props.push(`variant="${variant}"`);
  if (size !== "default") props.push(`size="${size}"`);
  if (loading) props.push("loading");
  if (disabled) props.push("disabled");
  const propsStr = props.length ? " " + props.join(" ") : "";

  const code =
    size === "icon"
      ? `<Button${propsStr}>\n  <RocketLaunchIcon />\n</Button>`
      : `<Button${propsStr}>\n  ${icon ? "<RocketLaunchIcon />\n  " : ""}${label}\n</Button>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Button"
        description="Bottone d'azione con varianti, dimensioni, stato di caricamento e icone. Costruito su Base UI (useRender) per essere composto con qualunque elemento (render prop)."
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
              <ControlSelect
                label="Size"
                value={size}
                onChange={(v) => setSize(v as typeof size)}
                options={SIZES.map((v) => ({ value: v, label: v }))}
              />
              {size !== "icon" && (
                <ControlText label="Testo" value={label} onChange={setLabel} />
              )}
              {size !== "icon" && (
                <ControlSwitch label="Icona" checked={icon} onChange={setIcon} />
              )}
              <ControlSwitch label="Loading" checked={loading} onChange={setLoading} />
              <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
            </ControlsPanel>
          }
        >
          <Button variant={variant} size={size} loading={loading} disabled={disabled}>
            {size === "icon" ? (
              <RocketLaunchIcon />
            ) : (
              <>
                {icon && <RocketLaunchIcon />}
                {label}
              </>
            )}
          </Button>
        </Demo>
      </DocSection>

      <DocSection title="Tutte le varianti" description="Ogni combinazione variant × size.">
        <div className="flex flex-col gap-4 rounded-lg border p-6">
          {VARIANTS.map((v) => (
            <div key={v} className="flex flex-wrap items-center gap-3">
              <span className="text-muted-foreground w-20 shrink-0 font-mono text-xs">
                {v}
              </span>
              {SIZES.map((s) => (
                <Button key={s} variant={v} size={s}>
                  {s === "icon" ? <RocketLaunchIcon /> : `${s}`}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Stati">
        <div className="flex flex-wrap items-center gap-3 rounded-lg border p-6">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled secondary
          </Button>
        </div>
      </DocSection>
    </div>
  );
}
