"use client";

import * as React from "react";
import { CalendarBlankIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlText } from "../../_components/controls";

const SIDES = ["top", "bottom", "left", "right"] as const;

export default function TooltipDocPage() {
  const [side, setSide] = React.useState<(typeof SIDES)[number]>("top");
  const [text, setText] = React.useState("Pianifica per dopo");

  const props = side !== "top" ? ` side="${side}"` : "";
  const code = `<Tooltip>\n  <TooltipTrigger render={<Button variant="secondary" size="icon"><CalendarBlankIcon /></Button>} />\n  <TooltipContent${props}>${text}</TooltipContent>\n</Tooltip>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Tooltip"
        description="Etichetta informativa mostrata al passaggio del mouse o al focus. Ogni <Tooltip> è avvolto in un TooltipProvider con delay condiviso."
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
              <ControlText label="Testo" value={text} onChange={setText} />
            </ControlsPanel>
          }
        >
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="secondary" size="icon">
                  <CalendarBlankIcon />
                </Button>
              }
            />
            <TooltipContent side={side}>{text}</TooltipContent>
          </Tooltip>
        </Demo>
      </DocSection>
    </div>
  );
}
