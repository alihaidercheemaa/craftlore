import { PROFILEBENEFITS, PROFILEFEATURES } from "~/constants/data";

export const ProfileFeatures = () => {
  return (
    <div className="grid gap-10 pb-72 pt-10">
      <h2 className="font-montserrat text-4xl text-primary">
        Key Features of the Kashmir Craft Repository Registry
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
          {PROFILEFEATURES.map((feature, index) => (
            <article
              key={index}
              className="col-span-2 md:col-span-1 space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white"
            >
              <h3 className="font-montserrat text-xl">
                {index + 1}. {feature.title}
              </h3>
              <p className="font-opensans">{feature.des}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="grid gap-10">
        <h2 className="font-montserrat text-4xl text-primary">
        Benefits of the Kashmir Craft Repository Registry
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {PROFILEBENEFITS.map((benefit, index) => (
            <article
              key={index}
              className="col-span-2 md:col-span-1 space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white"
            >
              <h3 className="font-montserrat text-xl">{benefit.title}</h3>
              <p className="font-opensans">{benefit.des}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
