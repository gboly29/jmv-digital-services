import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Project = () => {
  return (
    <section className="py-20 align-element " id="projects">
      <SectionTitle text="featured supports" />

      <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:grid place-items-center">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
