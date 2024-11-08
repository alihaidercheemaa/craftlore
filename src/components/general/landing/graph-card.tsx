import dayjs from "dayjs"
import { MilestoneNumberGraph } from "~/components/graphs/milestone-number"
import { MilestonePercentageGraph } from "~/components/graphs/milestone-percentage"


export const GraphCard = () => {

    return (
        <section className="col-span-12 mx-6  lg:container  gap-4">
            <div className="lg:container grid grid-cols-2">
                <h4 className="col-span-2 bg-primary text-white text-center py-12 font-opensans text-xl lg:text-4xl font-bold rounded-t-xl relative -mt-40  border-b-8 border-secondary">
                    Data Insights - CraftLore Platform Milestones : Year {dayjs().year()}
                </h4>
                <div className="col-span-2 grid grid-cols-2 my-20">
                    <p className="col-span-2 lg:col-span-1 text-2xl font-opensans">
                        CraftLore&apos;s {dayjs().year()} milestones provide quantifiable, <b>Data-driven</b> evidence of the platform’s transformative impact on the Global Kashmir Handicraft sector. Each <b>Metric</b> highlights our commitment to eradicating counterfeit products, promoting artisan craftsmanship, and fostering a transparent, direct marketplace between artisans and global buyers through advanced technological integration. These figures are not mere statistics; they are <b>Critical Key Performance Indicators</b> (KPIs) that underscore a strategic, systemic shift in the craft ecosystem. By empowering artisans and ensuring data-driven authenticity verification, CraftLore is not only preserving Kashmir&apos;s cultural heritage but also redefining the global craft industry with its <b>Advanced Sustainability Metrics, Blockchain-Enabled Traceability Frameworks, and Trust-Based Transactional Protocols</b>. As the platform scales, it continues to serve as a pioneering model of innovation, excellence, and traceability standards in the global handmade craft marketplace.
                    </p>
                    <div className="col-span-2 lg:col-span-1 grid gap-2">
                        <MilestoneNumberGraph />
                        <MilestonePercentageGraph />
                    </div>
                </div>
            </div>

        </section>
    )
}