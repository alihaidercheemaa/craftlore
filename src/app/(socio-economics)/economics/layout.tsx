import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { ECBANNNER } from "~/constants";

export const metadata: Metadata = {
    title: "CRAFTLORE | Economics",
  };
  

export default function EconomicsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={ECBANNNER} />
      {children}
    </>
  );
}
