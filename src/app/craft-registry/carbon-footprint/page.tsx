import { CarbonEstimationHome } from "~/components/craft-repository/carbon-footprint/home";
import { CarbonApiGuide } from "~/components/craft-repository/carbon-footprint/api-guide";
import { CarbonFeatures } from "~/components/craft-repository/carbon-footprint/features";
import { Counter } from "~/components/animations/counter";
import { BottomBanner } from "~/components/general/bottom-banner";



const counter = [
  { name: "Verified artisans", value: 25000 },
  { name: "Global Markets", value: 20 },
  { name: "Industry", value: 8 },
  { name: "Craft Businesses", value: 120 },
];

export default function CarbonPrintPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
            <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
              CARBON FOOTPRINT CRAFT REGISTRY
            </h1>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Measure, Reduce, Thrive
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Sustainability
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Sustainable impact.
            </p>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Track, Verify, Improve
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Accountability
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Responsible craft.
            </p>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Sustain, Showcase, Lead
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Eco-Craft
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Eco leadership.
            </p>
          </div>
        </div>
        <CarbonEstimationHome />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 lg:container">
          <CarbonFeatures />
        </div>
      </div>
      <div className="mx-6 lg:container">
        <CarbonApiGuide />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 space-y-[6rem] pt-[5rem] lg:container">
          <h2 className="text-center font-montserrat text-xl text-secondary">
            Defend Sustainability, Empower Artisans: Join the Movement for a
            Greener Future in Kashmiri Crafts
          </h2>
          <h2 className="text-center font-montserrat text-3xl text-primary">
            Join our mission to create a more sustainable and eco-conscious
            future for Kashmiri artisans and the craft industry.
          </h2>
          <Counter counterValues={counter} />
          <BottomBanner />
        </div>
      </div>
    </section>
  );
}
