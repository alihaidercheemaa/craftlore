import { CraftExportDashboard } from "~/components/general/economics/export/craftwise-graph";
import { HandiCraftExportGraph } from "~/components/general/economics/export/handicraft-export-graph";

export default async function ExportPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <div className="mx-6 lg:container">
        <div className="my-32 grid gap-12">
          <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
            Overall Handicraft Export Trend(
            <span className="text-secondary">2010-2024</span>)
          </h2>
          <HandiCraftExportGraph />
          <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
            Craft-Wise Direct Export of Handicraft Items(
            <span className="text-secondary">J&K</span>)
          </h2>
          <CraftExportDashboard />
        </div>
      </div>
    </section>
  );
}
