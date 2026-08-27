import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

/**
 * Field groups a control (Input, Textarea, Select, …) with its label,
 * description and error into one consistent stack — the layer above the
 * bare form controls, which stay unopinionated about labeling on their own.
 */
function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      data-slot="field"
      data-orientation={orientation}
      className={cn(
        "group/field flex flex-col gap-2",
        orientation === "horizontal" &&
          "flex-row items-center justify-between gap-4",
        className
      )}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "text-text-primary group-has-[[disabled]]/field:text-text-disabled",
        className
      )}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("text-text-secondary text-sm leading-normal", className)}
      {...props}
    />
  );
}

export { Field, FieldLabel, FieldDescription };
