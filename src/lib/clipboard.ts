import { toast } from "sonner";

export async function copyToClipboard(value: string, description?: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success("Copiato negli appunti", {
      description: description ?? value,
    });
  } catch {
    toast.error("Impossibile copiare negli appunti");
  }
}
