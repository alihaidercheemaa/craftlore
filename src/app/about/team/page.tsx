import { TeamList } from "~/components/general/about/teams/team-list";
import { Banner } from "~/components/general/landing/banner";
import { TEAMBANNER } from "~/constants/banner";

export default async function AboutTeamPage() {

  return (
    <>
      <Banner banner={TEAMBANNER}/>
      <TeamList />
    </>
  );
}
