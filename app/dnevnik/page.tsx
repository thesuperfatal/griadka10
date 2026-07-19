import type { Metadata } from "next";
import Link from "next/link";
import JournalClient from "@/components/JournalClient";

export const metadata: Metadata = {
  title: "Дневник работ",
  description:
    "Заметки по поливу, подкормке и обработкам. Хранятся только в вашем браузере.",
};

export default function DnevnikPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Дневник работ
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Короткие записи по дням. Никуда не отправляются — только localStorage на этом устройстве.
      </p>
      <div className="mt-6">
        <JournalClient />
      </div>
    </div>
  );
}
