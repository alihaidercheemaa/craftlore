import { Container } from "~/components/common/container";
import { CraftExportDashboard } from "~/components/general/economics/export/craftwise-graph";
import { HandiCraftExportGraph } from "~/components/general/economics/export/handicraft-export-graph";

export default async function ExportPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="my-32 grid gap-12">
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Overall Handicraft Export Trend(
          <span className="text-secondary">2010-2024</span>)
        </h1>
        <HandiCraftExportGraph />
        <h1 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Craft-Wise Direct Export of Handicraft Items(
          <span className="text-secondary">J&K</span>)
        </h1>
        <CraftExportDashboard />
      </Container>
    </section>
  );
}
