import { CounterInfo } from "~/components/general/counter-info";
import { BottomBanner } from "~/components/general/bottom-banner";
import { SectionContainer } from "~/components/common/section-container";

export const FounderCard = () => {
  return (
    <SectionContainer className="mt-6 gap-4 lg:mt-12">
      <div className="grid grid-cols-2">
        <div className="col-span-2 mb-20 mt-20 grid grid-cols-2 gap-7 p-4 lg:mb-40">
          <div className="col-span-2 lg:col-span-1">
            <div className="space-y-8 rounded-md border-2 border-secondary bg-primary p-8 font-montserrat text-white lg:p-[60px]">
              <h6 className="text-xl leading-[2.7rem] lg:text-[2.5rem]">
                Join Craftlore, in exploring the vast repository and experience
                the artistry of Kashmir like never before!
              </h6>
              <div className="flex justify-end">
                <div className="grid gap-1">
                  <p className="text-right text-xl text-secondary">
                    Jasif Khan
                  </p>
                  <p className="text-right text-xl">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="font-montserrat text-lg text-primary">
              Unlocking 700+ Years of Kashmiri Craft Heritage:
            </p>
            <h6 className="font-montserrat text-3xl text-secondary">
              Fully Digitized for a New Era, Backed by Science!
            </h6>
            <div className="font-monorope my-4 space-y-6 text-lg">
              <p>
                In a revolutionary step toward preserving cultural heritage, we
                have leveraged advanced technology to safeguard the rich legacy
                of Kashmiri crafts. CraftLore has transformed into the{" "}
                <b>
                  World’s Largest, Most Interactive Platform for Kashmir Crafts
                </b>
                , offering an extensive craft registry with access to over{" "}
                <b>One Million Data Elements Representing 28 Major Crafts</b>.
                This comprehensive digital repository makes centuries of
                craftsmanship accessible to the world, engaging and educating a
                global audience.
              </p>
              <p>
                Our initiative is a bold stand against the flood of counterfeit
                Kashmiri crafts infiltrating the global market, particularly
                from <b>China and Amritsar</b> (India). These imitations tarnish
                the authentic Kashmiri name, and we are committed to defending
                the integrity of our artisans and their time-honored traditions.
                Through CraftLore, we ensure every craft is verified, authentic,
                and a true reflection of the cultural mastery it represents.
              </p>
            </div>
          </div>
        </div>
        <CounterInfo className="col-span-2" />
        <BottomBanner className="col-span-2" />
      </div>
    </SectionContainer>
  );
};
