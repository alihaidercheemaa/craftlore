import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { MEMBERBANNER } from "~/constants";

export const metadata: Metadata = {
    title: "CRAFTLORE | Membership",
  };

export default function CarbonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={MEMBERBANNER} />
      {children}
    </>
  );
}
