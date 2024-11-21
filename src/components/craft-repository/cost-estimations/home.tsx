import Image from "next/image"
import { EstimationForm } from "~/components/craft-repository/cost-estimations/estimation-form"




export const CostEstimationHome = () => {


    return (
        <div className="grid grid-cols-2 gap-4 my-20">
            <div className="col-span-2 lg:col-span-1 grid gap-6 p-4">
                <div className="w-[25rem] h-[25rem] relative">
                    <Image
                        src="/images/CO2.png"
                        alt="co2 image"
                        fill
                    />
                </div>
                <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
                    <h2 className="font-montserrat text-primary text-4xl">Welcome to CraftLore’s Kashmir Craft Price Valuation Registry & Estimator.</h2>
                    <p >Discover the true value of authentic Kashmiri crafts with our advanced Craft Price Valuation Tool. Designed to bring transparency, fairness, and accuracy to the handicraft industry, this tool empowers artisans, buyers, and industry professionals by providing real-time, data-driven price evaluations.</p>
                    <h3 >CraftLore Craft Price Valuation Tool</h3>
                    <p>In a world filled with counterfeit goods, accurate price estimation for Kashmiri crafts is essential. Our Kashmir Craft Price Valuation Registry & Estimator eliminates the middleman by using data analytics, blockchain verification, and AI-driven market intelligence. This tool ensures fair pricing by considering material quality, authenticity, and cultural significance. With features like GI tagging, blockchain traceability, and historical price trends, fairness is guaranteed. Artisans receive fair compensation directly, and buyers gain confidence in purchasing authentic, high-quality products. The system uses multi-dimensional metrics to create a comprehensive pricing model.</p>
                    <h3 >Why Craft Valuation Matters</h3>
                    <p><b>Protects Authenticity</b>: Helps distinguish genuine crafts from counterfeits.</p>
                    <p><b>Empowers Artisans</b>: Ensures artisans are fairly compensated.</p>
                    <p><b>Ensures Fair Market Pricing</b>: Transparent pricing benefits both buyers and sellers.</p>
                    <p><b>Boosts Consumer Confidence</b>: Buyers trust they’re paying a fair price for authenticity.</p>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 p-6 bg-primary rounded-lg shadow-lg">
                <h2 className="text-secondary text-center text-[40px] leading-[48px] font-montserrat p-6">
                    Handicraft Price Valuation Syste
                </h2>
                <p className="font-montserrat text-xl text-white">Get real-time transparent pricing solutions</p>
                <EstimationForm />
            </div>
        </div>
    )
}