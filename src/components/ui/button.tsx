"use client";

import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { SpinnerGapIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow,background-color,border-color] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
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
          "bg-action-primary text-action-primary-foreground shadow-xs hover:bg-action-primary-hover disabled:opacity-100 disabled:shadow-none disabled:bg-action-primary-disabled disabled:text-text-disabled",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 disabled:opacity-50",
        secondary:
          "border border-border bg-action-secondary text-action-secondary-foreground shadow-xs hover:bg-action-secondary-hover disabled:opacity-100 disabled:shadow-none disabled:bg-action-secondary-disabled disabled:text-text-disabled",
        ghost:
          "text-action-ghost-foreground hover:bg-action-ghost-hover disabled:opacity-100 disabled:text-text-disabled",
        link: "text-text-link underline-offset-4 hover:underline disabled:opacity-50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
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
      { size: "sm", iconOnly: true, class: "size-8" },
      { size: "lg", iconOnly: true, class: "size-10" },
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
      <>
        {loading && <SpinnerGapIcon className="animate-spin" />}
        {children}
      </>
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
