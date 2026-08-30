"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect } from "../../_components/controls";

const TABS = [
  { value: "account", label: "Account", content: "Gestisci le informazioni del tuo profilo." },
  { value: "team", label: "Team", content: "Invita e gestisci i membri del team." },
  { value: "billing", label: "Fatturazione", content: "Visualizza fatture e metodi di pagamento." },
];

export default function TabsDocPage() {
  const [defaultValue, setDefaultValue] = React.useState("account");

  const code = `<Tabs defaultValue="${defaultValue}">\n  <TabsList>\n${TABS.map(
    (t) => `    <TabsTrigger value="${t.value}">${t.label}</TabsTrigger>`
  ).join("\n")}\n  </TabsList>\n${TABS.map(
    (t) => `  <TabsContent value="${t.value}">${t.content}</TabsContent>`
  ).join("\n")}\n</Tabs>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Tabs"
        description="Naviga tra pannelli di contenuto alternativi all'interno della stessa vista."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none] items-start"
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Tab iniziale"
                value={defaultValue}
                onChange={setDefaultValue}
                options={TABS.map((t) => ({ value: t.value, label: t.label }))}
              />
            </ControlsPanel>
          }
        >
          <Tabs key={defaultValue} defaultValue={defaultValue} className="w-full max-w-sm">
            <TabsList>
              {TABS.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t) => (
              <TabsContent key={t.value} value={t.value} className="text-muted-foreground text-sm">
                {t.content}
              </TabsContent>
            ))}
          </Tabs>
        </Demo>
      </DocSection>
    </div>
  );
}
