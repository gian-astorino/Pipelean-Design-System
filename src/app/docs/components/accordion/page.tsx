"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch } from "../../_components/controls";

const ITEMS = [
  { value: "item-1", trigger: "Cos'è Pipelean?", content: "Una piattaforma per orchestrare pipeline di dati e prodotto." },
  { value: "item-2", trigger: "Su cosa si basa il design system?", content: "Su shadcn/ui, Base UI e Tailwind CSS v4." },
  { value: "item-3", trigger: "Posso estenderlo?", content: "Sì, aggiungi componenti in src/components/ui." },
];

export default function AccordionDocPage() {
  const [multiple, setMultiple] = React.useState(false);

  const props = multiple ? " multiple" : "";
  const code = `<Accordion${props}>\n${ITEMS.map(
    (i) =>
      `  <AccordionItem value="${i.value}">\n    <AccordionTrigger>${i.trigger}</AccordionTrigger>\n    <AccordionContent>${i.content}</AccordionContent>\n  </AccordionItem>`
  ).join("\n")}\n</Accordion>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Accordion"
        description="Pannelli espandibili/comprimibili, uno alla volta o più aperti insieme."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none] items-start"
          controls={
            <ControlsPanel>
              <ControlSwitch label="Multiple aperti" checked={multiple} onChange={setMultiple} />
            </ControlsPanel>
          }
        >
          <Accordion multiple={multiple} key={String(multiple)} className="w-full max-w-md">
            {ITEMS.map((i) => (
              <AccordionItem key={i.value} value={i.value}>
                <AccordionTrigger>{i.trigger}</AccordionTrigger>
                <AccordionContent>{i.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Demo>
      </DocSection>
    </div>
  );
}
