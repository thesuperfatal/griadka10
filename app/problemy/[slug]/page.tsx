import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProblem, PROBLEMS } from "@/lib/problems";

export function generateStaticParams() {
  return PROBLEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return { title: "Проблема" };
  return { title: problem.title, description: problem.symptom };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/problemy/"
        className="mb-4 inline-block text-sm text-[var(--muted)] hover:text-[var(--accent)]"
      >
        ← Все проблемы
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        {problem.title}
      </h1>
      <p className="mt-3 text-lg text-[var(--muted)]">{problem.symptom}</p>

      <section className="mt-8 rounded-3xl border border-[var(--line)] bg-white p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Что чаще бывает
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {problem.likely.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-[var(--line)] bg-white p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
          Что сделать сейчас
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {problem.doNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      {problem.note ? (
        <p className="mt-4 text-sm text-[var(--muted)]">{problem.note}</p>
      ) : null}

      <p className="mt-8 text-sm">
        <Link href="/kalendar/" className="text-[var(--accent)] hover:underline">
          Календарь работ
        </Link>
        {" · "}
        <Link href="/kultury/" className="text-[var(--accent)] hover:underline">
          Культуры
        </Link>
      </p>
    </div>
  );
}
