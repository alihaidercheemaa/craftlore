import { Container } from "~/components/common/container";
import { WorkforceAreaGraph } from "~/components/graphs/employment/area-graph";
import { ArtianGraph } from "~/components/graphs/employment/arstian-graph";
import { WorkforceGraph } from "~/components/graphs/employment/workforce-graph";

export default async function TrendPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid place-content-center gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicrafts Employment Trend
        </h1>
        <ArtianGraph />
        <WorkforceGraph />
        <WorkforceAreaGraph />
      </Container>
    </section>
  );
}
