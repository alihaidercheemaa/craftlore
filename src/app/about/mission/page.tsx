
import { AboutBackGround } from "~/components/general/about/background";
import { MissionGraph } from "~/components/graphs/mission-graph";
import { MissionSection } from "~/components/general/about/missions/mission-section";

export default async function AboutMissionPage() {

    return (
        <>
            <AboutBackGround />
            <MissionSection/>
            <MissionGraph/>
        </>
    );
}
