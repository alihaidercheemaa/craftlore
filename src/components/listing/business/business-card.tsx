
type BusinessCardProps = {
  rankingColor: string;
  rankTitle: string;
  business: {
    user: {
      fullName: string;
      address: string;
    };
    businessType: string;
    businessEmail: string;
    businessEmployee: number;
    businessMarket:string
    yearOfOperation:number
  };
  getBusiness: (level: string) => string;
};

export const BusinessCard: React.FC<BusinessCardProps> = ({
  rankingColor,
  rankTitle,
  business,
  getBusiness,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">

      <div
        className={`absolute right-0 top-0 rounded-bl-lg px-3 py-1 text-sm font-semibold ${rankingColor}`}
      >
        {rankTitle}
      </div>

      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {business.user.fullName}
        </h2>
        <p className="mb-4 text-sm text-gray-500">
          Location: {business.user.address}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Type:</span>{" "}
          {getBusiness(business.businessType)}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Market:</span>{" "}
          {business.businessMarket}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Business email:</span>{" "}
          {business.businessEmail}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Years of operation:</span>{" "}
          {business.yearOfOperation}
        </p>
      </div>
    </div>
  );
};
