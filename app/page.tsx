import Link from "next/link";
import { CROPS } from "@/lib/crops";
import { getMonthTask } from "@/lib/calendar";
import { REGION_NOTE } from "@/lib/site";

export default function HomePage() {
  const month = new Date().getMonth() + 1;
  const current = getMonthTask(month);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <section className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          Сад и огород
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl">
          Грядка10
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Календарь работ, карточки культур и чек-лист сезона. Без регистрации —
          отметки хранятся в браузере. {REGION_NOTE}.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/kalendar/"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Календарь месяца
          </Link>
          <Link
            href="/checklist/"
            className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]"
          >
            Чек-лист сезона
          </Link>
          <Link
            href="/kultury/"
            className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]"
          >
            Культуры
          </Link>
        </div>
      </section>

      <section className="mb-12 rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
          Сейчас · {current.title}
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)]">
          {current.items.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href="/kalendar/"
          className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Весь календарь →
        </Link>
      </section>

      <section>
        <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold">
          5 культур для старта
        </h2>
        <div className="grid gap-3">
          {CROPS.map((c) => (
            <Link
              key={c.slug}
              href={`/kultury/${c.slug}/`}
              className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm transition hover:border-[var(--accent)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{c.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
