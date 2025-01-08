import { Container } from "~/components/common/container";
import { INDIAORGANIZATIONS } from "~/constants/data";

export const IndiaList = () => {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-32 grid gap-7 px-6 py-8 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore India Network
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {INDIAORGANIZATIONS.map((organization, index) => (
            <div
              className="group col-span-2 grid rounded-lg bg-white p-6 text-gray-900 shadow-sm hover:bg-primary hover:shadow-lg lg:col-span-1"
              key={index}
            >
              <h2 className="mt-3 font-montserrat font-bold text-gray-900 group-hover:text-white">
                {organization.name}
              </h2>
              <p className="group-hover:text-white">
                {organization.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
