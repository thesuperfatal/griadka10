"use client";

import { useRef, useState } from "react";
import { applyBackup, downloadBackup, parseBackup } from "@/lib/backup";

export default function BackupClient() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onExport() {
    setError(null);
    downloadBackup();
    setMessage("Файл сохранён на компьютер.");
  }

  async function onImport(file: File | null) {
    setMessage(null);
    setError(null);
    if (!file) return;
    try {
      const text = await file.text();
      const data = parseBackup(text);
      if (
        !window.confirm(
          `Импортировать копию от ${data.exportedAt.slice(0, 10)}?\nЧек-лист и дневник на этом устройстве будут заменены.`,
        )
      ) {
        return;
      }
      applyBackup(data);
      setMessage(
        `Готово: записей в дневнике — ${data.journal.length}. Обновите страницы дневника и чек-листа.`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Не удалось прочитать файл");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          Экспорт
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Скачайте JSON с чек-листом и дневником. Можно перенести на другой телефон или компьютер.
        </p>
        <button
          type="button"
          onClick={onExport}
          className="mt-4 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Скачать копию
        </button>
      </div>

      <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          Импорт
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Загрузите ранее скачанный файл. Текущие данные на этом устройстве будут заменены.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          className="mt-4 block w-full text-sm text-[var(--muted)] file:mr-3 file:rounded-full file:border-0 file:bg-[var(--accent-soft)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[var(--accent)]"
          onChange={(e) => onImport(e.target.files?.[0] ?? null)}
        />
      </div>

      {message ? (
        <p className="rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--accent)]">
          {message}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      ) : null}
    </div>
  );
}
