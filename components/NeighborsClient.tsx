"use client";

import { useMemo, useState } from "react";
import {
  getRelation,
  NEIGHBOR_CROPS,
  relationText,
} from "@/lib/neighbors";

export default function NeighborsClient() {
  const [a, setA] = useState("tomat");
  const [b, setB] = useState("bazilik");

  const rel = useMemo(() => getRelation(a, b), [a, b]);
  const copy = relationText(rel);

  const tone =
    rel === "good"
      ? "border-[var(--accent)] bg-[var(--accent-soft)]"
      : rel === "bad"
        ? "border-rose-300 bg-rose-50"
        : "border-[var(--line)] bg-[var(--bg)]";

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="text-[var(--muted)]">Первая культура</span>
            <select
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            >
              {NEIGHBOR_CROPS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-[var(--muted)]">Вторая культура</span>
            <select
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            >
              {NEIGHBOR_CROPS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className={`rounded-3xl border p-5 ${tone}`}>
        {a === b ? (
          <p className="text-sm text-[var(--muted)]">Выберите две разные культуры.</p>
        ) : (
          <>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              {copy.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{copy.detail}</p>
          </>
        )}
      </div>

      <p className="text-xs leading-relaxed text-[var(--muted)]">
        Это народно-практический ориентир, не строгая наука. На маленькой грядке важнее свет,
        полив и севооборот по годам.
      </p>
    </div>
  );
}
