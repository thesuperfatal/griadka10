"use client";

import { useEffect, useState } from "react";
import { SEASON_CHECKLIST } from "@/lib/checklist";
import {
  allItemIds,
  loadChecklist,
  saveChecklist,
  type ChecklistState,
} from "@/lib/checklistStore";

export default function SeasonChecklist() {
  const [state, setState] = useState<ChecklistState>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadChecklist());
    setReady(true);
  }, []);

  function toggle(id: string) {
    setState((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveChecklist(next);
      return next;
    });
  }

  function reset() {
    if (!window.confirm("Сбросить все отметки чек-листа?")) return;
    const empty: ChecklistState = {};
    saveChecklist(empty);
    setState(empty);
  }

  const total = allItemIds().length;
  const done = allItemIds().filter((id) => state[id]).length;

  if (!ready) {
    return <p className="text-sm text-[var(--muted)]">Загрузка чек-листа…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
        <p className="text-sm text-[var(--muted)]">Прогресс сезона</p>
        <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold">
          {done} из {total}
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--bg-deep)]">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
      </div>

      {SEASON_CHECKLIST.map((block) => (
        <section
          key={block.id}
          className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm"
        >
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
            {block.title}
          </h2>
          <ul className="mt-3 space-y-2">
            {block.items.map((item) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3 rounded-2xl px-2 py-2 hover:bg-[var(--bg)]">
                  <input
                    type="checkbox"
                    checked={Boolean(state[item.id])}
                    onChange={() => toggle(item.id)}
                    className="mt-1 size-4 accent-[var(--accent)]"
                  />
                  <span
                    className={`text-sm ${state[item.id] ? "text-[var(--muted)] line-through" : ""}`}
                  >
                    {item.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <button
        type="button"
        onClick={reset}
        className="text-sm text-[var(--muted)] underline-offset-2 hover:text-[var(--accent)] hover:underline"
      >
        Сбросить отметки
      </button>
    </div>
  );
}
