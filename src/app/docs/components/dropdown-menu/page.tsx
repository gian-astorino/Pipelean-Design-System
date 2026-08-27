"use client";

import * as React from "react";
import { BellIcon, CreditCardIcon, GearSixIcon, TrashIcon, UserIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSelect, ControlSwitch } from "../../_components/controls";

const ALIGNS = ["start", "center", "end"] as const;

export default function DropdownMenuDocPage() {
  const [align, setAlign] = React.useState<(typeof ALIGNS)[number]>("start");
  const [showLabel, setShowLabel] = React.useState(true);

  const alignProp = align !== "start" ? ` align="${align}"` : "";
  const code = `<DropdownMenu>\n  <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />\n  <DropdownMenuContent${alignProp}>\n${
    showLabel ? '    <DropdownMenuLabel>Il mio account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n' : ""
  }    <DropdownMenuItem>\n      <UserIcon /> Profilo\n    </DropdownMenuItem>\n    <DropdownMenuItem>\n      <CreditCardIcon /> Fatturazione\n    </DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem variant="destructive">\n      <TrashIcon /> Elimina account\n    </DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Dropdown Menu"
        description="Menu contestuale con item, gruppi, separatori e varianti (es. destructive), costruito su Base UI Menu."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlSelect
                label="Align"
                value={align}
                onChange={(v) => setAlign(v as typeof align)}
                options={ALIGNS.map((a) => ({ value: a, label: a }))}
              />
              <ControlSwitch label="Label" checked={showLabel} onChange={setShowLabel} />
            </ControlsPanel>
          }
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline">
                  <GearSixIcon /> Menu
                </Button>
              }
            />
            <DropdownMenuContent align={align}>
              {showLabel && (
                <>
                  <DropdownMenuLabel>Il mio account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              )}
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
        </Demo>
      </DocSection>
    </div>
  );
}
