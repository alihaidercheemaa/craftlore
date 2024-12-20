import Link from "next/link";
import { Button } from "~/components/ui/button";

export const BlockApiGuide = () => {
  return (
    <div className="grid">
      <h4 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        CraftLore Blockchain Traceability Registry API Integration Process
      </h4>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Blockchain Traceability Registry API Integration Process
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h2>
              <p>
                Sign up and request API access to integrate CraftLore&apos;s
                Blockchain Traceability system into your platform.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h2>
              <p>
                Once approved, generate an API key to authenticate your
                integration, ensuring secure and encrypted communication for
                traceability.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h2>
              <p>
                Use our comprehensive API documentation to seamlessly connect
                your platform, enabling real-time data exchange on craft
                traceability, origin verification, and lifecycle tracking.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Craft Data
              </h2>
              <p>
                Send artisan details, materials, production stages, and shipping
                information through the API for traceability analysis and
                receive blockchain-backed verification of craft authenticity.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 5: Access Authenticity Reports
              </h2>
              <p>
                Receive detailed product journey reports, including origin
                verification, supply chain tracking, and immutable blockchain
                data for transparency and fraud prevention.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-orange-500">
            Join the CraftLore Blockchain Traceability Registry Today!
          </h1>

          <p className="text-gray-700">
            Become part of the trusted platform dedicated to authenticity and
            heritage protection in the Kashmiri handicraft industry. Whether
            you&apos;re an artisan, business, or institution, CraftLore
            Blockchain Traceability Registry provides you with essential tools
            to trace, verify, and secure the lifecycle of your products. By
            joining, you showcase your commitment to preserving cultural
            integrity, build consumer trust, and unlock global market
            opportunities.
          </p>

          <h2 className="text-2xl font-bold">
            CraftLore Blockchain Traceability Registry is your key to
            authenticating Kashmiri crafts.
          </h2>

          <p className="text-gray-700">
            Get started by integrating our API and become part of the CraftLore
            ecosystem, fostering transparency, accountability, and global market
            confidence.
          </p>
          <Button type="button" asChild>
            <Link href={"#"}>START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
