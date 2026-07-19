import type { Metadata } from "next";
import Link from "next/link";
import BackupClient from "@/components/BackupClient";

export const metadata: Metadata = {
  title: "Резервная копия",
  description: "Экспорт и импорт чек-листа и дневника Грядка10 в JSON-файл.",
};

export default function BackupPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Резервная копия
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Данные живут только в браузере. Раз в сезон скачайте копию — так спокойнее при смене
        телефона.
      </p>
      <div className="mt-6">
        <BackupClient />
      </div>
      <p className="mt-8 text-sm text-[var(--muted)]">
        После импорта откройте{" "}
        <Link href="/dnevnik/" className="text-[var(--accent)] hover:underline">
          дневник
        </Link>{" "}
        или{" "}
        <Link href="/checklist/" className="text-[var(--accent)] hover:underline">
          чек-лист
        </Link>
        .
      </p>
    </div>
  );
}
