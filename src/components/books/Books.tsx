import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Book } from "../../types/BookTypes";
import books from "../../data/books";
// ─────────────────────────────────────────────────────────────────────────────

const readBooks = books.filter((b) => !b.plannedToRead);
const plannedBooks = books.filter((b) => b.plannedToRead);
const defaultBook =
  readBooks.find((b) => b.currentlyReading) ?? readBooks[0] ?? null;

function BookButton({
  book,
  selected,
  onSelect,
}: {
  book: Book;
  selected: Book | null;
  onSelect: (b: Book) => void;
}) {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => onSelect(book)}
      className={`
        text-left w-full border border-black dark:border-stone-500
        px-3 py-2 transition-colors duration-150
        shadow-[3px_3px_0_0_#000] dark:shadow-[3px_3px_0_0_theme(colors.stone.500)]
        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
        ${
          selected?.id === book.id
            ? "bg-teal-400 dark:bg-teal-600"
            : "bg-amber-100 dark:bg-stone-800 hover:bg-teal-300 dark:hover:bg-teal-700"
        }
      `}
    >
      <p className="text-sm font-semibold dark:text-amber-50 leading-snug">
        {book.title}
      </p>
      <p className="text-xs dark:text-amber-200 opacity-70 mt-0.5">
        {book.author}
      </p>
      {book.currentlyReading && (
        <span className="inline-block mt-1 text-[11px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
          ● {t("books.sections.currently_reading")}
        </span>
      )}
    </button>
  );
}

function Books() {
  const [selected, setSelected] = useState<Book | null>(defaultBook);
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 gap-6 h-full min-h-0">
      {/* Left — book list */}
      <div className="w-64 shrink-0 flex flex-col h-full min-h-0">
        {/* Books I've Read — half height, own scroll */}
        <div className="flex-1 min-h-0 flex flex-col">
          <p className="text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 shrink-0">
            {t("books.sections.read")}
          </p>
          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin flex flex-col gap-2 pr-1">
            {readBooks.length === 0 ? (
              <p className="text-sm dark:text-amber-50 opacity-50 italic">
                {t("books.sections.no_books")}
              </p>
            ) : (
              readBooks.map((book) => (
                <BookButton
                  key={book.id}
                  book={book}
                  selected={selected}
                  onSelect={setSelected}
                />
              ))
            )}
          </div>
        </div>

        <div className="border-t border-black dark:border-stone-500 my-3 shrink-0" />

        {/* Planning to Read — half height, own scroll */}
        <div className="flex-1 min-h-0 flex flex-col">
          <p className="text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 shrink-0">
            {t("books.sections.planning")}
          </p>
          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin flex flex-col gap-2 pr-1">
            {plannedBooks.length === 0 ? (
              <p className="text-sm dark:text-amber-50 opacity-50 italic">
                {t("books.sections.no_books")}
              </p>
            ) : (
              plannedBooks.map((book) => (
                <BookButton
                  key={book.id}
                  book={book}
                  selected={selected}
                  onSelect={setSelected}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Right — cover + review */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto scrollbar-thin">
        {selected ? (
          <>
            {/* Cover */}
            <div className="flex flex-col items-center shrink-0 pt-2 pb-6">
              <img
                key={selected.id}
                src={`/assets/book_covers/${selected.cover}`}
                alt={`${selected.title} cover`}
                className="max-h-72 max-w-full object-contain border border-black dark:border-stone-500 shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_theme(colors.stone.500)]"
              />
              <p className="mt-4 text-sm font-semibold dark:text-amber-50">
                {selected.title}
              </p>
              <p className="text-xs dark:text-amber-200 opacity-70">
                {selected.author}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-black dark:border-stone-500 mb-4 shrink-0" />

            {/* Review */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-3">
                {t("books.sections.review")}
              </p>
              {(() => {
                const localizedReview = t(`books.reviews.${selected.id}`, {
                  returnObjects: true,
                  defaultValue: selected.review ?? [],
                }) as string[];
                return localizedReview && localizedReview.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {localizedReview.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm dark:text-amber-50 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm dark:text-amber-50 opacity-40 italic">
                    {t("books.sections.no_review")}
                  </p>
                );
              })()}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm dark:text-amber-50 opacity-50 italic">
              {t("books.sections.no_selection")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
