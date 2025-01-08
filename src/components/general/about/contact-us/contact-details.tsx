import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { Container } from "~/components/common/container";
import { ContactForm } from "~/components/general/about/contact-us/contact-form";

export const ContactDetail = () => {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-32 grid grid-cols-2 gap-8 rounded-md bg-white p-4 shadow-md lg:container lg:p-16">
        <div className="col-span-2 grid gap-2 lg:col-span-1">
          <h2 className="font-montserrat text-3xl">Our Office</h2>
          <p className="font-montserrat">
            Artisan Lane , 2 Dar Ul Zamrood, Gousia Ext Zakura
          </p>
          <p className="font-montserrat">Srinagar Kashmir India 190006</p>
        </div>
        <div className="col-span-2 grid gap-2 lg:col-span-1 lg:justify-end">
          <h2 className="font-montserrat text-3xl">Office Hours</h2>
          <p className="flex items-center gap-2 font-montserrat">
            <span>Mon - Fir:</span>
            <span className="text-gray-400">9am - 5pm</span>
          </p>
          <p className="flex items-center gap-2 font-montserrat">
            <span>Satursday:</span>
            <span className="text-gray-400">10am - 3pm</span>
          </p>
          <p className="flex items-center gap-2 font-montserrat">
            <span>Sunday</span>
            <span className="text-gray-400">Closed</span>
          </p>
        </div>
        <div className="col-span-2 flex flex-col gap-8 text-secondary lg:flex-row">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <Link
              className="text-gray-900 hover:text-secondary"
              href="mailto:info@craftlore.org"
            >
              info@craftlore.org
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <Link
              className="text-gray-900 hover:text-secondary"
              href="tel:+911 0113 0114"
            >
              tel:+911 0113 0114
            </Link>
          </div>
        </div>
        <div className="col-span-2 border border-gray-300" />
        <ContactForm />
        <div className="col-span-2 grid gap-4 text-xl">
          <h3 className="font-montserrat text-3xl">Additional Information</h3>
          <p className="font-opensans">
            <b>Business Inquiries</b>: For partnership or sponsorship
            opportunities, please contact us at partners@craftlore.org.
          </p>
          <p className="font-opensans">
            <b>Media Inquiries:</b>
            Journalists and media representatives can reach out at
            media@craftlore.org.
          </p>
          <p>
            Thank you for your interest in CraftLore! We look forward to
            connecting with you and exploring ways to collaborate in promoting
            Kashmiri craftsmanship.
          </p>
        </div>
      </Container>
    </section>
  );
};
