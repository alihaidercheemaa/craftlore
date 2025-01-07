import { type Metadata } from "next";
import { Counter } from "~/components/animations/counter";
import { Background } from "~/components/common/background";
import { Container } from "~/components/common/container";
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

export default function CraftProfilingPage() {
  return (
    <section className="col-span-12">
      <div className="my-12 grid gap-32 mx-6 px-24">
        <ProfileHome />
      </div>

      <Background color="#e5edf7">
        <Container>
          <ProfileFeatures />
        </Container>
      </Background>
      <Container>
        <ProfileApiGuide />
      </Container>
      <Background color="#e5edf7">
        <Container className="space-y-[6rem] pt-[5rem]">
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
        </Container>
      </Background>
    </section>
  );
}
