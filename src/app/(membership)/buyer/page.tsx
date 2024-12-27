import { BuyerAccordin } from "~/components/general/about/memberships/buyer/buyer-accordin";
import { BuyerMembershipForm } from "~/components/general/about/memberships/buyer/buyer-form";

export default function BuyerPage() {
  return (
    <section className="col-span-12 gap-4 bg-white">
      <div className="mx-3 lg:container">
        <div className="my-32 grid grid-cols-2 gap-12 p-4">
          <h1 className="col-span-2 font-montserrat text-[40px] text-primary">
            Craftlore&apos;s Buyer Support Membership{" "}
            <span className="text-secondary">Benefits</span>
          </h1>
          <BuyerAccordin />
          <BuyerMembershipForm />
        </div>
      </div>
    </section>
  );
}
