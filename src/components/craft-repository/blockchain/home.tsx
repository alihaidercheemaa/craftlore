import Image from "next/image";
import { BlockchainForm } from "~/components/craft-repository/blockchain/form";


export const BlockchainHome = () => {
  return (
    <div className="my-20 grid grid-cols-2 gap-4">
      <div className="col-span-2 flex flex-col gap-6 p-4 lg:col-span-1">
        <div className="relative h-[25rem] w-[25rem]">
          <Image src="/images/BC.png" alt="co2 image" fill />
        </div>
        <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
          <h2 className="font-montserrat text-4xl text-primary">
            Welcome to Craftlore&apos;s Blockchain Traceability Registry &
            Verifier
          </h2>
          <p>
            Unveil the journey of authentic Kashmiri crafts with
            Craftlore&apos;s Blockchain Traceability Verifier. Designed to
            provide unmatched transparency, security, and trust, this tool
            tracks each step in the lifecycle of a craft, ensuring that
            artisans, buyers, and industry professionals can verify the origin
            and authenticity of Kashmiri products in real-time.
          </p>
          <h3>Craftlore Blockchain Traceability Verifier Tool</h3>
          <p>
            The Blockchain Traceability Tool is an advanced platform that
            ensures every step of the Kashmiri craft&apos;s journey—from raw
            material sourcing to production, distribution, and final sale—is
            securely recorded on a blockchain. This tool empowers artisans,
            businesses, and buyers to verify the authenticity and provenance of
            a craft, ensuring its integrity and preventing counterfeits. By
            using blockchain technology, stakeholders can build trust, protect
            heritage, and enhance transparency in the global marketplace.
          </p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg lg:col-span-1">
        <h2 className="p-6 text-center font-montserrat text-[40px] leading-[48px] text-secondary">
          Kashmir&apos;s Craft Sustainability Tracker
        </h2>
        <p className="font-montserrat text-xl text-white text-center">
          Estimate the Carbon Footprint of Your Product
        </p>
        <BlockchainForm />
      </div>
    </div>
  );
};
