
import { ProjectGraph } from "~/components/graphs/project-graph";
import { ProjectSection } from "~/components/general/about/projects/project-section";
import { Banner } from "~/components/general/landing/banner";
import { PROJECTBANNER } from "~/constants/banner";

export default async function AboutProductPage() {

    return (
        <>
            <Banner banner={PROJECTBANNER}/>
            <ProjectSection/>
            <ProjectGraph/>
        </>
    );
}
