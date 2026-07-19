import type { Metadata } from "next";
import Link from "next/link";
import NeighborsClient from "@/components/NeighborsClient";

export const metadata: Metadata = {
  title: "Соседство культур",
  description: "Можно ли сажать культуры рядом: томат, огурец, лук, чеснок и другие.",
};

export default function SosedstvoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Соседство культур
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Выберите две культуры — покажем, обычно ли их сажают рядом.
      </p>
      <div className="mt-6">
        <NeighborsClient />
      </div>
      <p className="mt-8 text-sm text-[var(--muted)]">
        Подробнее по культурам:{" "}
        <Link href="/kultury/" className="text-[var(--accent)] hover:underline">
          карточки
        </Link>
        .
      </p>
    </div>
  );
}
