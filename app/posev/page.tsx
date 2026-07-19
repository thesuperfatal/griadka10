import type { Metadata } from "next";
import Link from "next/link";
import SowingClient from "@/components/SowingClient";
import { REGION_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Сроки посева",
  description:
    "Когда сеять на рассаду и в грунт: томат, перец, морковь, чеснок и другие культуры.",
};

export default function PosevPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Сроки посева
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {REGION_NOTE}. Выберите культуру или смотрите сводную таблицу.
      </p>
      <div className="mt-6">
        <SowingClient />
      </div>
      <p className="mt-8 text-sm text-[var(--muted)]">
        Ещё:{" "}
        <Link href="/kalendar/" className="text-[var(--accent)] hover:underline">
          календарь работ
        </Link>
        {" · "}
        <Link href="/kultury/" className="text-[var(--accent)] hover:underline">
          карточки культур
        </Link>
      </p>
    </div>
  );
}
