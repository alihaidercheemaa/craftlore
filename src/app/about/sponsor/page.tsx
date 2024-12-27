import { SponsorList } from "~/components/general/about/sponsors/sponsor-list";
import { Banner } from "~/components/general/landing/banner";
import { SPOBANNER } from "~/constants";

export default async function AboutNetworkPage() {

  return (
    <>
      <Banner banner={SPOBANNER}/>
      <SponsorList />
    </>
  );
}
