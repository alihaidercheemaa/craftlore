import { BlockchainHome } from "~/components/craft-repository/blockchain/home";
import { type Metadata } from "next";
import { BottomBanner } from "~/components/general/bottom-banner";
import { Counter } from "~/components/animations/counter";
import { BlockFeatures } from "~/components/craft-repository/blockchain/feature";
import { BlockApiGuide } from "~/components/craft-repository/blockchain/api-guide";

export const metadata: Metadata = {
  title: "CRAFTLORE | Blockchain",
};

const counter = [
  { name: "Registered Artisans", value: 25000 },
  { name: "Blockchain Networks", value: 20 },
  { name: "Blockchain-Linked Craft Hubs", value: 8 },
  { name: "Traceable Product Lines", value: 120 },
];

export default function BlockChainPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="mx-6 flex gap-10 lg:container">
        <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
          <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
            Block Chain Traceability Registry
          </h1>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Track, Trace, Trust
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Transparency
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Proven Origins.
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Verify, Authenticate, Assure
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Security
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Immutable Records
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Protect, Preserve, Guarantee
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Craft Integrity
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Certified Excellence.
          </p>
        </div>
      </div>
      <div className="mx-6 mt-6 grid gap-32 lg:container">
        <div className="lg:container">
          <BlockchainHome />
        </div>
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 lg:container">
          <BlockFeatures />
        </div>
      </div>
      <div className="mx-6 lg:container">
        <BlockApiGuide />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 space-y-[6rem] pt-[5rem] lg:container">
          <h2 className="text-center font-montserrat text-xl text-secondary">
            Ensure Authenticity, Empower Artisans
          </h2>
          <h2 className="text-center font-montserrat text-3xl text-primary">
            Join the Revolution of Blockchain Traceability in Kashmiri
            Handicrafts
          </h2>
          <Counter counterValues={counter} />
          <BottomBanner />
        </div>
      </div>
    </section>
  );
}
