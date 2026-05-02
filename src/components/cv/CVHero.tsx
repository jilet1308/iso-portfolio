import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { contactLinks } from "../../types/CVTypes";

function CVHero() {
  const { t } = useTranslation();
  return (
    <AnimatedSection delay={0}>
      <div className="border border-black dark:border-stone-500 shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_theme(colors.stone.500)] p-6 bg-amber-100 dark:bg-stone-800">
        <p className="text-sm uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-1">
          {t("cv.hero.role")}
        </p>
        <h1 className="text-4xl font-bold dark:text-amber-50 leading-tight">
          İsmail Doğukan
          <br />
          <span className="text-teal-600 dark:text-teal-400">Çokluk</span>
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {contactLinks.map(({ icon, text, href }) =>
            href ? (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm dark:text-amber-50 border border-black dark:border-stone-400 px-3 py-1 bg-amber-50 dark:bg-stone-700 hover:bg-teal-300 dark:hover:bg-teal-700 transition-colors duration-200"
              >
                <i className={`${icon} text-xs`} />
                {text}
              </a>
            ) : (
              <span
                key={text}
                className="flex items-center gap-1.5 text-sm dark:text-amber-50 border border-black dark:border-stone-400 px-3 py-1 bg-amber-50 dark:bg-stone-700"
              >
                <i className={`${icon} text-xs`} />
                {text}
              </span>
            )
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default CVHero;
