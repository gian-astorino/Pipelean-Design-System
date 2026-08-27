export interface DocsNavGroup {
  label: string;
  items: { slug: string; label: string }[];
}

export const NAV: DocsNavGroup[] = [
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
