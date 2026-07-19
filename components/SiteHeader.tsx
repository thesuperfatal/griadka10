import Link from "next/link";
import ProjectsBar from "@/components/ProjectsBar";
import { SITE_NAME } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)]/80 bg-white/75 backdrop-blur-md">
      <ProjectsBar current="sad" />
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group shrink-0">
          <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
            {SITE_NAME}
          </span>
          <span className="mt-0.5 block text-xs text-[var(--muted)] group-hover:text-[var(--accent)]">
            10 минут для грядки
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--muted)]">
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
    </header>
  );
}
