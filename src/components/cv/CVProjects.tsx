import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import { projects } from "../../types/CVTypes";

function CVProjects() {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={220}>
      <SectionTitle>{t("cv.sections.projects")}</SectionTitle>
      <div className="flex flex-col gap-5">
        {projects.map((proj, i) => (
          <Card key={i} accent="amber">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base font-bold dark:text-amber-50">
                  {proj.name}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 font-bold mt-0.5">
                  {t(`cv.projects.${i}.subtitle`)}
                </p>
              </div>
              <a
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs dark:text-amber-50 border border-black dark:border-stone-400 px-2 py-1 bg-amber-50 dark:bg-stone-700 hover:bg-teal-300 dark:hover:bg-teal-700 transition-colors duration-200 shrink-0"
              >
                <i className="fa-brands fa-github" />
                GitHub
              </a>
            </div>
            <p className="dark:text-amber-100 text-stone-700 text-sm leading-relaxed mb-3">
              {t(`cv.projects.${i}.description`)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {proj.tech.map((tech) => (
                <Tag key={tech} label={tech} color="amber" />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default CVProjects;
