export interface PrimitiveSwatch {
  step: string;
  value: string;
}

// Pipelean's Figma color tokens (Default.tokens.json) — the literal
// primitive ramps every semantic token in globals.css is built from.
export const NEUTRAL_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FAFAF9" },
  { step: "100", value: "#F5F5F4" },
  { step: "200", value: "#E7E5E4" },
  { step: "300", value: "#D6D3D1" },
  { step: "400", value: "#A8A29E" },
  { step: "500", value: "#78716C" },
  { step: "600", value: "#57534E" },
  { step: "700", value: "#44403C" },
  { step: "800", value: "#292524" },
  { step: "900", value: "#1C1917" },
  { step: "950", value: "#0C0A09" },
];

export const BLUE_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#EFF6FF" },
  { step: "100", value: "#DBEAFE" },
  { step: "200", value: "#BFDBFE" },
  { step: "300", value: "#93C5FD" },
  { step: "400", value: "#60A5FA" },
  { step: "500", value: "#3B82F6" },
  { step: "600", value: "#2563EB" },
  { step: "700", value: "#1D4ED8" },
  { step: "800", value: "#1E40AF" },
  { step: "900", value: "#1E3A8A" },
  { step: "950", value: "#172554" },
];

export const RED_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FEF2F2" },
  { step: "100", value: "#FEE2E2" },
  { step: "200", value: "#FECACA" },
  { step: "300", value: "#FCA5A5" },
  { step: "400", value: "#F87171" },
  { step: "500", value: "#EF4444" },
  { step: "600", value: "#DC2626" },
  { step: "700", value: "#B91C1C" },
  { step: "800", value: "#991B1B" },
  { step: "900", value: "#7F1D1D" },
  { step: "950", value: "#450A0A" },
];

export const GREEN_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#F0FDF4" },
  { step: "100", value: "#DCFCE7" },
  { step: "200", value: "#BBF7D0" },
  { step: "300", value: "#86EFAC" },
  { step: "400", value: "#4ADE80" },
  { step: "500", value: "#22C55E" },
  { step: "600", value: "#16A34A" },
  { step: "700", value: "#15803D" },
  { step: "800", value: "#166534" },
  { step: "900", value: "#14532D" },
  { step: "950", value: "#052E16" },
];

export const YELLOW_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FEFCE8" },
  { step: "100", value: "#FEF9C3" },
  { step: "200", value: "#FEF08A" },
  { step: "300", value: "#FDE047" },
  { step: "400", value: "#FACC15" },
  { step: "500", value: "#EAB308" },
  { step: "600", value: "#CA8A04" },
  { step: "700", value: "#A16207" },
  { step: "800", value: "#854D0E" },
  { step: "900", value: "#713F12" },
  { step: "950", value: "#422006" },
];

export const PURPLE_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FAF5FF" },
  { step: "100", value: "#F3E8FF" },
  { step: "200", value: "#E9D5FF" },
  { step: "300", value: "#D8B4FE" },
  { step: "400", value: "#C084FC" },
  { step: "500", value: "#A855F7" },
  { step: "600", value: "#9333EA" },
  { step: "700", value: "#7E22CE" },
  { step: "800", value: "#6B21A8" },
  { step: "900", value: "#581C87" },
  { step: "950", value: "#3B0764" },
];

export const ORANGE_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FFF7ED" },
  { step: "100", value: "#FFEDD5" },
  { step: "200", value: "#FED7AA" },
  { step: "300", value: "#FDBA74" },
  { step: "400", value: "#FB923C" },
  { step: "500", value: "#F97316" },
  { step: "600", value: "#EA580C" },
  { step: "700", value: "#C2410C" },
  { step: "800", value: "#9A3412" },
  { step: "900", value: "#7C2D12" },
  { step: "950", value: "#431407" },
];

export const TEAL_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#F0FDFA" },
  { step: "100", value: "#CCFBF1" },
  { step: "200", value: "#99F6E4" },
  { step: "300", value: "#5EEAD4" },
  { step: "400", value: "#2DD4BF" },
  { step: "500", value: "#14B8A6" },
  { step: "600", value: "#0D9488" },
  { step: "700", value: "#0F766E" },
  { step: "800", value: "#115E59" },
  { step: "900", value: "#134E4A" },
  { step: "950", value: "#042F2E" },
];

export const SKY_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#F0F9FF" },
  { step: "100", value: "#E0F2FE" },
  { step: "200", value: "#BAE6FD" },
  { step: "300", value: "#7DD3FC" },
  { step: "400", value: "#38BDF8" },
  { step: "500", value: "#0EA5E9" },
  { step: "600", value: "#0284C7" },
  { step: "700", value: "#0369A1" },
  { step: "800", value: "#075985" },
  { step: "900", value: "#0C4A6E" },
  { step: "950", value: "#082F49" },
];

export const PINK_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "50", value: "#FDF2F8" },
  { step: "100", value: "#FCE7F3" },
  { step: "200", value: "#FBCFE8" },
  { step: "300", value: "#F9A8D4" },
  { step: "400", value: "#F472B6" },
  { step: "500", value: "#EC4899" },
  { step: "600", value: "#DB2777" },
  { step: "700", value: "#BE185D" },
  { step: "800", value: "#9D174D" },
  { step: "900", value: "#831843" },
  { step: "950", value: "#500724" },
];

export const BASE_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "white", value: "#FFFFFF" },
  { step: "black", value: "#000000" },
];

export const BRAND_PRIMITIVES: PrimitiveSwatch[] = [
  { step: "brand", value: "#F5F15D" },
];

export const ALL_RAMPS: { name: string; swatches: PrimitiveSwatch[] }[] = [
  { name: "neutral", swatches: NEUTRAL_PRIMITIVES },
  { name: "blue", swatches: BLUE_PRIMITIVES },
  { name: "red", swatches: RED_PRIMITIVES },
  { name: "green", swatches: GREEN_PRIMITIVES },
  { name: "yellow", swatches: YELLOW_PRIMITIVES },
  { name: "purple", swatches: PURPLE_PRIMITIVES },
  { name: "orange", swatches: ORANGE_PRIMITIVES },
  { name: "teal", swatches: TEAL_PRIMITIVES },
  { name: "sky", swatches: SKY_PRIMITIVES },
  { name: "pink", swatches: PINK_PRIMITIVES },
];
