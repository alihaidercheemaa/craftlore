import { ComponentList } from "~/components/general/economics/component-list";
import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";
import { StakHolderList } from "~/components/general/economics/stake-list";
import { VisionList } from "~/components/general/economics/vision-list";

export default async function EconomyPage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="container">
                    <div className="container">
                        <div className="container  grid gap-12 mb-32">
                            <h1 className="font-montserrat text-[40px]  text-primary">Kashmir Handicrafts Economics Monitoring</h1>
                            <p className="font-opensans text-xl leading-[31px]">The CraftLore Kashmir Handicrafts Economics Monitoring Center stands as a pioneering initiative dedicated to the ongoing assessment, analysis, and promotion of the economic health of the Kashmiri handicrafts sector. Designed as a comprehensive platform that integrates traditional wisdom with cutting-edge technology, the center seeks to revolutionize the way Kashmiri crafts are understood, marketed, and supported on a global scale. By focusing on real-time data and predictive analytics, the Economics Monitoring Center empowers stakeholders—from artisans to policymakers—to make informed, strategic decisions that drive sustainable growth for the industry.</p>
                            <h2 className="text-[40px] text-secondary font-montserrat">Purpose and Vision</h2>
                            <p className="font-opensans text-xl leading-[31px]">The core mission of the Kashmir Handicrafts Economics Monitoring Center is to provide unparalleled visibility into the market dynamics of the handicrafts sector. It seeks to:</p>
                            <VisionList />
                            <h2 className="text-5xl text-secondary font-montserrat">Key Components</h2>
                            <ComponentList />
                            <h2 className="text-5xl text-secondary font-montserrat">Impact on Stakeholders</h2>
                            <StakHolderList />
                            <div className="bg-white rounded-lg shadow-md px-8 grid gap-4 py-12">
                                <h2 className="text-5xl text-secondary font-montserrat">  Future Vision</h2>
                                <p className="font-opensans text-xl"> The <b>CraftLore Kashmir Handicrafts Economics Monitoring Center</b> aspires to become the world’s most comprehensive database for the Kashmiri handicraft industry. As it grows, the center will expand its capabilities to cover more intricate aspects of the craft economy, such as labor dynamics, the effect of globalization on local economies, and how Kashmiri crafts can better integrate into the luxury and sustainable markets.</p>
                                <p className="font-opensans text-xl">
                                    With its ability to merge <b>heritage</b> and <b>innovation</b>, CraftLore’s Economics Monitoring Center is not only safeguarding the future of Kashmir’s handicrafts but also setting a global precedent for how traditional arts can thrive in the modern economy. Through a combination of <b>real-time data, predictive analytics, and sustainable business practices</b>, the center ensures that the Kashmiri handicraft industry remains a vibrant part of both the local and global economy for generations to come.
                                </p>
                            </div>
                            <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Overall Handicraft Production Trend(<span className="text-secondary">2010-2024</span>)</h2>
                            <ProductionTrendGraph />
                            <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Estimated Production Across Different Crafts of the Handicraft Industry of J&K(<span className="text-secondary">2010-2024</span>)</h2>
                            <HandiCraftGraph />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
