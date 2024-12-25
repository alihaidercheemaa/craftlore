import Image from "next/image";
import { ReportingForm } from "~/components/craft-repository/gi/reporting";
import { FakeReportingForm } from "~/components/craft-repository/gi/fake";
import { type Metadata } from "next";


export const metadata: Metadata = {
  title: 'CRAFTLORE | GI Reporting',
};


export default function GIReportingPage() {
  return (
    <section className="relative col-span-12 -mt-16">
      <div className="mx-6 flex gap-10 lg:container">
        <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
          <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
            GEOGRAPHICAL INDICATION PROMOTIONAL PROGRAM
          </h1>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Validate, Secure, Celebrate
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Authenticity
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Certified Origin.
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Verify, Protect, Trust
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Integrity
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Genuine Craft.
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Preserve, Promote, Empower
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Heritage Craft
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Cultural Pride.
          </p>
        </div>
      </div>
      <div className="mx-6 mt-6 grid gap-32 lg:container">
        <div className="lg:container">
          <div className="my-20 grid grid-cols-2 gap-4">
            <div className="col-span-2 flex flex-col gap-6 p-4 lg:col-span-1">
              <div className="relative h-[25rem] w-[25rem]">
                <Image src="/images/GI.png" alt="co2 image" fill />
              </div>
              <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
                <h1 className="font-montserrat text-3xl text-secondary">
                  Consumer Reporting Portal
                </h1>
                <h2 className="font-montserrat text-4xl text-primary">
                  Empowering Consumer Vigilance & Transparency
                </h2>
                <p>
                  Consumer reporting is a vital feature integrated into the
                  Geographical Indication (GI) Registry, enabling consumers to
                  play an active role in safeguarding the authenticity of
                  GI-certified products, such as Kashmiri crafts. This system
                  fosters transparency and accountability by allowing buyers to
                  report any suspected counterfeits or discrepancies directly to
                  regulatory bodies. By bridging the gap between consumers and
                  the GI enforcement authorities, the consumer reporting
                  mechanism enhances trust and fortifies the GI certification
                  process.
                </p>
                <h3>Ensure the following steps before filing a report: </h3>
                <p>
                  Double-check the <strong>8-digit GI ID</strong> on the product
                  or certification.
                </p>
                <p>
                  Confirm all product details{" "}
                  <strong>match the registered craft information</strong>.
                </p>
                <p>
                  If you <strong>still find discrepancies</strong> after
                  re-verification, proceed with the report.
                </p>
              </div>
            </div>
            <div className="col-span-2 grid gap-6 lg:col-span-1">
              <div className="flex flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg">
                <h2 className="p-6 text-center font-montserrat text-3xl text-secondary">
                  Caution for Users: Re-Verify Your GI ID Before Reporting
                </h2>
                <p className="font-montserrat text-sm text-white">
                  Your diligence can prevent artisans or producers from being
                  penalized for an unintended mistake
                </p>
                <ReportingForm />
              </div>
              <div className="flex flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg">
                <h2 className="p-6 text-center font-montserrat text-3xl text-secondary">
                  Fake Product ID?
                </h2>
                <p className="font-montserrat text-sm text-white">
                  Report a Suspected Issue
                </p>
                <FakeReportingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
