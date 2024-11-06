import { CareerForm } from "~/components/general/about/careers/career-form";
import { CareerList } from "~/components/general/about/careers/career-list";

export default async function AboutCareerPage() {

  return (
    <>
      <div className="col-span-12 bg-[#e5edf7] h-60" />
      <CareerList />
      <CareerForm/>
    </>
  );
}
