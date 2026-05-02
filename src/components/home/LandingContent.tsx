import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type LandingContentProps from "../../props/LandingContentProps";

function LandingContent({ visible }: LandingContentProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      className={`w-full max-w-3xl mx-auto px-6 transition-[opacity,transform] duration-700 delay-100 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      {/* Hero card */}
      <div
        className="border-2 border-black dark:border-stone-400 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_theme(colors.stone.500)] p-8 bg-amber-100 dark:bg-stone-800 mb-8"
        style={{
          animation: visible
            ? "fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards"
            : "none",
        }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-3 flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-teal-500" />
          {t("home.found_you")}
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold dark:text-amber-50 leading-[1.05]">
          Ismail
          <br />
          Dogukan
          <br />
          <span className="text-teal-600 dark:text-teal-400">Çokluk</span>
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-stone-600 dark:text-stone-300">
          {t("home.role")}
          <span className="mx-2 text-teal-500">·</span>
          {t("home.location")}
        </p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {t("home.currently_at")}{" "}
          <span className="font-bold text-amber-700 dark:text-amber-400">
            {t("home.current_company")}
          </span>{" "}
          {t("home.current_department")}
        </p>
      </div>

      {/* CTA row */}
      <div
        className="flex flex-wrap gap-4"
        style={{
          animation: visible
            ? "fadeInUp 0.6s 0.15s cubic-bezier(0.16,1,0.3,1) both"
            : "none",
        }}
      >
        <button
          onClick={() => navigate("/cv")}
          className="flex items-center gap-2 border-2 border-black dark:border-stone-400 px-6 py-3 bg-teal-400 dark:bg-teal-600 font-bold uppercase tracking-widest text-sm hover:bg-teal-500 dark:hover:bg-teal-500 transition-colors shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_theme(colors.stone.500)] active:translate-x-1 active:translate-y-1 active:shadow-none dark:text-amber-50 cursor-pointer"
        >
          {t("home.view_cv")} <i className="fa-solid fa-arrow-right text-xs" />
        </button>
        <a
          href="https://github.com/jilet1308"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-2 border-black dark:border-stone-400 px-6 py-3 bg-amber-50 dark:bg-stone-700 font-bold uppercase tracking-widest text-sm hover:bg-amber-200 dark:hover:bg-stone-600 transition-colors shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_theme(colors.stone.500)] active:translate-x-1 active:translate-y-1 active:shadow-none dark:text-amber-50"
        >
          <i className="fa-brands fa-github" /> GitHub
        </a>
        <a
          href="mailto:Ismail.d.cokluk@gmail.com"
          className="flex items-center gap-2 border-2 border-black dark:border-stone-400 px-6 py-3 bg-amber-50 dark:bg-stone-700 font-bold uppercase tracking-widest text-sm hover:bg-amber-200 dark:hover:bg-stone-600 transition-colors shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_theme(colors.stone.500)] active:translate-x-1 active:translate-y-1 active:shadow-none dark:text-amber-50"
        >
          <i className="fa-solid fa-envelope text-xs" /> {t("home.contact")}
        </a>
      </div>
    </div>
  );
}

export default LandingContent;
