import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { PRICEBANNER } from "~/constants";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost estimation",
};

export default function PriceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={PRICEBANNER} />
      {children}
    </>
  );
}
