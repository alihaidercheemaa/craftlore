import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { BLOCKBANNER } from "~/constants";

export const metadata: Metadata = {
    title: "CRAFTLORE | Blockchain",
  };
  

export default function BlockChainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={BLOCKBANNER} />
      {children}
    </>
  );
}
