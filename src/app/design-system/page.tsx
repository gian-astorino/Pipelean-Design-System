"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowLeftIcon,
  BellIcon,
  CalendarBlankIcon,
  CreditCardIcon,
  EnvelopeSimpleIcon,
  GearSixIcon,
  PlusIcon,
  RocketLaunchIcon,
  TrashIcon,
  UserIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/lib/clipboard";
import { TokenGrid } from "@/components/tokens/token-grid";
import { CopyChip } from "@/components/tokens/copy-chip";
import { RadiusPreview } from "@/components/tokens/radius-preview";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SidebarNav, type NavItem } from "./_components/sidebar-nav";
import { Section, SubSection } from "./_components/section";
import { IconGallery } from "./_components/icon-gallery";
import {
  surfaceTokens,
  brandTokens,
  stateTokens,
  borderTokens,
  chartTokens,
  textTokens,
  sidebarTokens,
  typeScale,
  weightScale,
  radiusScale,
  shadowScale,
} from "@/components/tokens/tokens-data";

const NAV: NavItem[] = [
  { id: "overview", label: "Panoramica" },
  { id: "colors", label: "Colori" },
  { id: "typography", label: "Tipografia" },
  { id: "radius-shadow", label: "Radius & ombre" },
  { id: "icons", label: "Icone" },
  {
    id: "components",
    label: "Componenti",
    children: [
      { id: "components-buttons", label: "Bottoni & badge" },
      { id: "components-forms", label: "Form" },
      { id: "components-feedback", label: "Feedback" },
      { id: "components-overlays", label: "Overlay" },
      { id: "components-layout", label: "Layout & navigazione" },
    ],
  },
];

