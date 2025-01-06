import { type Metadata } from "next";
import { GIPROCESS } from "~/constants/data";



export const metadata: Metadata = {
  title: 'CRAFTLORE | GI Process',
};


export default function GIProcessPage() {
  return (
    <section className="col-span-12 grid gap-4">
      <div className="mx-6 my-10 grid gap-10 lg:container">
        <div className="grid gap-10">
          <h1 className="font-montserrat text-[40px] leading-[48px] text-primary">
            GEOGRAPHICAL INDICATION PROCESS
          </h1>
          <p className="font-opensans text-xl">
            The Geographical Indication (GI) Process is a stringent and
            multifaceted certification designed to authenticate crafts that
            originate from a specific geographical region and carry with them
            centuries of tradition. For Kashmiri crafts to receive GI status,
            they must meet specific criteria, including:
          </p>
          <p className="font-opensans text-xl">
            <strong>Traditional Techniques</strong>: Hand-woven Pashmina,
            intricate Papier-Mâché, Khatamband woodwork, etc.
            <br />
            <strong>Cultural Relevance</strong>:The product should have a rich
            cultural history that is identifiable with a specific region within
            Kashmir. <br />
            <strong>Geographical Origin</strong>: The product must originate
            within the geographical boundaries of Kashmir to be eligible for GI
            status.
          </p>
          <p className="font-opensans text-xl">
            The Geographical Indication (GI) certification is a rigorous and
            well-defined process that authenticates products based on their
            geographical origin and unique traditional qualities. For Kashmiri
            crafts, this certification acts as a protective mechanism that not
            only preserves the cultural and geographical heritage but also
            ensures that these crafts receive global recognition and protection
            against counterfeiting. Below is a step-by-step breakdown of the GI
            certification process:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {GIPROCESS.map((process, index) => (
              <div
                key={index}
                className="grid transform gap-4 p-6 duration-500 hover:rounded-lg hover:bg-primary hover:text-white hover:shadow-lg"
              >
                <h2 className="font-montserrat text-xl">
                  Step {index + 1}: {process.title}
                </h2>
                <p className="font-opensans text-sm">{process.des}</p>
                <div className="my-4 grid gap-4">
                  {process.sub.map((step, index) => (
                    <div key={index}>
                      <h3 className="font-montserrat text-sm">{step.title}</h3>
                      <p className="font-opensans text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
