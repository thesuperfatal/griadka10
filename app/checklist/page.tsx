import type { Metadata } from "next";
import Link from "next/link";
import SeasonChecklist from "@/components/SeasonChecklist";

export const metadata: Metadata = {
  title: "Чек-лист сезона",
  description: "Весна, лето, осень — отмечай шаги. Прогресс сохраняется в браузере.",
};

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Чек-лист сезона
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Отмечайте сделанное. Данные только на этом устройстве (localStorage).
      </p>
      <div className="mt-6">
        <SeasonChecklist />
      </div>
    </div>
  );
}
