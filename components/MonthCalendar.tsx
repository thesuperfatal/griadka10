"use client";

import { useMemo, useState } from "react";
import { getMonthTask, MONTH_TASKS } from "@/lib/calendar";

export default function MonthCalendar() {
  const now = useMemo(() => new Date().getMonth() + 1, []);
  const [month, setMonth] = useState(now);
  const task = getMonthTask(month);

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        {MONTH_TASKS.map((m) => (
          <button
            key={m.month}
            type="button"
            onClick={() => setMonth(m.month)}
            className={`rounded-full px-3 py-1.5 text-sm ${
              m.month === month
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--bg-deep)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
            }`}
          >
            {m.title.slice(0, 3)}
          </button>
        ))}
      </div>
      <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold">
        {task.title}
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
        {task.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
