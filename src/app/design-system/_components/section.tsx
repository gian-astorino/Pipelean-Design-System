import * as React from "react";

import { cn } from "@/lib/utils";

function Section({
  id,
  title,
  description,
  className,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className={cn("flex flex-col gap-6", className)}>{children}</div>
    </section>
  );
}

function SubSection({
  id,
  title,
  description,
  className,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-t pt-8 first:border-t-0 first:pt-0">
      <div className="mb-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </div>
  );
}

export { Section, SubSection };
