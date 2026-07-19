import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CROPS, getCrop } from "@/lib/crops";

export function generateStaticParams() {
  return CROPS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const crop = getCrop(slug);
  if (!crop) return { title: "Культура" };
  return { title: crop.title, description: crop.short };
}

export default async function CropPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const crop = getCrop(slug);
  if (!crop) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/kultury/"
        className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]"
      >
        ← Все культуры
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        {crop.title}
      </h1>
      <p className="mt-2 text-lg text-[var(--muted)]">{crop.short}</p>

      <dl className="mt-8 space-y-4">
        <div className="rounded-3xl border border-[var(--line)] bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Когда
          </dt>
          <dd className="mt-2 text-sm leading-relaxed">{crop.when}</dd>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Схема посадки
          </dt>
          <dd className="mt-2 text-sm leading-relaxed">{crop.spacing}</dd>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Соседи
          </dt>
          <dd className="mt-2 text-sm leading-relaxed">{crop.neighbors}</dd>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            Советы
          </dt>
          <dd className="mt-2">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
              {crop.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}
