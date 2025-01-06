import { ContactDetail } from "~/components/general/about/contact-us/contact-details";
import { Banner } from "~/components/general/landing/banner";
import { CONTACTBANNER } from "~/constants/banner";

export default async function AboutContactusPage() {
  return (
    <>
      <Banner banner={CONTACTBANNER} />
      <ContactDetail />
    </>
  );
}
