"use client";

import { useMemo, useState } from "react";
import { CROPS } from "@/lib/crops";
import { calcPlanting } from "@/lib/plantingCalc";

export default function BedCalculator() {
  const [slug, setSlug] = useState(CROPS[0].slug);
  const [lengthM, setLengthM] = useState("4");
  const [widthM, setWidthM] = useState("1");
  const [customInRow, setCustomInRow] = useState("");
  const [customBetween, setCustomBetween] = useState("");

  const crop = CROPS.find((c) => c.slug === slug) ?? CROPS[0];

  const cmInRow = customInRow ? Number(customInRow) : crop.plantCmInRow;
  const cmBetween = customBetween ? Number(customBetween) : crop.plantCmBetweenRows;

  const result = useMemo(
    () => calcPlanting(Number(lengthM.replace(",", ".")), Number(widthM.replace(",", ".")), cmInRow, cmBetween),
    [lengthM, widthM, cmInRow, cmBetween],
  );

  return (
    <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Культура</span>
          <select
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setCustomInRow("");
              setCustomBetween("");
            }}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          >
            {CROPS.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <div className="rounded-2xl bg-[var(--accent-soft)]/60 px-3 py-2 text-sm text-[var(--muted)]">
          Схема по умолчанию: {crop.plantCmInRow} см в ряду × {crop.plantCmBetweenRows} см между
          рядами
        </div>
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Длина грядки, м</span>
          <input
            inputMode="decimal"
            value={lengthM}
            onChange={(e) => setLengthM(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Ширина грядки, м</span>
          <input
            inputMode="decimal"
            value={widthM}
            onChange={(e) => setWidthM(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Шаг в ряду, см (свой)</span>
          <input
            inputMode="decimal"
            placeholder={String(crop.plantCmInRow)}
            value={customInRow}
            onChange={(e) => setCustomInRow(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[var(--muted)]">Между рядами, см (свой)</span>
          <input
            inputMode="decimal"
            placeholder={String(crop.plantCmBetweenRows)}
            value={customBetween}
            onChange={(e) => setCustomBetween(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          />
        </label>
      </div>

      {result ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-4">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Всего растений</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--accent)]">
              {result.total}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-4">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Рядов × в ряду</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
              {result.rows} × {result.plantsInRow}
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-4 py-4">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">На 1 м²</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
              ~{result.densityPerM2.toFixed(1)}
            </p>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-sm text-rose-700">Проверьте числа: длина, ширина и шаги должны быть больше нуля.</p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
        Это ориентир по схеме посадки, не учёт дорожек и сортов. Для яблони шаги в метрах — считайте
        участок целиком, не узкую грядку.
      </p>
    </div>
  );
}
