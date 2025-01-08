import { Container } from "~/components/common/container";
import { SPONSORS } from "~/constants/data";

export const SponsorList = () => {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-32 grid gap-7 rounded-md bg-white px-6 py-8 shadow-md lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore Sponsor
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {SPONSORS.map((sponsor, index) => (
            <div
              className="group col-span-2 grid rounded-lg bg-primary p-6 text-white shadow-sm hover:shadow-lg lg:col-span-1"
              key={index}
            >
              <h2 className="mt-3 font-montserrat font-bold text-white">
                {sponsor.name}
              </h2>
              <p className="mt-2">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
