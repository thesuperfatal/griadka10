import type { Metadata } from "next";
import Link from "next/link";
import MonthCalendar from "@/components/MonthCalendar";
import { REGION_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Календарь работ",
  description: "Что делать на огороде по месяцам — ориентир для средней полосы.",
};

export default function KalendarPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Календарь работ
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {REGION_NOTE}. Даты сдвигаются по погоде — это памятка, не жёсткий регламент.
      </p>
      <div className="mt-6">
        <MonthCalendar />
      </div>
    </div>
  );
}
