import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/common/container";
import { REGISTER } from "~/constants/data";

export const RegisterCard = () => {
  return (
    <section className=" bg-[#e5edf7] pb-72 lg:pt-32">
      <Container className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <div className="my-10 border-2 border-secondary" />
          <h4 className="font-montserrat text-3xl font-extrabold">
            Unlock Everything Our Platform Offers-At No Cost to You
          </h4>
          <h4 className="py-3 font-montserrat text-4xl font-bold text-secondary">
            A wealth of tools and insights, completely free.
          </h4>
          <p className="py-7 font-opensans text-xl leading-[31px]">
            Our platform provides a comprehensive suite of tools designed to
            offer transparency, ethical evaluation, and deeper insights into the
            craftsmanship behind every piece. From verifying origins through{" "}
            <b>Geographical Indications (GI)</b> to tracking each product&apos;s
            journey with blockchain, we ensure every craft you encounter
            reflects true heritage and integrity. With services ranging from
            price valuation and carbon footprint assessment to empowering women
            artisans and protecting vulnerable crafts, CraftLore is your trusted
            source for everything related to Kashmir&apos;s rich craft
            tradition.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Link href="#">
            <Image
              src={"/images/register.png"}
              alt="image"
              width={360}
              height={450}
            />
          </Link>
        </div>
        {REGISTER.map((register, index) => (
          <div
            className="group col-span-12 flex cursor-pointer flex-col gap-2 rounded-lg border bg-white px-6 py-2 transition-all duration-300 hover:bg-primary hover:shadow-2xl md:col-span-6 xl:col-span-4"
            key={index}
          >
            <div className="flex flex-col gap-2 py-4">
              <Image
                className="transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
                src={register.icon}
                alt="service icon"
                width={55}
                height={55}
              />
              <p className="font-montserrat text-xl font-bold text-gray-900 group-hover:text-white">
                {register.title}
              </p>
              <p className="my-2 font-montserrat text-sm font-light text-gray-900 group-hover:text-white">
                {register.description}
              </p>
              <Link
                href={register.link}
                className="text-sm text-gray-900 underline underline-offset-4 group-hover:text-secondary"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
