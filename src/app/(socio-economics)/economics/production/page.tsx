import { Container } from "~/components/common/container";
import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";

export default async function ProductionPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Overall Handicraft Production Trend(
          <span className="text-secondary">2010-2024</span>)
        </h1>
        <ProductionTrendGraph />
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Estimated Production Across Different Crafts of the Handicraft
          Industry of J&K(<span className="text-secondary">2010-2024</span>)
        </h1>
        <HandiCraftGraph />
      </Container>
    </section>
  );
}
