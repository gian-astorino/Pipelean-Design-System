"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DocHeader, Demo, DocSection } from "../../_components/doc-page";
import { ControlsPanel, ControlText } from "../../_components/controls";

export default function AlertDialogDocPage() {
  const [title, setTitle] = React.useState("Sei assolutamente sicuro?");
  const [description, setDescription] = React.useState(
    "Questa azione non può essere annullata. Il tuo account verrà eliminato definitivamente dai nostri server."
  );

  const code = `<AlertDialog>\n  <AlertDialogTrigger render={<Button variant="destructive">Elimina account</Button>} />\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>${title}</AlertDialogTitle>\n      <AlertDialogDescription>\n        ${description}\n      </AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Annulla</AlertDialogCancel>\n      <AlertDialogAction variant="destructive">Continua</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`;

  return (
    <div className="flex flex-col gap-10">
      <DocHeader
        title="Alert Dialog"
        description="Finestra modale per confermare un'azione distruttiva o irreversibile — a differenza di Dialog, non si chiude cliccando il backdrop o con Esc: l'utente deve scegliere esplicitamente Annulla o Continua. Costruito su Base UI AlertDialog."
      />

      <DocSection title="Playground">
        <Demo
          code={code}
          controls={
            <ControlsPanel>
              <ControlText label="Titolo" value={title} onChange={setTitle} />
              <ControlText
                label="Descrizione"
                value={description}
                onChange={setDescription}
              />
            </ControlsPanel>
          }
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="destructive">Elimina account</Button>}
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annulla</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Continua
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Demo>
      </DocSection>
    </div>
  );
}
