import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";

export default async function ProductionPage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="lg:container">
                    <div className="lg:container  grid gap-12 mb-32">
                        <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Overall Handicraft Production Trend(<span className="text-secondary">2010-2024</span>)</h2>
                        <ProductionTrendGraph />
                        <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Estimated Production Across Different Crafts of the Handicraft Industry of J&K(<span className="text-secondary">2010-2024</span>)</h2>
                        <HandiCraftGraph/>
                    </div>
                </div>
            </section>
        </>
    );
}
