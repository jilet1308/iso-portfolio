import CVHero from "./CVHero";
import CVSummary from "./CVSummary";
import CVSkills from "./CVSkills";
import CVExperience from "./CVExperience";
import CVProjects from "./CVProjects";
import CVEducation from "./CVEducation";

function CV() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl mx-auto w-full pb-4">
      <CVHero />
      <CVSummary />
      <CVSkills />
      <CVExperience />
      <CVProjects />
      <CVEducation />
    </div>
  );
}

export default CV;