export default function DesignSystemPage() {
  const [progress, setProgress] = React.useState(38);

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
          <p className="text-sm font-medium">Design System — live</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" render={<Link href="/docs" />}>
            Componenti
          </Button>
          <ModeToggle />
        </div>
      </header>

      <div className="flex flex-1 gap-10 px-6 py-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-20">
            <SidebarNav items={NAV} />
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-16 pb-24">
          <Section
            id="overview"
            title="Panoramica"
            description="Ogni token qui sotto legge il valore CSS effettivamente applicato in questo momento: cambia tema con il bottone in alto e guarda i valori aggiornarsi in tempo reale. Clicca uno swatch, una classe o un'icona per copiarla."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardDescription>Preset</CardDescription>
                  <CardTitle className="font-mono text-base">maia</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Base color · Theme</CardDescription>
                  <CardTitle className="font-mono text-base">
                    neutral · blue
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Icone · Font</CardDescription>
                  <CardTitle className="font-mono text-base">
                    phosphor · inter
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </Section>

          <Section
            id="colors"
            title="Colori"
            description="Token semantici in OKLCH, letti dal vivo da :root / .dark."
          >
            <SubSection id="colors-surfaces" title="Superfici">
              <TokenGrid tokens={surfaceTokens} />
            </SubSection>
            <SubSection id="colors-brand" title="Brand">
              <TokenGrid tokens={brandTokens} />
            </SubSection>
            <SubSection id="colors-state" title="Stato">
              <TokenGrid tokens={stateTokens} />
            </SubSection>
            <SubSection id="colors-border" title="Bordi & focus">
              <TokenGrid tokens={borderTokens} />
            </SubSection>
            <SubSection id="colors-text" title="Testo">
              <TokenGrid tokens={textTokens} />
            </SubSection>
            <SubSection id="colors-chart" title="Chart">
              <TokenGrid tokens={chartTokens} />
            </SubSection>
            <SubSection id="colors-sidebar" title="Sidebar">
              <TokenGrid tokens={sidebarTokens} />
            </SubSection>
          </Section>

          <Section id="typography" title="Tipografia" description="Font: Inter.">
            <SubSection id="typography-scale" title="Scala dimensioni">
              <div className="flex flex-col gap-3">
                {typeScale.map((t) => (
                  <div
                    key={t.className}
                    className="flex items-baseline gap-4 border-b pb-3 last:border-b-0"
                  >
                    <CopyChip label={t.className} copyValue={t.className} />
                    <p className={cn(t.className, "truncate")}>
                      Pipelean design system
                    </p>
                  </div>
                ))}
              </div>
            </SubSection>
            <SubSection id="typography-weight" title="Pesi">
              <div className="flex flex-wrap gap-3">
                {weightScale.map((w) => (
                  <button
                    key={w.className}
                    type="button"
                    onClick={() => copyToClipboard(w.className, w.label)}
                    className="hover:bg-accent/50 rounded-lg border px-4 py-3 text-left transition-colors"
                  >
                    <p className={cn(w.className, "text-lg")}>Aa Bb Cc</p>
                    <p className="text-muted-foreground font-mono text-[11px]">
                      {w.className}
                    </p>
                  </button>
                ))}
              </div>
            </SubSection>
          </Section>

          <Section id="radius-shadow" title="Radius & ombre">
            <SubSection id="radius" title="Radius">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {radiusScale.map((r) => (
                  <RadiusPreview key={r.className} {...r} />
                ))}
              </div>
            </SubSection>
            <SubSection id="shadow" title="Ombre">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {shadowScale.map((s) => (
                  <button
                    key={s.className}
                    type="button"
                    onClick={() => copyToClipboard(s.className, s.label)}
                    className="flex flex-col items-center gap-3 rounded-lg border p-4"
                  >
                    <div className={cn("bg-card size-14 rounded-md", s.className)} />
                    <p className="font-mono text-xs">{s.className}</p>
                  </button>
                ))}
              </div>
            </SubSection>
          </Section>

          <Section
            id="icons"
            title="Icone"
            description="Phosphor Icons — clicca per copiare l'import."
          >
            <IconGallery />
          </Section>

          <Section id="components" title="Componenti">
            <SubSection id="components-buttons" title="Bottoni & badge">
              <div className="flex flex-wrap items-center gap-3">
                <Button>
                  <RocketLaunchIcon /> Default
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">
                  <TrashIcon /> Destructive
                </Button>
                <Button loading>Loading</Button>
                <Button size="icon" variant="secondary">
                  <PlusIcon />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </div>
            </SubSection>

            <SubSection id="components-forms" title="Form">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="ds-name">Nome</Label>
                    <Input id="ds-name" placeholder="Mario Rossi" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="ds-message">Messaggio</Label>
                    <Textarea id="ds-message" placeholder="Scrivi qualcosa..." />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="ds-role">Ruolo</Label>
                    <Select defaultValue="editor">
                      <SelectTrigger id="ds-role" className="w-full">
                        <SelectValue placeholder="Seleziona un ruolo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Amministratore</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Visualizzatore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <p className="text-sm font-medium">Notifiche email</p>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="ds-terms" />
                    <Label htmlFor="ds-terms">Accetto i termini</Label>
                  </div>
                  <RadioGroup defaultValue="pro" className="gap-2">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="free" id="ds-free" />
                      <Label htmlFor="ds-free">Free</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="pro" id="ds-pro" />
                      <Label htmlFor="ds-pro">Pro</Label>
                    </div>
                  </RadioGroup>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label>Progresso</Label>
                      <span className="text-muted-foreground text-xs">
                        {progress}%
                      </span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setProgress((p) => Math.max(0, p - 10))}
                      >
                        -10
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setProgress((p) => Math.min(100, p + 10))}
                      >
                        +10
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SubSection>

            <SubSection id="components-feedback" title="Feedback">
              <div className="grid gap-3 sm:grid-cols-2">
                <Alert>
                  <RocketLaunchIcon />
                  <AlertTitle>Nuova versione disponibile</AlertTitle>
                  <AlertDescription>
                    Aggiorna il pacchetto per le ultime componenti.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <TrashIcon />
                  <AlertTitle>Azione irreversibile</AlertTitle>
                  <AlertDescription>
                    Questa operazione elimina i dati definitivamente.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1.5">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
                <Button
                  variant="secondary"
                  onClick={() =>
                    toast("Pipeline avviata", {
                      description: "Il deploy di Pipelean è in corso.",
                      icon: <EnvelopeSimpleIcon />,
                    })
                  }
                >
                  Mostra toast
                </Button>
              </div>
            </SubSection>

            <SubSection id="components-overlays" title="Overlay">
              <div className="flex flex-wrap items-center gap-3">
                <Dialog>
                  <DialogTrigger render={<Button variant="secondary">Dialog</Button>} />
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Elimina progetto</DialogTitle>
                      <DialogDescription>
                        Questa azione non può essere annullata.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="secondary">Annulla</Button>
                      <Button variant="destructive">Elimina</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Popover>
                  <PopoverTrigger render={<Button variant="secondary">Popover</Button>} />
                  <PopoverContent>
                    <p className="text-sm font-medium">Impostazioni rapide</p>
                    <p className="text-muted-foreground text-sm">
                      Configura le preferenze da qui.
                    </p>
                  </PopoverContent>
                </Popover>

                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="secondary">
                        <GearSixIcon /> Menu
                      </Button>
                    }
                  />
                  <DropdownMenuContent align="start">
                    <DropdownMenuLabel>Il mio account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserIcon /> Profilo
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon /> Fatturazione
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BellIcon /> Notifiche
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="secondary" size="icon">
                        <CalendarBlankIcon />
                      </Button>
                    }
                  />
                  <TooltipContent>Pianifica per dopo</TooltipContent>
                </Tooltip>
              </div>
            </SubSection>

            <SubSection id="components-layout" title="Layout & navigazione">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Piano Pro</CardTitle>
                    <CardDescription>Per team che scalano.</CardDescription>
                    <CardAction>
                      <Badge>Popolare</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">
                      €29
                      <span className="text-muted-foreground text-sm font-normal">
                        /mese
                      </span>
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Scegli Pro</Button>
                  </CardFooter>
                </Card>

                <div className="flex flex-col gap-6">
                  <Tabs defaultValue="account">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="team">Team</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="account"
                      className="text-muted-foreground text-sm"
                    >
                      Gestisci le informazioni del tuo profilo.
                    </TabsContent>
                    <TabsContent
                      value="team"
                      className="text-muted-foreground text-sm"
                    >
                      Invita e gestisci i membri del team.
                    </TabsContent>
                  </Tabs>

                  <Accordion className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Cos&apos;è Pipelean?</AccordionTrigger>
                      <AccordionContent>
                        Una piattaforma per orchestrare pipeline di dati e
                        prodotto.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Posso estenderlo?</AccordionTrigger>
                      <AccordionContent>
                        Sì, aggiungi componenti in{" "}
                        <code>src/components/ui</code>.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </SubSection>
          </Section>
        </main>
      </div>
    </div>
  );
}
