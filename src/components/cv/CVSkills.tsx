import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import Tag from "../ui/Tag";
import { skills } from "../../types/CVTypes";

function CVSkills() {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={140}>
      <SectionTitle>{t("cv.sections.skills")}</SectionTitle>
      <div className="flex flex-col gap-3">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="flex flex-col sm:flex-row sm:items-start gap-2"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-amber-700 dark:text-amber-400 min-w-32 pt-0.5 shrink-0">
              {t(`cv.skills.categories.${category}`)}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default CVSkills;
