"use client";

import * as React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch, ControlText } from "../../_components/controls";

export default function CardDocPage() {
  const [title, setTitle] = React.useState("Piano Pro");
  const [showAction, setShowAction] = React.useState(true);
  const [showFooter, setShowFooter] = React.useState(true);

  const code = `<Card>\n  <CardHeader>\n    <CardTitle>${title}</CardTitle>\n    <CardDescription>Per team che scalano.</CardDescription>${
    showAction ? '\n    <CardAction>\n      <Badge>Popolare</Badge>\n    </CardAction>' : ""
  }\n  </CardHeader>\n  <CardContent>\n    <p className="text-3xl font-bold">€29/mese</p>\n  </CardContent>${
    showFooter
      ? '\n  <CardFooter>\n    <Button className="w-full">Scegli Pro</Button>\n  </CardFooter>'
      : ""
  }\n</Card>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Card"
        description="Contenitore per raggruppare contenuti correlati: header, contenuto, footer e un'azione opzionale."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          previewClassName="[background-image:none]"
          controls={
            <ControlsPanel>
              <ControlText label="Titolo" value={title} onChange={setTitle} />
              <ControlSwitch label="Action" checked={showAction} onChange={setShowAction} />
              <ControlSwitch label="Footer" checked={showFooter} onChange={setShowFooter} />
            </ControlsPanel>
          }
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>Per team che scalano.</CardDescription>
              {showAction && (
                <CardAction>
                  <Badge>Popolare</Badge>
                </CardAction>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">€29/mese</p>
            </CardContent>
            {showFooter && (
              <CardFooter>
                <Button className="w-full">Scegli Pro</Button>
              </CardFooter>
            )}
          </Card>
        </Demo>
      </DocSection>
    </div>
  );
}
