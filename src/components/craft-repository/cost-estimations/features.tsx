import { COSTBENEFITS, COSTFEATURES } from "~/constants/data";

export const CostFeatures = () => {
  return (
    <div className="grid gap-10 pt-10 pb-72">
      <h2 className="font-montserrat text-4xl text-primary">
        Key Features of Our Advanced Craft Valuation System
      </h2>
      <div className="grid gap-10">
        <p className="font-opensans text-xl">
          Our Advanced Craft Valuation System provides a comprehensive solution
          to help artisans, businesses, and buyers determine the true value of
          Kashmiri crafts. Through real-time market data, material verification,
          and craftsmanship evaluation, the system delivers transparent,
          data-driven pricing. It empowers users with insights to ensure fair
          valuations, preserving authenticity, and supporting sustainable
          practices across the handicraft industry.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {COSTFEATURES.map((feature, index) => (
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
          Benefits of CraftLore Price Valuation Registry
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {COSTBENEFITS.map((benefit, index) => (
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
