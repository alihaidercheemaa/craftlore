"use client";
import { PROJECTS } from "~/constants/data";
import { useProject } from "~/hooks/use-project";
import { ProjectCard } from "~/components/general/about/projects/project-card";
import { SectionContainer } from "~/components/common/section-container";

export const ProjectSection = () => {
  const { project } = useProject();
  return (
    <SectionContainer className="col-span-12  mt-12 gap-4 ">
      <div className="relative -mt-36 grid grid-cols-4 gap-2 lg:gap-7">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={project.title}
            id={project.id}
            description={project.description}
            key={project.id}
          />
        ))}
      </div>
      <div className="my-32 grid gap-6">
        <h2 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {project.title}
        </h2>
        <p className="text-2xl">{project.description}</p>
      </div>
      <div className="relative -mb-36 grid grid-cols-4 gap-7">
        {PROJECTS.slice(4, 8).map((project) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={project.title}
            id={project.id}
            description={project.description}
            key={project.id}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
