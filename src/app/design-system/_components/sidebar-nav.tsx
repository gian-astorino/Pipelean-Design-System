"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

const flatten = (items: NavItem[]): NavItem[] =>
  items.flatMap((item) => [item, ...(item.children ? flatten(item.children) : [])]);

function SidebarNav({ items }: { items: NavItem[] }) {
  const allIds = React.useMemo(() => flatten(items).map((i) => i.id), [items]);
  const [activeId, setActiveId] = React.useState<string>(allIds[0]);

  React.useEffect(() => {
    const elements = allIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [allIds]);

  const renderItems = (list: NavItem[], depth = 0) => (
    <ul className={cn("flex flex-col gap-0.5", depth > 0 && "mt-0.5 ml-3 border-l pl-3")}>
      {list.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "block rounded-md px-2 py-1.5 text-sm transition-colors",
              depth === 0 ? "font-medium" : "text-[13px]",
              activeId === item.id
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            {item.label}
          </a>
          {item.children && renderItems(item.children, depth + 1)}
        </li>
      ))}
    </ul>
  );

  return <nav aria-label="Sommario">{renderItems(items)}</nav>;
}

export { SidebarNav };
