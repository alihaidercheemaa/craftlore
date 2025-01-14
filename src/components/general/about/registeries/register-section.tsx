"use client";

import { REGISTRIES } from "~/constants/data";
import { useRegister } from "~/hooks/use-register";
import { RegisterCard } from "~/components/general/about/registeries/register-card";

export const RegisterSection = () => {
  const { register } = useRegister();
  return (
    <section className="col-span-12 mx-6 mt-12 gap-4 lg:container">
      <div className="relative -mt-36 grid grid-cols-4 gap-7">
        {REGISTRIES.slice(0, 4).map((register) => (
          <RegisterCard
            className="col-span-2 lg:col-span-1"
            title={register.title}
            id={register.id}
            description={register.description}
            key={register.id}
          />
        ))}
      </div>
      <div className="my-32 grid gap-6">
        <h6 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {register.title}
        </h6>
        <p className="text-2xl">{register.description}</p>
      </div>
      <div className="relative -mb-36 grid grid-cols-4 gap-7">
        {REGISTRIES.slice(4, 8).map((register) => (
          <RegisterCard
            className="col-span-2 lg:col-span-1"
            title={register.title}
            id={register.id}
            description={register.description}
            key={register.id}
          />
        ))}
      </div>
    </section>
  );
};
