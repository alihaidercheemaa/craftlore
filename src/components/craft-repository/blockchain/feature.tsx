import { BLOCKCHAINFEATURES, BLOCKCHAINBENEFITS } from "~/constants";

export const BlockFeatures = () => {
  return (
    <div className="grid gap-10 pt-10 pb-72">
      <h2 className="font-montserrat text-4xl text-primary">
      Key Features of Our Blockchain Traceability System
      </h2>
      <div className="grid gap-10">
        <p className="font-opensans text-xl">
        CraftLore’s Blockchain Traceability Registry integrates state-of-the-art technology to guarantee the authenticity, traceability, and protection of Kashmiri crafts. Through blockchain, RFID, NFC, AI, DNA tagging, and IoT sensors, the system offers real-time, secure verification of product origins, safeguarding against counterfeiting while promoting transparency across the entire craft lifecycle.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {BLOCKCHAINFEATURES.map((feature, index) => (
            <div
              key={index}
              className="space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white"
            >
              <h3 className="font-montserrat text-xl">
                {index + 1}. {feature.title}
              </h3>
              <p className="font-opensans">{feature.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-10">
        <h2 className="font-montserrat text-4xl text-primary">
        Benefits of CraftLore Blockchain Traceability Registry
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {BLOCKCHAINBENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white"
            >
              <h3 className="font-montserrat text-xl">{benefit.title}</h3>
              <>
                {benefit.sub.map((data,index) => (
                  <p className="font-opensans" key={index} ><strong>{data.title}: </strong>{data.des}</p>
                ))}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
