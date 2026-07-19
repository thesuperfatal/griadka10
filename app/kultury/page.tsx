import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/lib/crops";

export const metadata: Metadata = {
  title: "Культуры",
  description: "Карточки культур: томат, огурец, морковь, капуста, чеснок и другие — когда сажать и как.",
};

export default function KulturyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]">
        ← На главную
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold">Культуры</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Краткие памятки: сроки, схема посадки, соседи и 3 практических совета.
      </p>
      <ul className="mt-8 space-y-3">
        {CROPS.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/kultury/${c.slug}/`}
              className="block rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm hover:border-[var(--accent)]"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {c.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{c.short}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
