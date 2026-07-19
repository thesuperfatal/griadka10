import { loadChecklist, saveChecklist, type ChecklistState } from "./checklistStore";
import { loadNotes, saveNotes } from "./journalStore";
import type { GardenNote } from "./journal";

const BACKUP_VERSION = 1;

export interface GriadkaBackup {
  version: number;
  exportedAt: string;
  checklist: ChecklistState;
  journal: GardenNote[];
}

export function buildBackup(): GriadkaBackup {
  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    checklist: loadChecklist(),
    journal: loadNotes(),
  };
}

export function downloadBackup(): void {
  const data = buildBackup();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const day = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `griadka10-backup-${day}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function parseBackup(raw: string): GriadkaBackup {
  const data = JSON.parse(raw) as GriadkaBackup;
  if (!data || typeof data !== "object") {
    throw new Error("Неверный формат файла");
  }
  if (!data.checklist || typeof data.checklist !== "object") {
    throw new Error("В файле нет чек-листа");
  }
  if (!Array.isArray(data.journal)) {
    throw new Error("В файле нет дневника");
  }
  return data;
}

export function applyBackup(data: GriadkaBackup): void {
  saveChecklist(data.checklist);
  saveNotes(data.journal);
}
