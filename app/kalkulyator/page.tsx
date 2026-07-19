import type { Metadata } from "next";
import Link from "next/link";
import BedCalculator from "@/components/BedCalculator";

export const metadata: Metadata = {
  title: "Калькулятор посадки",
  description: "Сколько кустов на грядке: длина, ширина и схема посадки по культурам.",
};

export default function KalkulyatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Калькулятор посадки
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Введите размер грядки — получите число растений по типовой схеме. Шаг можно поменять.
      </p>
      <div className="mt-6">
        <BedCalculator />
      </div>
    </div>
  );
}
