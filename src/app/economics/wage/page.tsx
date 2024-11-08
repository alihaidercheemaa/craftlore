import { WageGraph } from "~/components/graphs/wage-graph";

export default async function WagePage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="lg:container">
                    <div className="lg:container  grid gap-12 mb-32">
                        <h1 className="font-montserrat text-[40px] leading-[48px] text-primary text-center">Kashmir Handicraft&apos;s Employment Wage Equity</h1>
                        <WageGraph />
                    </div>
                </div>
            </section>
        </>
    );
}
