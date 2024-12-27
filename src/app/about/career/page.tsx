import { CareerForm } from "~/components/general/about/careers/career-form";
import { CareerList } from "~/components/general/about/careers/career-list";
import { Banner } from "~/components/general/landing/banner";
import { CAREERBANNER } from "~/constants";

export default async function AboutCareerPage() {

  return (
    <>
      <Banner banner={CAREERBANNER}/>
      <CareerList />
      <CareerForm/>
    </>
  );
}
