"use client";
import { PROJECTS } from "~/constants/data";
import { useProject } from "~/hooks/use-project";
import { ProjectCard } from "~/components/general/about/projects/project-card";
import { Container } from "~/components/common/container";

export const ProjectSection = () => {
  const { project } = useProject();
  return (
    <section className="col-span-12 mx-6 mt-12 gap-4 lg:container">
      <Container className="relative -mt-36 grid grid-cols-4 gap-7">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={project.title}
            id={project.id}
            description={project.description}
            key={project.id}
          />
        ))}
      </Container>
      <Container className="my-32 grid gap-6">
        <h2 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {project.title}
        </h2>
        <p className="text-2xl">{project.description}</p>
      </Container>
      <Container className="relative -mb-36 grid grid-cols-4 gap-7">
        {PROJECTS.slice(4, 8).map((project) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={project.title}
            id={project.id}
            description={project.description}
            key={project.id}
          />
        ))}
      </Container>
    </section>
  );
};
