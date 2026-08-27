import * as React from "react";

import { Playground } from "./playground";

function DocHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-b pb-6">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground max-w-2xl text-sm">{description}</p>
    </div>
  );
}

function DocSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

function Demo({
  code,
  controls,
  previewClassName,
  children,
}: {
  code: string;
  controls?: React.ReactNode;
  previewClassName?: string;
  children: React.ReactNode;
}) {
  if (!controls) {
    return (
      <Playground code={code} previewClassName={previewClassName}>
        {children}
      </Playground>
    );
  }

  return (
    <div className="grid items-start gap-4 lg:grid-cols-[1fr_260px]">
      <Playground code={code} previewClassName={previewClassName}>
        {children}
      </Playground>
      {controls}
    </div>
  );
}

export { DocHeader, DocSection, Demo };
