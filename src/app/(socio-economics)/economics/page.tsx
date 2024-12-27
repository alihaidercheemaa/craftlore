import { ComponentList } from "~/components/general/economics/component-list";
import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";
import { StakHolderList } from "~/components/general/economics/stake-list";
import { VisionList } from "~/components/general/economics/vision-list";

export default async function EconomyPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <div className="mx-3 lg:container">
        <div className="my-32 grid gap-12">
          <h1 className="font-montserrat text-[40px] text-primary">
            Kashmir Handicrafts Economics Monitoring
          </h1>
          <p className="font-opensans text-xl leading-[31px]">
            The CraftLore Kashmir Handicrafts Economics Monitoring Center stands
            as a pioneering initiative dedicated to the ongoing assessment,
            analysis, and promotion of the economic health of the Kashmiri
            handicrafts sector. Designed as a comprehensive platform that
            integrates traditional wisdom with cutting-edge technology, the
            center seeks to revolutionize the way Kashmiri crafts are
            understood, marketed, and supported on a global scale. By focusing
            on real-time data and predictive analytics, the Economics Monitoring
            Center empowers stakeholders—from artisans to policymakers—to make
            informed, strategic decisions that drive sustainable growth for the
            industry.
          </p>
          <h2 className="font-montserrat text-[40px] text-secondary">
            Purpose and Vision
          </h2>
          <p className="font-opensans text-xl leading-[31px]">
            The core mission of the Kashmir Handicrafts Economics Monitoring
            Center is to provide unparalleled visibility into the market
            dynamics of the handicrafts sector. It seeks to:
          </p>
          <VisionList />
          <h2 className="font-montserrat text-5xl text-secondary">
            Key Components
          </h2>
          <ComponentList />
          <h2 className="font-montserrat text-5xl text-secondary">
            Impact on Stakeholders
          </h2>
          <StakHolderList />
          <div className="grid gap-4 rounded-lg bg-white px-8 py-12 shadow-md">
            <h2 className="font-montserrat text-5xl text-secondary">
              {" "}
              Future Vision
            </h2>
            <p className="font-opensans text-xl">
              {" "}
              The{" "}
              <b>
                CraftLore Kashmir Handicrafts Economics Monitoring Center
              </b>{" "}
              aspires to become the world’s most comprehensive database for the
              Kashmiri handicraft industry. As it grows, the center will expand
              its capabilities to cover more intricate aspects of the craft
              economy, such as labor dynamics, the effect of globalization on
              local economies, and how Kashmiri crafts can better integrate into
              the luxury and sustainable markets.
            </p>
            <p className="font-opensans text-xl">
              With its ability to merge <b>heritage</b> and <b>innovation</b>,
              CraftLore’s Economics Monitoring Center is not only safeguarding
              the future of Kashmir’s handicrafts but also setting a global
              precedent for how traditional arts can thrive in the modern
              economy. Through a combination of{" "}
              <b>
                real-time data, predictive analytics, and sustainable business
                practices
              </b>
              , the center ensures that the Kashmiri handicraft industry remains
              a vibrant part of both the local and global economy for
              generations to come.
            </p>
          </div>
          <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
            Overall Handicraft Production Trend(
            <span className="text-secondary">2010-2024</span>)
          </h2>
          <ProductionTrendGraph />
          <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
            Estimated Production Across Different Crafts of the Handicraft
            Industry of J&K(<span className="text-secondary">2010-2024</span>)
          </h2>
          <HandiCraftGraph />
        </div>
      </div>
    </section>
  );
}
