import { SponsorAccordin } from "~/components/general/about/memberships/sponsorship/sponsor-accordin";
import { SponsorMemberShipForm } from "~/components/general/about/memberships/sponsorship/sponsorship-form";

export default function SponsorshipPage() {
  return (
    <section className="col-span-12 gap-4 bg-white">
      <div className="mx-3 lg:container">
        <div className="my-32 grid grid-cols-2 gap-12 p-4">
          <h1 className="col-span-2 font-montserrat text-[40px] text-primary">
            Craftlore&apos;s Sponsor Membership{" "}
            <span className="text-secondary">Benefits</span>
          </h1>
          <SponsorAccordin />
          <SponsorMemberShipForm />
        </div>
      </div>
    </section>
  );
}
