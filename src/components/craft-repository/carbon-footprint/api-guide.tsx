import Link from "next/link";
import { Button } from "~/components/ui/button";

export const CarbonApiGuide = () => {
  return (
    <div className="grid">
      <h4 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        CraftLore Carbon Footprint Registry API Integration Process
      </h4>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Carbon Footprint Registry API Integration Process
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h2>
              <p>
                Sign up and request API access to integrate CraftLore&apos;s
                carbon footprint system into your platform.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h2>
              <p>
                Once approved, generate an API key to authenticate your
                integration and ensure secure communication.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h2>
              <p>
                Use our detailed API documentation to connect your platform,
                enabling real-time data exchange on carbon footprint
                calculations.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Craft Data
              </h2>
              <p>
                Send material, production, and shipping data through the API for
                carbon footprint analysis and receive accurate environmental
                impact reports.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 5: Access Detailed Carbon Footprint Reports
              </h2>
              <p>
                Gain comprehensive insights, sustainability recommendations, and
                blockchain-backed data for authenticity.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-orange-500">
            Join the CraftLore Carbon Footprint Registry Today!
          </h1>

          <p className="text-gray-700">
            Become part of the leading platform dedicated to sustainability in
            the Kashmiri handicraft industry. Whether you&apos;re an artisan,
            business, or institution, the CraftLore Carbon Footprint Registry
            provides you with essential tools to measure, track, and reduce your
            environmental impact. By joining, you showcase your commitment to
            eco-conscious practices, build consumer trust, and access new growth
            opportunities.
          </p>

          <h2 className="text-2xl font-bold">
            CraftLore Carbon Footprint Registry is your pathway to a sustainable
            future.
          </h2>

          <p className="text-gray-700">
            Get started by integrating our API and become part of the CraftLore
            ecosystem, fostering transparency, collaboration, and global market
            credibility.
          </p>
          <Button type="button" asChild>
            <Link href={"#"}>START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
