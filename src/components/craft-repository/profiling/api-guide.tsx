import Link from "next/link";
import { Button } from "~/components/ui/button";

export const ProfileApiGuide = () => {
  return (
    <div className="grid">
      <h4 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        CraftLore Craft Repository Registry API Integration Process
      </h4>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Craft Repository Registry API Integration Process
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h2>
              <p>
                Sign up and request access to integrate the registry’s database
                into your platform.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h2>
              <p>
                Once approved, generate a secure API key for seamless data
                authentication and communication.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h2>
              <p>
                Use our detailed API documentation to configure your platform,
                enabling real-time data access.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Craft Data
              </h2>
              <p>
                Upload data on materials, techniques, and certifications for
                validation and inclusion.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 5: Access Detailed Pricing Reports
              </h2>
              <p>
                Gain access to verified craft documentation, market insights,
                and sustainability metrics to enhance your offerings.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">
            Join the Kashmir Craft Repository Registry Today!
          </h2>

          <p className="text-gray-700">
            Be a part of this transformative initiative dedicated to preserving
            and innovating Kashmiri crafts. Whether you’re an artisan, buyer, or
            institution, the registry offers invaluable tools to document,
            protect, and promote the cultural treasures of Kashmir.
          </p>

          <p className="text-2xl font-bold">
            The Kashmir Craft Repository Registry: Forging a Revolution in Craft
            Heritage Preservation and Innovation.
          </p>
          <Button type="button" asChild>
            <Link href="/listing/registration">START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
