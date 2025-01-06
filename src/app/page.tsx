import { Banner } from "~/components/general/landing/banner";
import { FounderCard } from "~/components/general/landing/founder-card";
import { GraphCard } from "~/components/general/landing/graph-card";
import { HelpUs } from "~/components/general/landing/helpus-card";
import { InfoCard } from "~/components/general/landing/info-card";
import { RegisterCard } from "~/components/general/landing/register-card";
import { ServiceCard } from "~/components/general/landing/service-card";
import { SupportNetwork } from "~/components/general/landing/support-network";
import { WelcomeCard } from "~/components/general/landing/welcome-card";
import { BANNERS } from "~/constants/data";
export default async function Home() {

  return (
    <>
      <Banner banner={BANNERS}/>
      <ServiceCard />
      <WelcomeCard />
      <RegisterCard />
      <GraphCard />
      <InfoCard />
      <HelpUs />
      <SupportNetwork />
      <FounderCard />
    </>
  );
}
