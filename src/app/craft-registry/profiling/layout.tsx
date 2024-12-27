import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { PROFILEBANNER } from "~/constants";

export const metadata: Metadata = {
  title: "CRAFTLORE | Registry",
};

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={PROFILEBANNER} />
      {children}
    </>
  );
}
