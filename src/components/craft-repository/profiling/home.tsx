import Image from "next/image";
import { CraftAccordin } from "~/components/craft-repository/profiling/carft-accordin";

export const ProfileHome = () => {
  return (
    <div className="my-20 grid grid-cols-2 gap-4">
      <div className="col-span-2 grid gap-6 p-4 lg:col-span-1">
        <div className="relative h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem]">
          <Image src="/images/carbon.png" alt="co2 image" fill />
        </div>
        <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
          <h2 className="font-montserrat text-4xl text-primary">
            Welcome to CraftLore’s Kashmir Craft Profiling Repository
          </h2>
          <p>
            Explore the richness of Kashmiri handicrafts through our Craft
            Profiling Repository. Designed as a comprehensive digital archive,
            it brings together artisanal wisdom, cultural narratives, and
            intricate craft details in one accessible platform. This resource
            empowers artisans, researchers, buyers, and cultural enthusiasts
            with structured, verified, and evolving craft knowledge—fostering
            authenticity, integrity, and innovation.
          </p>
          <h3>CraftLore Craft Profiling Repository</h3>
          <p>
            In a rapidly changing world, documenting Kashmir’s handicrafts is
            essential for cultural preservation and informed decision-making.
            Our repository leverages open-source technologies, scalable server
            infrastructure, and recognized metadata standards to catalog the
            nuances of each craft. Through version control and multilingual
            interfaces, this platform continuously evolves to capture emerging
            techniques, updated patterns, and newly discovered historical facts.
            Integration with other cultural databases, interoperability via
            APIs, and blockchain verification ensures that the information is
            trustworthy, traceable, and easily shareable. This holistic
            ecosystem not only informs product development, marketing, and
            policy formation, but also supports artisans by giving global
            audiences a deeper understanding of their skill and heritage.
          </p>
          <h3>Why Craft Profiling Matters</h3>
          <p>
            <strong>Preserves Cultural Heritage</strong>: Protects and maintains
            the authenticity of Kashmiri crafts.
          </p>
          <p>
            <strong>Empowers Artisans & Researchers</strong>: Provides
            authoritative, data-rich references for innovation and scholarship.
          </p>
          <p>
            <strong>Enhances Transparency & Accuracy</strong>: Standardized
            metadata and version control ensure reliable, up-to-date
            information.
          </p>
          <p>
            <strong>Strengthens Global Engagement</strong>: Multilingual support
            and inter-repository connections widen outreach, attracting new
            buyers and craft lovers worldwide.
          </p>
        </div>
      </div>
      <div className="col-span-2 flex h-fit flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg lg:col-span-1">
        <h2 className="p-6 text-center font-montserrat text-[40px] leading-[48px] text-secondary">
          Kashmir Craft Profiling Registry
        </h2>
        <p className="font-montserrat text-xl text-white text-center">
        Craft Authenticity, Preserved for Generations
        </p>
        <CraftAccordin />
      </div>
    </div>
  );
};
