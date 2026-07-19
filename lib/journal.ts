export type NoteKind = "poliv" | "podkormka" | "obrabotka" | "posadka" | "urozhay" | "other";

export interface GardenNote {
  id: string;
  date: string;
  kind: NoteKind;
  text: string;
  createdAt: number;
}

export const NOTE_KINDS: { id: NoteKind; label: string }[] = [
  { id: "poliv", label: "Полив" },
  { id: "podkormka", label: "Подкормка" },
  { id: "obrabotka", label: "Обработка" },
  { id: "posadka", label: "Посадка" },
  { id: "urozhay", label: "Урожай" },
  { id: "other", label: "Другое" },
];

export function kindLabel(kind: NoteKind): string {
  return NOTE_KINDS.find((k) => k.id === kind)?.label ?? "Другое";
}
