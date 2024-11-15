import { CorporateAccordin } from "~/components/general/about/memberships/corporate/corporate-accordin";
import { CorporateMembershipForm } from "~/components/general/about/memberships/corporate/corporate-form";

export default function CorporatePage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-white gap-4">
                <div className="mx-3 lg:container">
                    <div className="grid grid-cols-2 gap-12 mb-32 p-4">
                        <h1 className="col-span-2 font-montserrat text-[40px] text-primary">Craftlore&apos;s Corporate Membership <span className="text-secondary">Benefits</span></h1>
                        <CorporateAccordin />
                        <CorporateMembershipForm />
                    </div>
                </div>
            </section>
        </>
    );
}
