"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { CodeBlock } from "./code-block";

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
  return (
    <Tabs defaultValue="preview" className={cn("gap-3", className)}>
      <TabsList className="w-fit">
        <TabsTrigger value="preview">Anteprima</TabsTrigger>
        <TabsTrigger value="code">Codice</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div
          className={cn(
            "flex min-h-[280px] w-full items-center justify-center rounded-lg border p-10",
            "[background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]",
            previewClassName
          )}
        >
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  );
}

export { Playground };
