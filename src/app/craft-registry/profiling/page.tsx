import { type Metadata } from "next";
import { Counter } from "~/components/animations/counter";
import { ProfileApiGuide } from "~/components/craft-repository/profiling/api-guide";
import { ProfileFeatures } from "~/components/craft-repository/profiling/features";
import { ProfileHome } from "~/components/craft-repository/profiling/home";
import { BottomBanner } from "~/components/general/bottom-banner";

export const metadata: Metadata = {
  title: "CRAFTLORE | Craft Profiling",
};

const counter = [
  { name: "Verified artisans", value: 25000 },
  { name: "Green Networks", value: 20 },
  { name: "Eco Institutions", value: 8 },
  { name: "Great Businesses", value: 120 },
];

const crafts = [
  "Weaving Crafts",
  "Wood Crafts",
  "Decor Crafts",
  "Embroidery Crafts",
  "Recycled Crafts",
  "Hide Crafts",
  "Sport Crafts",
  "Culinary Crafts",
];

export default function CraftProfilingPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="mx-6 flex gap-3">
        <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
          <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
            CRAFT REGISTRY
          </h1>
        </div>
        {crafts.map((craft, index) => (
          <div
            className="grid h-[183px] w-72 place-content-center gap-4 border-2  bg-white p-10 text-center text-gray-900 hover:bg-primary hover:text-white duration-300"
            key={index}
          >
            <p className="whitespace-pre-line font-montserrat font-bold">
              {craft.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-6 mt-6 grid gap-32 lg:container">
        <ProfileHome />
      </div>
      <div className="bg-[#e5edf7]">
        <div className="mx-6 lg:container">
          <ProfileFeatures />
        </div>
      </div>
      <div className="mx-6 lg:container">
        <ProfileApiGuide />
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
