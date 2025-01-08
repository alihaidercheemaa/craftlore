import { Container } from "~/components/common/container";
import { BuyerAccordin } from "~/components/general/about/memberships/buyer/buyer-accordin";
import { BuyerMembershipForm } from "~/components/general/about/memberships/buyer/buyer-form";

export default function BuyerPage() {
  return (
    <section className="col-span-12 gap-4 bg-white">
      <Container className="my-32 grid grid-cols-2 gap-12 p-4">
        <h1 className="col-span-2 font-montserrat text-[40px] text-primary">
          Craftlore&apos;s Buyer Support Membership{" "}
          <span className="text-secondary">Benefits</span>
        </h1>
        <BuyerAccordin />
        <BuyerMembershipForm />
      </Container>
    </section>
  );
}
