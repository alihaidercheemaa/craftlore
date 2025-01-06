import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { GENDERBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: "CRAFTLORE | Gender",
  };
  

export default function GenderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={GENDERBANNER} />
      {children}
    </>
  );
}
