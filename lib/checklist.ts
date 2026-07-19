export interface ChecklistItem {
  id: string;
  label: string;
}

export interface SeasonBlock {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export const SEASON_CHECKLIST: SeasonBlock[] = [
  {
    id: "spring",
    title: "Весна",
    items: [
      { id: "s1", label: "Купил/проверил семена" },
      { id: "s2", label: "Посеял рассаду дома" },
      { id: "s3", label: "Подготовил грядки" },
      { id: "s4", label: "Высадил в грунт / теплицу" },
    ],
  },
  {
    id: "summer",
    title: "Лето",
    items: [
      { id: "u1", label: "Наладил полив" },
      { id: "u2", label: "Подкормил основные культуры" },
      { id: "u3", label: "Прополол и замульчировал" },
      { id: "u4", label: "Собираю урожай регулярно" },
    ],
  },
  {
    id: "autumn",
    title: "Осень",
    items: [
      { id: "a1", label: "Убрал основной урожай" },
      { id: "a2", label: "Посадил озимое / клубнику" },
      { id: "a3", label: "Убрал ботву и мусор" },
      { id: "a4", label: "Укрыл теплолюбивое" },
    ],
  },
];
