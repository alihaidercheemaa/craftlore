import { type Metadata } from "next";
import { Counter } from "~/components/animations/counter";
import { CostApiGuide } from "~/components/craft-repository/cost-estimations/api-guide";
import { CostFeatures } from "~/components/craft-repository/cost-estimations/features";
import { ProfileHome } from "~/components/craft-repository/profiling/home";
import { BottomBanner } from "~/components/general/bottom-banner";

export const metadata: Metadata = {
  title: "CRAFTLORE | Craft Profiling",
};


const counter = [
  { name: 'Verified artisans', value: 25000 },
  { name: 'Green Networks', value: 20 },
  { name: 'Eco Institutions', value: 8 },
  { name: 'Great Businesses', value: 120 }
]

export default function CraftProfilingPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="mx-6 flex gap-10 lg:container">
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
      <div className="mx-6 mt-6 grid gap-32 lg:container">
        <ProfileHome />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 lg:container">
          <CostFeatures />
        </div>
      </div>
      <div className="mx-6 lg:container">
        <CostApiGuide />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 space-y-[6rem] pt-[5rem] lg:container">
          <h2 className="text-center font-montserrat text-xl text-secondary">
            Defend Fair Trade, Empower Artisans: Join the Movement for
            Transparent Pricing in Kashmiri Crafts
          </h2>
          <h2 className="text-center font-montserrat text-3xl text-primary">
            Join our mission to establish fair, transparent pricing for Kashmiri
            artisans and their unique crafts.
          </h2>
          <Counter counterValues={counter} />
          <BottomBanner />
        </div>
      </div>
    </section>
  );
}
