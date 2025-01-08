import { Container } from "~/components/common/container";
import { ARCHITECTURE } from "~/constants/data";

export const ArchitectureList = () => {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid gap-7 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore Architecture
        </h1>
        <div className="grid grid-cols-2 gap-10">
          {ARCHITECTURE.map((architecture, index) => (
            <div
              className="group col-span-2 rounded-lg bg-white p-6 shadow-sm hover:bg-primary hover:shadow-lg lg:col-span-1"
              key={index}
            >
              <h2 className="mb-4 font-montserrat text-xl font-bold group-hover:text-white">
                {architecture.title}
              </h2>

              <div className="mb-4 font-opensans text-sm group-hover:text-white">
                <h3 className="font-semibold">• Definition:</h3>
                <p className="my-2 text-gray-700 group-hover:text-white">
                  {architecture.defination}{" "}
                </p>
              </div>
              <div className="font-opensans text-sm group-hover:text-white">
                <h3 className="font-semibold">• Key Features:</h3>
                <p className="my-2 text-gray-700 group-hover:text-white">
                  {architecture.features}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
