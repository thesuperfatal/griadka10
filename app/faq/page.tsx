import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Частые вопросы",
  description:
    "Регистрация, сохранение данных, регион календаря и чем Грядка10 отличается от СчётИП.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Частые вопросы
      </h1>
      <p className="mt-2 text-[var(--muted)]">Коротко о том, как устроена Грядка10.</p>

      <dl className="mt-8 space-y-4">
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border border-[var(--line)] bg-white px-5 py-4 shadow-sm"
          >
            <dt className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.a}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-sm text-[var(--muted)]">
        Дальше:{" "}
        <Link href="/kalendar/" className="text-[var(--accent)] hover:underline">
          календарь
        </Link>
        ,{" "}
        <Link href="/dnevnik/" className="text-[var(--accent)] hover:underline">
          дневник
        </Link>{" "}
        или{" "}
        <Link href="/problemy/" className="text-[var(--accent)] hover:underline">
          проблемы на грядке
        </Link>
        .
      </p>
    </div>
  );
}
