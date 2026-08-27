"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const colorTokens = [
  { name: "background", label: "Background" },
  { name: "foreground", label: "Foreground" },
  { name: "card", label: "Card" },
  { name: "primary", label: "Primary" },
  { name: "secondary", label: "Secondary" },
  { name: "muted", label: "Muted" },
  { name: "accent", label: "Accent" },
  { name: "destructive", label: "Destructive" },
  { name: "success", label: "Success" },
  { name: "warning", label: "Warning" },
  { name: "border", label: "Border" },
];

const chartTokens = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}

export default function Home() {
  const [progress, setProgress] = React.useState(38);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-lg font-bold">
            P
          </div>
          <div>
            <p className="text-sm leading-none font-semibold">Pipelean</p>
            <p className="text-muted-foreground text-xs">Design System</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">maia · neutral · blue</Badge>
          <Button variant="secondary" size="sm" render={<Link href="/design-system" />}>
            Vista live
          </Button>
          <Button variant="secondary" size="sm" render={<Link href="/docs" />}>
            Componenti
          </Button>
          <ModeToggle />
        </div>
      </header>

      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Il design system di Pipelean
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base">
          Costruito su shadcn/ui — stile <code className="text-foreground">maia</code>,
          base <code className="text-foreground">Base UI</code>, colore
          neutro con accento <code className="text-foreground">blue</code>,
          icone <code className="text-foreground">Phosphor</code> e font{" "}
          <code className="text-foreground">Inter</code>.
        </p>
      </section>

      {/* Colors */}
      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Colori"
          description="Token semantici derivati dal preset (baseColor: neutral, theme: blue)."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {colorTokens.map((token) => (
            <div
              key={token.name}
              className="flex flex-col gap-2 rounded-lg border p-3"
            >
              <div
                className="h-14 w-full rounded-md border"
                style={{ background: `var(--${token.name})` }}
              />
              <p className="text-xs font-medium">{token.label}</p>
              <p className="text-muted-foreground font-mono text-[11px]">
                --{token.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Chart (chartColor: blue)</p>
          <div className="flex gap-2">
            {chartTokens.map((token) => (
              <div
                key={token}
                className="h-10 flex-1 rounded-md"
                style={{ background: `var(--${token})` }}
                title={token}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="flex flex-col gap-6">
        <SectionHeading title="Tipografia" description="Font: Inter." />
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-bold tracking-tight">
            Heading / 4xl bold
          </p>
          <p className="text-2xl font-semibold tracking-tight">
            Heading / 2xl semibold
          </p>
          <p className="text-lg font-medium">Heading / lg medium</p>
          <p className="text-base">
            Body / base — Pipelean aiuta i team a costruire prodotti
            coerenti più velocemente.
          </p>
          <p className="text-muted-foreground text-sm">
            Body / sm muted — testo secondario e didascalie.
          </p>
        </div>
      </section>

      {/* Buttons */}
      <section className="flex flex-col gap-6">
        <SectionHeading title="Bottoni" />
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
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Badges & Alerts */}
      <section className="flex flex-col gap-6">
        <SectionHeading title="Badge & Alert" />
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Alert>
            <RocketLaunchIcon />
            <AlertTitle>Nuova versione disponibile</AlertTitle>
            <AlertDescription>
              Aggiorna il pacchetto per ottenere le ultime componenti.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TrashIcon />
            <AlertTitle>Azione irreversibile</AlertTitle>
            <AlertDescription>
              Questa operazione eliminerà definitivamente i dati.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Forms */}
      <section className="flex flex-col gap-6">
        <SectionHeading title="Form" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Mario Rossi" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="mario@pipelean.com" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">Messaggio</Label>
              <Textarea id="message" placeholder="Scrivi qualcosa..." />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="role">Ruolo</Label>
              <Select defaultValue="editor">
                <SelectTrigger id="role" className="w-full">
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
              <div>
                <p className="text-sm font-medium">Notifiche email</p>
                <p className="text-muted-foreground text-xs">
                  Ricevi aggiornamenti via email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accetto i termini di servizio</Label>
            </div>
            <div className="grid gap-2">
              <Label>Piano</Label>
              <RadioGroup defaultValue="pro" className="gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="free">Free</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pro" id="pro" />
                  <Label htmlFor="pro">Pro</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="team" id="team" />
                  <Label htmlFor="team">Team</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label>Completamento profilo</Label>
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
      </section>

      {/* Cards */}
      <section className="flex flex-col gap-6">
        <SectionHeading title="Card" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Piano Pro</CardTitle>
              <CardDescription>
                Per team che scalano velocemente.
              </CardDescription>
              <CardAction>
                <Badge>Popolare</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                €29<span className="text-muted-foreground text-sm font-normal">/mese</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Scegli Pro</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" alt="Utente" />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Marta Pelagatti</CardTitle>
                  <CardDescription>Product Designer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
              <Skeleton className="h-3 w-3/5" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs & Accordion */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SectionHeading title="Tabs" />
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="billing">Fatturazione</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-muted-foreground text-sm">
              Gestisci le informazioni del tuo profilo.
            </TabsContent>
            <TabsContent value="team" className="text-muted-foreground text-sm">
              Invita e gestisci i membri del team.
            </TabsContent>
            <TabsContent value="billing" className="text-muted-foreground text-sm">
              Visualizza fatture e metodi di pagamento.
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col gap-4">
          <SectionHeading title="Accordion" />
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Cos&apos;è Pipelean?</AccordionTrigger>
              <AccordionContent>
                Una piattaforma per orchestrare pipeline di dati e prodotto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Su cosa si basa il design system?</AccordionTrigger>
              <AccordionContent>
                Su shadcn/ui, con Base UI come libreria di primitive
                accessibili e Tailwind CSS v4 per lo styling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Posso estenderlo?</AccordionTrigger>
              <AccordionContent>
                Sì, aggiungi nuovi componenti in{" "}
                <code>src/components/ui</code> seguendo le stesse convenzioni.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Overlays */}
      <section className="flex flex-col gap-6">
        <SectionHeading
          title="Overlay"
          description="Dialog, Popover, Dropdown Menu, Tooltip."
        />
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="secondary">Apri dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Elimina progetto</DialogTitle>
                <DialogDescription>
                  Questa azione non può essere annullata. Il progetto verrà
                  eliminato definitivamente.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="secondary">Annulla</Button>
                <Button variant="destructive">Elimina</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Popover>
            <PopoverTrigger render={<Button variant="secondary">Apri popover</Button>} />
            <PopoverContent>
              <div className="grid gap-2">
                <p className="text-sm font-medium">Impostazioni rapide</p>
                <p className="text-muted-foreground text-sm">
                  Configura le preferenze del workspace direttamente da qui.
                </p>
              </div>
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
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon /> Elimina account
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
      </section>

      <Separator />

      <footer className="text-muted-foreground flex flex-col gap-1 pb-10 text-xs">
        <p>
          Pipelean Design System — preset shadcn ricostruito manualmente
          (style: maia, base: Base UI, baseColor: neutral, theme: blue,
          iconLibrary: phosphor, font: inter, radius: default).
        </p>
      </footer>
    </div>
  );
}
