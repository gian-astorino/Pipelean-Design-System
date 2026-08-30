"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NAV } from "./nav-data";

function useHash() {
  const [hash, setHash] = React.useState("");

  React.useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return hash;
}

function DocsSidebar() {
  const pathname = usePathname();
  const hash = useHash();

  return (
    <nav aria-label="Componenti e token" className="flex flex-col gap-6">
      {NAV.map((group) => (
        <div key={group.label} className="flex flex-col gap-0.5">
          <p className="text-muted-foreground px-2 pb-1 text-xs font-semibold tracking-wide uppercase">
            {group.label}
          </p>
          {group.items.map((item) => {
            const href = item.href ?? `/docs/components/${item.slug}`;
            const [hrefPath, hrefHash] = href.split("#");
            const pathActive = pathname === hrefPath || pathname === `${hrefPath}/`;
            const active = hrefHash
              ? pathActive && hash === `#${hrefHash}`
              : pathActive;
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
