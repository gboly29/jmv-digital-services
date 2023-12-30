import { services } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Services = () => {
  return (
    <section className="py-20 align-element bg-slate-50 " id="skills">
      <SectionTitle text="our services" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Services;
