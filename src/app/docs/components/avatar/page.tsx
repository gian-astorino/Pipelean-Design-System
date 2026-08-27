"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch, ControlText } from "../../_components/controls";

const SIZES = {
  sm: "size-6",
  default: "size-8",
  lg: "size-12",
  xl: "size-16",
} as const;

const VALID_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMjU2M2ViIi8+PC9zdmc+";

export default function AvatarDocPage() {
  const [size, setSize] = React.useState<keyof typeof SIZES>("default");
  const [fallback, setFallback] = React.useState("MP");
  const [showImage, setShowImage] = React.useState(true);

  const sizeClass = size !== "default" ? ` className="${SIZES[size]}"` : "";
  const code = `<Avatar${sizeClass}>\n  <AvatarImage src="${showImage ? "/avatar.jpg" : ""}" alt="Utente" />\n  <AvatarFallback>${fallback}</AvatarFallback>\n</Avatar>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Avatar"
        description="Immagine profilo con fallback automatico alle iniziali se l'immagine non carica."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Size"
                value={size}
                onChange={(v) => setSize(v as keyof typeof SIZES)}
                options={Object.keys(SIZES).map((s) => ({ value: s, label: s }))}
              />
              <ControlText label="Fallback" value={fallback} onChange={setFallback} />
              <ControlSwitch label="Immagine valida" checked={showImage} onChange={setShowImage} />
            </ControlsPanel>
          }
        >
          <Avatar className={SIZES[size]}>
            <AvatarImage src={showImage ? VALID_IMG : "/broken.jpg"} alt="Utente" />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </Demo>
      </DocSection>

      <DocSection title="Dimensioni">
        <div className="flex flex-wrap items-center gap-4 rounded-lg border p-6">
          {(Object.keys(SIZES) as (keyof typeof SIZES)[]).map((s) => (
            <Avatar key={s} className={SIZES[s]}>
              <AvatarFallback>{s.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
