import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";

export default async function ProductionPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <div className="lg:container">
        <div className="my-32 grid gap-12">
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
