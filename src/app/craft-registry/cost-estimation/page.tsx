import { CostEstimationHome } from "~/components/craft-repository/cost-estimations/home";
import { type Metadata } from "next";
import { CostFeatures } from "~/components/craft-repository/cost-estimations/features";
import { CostApiGuide } from "~/components/craft-repository/cost-estimations/api-guide";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost estimation",
};

export default function CostestimatorPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
            <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
              Craftlore Price Registry
            </h1>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Value, Ensure, Empower
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Fair Pricing
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Transparent pricing.
            </p>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Verify, Protect, Trust
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Authenticity
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Genuine crafts.
            </p>
          </div>
          <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Connect, Expand, Grow
            </p>
            <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
              Market Access
            </p>
            <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
              Global reach.
            </p>
          </div>
        </div>
        <CostEstimationHome />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 lg:container">
          <CostFeatures />
        </div>
      </div>
      <div className="mx-6 lg:container">
        <CostApiGuide />
      </div>
    </section>
  );
}
