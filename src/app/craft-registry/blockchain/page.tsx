import { BlockchainHome } from "~/components/craft-repository/blockchain/home";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: 'CRAFTLORE | Blockchain',
};


export default function BlockChainPage() {
  return (
    <div className="relative col-span-12 -mt-16">
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
      <div className="lg:container">
        <BlockchainHome />
      </div>
    </div>
  </div>
  );
}
