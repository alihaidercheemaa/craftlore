import { CraftExportDashboard } from "~/components/general/economics/export/craftwise-graph";
import { HandiCraftExportGraph } from "~/components/general/economics/export/handicraft-export-graph";

export default async function ExportPage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="container">
                    <div className="container  grid gap-12 mb-32">
                        <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Overall Handicraft Export Trend(<span className="text-secondary">2010-2024</span>)</h2>
                        <HandiCraftExportGraph />
                        <h2 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Craft-Wise Direct Export of Handicraft Items(<span className="text-secondary">J&K</span>)</h2>
                        <CraftExportDashboard/>
                    </div>
                </div>
            </section>
        </>
    );
}
