import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { MEMBERBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: "CRAFTLORE | Membership",
  };

export default function MembershipLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={MEMBERBANNER} />
      {children}
    </>
  );
}
