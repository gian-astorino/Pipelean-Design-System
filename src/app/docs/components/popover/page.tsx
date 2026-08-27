"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect } from "../../_components/controls";

const SIDES = ["top", "bottom", "left", "right"] as const;
const ALIGNS = ["start", "center", "end"] as const;

export default function PopoverDocPage() {
  const [side, setSide] = React.useState<(typeof SIDES)[number]>("bottom");
  const [align, setAlign] = React.useState<(typeof ALIGNS)[number]>("center");

  const props: string[] = [];
  if (side !== "bottom") props.push(`side="${side}"`);
  if (align !== "center") props.push(`align="${align}"`);
  const propsStr = props.length ? " " + props.join(" ") : "";

  const code = `<Popover>\n  <PopoverTrigger render={<Button variant="outline">Apri</Button>} />\n  <PopoverContent${propsStr}>\n    <p className="text-sm font-medium">Impostazioni rapide</p>\n    <p className="text-muted-foreground text-sm">\n      Configura le preferenze da qui.\n    </p>\n  </PopoverContent>\n</Popover>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Popover"
        description="Contenuto flottante ancorato a un trigger, per azioni o informazioni contestuali non modali."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Side"
                value={side}
                onChange={(v) => setSide(v as typeof side)}
                options={SIDES.map((s) => ({ value: s, label: s }))}
              />
              <ControlSelect
                label="Align"
                value={align}
                onChange={(v) => setAlign(v as typeof align)}
                options={ALIGNS.map((a) => ({ value: a, label: a }))}
              />
            </ControlsPanel>
          }
        >
          <Popover>
            <PopoverTrigger render={<Button variant="outline">Apri popover</Button>} />
            <PopoverContent side={side} align={align}>
              <p className="text-sm font-medium">Impostazioni rapide</p>
              <p className="text-muted-foreground text-sm">
                Configura le preferenze da qui.
              </p>
            </PopoverContent>
          </Popover>
        </Demo>
      </DocSection>
    </div>
  );
}
