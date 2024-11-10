import { WorkforceAreaGraph } from "~/components/graphs/employment/area-graph";
import { ArtianGraph } from "~/components/graphs/employment/arstian-graph";
import { WorkforceGraph } from "~/components/graphs/employment/workforce-graph";

export default async function TrendPage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="lg:container">
                    <div className="lg:container  grid gap-12 mb-32">
                        <h1 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Kashmir Handicrafts Employment Trend</h1>
                        <ArtianGraph />
                        <WorkforceGraph/>
                        <WorkforceAreaGraph/>
                    </div>
                </div>
            </section>
        </>
    );
}
