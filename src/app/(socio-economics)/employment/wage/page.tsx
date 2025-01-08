import { Container } from "~/components/common/container";
import { WageGraph } from "~/components/graphs/employment/wage-graph";

export default async function WagePage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid place-content-center gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicraft&apos;s Employment Wage Equity
        </h1>
        <WageGraph />
      </Container>
    </section>
  );
}
