"use client";

import { useEffect, useState } from "react";
import {
  kindLabel,
  NOTE_KINDS,
  type GardenNote,
  type NoteKind,
} from "@/lib/journal";
import { loadNotes, makeId, saveNotes, todayKey } from "@/lib/journalStore";

export default function JournalClient() {
  const [notes, setNotes] = useState<GardenNote[]>([]);
  const [ready, setReady] = useState(false);
  const [date, setDate] = useState(todayKey());
  const [kind, setKind] = useState<NoteKind>("poliv");
  const [text, setText] = useState("");

  useEffect(() => {
    setNotes(loadNotes());
    setReady(true);
  }, []);

  function persist(next: GardenNote[]) {
    setNotes(next);
    saveNotes(next);
  }

  function addNote(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    const note: GardenNote = {
      id: makeId(),
      date,
      kind,
      text: trimmed,
      createdAt: Date.now(),
    };
    persist([note, ...notes].slice(0, 200));
    setText("");
  }

  function removeNote(id: string) {
    persist(notes.filter((n) => n.id !== id));
  }

  function clearAll() {
    if (!window.confirm("Удалить все записи дневника?")) return;
    persist([]);
  }

  if (!ready) {
    return <p className="text-sm text-[var(--muted)]">Загрузка дневника…</p>;
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={addNote}
        className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm"
      >
        <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          Новая запись
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="text-[var(--muted)]">Дата</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="block text-sm">
            <span className="text-[var(--muted)]">Тип</span>
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value as NoteKind)}
              className="mt-1 w-full rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            >
              {NOTE_KINDS.map((k) => (
                <option key={k.id} value={k.id}>
                  {k.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-3 block text-sm">
          <span className="text-[var(--muted)]">Что сделали</span>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Например: полил томаты в теплице, утром"
            className="mt-1 w-full resize-y rounded-2xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
          />
        </label>
        <button
          type="submit"
          className="mt-4 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Сохранить
        </button>
      </form>

      <section>
        <div className="mb-3 flex items-end justify-between gap-3">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
            Записи ({notes.length})
          </h2>
          {notes.length > 0 ? (
            <button
              type="button"
              onClick={clearAll}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              Очистить всё
            </button>
          ) : null}
        </div>

        {notes.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-[var(--line)] bg-white/70 px-4 py-8 text-center text-sm text-[var(--muted)]">
            Пока пусто. Добавьте первый полив или подкормку — запись останется в этом браузере.
          </p>
        ) : (
          <ul className="space-y-3">
            {notes.map((n) => (
              <li
                key={n.id}
                className="rounded-3xl border border-[var(--line)] bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-[var(--muted)]">
                      {n.date} · {kindLabel(n.kind)}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed whitespace-pre-wrap">{n.text}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeNote(n.id)}
                    className="shrink-0 text-xs text-[var(--muted)] hover:text-rose-700"
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
