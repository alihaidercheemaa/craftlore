import { Container } from "~/components/common/container";
import { GenderInsightGraph } from "~/components/graphs/static-insight";

export default async function INsightPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Statistical Insights - Handicraft Gender Economics Dynamics
        </h1>
        <GenderInsightGraph />
      </Container>
    </section>
  );
}
