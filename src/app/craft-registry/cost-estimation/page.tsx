import { CostEstimationHome } from "~/components/craft-repository/cost-estimations/home";

export default function CostestimatorPage() {
  return (
    <>
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
          <CostEstimationHome />
        </div>
      </div>
    </>
  );
}
