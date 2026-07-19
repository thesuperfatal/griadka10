import type { Metadata } from "next";
import Link from "next/link";
import { PROBLEMS } from "@/lib/problems";

export const metadata: Metadata = {
  title: "Проблемы на грядке",
  description:
    "Дыры на листьях, желтизна, мало завязи, пятна на томатах — что чаще бывает и что сделать сейчас.",
};

export default function ProblemsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
        Проблемы на грядке
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Короткие памятки по симптомам. Это ориентир для самостоятельной проверки, не диагноз.
      </p>
      <ul className="mt-8 space-y-3">
        {PROBLEMS.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/problemy/${p.slug}/`}
              className="block rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--accent)]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {p.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.symptom}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
