export interface NeighborCrop {
  id: string;
  title: string;
}

/** Базовый список для проверки соседства */
export const NEIGHBOR_CROPS: NeighborCrop[] = [
  { id: "tomat", title: "Томат" },
  { id: "ogurec", title: "Огурец" },
  { id: "kartofel", title: "Картофель" },
  { id: "klubnika", title: "Клубника" },
  { id: "yablonya", title: "Яблоня" },
  { id: "morkov", title: "Морковь" },
  { id: "kapusta", title: "Капуста" },
  { id: "luk", title: "Лук" },
  { id: "chesnok", title: "Чеснок" },
  { id: "perec", title: "Перец" },
  { id: "goroh", title: "Горох" },
  { id: "bazilik", title: "Базилик" },
];

type Relation = "good" | "bad" | "neutral";

/** Несимметричные пары нормализуем при проверке */
const GOOD: [string, string][] = [
  ["tomat", "bazilik"],
  ["tomat", "morkov"],
  ["ogurec", "goroh"],
  ["ogurec", "kapusta"],
  ["kartofel", "goroh"],
  ["kartofel", "kapusta"],
  ["klubnika", "chesnok"],
  ["klubnika", "luk"],
  ["morkov", "luk"],
  ["morkov", "goroh"],
  ["kapusta", "luk"],
  ["perec", "bazilik"],
  ["chesnok", "klubnika"],
];

const BAD: [string, string][] = [
  ["tomat", "kartofel"],
  ["tomat", "goroh"],
  ["ogurec", "kartofel"],
  ["kartofel", "ogurec"],
  ["kartofel", "tomat"],
  ["klubnika", "kapusta"],
  ["luk", "goroh"],
  ["chesnok", "goroh"],
  ["perec", "goroh"],
  ["yablonya", "kartofel"],
];

function pairKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

const goodSet = new Set(GOOD.map(([a, b]) => pairKey(a, b)));
const badSet = new Set(BAD.map(([a, b]) => pairKey(a, b)));

export function getRelation(a: string, b: string): Relation {
  if (!a || !b || a === b) return "neutral";
  const key = pairKey(a, b);
  if (badSet.has(key)) return "bad";
  if (goodSet.has(key)) return "good";
  return "neutral";
}

export function relationText(rel: Relation): { title: string; detail: string } {
  if (rel === "good") {
    return {
      title: "Хорошо рядом",
      detail: "Обычно соседствуют нормально: меньше конкуренции или есть взаимная польза.",
    };
  }
  if (rel === "bad") {
    return {
      title: "Лучше не рядом",
      detail: "Часто делят вредителей, болезни или сильно конкурируют за питание.",
    };
  }
  return {
    title: "Нейтрально",
    detail: "Явного конфликта в справочнике нет. Смотрите на место, полив и севооборот.",
  };
}
