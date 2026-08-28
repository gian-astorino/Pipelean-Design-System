"use client";

import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { IconContext, SpinnerGapIcon, type IconProps } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

// Icon size/weight per button size, applied via Phosphor's IconContext
// instead of a CSS rule — sm and default get 16px bold icons, lg gets
// 24px regular. IconContext only supplies a *default*: any icon that
// sets its own size or weight prop keeps that value regardless.
const iconContextBySize: Record<"default" | "sm" | "lg", IconProps> = {
  default: { size: 16, weight: "bold" },
  sm: { size: 16, weight: "bold" },
  lg: { size: 24 },
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow,background-color,border-color] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      // default/secondary/ghost are built exclusively from the Figma
      // action/primary, action/secondary and action/ghost tokens
      // (see globals.css) — bg, text, hover and disabled colors all
      // come from --action-*, never from --primary/--accent. There's
      // no separate "outline" variant: action/secondary (bordered) is
      // what "secondary" is.
      // destructive and link aren't covered by an action/* spec yet,
      // so they keep their previous token wiring.
      variant: {
        default:
          "bg-action-primary text-action-primary-foreground hover:bg-action-primary-hover disabled:opacity-100 disabled:bg-action-primary-disabled disabled:text-text-disabled",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 disabled:opacity-50",
        secondary:
          "border border-border bg-action-secondary text-action-secondary-foreground hover:bg-action-secondary-hover focus-visible:border-2 disabled:opacity-100 disabled:bg-action-secondary-disabled disabled:text-text-disabled",
        ghost:
          "text-action-ghost-foreground hover:bg-action-ghost-hover disabled:opacity-100 disabled:text-text-disabled",
        link: "text-text-link underline-offset-4 hover:underline disabled:opacity-50",
      },
      // Padding follows the spacing scale directly: default is
      // vertical token 2 / horizontal token 3, sm and lg step that
      // same pair down/up by 1 (sm: 1/2, lg: 3/4). Horizontal padding
      // stays that same token whether or not there's an icon — no
      // has-[>svg] reduction, so it never falls out of sync with the
      // requested value.
      // Heights are fixed at 28/36/48px (sm/default/lg) — not on the
      // 4px spacing scale like padding, an explicit set of three per
      // this spec.
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-7 gap-1.5 px-2 py-1",
        lg: "h-12 px-4 py-3",
      },
      // Icon-only isn't a size of its own — it's every size, square and
      // without label padding, so an icon button shares the exact height
      // (and every hover/disabled/focus state) of the text button it sits
      // next to instead of living on a separate "icon" size step.
      iconOnly: {
        true: "shrink-0 px-0",
        false: "",
      },
    },
    compoundVariants: [
      { size: "default", iconOnly: true, class: "size-9" },
      { size: "sm", iconOnly: true, class: "size-7" },
      { size: "lg", iconOnly: true, class: "size-12" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconOnly: false,
    },
  }
);

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

function Button({
  className,
  variant,
  size,
  iconOnly,
  loading,
  render = <button />,
  children,
  ...props
}: ButtonProps) {
  const defaultProps: Record<string, unknown> = {
    "data-slot": "button",
    className: cn(buttonVariants({ variant, size, iconOnly }), className),
    disabled: loading || props.disabled,
    children: (
      <IconContext.Provider value={iconContextBySize[size ?? "default"]}>
        {loading && <SpinnerGapIcon className="animate-spin" />}
        {children}
      </IconContext.Provider>
    ),
    ...props,
  };

  return useRender({
    render,
    props: defaultProps,
    state: { variant, size, iconOnly },
    defaultTagName: "button",
  });
}

export { Button, buttonVariants };
export type { ButtonProps };
