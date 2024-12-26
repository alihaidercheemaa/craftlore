'use client'
import { PROJECTS } from "~/constants"
import { useProject } from "~/hooks/use-project"
import { ProjectCard } from "~/components/general/about/projects/project-card"


export const ProjectSection = () => {
    const { project } = useProject()
    return (
        <section className="col-span-12 mx-6 lg:container gap-4 mt-12">
            <div className="lg:container grid grid-cols-4 gap-7 relative -mt-36">
                {
                    PROJECTS.slice(0, 4).map((project) => (
                        <ProjectCard className="col-span-2 lg:col-span-1" title={project.title} id={project.id} description={project.description} key={project.id} />
                    ))
                }
            </div>
            <div className="mx-6 lg:container grid gap-6 my-32">
                <h6 className="text-4xl lg:text-6xl font-montserrat text-primary">{project.title}</h6>
                <p className="text-2xl">{project.description}</p>
            </div>
            <div className="lg:container grid grid-cols-4 gap-7 relative -mb-36">
                {
                    PROJECTS.slice(4, 8).map((project) => (
                        <ProjectCard className="col-span-2 lg:col-span-1" title={project.title}  id={project.id} description={project.description} key={project.id} />
                    ))
                }
            </div>
        </section>
    )
}