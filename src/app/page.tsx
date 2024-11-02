
import { Banner } from "~/components/general/landing/banner";
import { GraphCard } from "~/components/general/landing/graph-card";
import { RegisterCard } from "~/components/general/landing/register-card";
import { ServiceCard } from "~/components/general/landing/service-card";
import { WelcomeCards } from "~/components/general/landing/welcome-card";
export default async function Home() {

  return (
    <main className="col-span-12 grid grid-cols-12">
      <Banner />
      <ServiceCard />
      <WelcomeCards/>
      <RegisterCard/>
      <GraphCard/>
    </main>
  );
}
