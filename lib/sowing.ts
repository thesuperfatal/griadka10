export interface SowingCrop {
  id: string;
  title: string;
  /** Месяцы 1–12: рассада дома */
  seedlings: number[];
  /** Месяцы 1–12: прямой посев / высадка в грунт или теплицу */
  ground: number[];
  note: string;
}

export const SOWING: SowingCrop[] = [
  {
    id: "tomat",
    title: "Томат",
    seedlings: [3, 4],
    ground: [5, 6],
    note: "В теплицу можно раньше открытого грунта. После угрозы заморозков.",
  },
  {
    id: "perec",
    title: "Перец",
    seedlings: [2, 3],
    ground: [5, 6],
    note: "Долгая рассада: сейте раньше томата. Любит тепло.",
  },
  {
    id: "ogurec",
    title: "Огурец",
    seedlings: [4, 5],
    ground: [5, 6],
    note: "Можно сразу в грунт в мае или короткой рассадой.",
  },
  {
    id: "kapusta",
    title: "Капуста",
    seedlings: [3, 4],
    ground: [5, 6],
    note: "Ранние — раньше, поздние — по сроку сорта на пакете.",
  },
  {
    id: "kartofel",
    title: "Картофель",
    seedlings: [],
    ground: [4, 5],
    note: "Посадка клубней, когда почва ~8–10 °C.",
  },
  {
    id: "morkov",
    title: "Морковь",
    seedlings: [],
    ground: [4, 5, 6],
    note: "Только прямой посев. Июньский — часто на хранение.",
  },
  {
    id: "luk",
    title: "Лук (севок)",
    seedlings: [],
    ground: [4, 5],
    note: "Озимый севок — осенью по региону.",
  },
  {
    id: "chesnok",
    title: "Чеснок",
    seedlings: [],
    ground: [4, 9, 10],
    note: "Яровой — весна, озимый — сентябрь–октябрь.",
  },
  {
    id: "klubnika",
    title: "Клубника",
    seedlings: [],
    ground: [4, 5, 8],
    note: "Весна или август усами / рассадой.",
  },
  {
    id: "goroh",
    title: "Горох",
    seedlings: [],
    ground: [4, 5],
    note: "Холодостойкий, сейте пораньше в прогретую сверху почву.",
  },
];

export const MONTH_SHORT = [
  "",
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export function monthsLabel(months: number[]): string {
  if (months.length === 0) return "—";
  return months.map((m) => MONTH_SHORT[m]).join(", ");
}
