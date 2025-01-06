import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { GIBANNER } from "~/constants/banner";

export const metadata: Metadata = {
  title: "CRAFTLORE | Registry",
};

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={GIBANNER} />
      {children}
    </>
  );
}
