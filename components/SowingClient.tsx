"use client";

import { useMemo, useState } from "react";
import { monthsLabel, SOWING } from "@/lib/sowing";

export default function SowingClient() {
  const [id, setId] = useState(SOWING[0].id);
  const crop = useMemo(() => SOWING.find((c) => c.id === id) ?? SOWING[0], [id]);
  const now = new Date().getMonth() + 1;

  const seedlingNow = crop.seedlings.includes(now);
  const groundNow = crop.ground.includes(now);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Культура</span>
          <select
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          >
            {SOWING.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-4">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">На рассаду</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">
              {monthsLabel(crop.seedlings)}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-4">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">В грунт / теплицу</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">
              {monthsLabel(crop.ground)}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{crop.note}</p>

        {(seedlingNow || groundNow) && (
          <p className="mt-4 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--accent)]">
            Сейчас ({monthsLabel([now])}):{" "}
            {seedlingNow && groundNow
              ? "можно и рассаду, и грунт — смотрите погоду"
              : seedlingNow
                ? "типичный срок для рассады дома"
                : "типичный срок для грунта / теплицы"}
          </p>
        )}
      </div>

      <div className="overflow-x-auto rounded-3xl border border-[var(--line)] bg-white shadow-sm">
        <table className="w-full min-w-[28rem] text-left text-sm">
          <thead className="border-b border-[var(--line)] bg-[var(--bg-deep)]/50 text-xs uppercase tracking-wide text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3 font-medium">Культура</th>
              <th className="px-4 py-3 font-medium">Рассада</th>
              <th className="px-4 py-3 font-medium">Грунт</th>
            </tr>
          </thead>
          <tbody>
            {SOWING.map((c) => (
              <tr
                key={c.id}
                className={`border-b border-[var(--line)]/70 ${c.id === id ? "bg-[var(--accent-soft)]/40" : ""}`}
              >
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setId(c.id)}
                    className="font-medium hover:text-[var(--accent)]"
                  >
                    {c.title}
                  </button>
                </td>
                <td className="px-4 py-3 text-[var(--muted)]">{monthsLabel(c.seedlings)}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{monthsLabel(c.ground)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[var(--muted)]">
        Ориентир для средней полосы. Сдвигайте по своей весне и микроклимату участка.
      </p>
    </div>
  );
}
