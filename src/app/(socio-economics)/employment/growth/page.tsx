import { Container } from "~/components/common/container";
import { GrowthGraph } from "~/components/graphs/employment/growth-graph";

export default async function GrowthPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicrafts Employment Growth
        </h1>
        <GrowthGraph />
      </Container>
    </section>
  );
}
