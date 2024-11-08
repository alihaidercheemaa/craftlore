
import { AboutBackGround } from "~/components/general/about/background";
import { ProjectGraph } from "~/components/graphs/project-graph";
import { ProjectSection } from "~/components/general/about/projects/project-section";

export default async function AboutProductPage() {

    return (
        <>
            <AboutBackGround />
            <ProjectSection/>
            <ProjectGraph/>
        </>
    );
}
