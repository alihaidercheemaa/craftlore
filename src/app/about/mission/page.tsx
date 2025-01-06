import { MissionGraph } from "~/components/graphs/mission-graph";
import { MissionSection } from "~/components/general/about/missions/mission-section";
import { Banner } from "~/components/general/landing/banner";
import { MISSIONBANNER } from "~/constants/banner";

export default async function AboutMissionPage() {
  return (
    <>
      <Banner banner={MISSIONBANNER} />
      <MissionSection />
      <MissionGraph />
    </>
  );
}
