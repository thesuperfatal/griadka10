import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-white/70 py-6 text-sm text-[var(--muted)]">
      <div className="mx-auto max-w-3xl space-y-4 px-4">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-deep)]/50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide">Другие проекты</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://biznes-ip.ru/"
              className="rounded-full bg-white px-4 py-2 font-medium text-[var(--accent)] ring-1 ring-[var(--line)]"
            >
              СчётИП
            </a>
            <a
              href="https://biznes-ip.ru/memory/"
              className="rounded-full bg-white px-4 py-2 font-medium text-[var(--accent)] ring-1 ring-[var(--line)]"
            >
              Память10
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>{SITE_NAME} — календарь и памятки для огорода</p>
          <nav className="flex flex-wrap gap-4">
            <Link href="/kalendar/" className="hover:text-[var(--accent)]">
              Календарь
            </Link>
            <Link href="/posev/" className="hover:text-[var(--accent)]">
              Посев
            </Link>
            <Link href="/kultury/" className="hover:text-[var(--accent)]">
              Культуры
            </Link>
            <Link href="/kalkulyator/" className="hover:text-[var(--accent)]">
              Калькулятор
            </Link>
            <Link href="/sosedstvo/" className="hover:text-[var(--accent)]">
              Соседство
            </Link>
            <Link href="/problemy/" className="hover:text-[var(--accent)]">
              Проблемы
            </Link>
            <Link href="/dnevnik/" className="hover:text-[var(--accent)]">
              Дневник
            </Link>
            <Link href="/articles/" className="hover:text-[var(--accent)]">
              Статьи
            </Link>
            <Link href="/checklist/" className="hover:text-[var(--accent)]">
              Чек-лист
            </Link>
            <Link href="/faq/" className="hover:text-[var(--accent)]">
              FAQ
            </Link>
            <Link href="/backup/" className="hover:text-[var(--accent)]">
              Копия
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
