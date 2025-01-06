import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { EMPBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: "CRAFTLORE | Employment",
  };
  

export default function EmploymentLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={EMPBANNER} />
      {children}
    </>
  );
}
