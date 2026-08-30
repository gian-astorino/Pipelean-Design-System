"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { DocHeader, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlText } from "../../_components/controls";
import { CodeBlock } from "../../_components/code-block";

const TYPES = ["default", "success", "error", "info", "warning"] as const;

export default function SonnerDocPage() {
  const [type, setType] = React.useState<(typeof TYPES)[number]>("success");
  const [message, setMessage] = React.useState("Pipeline avviata");

  const call = type === "default" ? "toast" : `toast.${type}`;
  const code = `${call}("${message}", {\n  description: "Il deploy di Pipelean è in corso.",\n});`;

  const fire = () => {
    const description = "Il deploy di Pipelean è in corso.";
    if (type === "default") toast(message, { description });
    else toast[type](message, { description });
  };

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Sonner (Toast)"
        description="Notifiche toast, montate una sola volta in layout.tsx tramite <Toaster />."
      />

      <DocSection title="Playground">
        <div className="grid items-start gap-4 lg:grid-cols-[1fr_260px]">
          <div className="flex flex-col gap-3">
            <div className="flex min-h-[280px] w-full items-center justify-center rounded-lg border p-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]">
              <Button onClick={fire}>Mostra toast</Button>
            </div>
            <CodeBlock code={code} />
          </div>
          <ControlsPanel>
            <ControlSelect
              label="Tipo"
              value={type}
              onChange={(v) => setType(v as typeof type)}
              options={TYPES.map((t) => ({ value: t, label: t }))}
            />
            <ControlText label="Messaggio" value={message} onChange={setMessage} />
          </ControlsPanel>
        </div>
      </DocSection>
    </div>
  );
}
