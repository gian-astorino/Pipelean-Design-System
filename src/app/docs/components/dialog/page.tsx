"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlSwitch, ControlText } from "../../_components/controls";

export default function DialogDocPage() {
  const [title, setTitle] = React.useState("Elimina progetto");
  const [showClose, setShowClose] = React.useState(true);

  const closeProp = showClose ? "" : " showCloseButton={false}";
  const code = `<Dialog>\n  <DialogTrigger render={<Button variant="outline">Apri</Button>} />\n  <DialogContent${closeProp}>\n    <DialogHeader>\n      <DialogTitle>${title}</DialogTitle>\n      <DialogDescription>\n        Questa azione non può essere annullata.\n      </DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <Button variant="outline">Annulla</Button>\n      <Button variant="destructive">Elimina</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Dialog"
        description="Finestra modale accessibile (focus trap, chiusura con Esc, backdrop), costruita su Base UI Dialog."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlText label="Titolo" value={title} onChange={setTitle} />
              <ControlSwitch label="Bottone chiudi" checked={showClose} onChange={setShowClose} />
            </ControlsPanel>
          }
        >
          <Dialog>
            <DialogTrigger render={<Button variant="outline">Apri dialog</Button>} />
            <DialogContent showCloseButton={showClose}>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  Questa azione non può essere annullata.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Annulla</Button>
                <Button variant="destructive">Elimina</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Demo>
      </DocSection>
    </div>
  );
}
