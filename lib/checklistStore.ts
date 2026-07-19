import type { SeasonBlock } from "./checklist";
import { SEASON_CHECKLIST } from "./checklist";

const STORAGE_KEY = "griadka10-checklist";

export type ChecklistState = Record<string, boolean>;

export function loadChecklist(): ChecklistState {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ChecklistState;
  } catch {
    return {};
  }
}

export function saveChecklist(state: ChecklistState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function allItemIds(blocks: SeasonBlock[] = SEASON_CHECKLIST): string[] {
  return blocks.flatMap((b) => b.items.map((i) => i.id));
}
