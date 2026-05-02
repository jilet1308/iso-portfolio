import { fakeResults } from "../../types/HomeTypes";
import type BrowserAnimationProps from "../../props/BrowserAnimationProps";

function BrowserAnimation({
  phase,
  typedText,
  visibleResults,
  loadProgress,
  browserVisible,
  isTransitioning,
  addressBar,
  skip,
}: BrowserAnimationProps) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center p-4 z-10 transition-[opacity,transform] duration-500 ${
        isTransitioning
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <button
        onClick={skip}
        className="absolute top-3 right-3 text-xs uppercase tracking-widest border border-black dark:border-stone-400 px-3 py-1.5 bg-amber-50 dark:bg-stone-800 dark:text-amber-50 hover:bg-teal-300 dark:hover:bg-teal-700 transition-colors cursor-pointer z-20 shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_theme(colors.stone.500)]"
      >
        Skip →
      </button>

      {/* Browser window */}
      <div
        className={`w-full max-w-xl border-2 border-black dark:border-stone-400 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_theme(colors.stone.500)] transition-[opacity,transform] duration-500 ${
          browserVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Chrome bar */}
        <div className="h-10 bg-stone-100 dark:bg-stone-700 border-b-2 border-black dark:border-stone-500 flex items-center gap-3 px-3">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black/20" />
            <div className="w-3 h-3 rounded-full bg-green-400 border border-black/20" />
          </div>
          <div className="flex-1 h-6 bg-white dark:bg-stone-600 border border-black/30 dark:border-stone-400 flex items-center px-2 gap-1.5 overflow-hidden">
            <i className="fa-solid fa-lock text-[10px] text-stone-400 shrink-0" />
            <span
              className={`text-[11px] truncate transition-colors duration-300 ${
                phase === "loading" || phase === "transitioning"
                  ? "text-teal-600 dark:text-teal-400 font-bold"
                  : "text-stone-500 dark:text-stone-300"
              }`}
            >
              {addressBar}
            </span>
          </div>
        </div>

        {/* Loading progress bar */}
        <div className="h-[3px] bg-stone-200 dark:bg-stone-600 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-teal-400 transition-[width] duration-200 ease-out"
            style={{
              width:
                phase === "loading" || phase === "transitioning"
                  ? `${loadProgress}%`
                  : "0%",
            }}
          />
        </div>

        {/* Page body */}
        <div className="p-5 bg-white dark:bg-stone-800 min-h-[300px]">
          {/* Google logo */}
          <div className="mb-4">
            <span className="text-2xl font-bold select-none">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </span>
          </div>

          {/* Search input */}
          <div className="border-2 border-stone-300 dark:border-stone-500 rounded-full px-4 py-2 mb-4 flex items-center gap-2 shadow-sm dark:bg-stone-700">
            <span className="text-sm dark:text-amber-50 flex-1 min-h-[20px]">
              {typedText}
              {(phase === "typing" || phase === "searching") && (
                <span className="inline-block w-[2px] h-4 bg-stone-700 dark:bg-amber-50 ml-0.5 animate-pulse align-middle" />
              )}
            </span>
            <i className="fa-solid fa-magnifying-glass text-teal-500 text-sm shrink-0" />
          </div>

          {/* Searching spinner */}
          {phase === "searching" && (
            <div className="flex items-center gap-2 text-xs text-stone-400 mb-3">
              <div className="w-3 h-3 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
              Searching...
            </div>
          )}

          {/* Results count */}
          {visibleResults > 0 && (
            <p className="text-xs text-stone-400 dark:text-stone-500 mb-4 border-b border-stone-200 dark:border-stone-600 pb-2">
              About 3 results (0.42 seconds)
            </p>
          )}

          {/* Search results */}
          <div className="flex flex-col gap-4">
            {fakeResults.slice(0, visibleResults).map((r, i) => (
              <div
                key={i}
                onClick={() => r.real && skip()}
                className={`pl-3 border-l-4 transition-all duration-300 rounded-sm ${
                  r.real
                    ? phase === "hovering"
                      ? "border-l-teal-400 bg-teal-50 dark:bg-teal-900/20 cursor-pointer"
                      : phase === "clicking" ||
                          phase === "loading" ||
                          phase === "transitioning"
                        ? "border-l-amber-400 bg-amber-50 dark:bg-amber-900/20 scale-[0.99] cursor-pointer"
                        : "border-l-stone-200 dark:border-l-stone-600 cursor-pointer"
                    : "border-l-stone-200 dark:border-l-stone-600"
                }`}
                style={{ animation: "fadeInUp 0.35s ease forwards" }}
              >
                <p className="text-[11px] text-green-700 dark:text-green-500">
                  {r.breadcrumb}
                </p>
                <p
                  className={`text-sm font-semibold mt-0.5 ${
                    r.real
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {r.title}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                  {r.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowserAnimation;
