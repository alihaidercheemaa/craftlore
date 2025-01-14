import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/common/container";
import { SERVICES } from "~/constants/data";

export const ServiceCard = () => {
  return (
    <Container className="relative -mt-24">
      <div className="grid grid-cols-6 gap-6 px-4 hover:cursor-pointer">
        {SERVICES.map((service, index) => (
          <Link
            href={service.href}
            className="group col-span-6 flex flex-col gap-2 rounded-lg border bg-white p-2 transition-all duration-300 hover:bg-secondary hover:shadow-2xl lg:col-span-2 xl:col-span-1"
            key={index}
          >
            <div className="flex flex-col items-center justify-center gap-2 py-5">
              <Image
                className="transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
                src={service.icon}
                alt="service icon"
                width={36}
                height={36}
              />
              <div className="grid text-sm font-extrabold text-gray-900 group-hover:text-white xl:text-base 2xl:text-lg">
                {service.title.split(" ").map((text, index) => (
                  <p key={index} className="text-center">
                    {text}
                  </p>
                ))}
              </div>
              <div className="grid w-[15rem] text-xs text-gray-900 group-hover:text-white 2xl:text-sm">
                <p className="text-center">
                  {service.description.split(" ").slice(0, 3).join(" ")}
                </p>
                <p className="text-center">
                  {service.description.split(" ").slice(3).join(" ")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
