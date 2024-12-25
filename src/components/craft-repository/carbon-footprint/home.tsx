import Image from "next/image"
import { CarbonForm } from "~/components/craft-repository/carbon-footprint/carbon-form"

export const CarbonEstimationHome = () => {

    return (
        <div className="grid grid-cols-2 gap-4 my-20">
            <div className="col-span-2 lg:col-span-1 grid gap-6 p-4">
                <div className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] relative">
                    <Image
                        src="/images/carbon.png"
                        alt="co2 image"
                        fill
                    />
                </div>
                <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
                    <h2 className="font-montserrat text-primary text-4xl">Welcome to Craftlore&apos;s Carbon Footprint Registry & Estimator</h2>
                    <p >Discover the true environmental impact of authentic Kashmiri crafts with our Craft Carbon Footprint Estimator. Designed to bring transparency, sustainability, and accountability to the handicraft industry, this tool empowers artisans, buyers, and industry professionals by providing real-time, data-driven carbon footprint assessments.</p>
                    <h3 >Craftlore Craft Carbon Footprint Estimator Tool</h3>
                    <p>The Craft Carbon Footprint Project Tool is an advanced system designed to calculate, track, and minimize the environmental impact of Kashmir handicrafts. This tool empowers artisans, businesses, and buyers to understand the carbon emissions associated with the entire lifecycle of a product—from raw material sourcing to production, packaging, and shipping. By measuring the carbon footprint, stakeholders can make informed decisions to adopt sustainable practices, reduce carbon emissions, and improve the overall ecological footprint of the craft industry.</p>
                    <h3 >Why Craft Carbon Footprint Matters</h3>
                    <p><b>Environmental Responsibility</b>: It helps reduce the ecological footprint, concerns like climate change.</p>
                    <p><b>Sustainability</b>: Encourages long-term sustainable practices for both crafts and the environment.</p>
                    <p><b>Transparency</b>: Builds trust with buyers by sharing the environmental impact of products.</p>
                    <p><b>Regulatory Compliance</b>:  Helps businesses meet sustainability requirements in international markets.</p>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 p-6 bg-primary rounded-lg shadow-lg h-fit">
                <h2 className="text-secondary text-center text-[40px] leading-[48px] font-montserrat p-6">
                    Kashmir&apos;s Craft Sustainability Tracker
                </h2>
                <p className="font-montserrat text-xl text-white text-center">Estimate the Carbon Footprint of Your Product</p>
                <CarbonForm />
            </div>
        </div>
    )
}