import Link from "next/link";
import { Container } from "~/components/common/container";
import { NETWORK } from "~/constants/data";

export const SupportNetwork = () => {
  return (
    <section className="bg-primary pb-20">
      <Container>
        <div className="space-y-4 rounded-b-lg border-t-4 border-secondary bg-white px-10 py-12 lg:container lg:px-20 lg:py-24">
          <p className="font-montserrat text-xl text-primary">Who Support our Initiative</p>
          <h6 className="font-montserrat text-[40px] leading-[48px] text-secondary">
            CraftLore Formidable Support Network
          </h6>
          <div className="space-y-6 font-opensans text-xl">
            <p>
              In the rapidly evolving landscape of the global craft industry,
              the success of CraftLore’s mission is driven by the unwavering
              strength and collaboration of a dedicated support network. At the
              heart of our initiative lies an influential coalition of partners
              who share our commitment to preserving the authenticity of
              Kashmiri crafts and revolutionizing Artisan Direct Market Access.
              Together, we are eliminating the long-standing barriers posed by
              middlemen and counterfeit trade, creating a transparent and fair
              marketplace for artisans.
            </p>
            <p>
              Our formidable support network is further reinforced by essential
              contributions from business, administrative, technological, and
              marketing partners, ensuring that CraftLore continues to grow and
              thrive on the global stage.
            </p>
            <p>
              As a key pillar of business support,{" "}
              <strong>B2B Connect USA</strong> provides the essential
              business-to-business connections that fuel CraftLore’s expansion.
              By forging strategic collaborations between Kashmiri artisans and
              international markets, they ensure that the craft sector reaches
              its full potential in the global economy. Their contributions
              allow us to scale operations, increase artisan visibility, and
              enhance market access worldwide.
            </p>
            <p>
              <strong>The Hamdan Craft Revival Foundation</strong> is the
              operational backbone of our initiative. With a focus on
              administrative excellence, policy advocacy, and organizational
              leadership, the Foundation plays a pivotal role in the seamless
              functioning of CraftLore. Their efforts ensure that our mission is
              not only preserved but advanced through strategic partnerships,
              thoughtful leadership, and a vision of empowering artisans through
              cultural preservation and fair trade policies. Their advocacy for
              Kashmiri crafts sets the stage for CraftLore’s enduring impact in
              both local and international arenas.
            </p>
            <p>
              At the intersection of technology and craft preservation,{" "}
              <strong>Prime Logic Solutions USA</strong> empowers CraftLore with
              state-of-the-art digital tools and technological innovations. From
              blockchain technology to geo-certification protocols, Prime Logic
              equips us with cutting-edge solutions that guarantee the
              authenticity and traceability of Kashmiri crafts. Their
              technological expertise ensures that every craft on our platform
              is not only verified but protected against counterfeit threats,
              creating a secure and transparent marketplace for artisans and
              buyers alike.
            </p>
            <p>
              A visionary partner in anticraft marketing and cultural tourism,{" "}
              <strong>ArtStay</strong> connects craft enthusiasts and art lovers
              from around the world, positioning Kashmiri artisans at the center
              of authentic and sustainable travel experiences. By integrating
              the rich history of Kashmiri craftsmanship with global tourism,
              ArtStay promotes cultural exchange and elevates artisans on a
              global stage. Their marketing efforts help bring the stories,
              traditions, and artistry of Kashmiri crafts to a broader audience,
              creating meaningful connections between artisans and those who
              appreciate the true value of handcrafted art.
            </p>
          </div>
        </div>
        <div className="relative -mt-10 flex justify-center lg:container">
          <div className="grid grid-cols-4 gap-6">
            {NETWORK.map((network, index) => {
              return (
                <div
                  className="group col-span-4 flex h-40 flex-col justify-between rounded-lg border-2 border-gray-900 bg-white p-5 hover:border-white hover:bg-primary lg:col-span-1"
                  key={index}
                >
                  <div>
                    <h6 className="w-8 font-montserrat text-lg group-hover:text-white">
                      {network.title}
                    </h6>
                    <p className="break-words text-sm group-hover:text-white">
                      ({network.description})
                    </p>
                  </div>
                  <Link
                    className="text-sm group-hover:text-secondary"
                    href={network.redirect}
                  >
                    {network.link}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
