import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { NETWORKBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: "CRAFTLORE | Network",
  };
  

export default function NetworkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={NETWORKBANNER} />
      {children}
    </>
  );
}
