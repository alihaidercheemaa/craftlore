import Link from "next/link";
import { Button } from "~/components/ui/button";

export const CostApiGuide = () => {
  return (
    <div className="grid">
      <h4 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        CraftLore Price Valuation Registry API Integration Process
      </h4>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Price Valuation Registry API Integration Process
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h2>
              <p>
                Sign up and request API access to integrate CraftLore&apos;s
                price valuation system into your platform.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h2>
              <p>
                Once approved, generate an API key to authenticate your
                integration and ensure secure communication for real-time
                pricing data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h2>
              <p>
                Use our detailed API documentation to connect your platform,
                allowing real-time data exchange on craft pricing and market
                analysis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Craft Data
              </h2>
              <p>
                Send material, craftsmanship, and market data through the API
                for price evaluation and receive accurate, data-driven pricing
                reports.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 5: Access Detailed Pricing Reports
              </h2>
              <p>
                Receive comprehensive pricing insights, comparative reports, and
                blockchain-backed data for authenticity and market transparency.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-orange-500">
            Join the CraftLore Price Valuation Registry Today!
          </h1>

          <p className="text-gray-700">
            Become part of the largest platform dedicated to fair pricing in the
            Kashmiri handicraft industry. Whether you&apos;re an artisan,
            business, or institution, CraftLore Price Valuation Registry offers
            essential tools to measure, evaluate, and improve your craft’s
            market value. By joining, you contribute to fair trade, build
            consumer trust, and gain new market opportunities.
          </p>

          <h2 className="text-2xl font-bold">
            CraftLore Price Valuation Registry is your gateway to a transparent
            future.
          </h2>

          <p className="text-gray-700">
            Get started by integrating our API and become part of the CraftLore
            ecosystem, driving transparency, collaboration, and global
            credibility.
          </p>
          <Button type="button" asChild>
            <Link href={"/listing/registration"}>START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
