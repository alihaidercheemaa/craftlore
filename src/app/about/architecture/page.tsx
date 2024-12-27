import { ArchitectureList } from "~/components/general/about/architecture/architecture-list";
import { Banner } from "~/components/general/landing/banner";
import { ARCHBANNER } from "~/constants";

export default async function AboutArchitecturePage() {

  return (
    <>
      <Banner banner={ARCHBANNER}/>
      <ArchitectureList />
    </>
  );
}
