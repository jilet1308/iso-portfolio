import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import { experiences } from "../../types/CVTypes";

function CVExperience() {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={180}>
      <SectionTitle>{t("cv.sections.experience")}</SectionTitle>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <Card key={i} accent="teal">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-bold dark:text-amber-50">
                  {t(`cv.experience.${i}.role`)}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 text-sm font-bold">
                  {exp.company}
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-xs mt-0.5">
                  {exp.project}
                </p>
              </div>
              <span className="text-xs dark:text-amber-300 text-amber-700 border border-current px-2 py-1 shrink-0 self-start whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="dark:text-amber-100 text-stone-700 text-sm leading-relaxed mb-3">
              {t(`cv.experience.${i}.description`)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default CVExperience;
