export interface DocsNavItem {
  slug: string;
  label: string;
  /** Overrides the default `/docs/components/${slug}` link when set. */
  href?: string;
}

export interface DocsNavGroup {
  label: string;
  items: DocsNavItem[];
}

export const NAV: DocsNavGroup[] = [
  {
    label: "Fondamenta",
    items: [
      { slug: "dimensioni", label: "Dimensioni", href: "/docs/tokens#dimensioni" },
      { slug: "colori-primitivi", label: "Colori primitivi", href: "/docs/tokens#colori-primitivi" },
      { slug: "colori-semantici", label: "Colori semantici", href: "/docs/tokens#colori-semantici" },
      { slug: "elevazione", label: "Elevazione", href: "/docs/tokens#elevazione" },
      { slug: "tipografia", label: "Tipografia", href: "/docs/tokens#tipografia" },
    ],
  },
  {
    label: "Input",
    items: [
      { slug: "button", label: "Button" },
      { slug: "input", label: "Input" },
      { slug: "textarea", label: "Textarea" },
      { slug: "select", label: "Select" },
      { slug: "checkbox", label: "Checkbox" },
      { slug: "switch", label: "Switch" },
      { slug: "radio-group", label: "Radio Group" },
      { slug: "label", label: "Label" },
      { slug: "field", label: "Field" },
    ],
  },
  {
    label: "Display",
    items: [
      { slug: "badge", label: "Badge" },
      { slug: "avatar", label: "Avatar" },
      { slug: "card", label: "Card" },
      { slug: "separator", label: "Separator" },
      { slug: "skeleton", label: "Skeleton" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { slug: "alert", label: "Alert" },
      { slug: "progress", label: "Progress" },
      { slug: "sonner", label: "Sonner (Toast)" },
    ],
  },
  {
    label: "Overlay",
    items: [
      { slug: "dialog", label: "Dialog" },
      { slug: "alert-dialog", label: "Alert Dialog" },
      { slug: "popover", label: "Popover" },
      { slug: "dropdown-menu", label: "Dropdown Menu" },
      { slug: "tooltip", label: "Tooltip" },
    ],
  },
  {
    label: "Layout & navigazione",
    items: [
      { slug: "tabs", label: "Tabs" },
      { slug: "accordion", label: "Accordion" },
    ],
  },
];
