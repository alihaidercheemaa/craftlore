import { CorporateAccordin } from "~/components/general/about/memberships/corporate/corporate-accordin";
import { CorporateMembershipForm } from "~/components/general/about/memberships/corporate/corporate-form";

export default function CorporatePage() {
  return (
    <section className="col-span-12 gap-4 bg-white">
      <div className="mx-3 lg:container">
        <div className="my-32 grid grid-cols-2 gap-12 p-4">
          <h1 className="col-span-2 font-montserrat text-[40px] text-primary">
            Craftlore&apos;s Corporate Membership{" "}
            <span className="text-secondary">Benefits</span>
          </h1>
          <CorporateAccordin />
          <CorporateMembershipForm />
        </div>
      </div>
    </section>
  );
}
