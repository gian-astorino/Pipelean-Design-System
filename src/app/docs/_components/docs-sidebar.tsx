"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NAV } from "./nav-data";

function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Componenti" className="flex flex-col gap-6">
      {NAV.map((group) => (
        <div key={group.label} className="flex flex-col gap-0.5">
          <p className="text-muted-foreground px-2 pb-1 text-xs font-semibold tracking-wide uppercase">
            {group.label}
          </p>
          {group.items.map((item) => {
            const href = `/docs/components/${item.slug}`;
            const active = pathname === href || pathname === `${href}/`;
            return (
              <Link
                key={item.slug}
                href={href}
                className={cn(
                  "rounded-md px-2 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}

export { DocsSidebar };
