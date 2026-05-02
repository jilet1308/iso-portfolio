import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import Card from "../ui/Card";

function CVSummary() {
  const { t } = useTranslation();

  return (
    <AnimatedSection delay={80}>
      <SectionTitle>{t("cv.sections.summary")}</SectionTitle>
      <Card accent="none">
        <p className="dark:text-amber-100 text-stone-800 leading-relaxed text-sm">
          {t("cv.summary_text")}
        </p>
      </Card>
    </AnimatedSection>
  );
}

export default CVSummary;
