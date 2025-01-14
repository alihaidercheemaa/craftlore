import { Container } from "~/components/common/container";

export const InfoCard = () => {
  return (
    <section className="bg-[#e5edf7] py-32">
      <Container>
        <h4 className="text-primary font-montserrat text-[40px] leading-[48px]">
          Craftlore: A Preparatory School for Buyers
        </h4>
        <h4 className="text-secondary my-3 font-montserrat text-2xl">
          One Platform for Everything About Kashmiri Crafts
        </h4>
        <div className="my-8 flex flex-col space-y-10">
          <p className="font-opensans text-xl">
            <b>Your Ultimate Buyer’s Academy-CraftLore</b>, preparing you to
            make confident, informed decisions from anywhere. We empower you
            with the insights and expertise needed to navigate the global global
            Kashmir Handicraft marketplace with precision, ensuring every
            purchase reflects authenticity, integrity, and trust.
          </p>

          <p className="font-opensans text-xl">
            At CraftLore, we are not mandated to sell or recommend businesses.
            Our commitment lies in educating and empowering you with profound
            insights into the Kashmiri crafts industry. Our platform provides
            detailed{" "}
            <b>
              Kashmir Handicraft Business or Companies Listings and Evaluations
            </b>
            , alongside a comprehensive{" "}
            <b>Blacklisted Businesses/ Company Database</b>, ensuring complete
            transparency at every stage.
          </p>
          <p className="font-opensans text-xl">
            CraftLore employs a robust verification system, intregrating data
            from trusted regulatory bodies including{" "}
            <b>
              Better Business Bureau, Trustpilot, Consumer Financial Protection
              Bureau, Federal Trade Commission
            </b>
            , and <b>Securities & Exchange Commission</b>, as well as{" "}
            <b>Local Business Registries</b>, review platforms and advanced
            tools like <b>Brandwatch, Hootsuite, LexisNexis, Ripoff Report</b>,
            and more. We arm you with the knowledge and tools to make confident,
            independent decisions, free from commercial influence and false
            narratives, allowing buyers like you to make educated, independent
            decisions.
          </p>

          <p className="font-opensans text-xl">
            We tackle the longstanding issues of <b>Counterfeit Products</b> and{" "}
            <b>Middlemen Exploitation</b> in the Kashmiri handicraft industry.
            CraftLore utilizes advanced technology to ensures direct connections
            between buyers and artisans, providing traceability and verification
            for every handmade product. Together, we can eliminate middlemen and
            counterfeit traders, preserving the true essence of Kashmiri
            craftsmanship. By empowering yourself with knowledge, you ensure
            that each choice supports authenticity and elevates the artisans who
            pour their passion into every creation. We are committed to
            revolutionize the Kashmir craft industry with innovative tools,
            eliminating distortions, and restoring the value of genuine Kashmiri
            craftsmanship & its ancient techniques for future generations
          </p>
        </div>
      </Container>
    </section>
  );
};
