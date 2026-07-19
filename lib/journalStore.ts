import type { GardenNote } from "./journal";

const STORAGE_KEY = "griadka10-journal";

export function loadNotes(): GardenNote[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as GardenNote[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes: GardenNote[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
