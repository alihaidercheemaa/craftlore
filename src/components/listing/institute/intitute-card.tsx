

interface User {
  fullName: string;
  address: string;
}

interface Institute {
  user: User;
  instituteType: string;
  instituteMission: string;
  instituteRep: string;
  instituteEmail:string
  repDes: string;
}

interface InstituteCardProps {
  rankTitle: string;
  rankingColor: string;
  institute: Institute;
  getIntitute: (level: string) => string;
}

export const InstituteCard: React.FC<InstituteCardProps> = ({
  rankTitle,
  rankingColor,
  institute,
  getIntitute
}) => {
  return (
    <div className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Corner Badge */}
      <div
        className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
      >
        {rankTitle}
      </div>

      {/* Card content */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {institute.user.fullName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Location: {institute.user.address}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Type:</span>{" "}
          {getIntitute(institute.instituteType)}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Mission:</span>{" "}
          {institute.instituteMission}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Representative:</span>{" "}
          {institute.instituteRep} ({institute.repDes})
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          {institute.instituteEmail}
        </p>
      </div>
    </div>
  );
};
