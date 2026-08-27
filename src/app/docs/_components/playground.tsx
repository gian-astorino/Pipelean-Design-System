"use client";

import * as React from "react";
import { DeviceMobileIcon, MonitorIcon } from "@phosphor-icons/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { CodeBlock } from "./code-block";

type Viewport = "desktop" | "mobile";

function ViewportToggle({
  viewport,
  onChange,
}: {
  viewport: Viewport;
  onChange: (v: Viewport) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-md border p-0.5">
      <button
        type="button"
        onClick={() => onChange("desktop")}
        aria-pressed={viewport === "desktop"}
        aria-label="Anteprima desktop"
        title="Desktop"
        className={cn(
          "flex size-7 items-center justify-center rounded-sm transition-colors",
          viewport === "desktop"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <MonitorIcon className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => onChange("mobile")}
        aria-pressed={viewport === "mobile"}
        aria-label="Anteprima mobile"
        title="Mobile"
        className={cn(
          "flex size-7 items-center justify-center rounded-sm transition-colors",
          viewport === "mobile"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <DeviceMobileIcon className="size-4" />
      </button>
    </div>
  );
}

function Playground({
  code,
  className,
  previewClassName,
  children,
}: {
  code: string;
  className?: string;
  previewClassName?: string;
  children: React.ReactNode;
}) {
  const [viewport, setViewport] = React.useState<Viewport>("desktop");

  return (
    <Tabs defaultValue="preview" className={cn("gap-3", className)}>
      <div className="flex items-center justify-between">
        <TabsList className="w-fit">
          <TabsTrigger value="preview">Anteprima</TabsTrigger>
          <TabsTrigger value="code">Codice</TabsTrigger>
        </TabsList>
        <ViewportToggle viewport={viewport} onChange={setViewport} />
      </div>
      <TabsContent value="preview">
        <div
          className={cn(
            "flex min-h-[280px] w-full items-center justify-center rounded-lg border p-10",
            "[background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]",
            previewClassName
          )}
        >
          {viewport === "mobile" ? (
            <div className="bg-background w-[360px] max-w-full rounded-[1.75rem] border-4 shadow-lg">
              <div className="bg-muted-foreground/30 mx-auto mt-2 h-1 w-10 rounded-full" />
              <div className="flex min-h-[420px] items-center justify-center overflow-x-hidden p-6">
                {children}
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  );
}

export { Playground };
