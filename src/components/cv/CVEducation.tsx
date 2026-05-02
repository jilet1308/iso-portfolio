import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import Card from "../ui/Card";

function CVEducation() {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={260}>
      <SectionTitle>{t("cv.sections.education")}</SectionTitle>
      <Card accent="teal">
        <h3 className="text-base font-bold dark:text-amber-50">
          {t("cv.education.university")}
        </h3>
        <p className="text-teal-600 dark:text-teal-400 text-sm mt-0.5">
          {t("cv.education.degree")}{" "}
          <span className="text-stone-500 dark:text-stone-400">
            ({t("cv.education.language")})
          </span>
        </p>
      </Card>
    </AnimatedSection>
  );
}

export default CVEducation;
