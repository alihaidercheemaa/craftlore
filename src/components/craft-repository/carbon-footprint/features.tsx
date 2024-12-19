import { CARBONFEATURES, CARBONBENEFITS } from "~/constants";

export const CarbonFeatures = () => {
  return (
    <div className="grid gap-10 pt-10 pb-72">
      <h2 className="font-montserrat text-4xl text-primary">
      Key Features of Our Craft Carbon Footprint System
      </h2>
      <div className="grid gap-10">
        <p className="font-opensans text-xl">
        Our Craft Carbon Footprint System offers a comprehensive solution to help artisans and businesses track, evaluate, and reduce their environmental impact. Through real-time calculations, material-specific analysis, and actionable insights, the system empowers users to make informed, sustainable decisions across the production process.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {CARBONFEATURES.map((feature, index) => (
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
        Benefits of Craftlore Carbon Footprint Registry?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {CARBONBENEFITS.map((benefit, index) => (
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
