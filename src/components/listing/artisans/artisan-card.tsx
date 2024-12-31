
interface User {
  fullName: string;
  address: string;
}

interface Artisan {
  user: User;
  craftSpecialty: string;
  craftSkill: string;
  craftAward: string;
  craftExperience: number;
}

interface ArtisanCardProps {
  rankTitle: string;
  rankingColor: string;
  artisan: Artisan;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({
  rankTitle,
  rankingColor,
  artisan,
}) => {
  return (
    <div className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Corner badge */}
      <div
        className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
      >
        {rankTitle}
      </div>

      {/* Card content */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {artisan.user.fullName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Location: {artisan.user.address}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Craft:</span>{" "}
          {artisan.craftSpecialty}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Skill Level:</span>{" "}
          {artisan.craftSkill}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Award:</span>{" "}
          {artisan.craftAward}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Experience:</span>{" "}
          {artisan.craftExperience} years
        </p>
      </div>
    </div>
  );
};
