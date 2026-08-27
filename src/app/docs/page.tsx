import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { NAV } from "./_components/nav-data";

export const metadata = {
  title: "Componenti — Pipelean Design System",
};

export default function DocsIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Componenti</h1>
        <p className="text-muted-foreground max-w-2xl text-sm">
          Ogni componente ha una pagina dedicata con anteprima interattiva,
          controlli per esplorare le sue varianti (size, tipo, icone, stato…)
          e lo snippet di codice pronto da copiare.
        </p>
      </div>

      {NAV.map((group) => (
        <div key={group.label} className="flex flex-col gap-4">
          <h2 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            {group.label}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <Link key={item.slug} href={`/docs/components/${item.slug}`}>
                <Card className="hover:border-foreground/20 h-full transition-colors">
                  <CardHeader>
                    <CardTitle className="text-base">{item.label}</CardTitle>
                    <CardDescription className="font-mono text-xs">
                      components/ui/{item.slug}.tsx
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
