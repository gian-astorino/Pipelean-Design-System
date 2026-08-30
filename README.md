# Pipelean Design System

Design system di Pipelean, basato su [shadcn/ui](https://ui.shadcn.com), Next.js 16 (App Router) e Tailwind CSS v4.

## Preset

Il progetto replica la configurazione del preset shadcn `b1ZOMGTQW`:

| Opzione | Valore |
| --- | --- |
| `style` | `maia` |
| `base` | `base` ([Base UI](https://base-ui.com), non Radix) |
| `baseColor` | `neutral` |
| `theme` | `blue` |
| `chartColor` | `blue` |
| `iconLibrary` | `phosphor` ([@phosphor-icons/react](https://phosphoricons.com)) |
| `font` | `inter` |
| `radius` | `default` (`0.625rem`) |
| `menuAccent` | `subtle` |
| `menuColor` | `default` |

> **Nota sulla generazione:** l'ambiente di questa sessione non ha accesso di rete a `ui.shadcn.com` (bloccato dalla policy di egress), quindi non è stato possibile eseguire
> `pnpm dlx shadcn@latest init --preset b1ZOMGTQW --template next` così com'è. I parametri del preset sono comunque noti (decodificati localmente dal pacchetto `shadcn` via
> `decodePreset`) e sono stati ricostruiti a mano: token colore in OKLCH, font, radius e componenti in `src/components/ui` seguono le convenzioni shadcn standard e usano
> [Base UI](https://base-ui.com) come libreria di primitive accessibili al posto di Radix, così come previsto da `base: "base"`. Se in futuro `ui.shadcn.com` sarà raggiungibile,
> puoi rilanciare il comando originale (o `pnpm dlx shadcn add <componente>`) per scaricare le versioni ufficiali e confrontarle con quelle qui presenti.

## Stack

- **Next.js 16** (App Router, RSC, Turbopack)
- **Tailwind CSS v4** (config CSS-first in `src/app/globals.css`)
- **[Base UI](https://base-ui.com)** — primitive accessibili headless (Dialog, Popover, Menu, Select, Tabs, Tooltip, Accordion, Switch, Checkbox, Radio, Avatar, Progress, Separator...)
- **[Phosphor Icons](https://phosphoricons.com)** — libreria icone
- **class-variance-authority** + **tailwind-merge** — varianti dei componenti
- **next-themes** — dark mode
- **sonner** — toast/notifiche

## Struttura

```
components.json            # config shadcn (style, base, preset, aliases)
src/
  app/
    globals.css             # design token (colori OKLCH, radius, font) + tema dark
    layout.tsx               # font Inter, ThemeProvider, Toaster
    page.tsx                 # showcase/vetrina di tutti i componenti e token
  components/
    ui/                      # componenti di base (button, card, dialog, select, ...)
    theme-provider.tsx
    mode-toggle.tsx
  lib/
    utils.ts                 # helper cn()
```

## Sviluppo

```bash
pnpm install
pnpm dev      # http://localhost:3000 — homepage
              # http://localhost:3000/design-system — vetrina "live" con token, tipografia, icone
              # http://localhost:3000/docs — un componente per pagina, con playground interattivo
              #   (controlli per variant/size/icone/stato) e snippet di codice, sulla falsariga
              #   di ui.shadcn.com/docs/components
pnpm build
pnpm lint
```

## Pagina pubblica (GitHub Pages)

Il sito è configurato come export statico (`output: "export"` in `next.config.ts`) e viene
pubblicato automaticamente su GitHub Pages dal workflow
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) a ogni push su questo
branch (o su `main`), oltre che manualmente da **Actions → Deploy design system to GitHub Pages →
Run workflow**.

**Attivazione una tantum (richiede accesso alle impostazioni del repo):** in
`Settings → Pages → Build and deployment → Source`, seleziona **GitHub Actions**. Dopo la prima
esecuzione del workflow, il sito sarà disponibile su:

```
https://gian-astorino.github.io/Pipelean-Design-System/
```

Per buildare localmente lo stesso export statico usato in produzione:

```bash
GITHUB_PAGES=true pnpm build   # genera la cartella out/
```

## Estendere il design system

Aggiungi nuovi componenti in `src/components/ui/` seguendo le convenzioni già presenti:

- `"use client"` in cima ai file che usano hook o primitive Base UI interattive
- `data-slot="<nome-componente>"` sull'elemento radice, per restare coerenti con le convenzioni shadcn
- varianti con `class-variance-authority` (`cva`)
- classi unite con l'helper `cn()` da `@/lib/utils`
- icone da `@phosphor-icons/react` (usa i nomi con suffisso `Icon`, es. `CheckIcon`, non l'alias deprecato `Check`)

Quando la rete verso `ui.shadcn.com` sarà disponibile in questo ambiente, è possibile usare normalmente la CLI ufficiale:

```bash
pnpm dlx shadcn@latest add <component>
```
