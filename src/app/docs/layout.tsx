import * as React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { DocsSidebar } from "./_components/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
      <header className="bg-background/80 sticky top-0 z-40 flex items-center justify-between border-b px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm"
          >
            <ArrowLeftIcon className="size-4" />
            Pipelean
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="/docs" className="text-sm font-medium">
            Componenti
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" render={<Link href="/design-system" />}>
            Vista live
          </Button>
          <ModeToggle />
        </div>
      </header>

      <div className="flex flex-1 gap-10 px-6 py-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-20">
            <DocsSidebar />
          </div>
        </aside>

        <main className="min-w-0 flex-1 pb-24">{children}</main>
      </div>
    </div>
  );
}
