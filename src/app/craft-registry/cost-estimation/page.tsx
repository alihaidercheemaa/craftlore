import { CostEstimationHome } from "~/components/craft-repository/cost-estimations/home";
import { CostFeatures } from "~/components/craft-repository/cost-estimations/features";
import { CostApiGuide } from "~/components/craft-repository/cost-estimations/api-guide";
import { Counter } from "~/components/animations/counter";
import { BottomBanner } from "~/components/general/bottom-banner";
import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { PRICEBANNER } from "~/constants/banner";
import { Container } from "~/components/common/container";
import { Background } from "~/components/common/background";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost estimation",
};

const counter = [
  { name: "Verified artisans", value: 25000 },
  { name: "Green Networks", value: 20 },
  { name: "Eco Institutions", value: 8 },
  { name: "Great Businesses", value: 120 },
];

export default function CostEstimatorPage() {
  return (
    <>
      <Banner banner={PRICEBANNER} />
      <section className="relative col-span-12 -mt-16">
        <Container>
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
        </Container>
        <Background color="#e5edf7">
          <Container>
            <CostFeatures />
          </Container>
        </Background>
        <Container>
          <CostApiGuide />
        </Container>
        <Background color="#e5edf7">
          <div className="mx-6 space-y-[6rem] pt-[5rem] lg:container">
            <h2 className="text-center font-montserrat text-xl text-secondary">
              Defend Fair Trade, Empower Artisans: Join the Movement for
              Transparent Pricing in Kashmiri Crafts
            </h2>
            <h2 className="text-center font-montserrat text-3xl text-primary">
              Join our mission to establish fair, transparent pricing for
              Kashmiri artisans and their unique crafts.
            </h2>
            <Counter counterValues={counter} />
            <BottomBanner />
          </div>
        </Background>
      </section>
    </>
  );
}
