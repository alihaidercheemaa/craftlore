import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { InstituteCard } from "~/components/listing/institute/intitute-card";

export const InstituteList = async () => {
  const institutes = await api.register.getTopInstitutes();

  
  const getIntitute = (level: string) => {
    switch (level) {
      case "None":
        return "None";
      case "Governance":
        return "Governance";
      case "NGO":
        return "NGO";
      case "Training_Body":
        return "Training Body";
      case "Educational_Body":
        return "Educational Body";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="lg:container ">
      {/* Gold section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1": institutes.gold.length === 1 || institutes.gold.length === 0,
          "grid-cols-1 lg:grid-cols-2": institutes.gold.length === 2,
          "grid-cols-1 lg:grid-cols-3": institutes.gold.length >= 3,
        })}
      >
        {institutes.gold.map((institute, index: number) => (
          <InstituteCard
            key={index}
            rankTitle="Gold"
            rankingColor="bg-yellow-300 text-yellow-800"
            institute={institute}
            getIntitute={getIntitute}
          />
        ))}
      </div>

      {/* Silver section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1": institutes.silver.length === 1 || institutes.silver.length === 0,
          "grid-cols-1 lg:grid-cols-2": institutes.silver.length === 2,
          "grid-cols-1 lg:grid-cols-3": institutes.silver.length >= 3,
        })}
      >
        {institutes.silver.map((institute, index: number) => (
          <InstituteCard
            key={index}
            rankTitle="Silver"
            rankingColor="bg-gray-300 text-gray-800"
            institute={institute}
            getIntitute={getIntitute}
          />
        ))}
      </div>

      {/* Bronze section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1": institutes.bronze.length === 1 || institutes.bronze.length === 0,
          "grid-cols-1 lg:grid-cols-2": institutes.bronze.length === 2,
          "grid-cols-1 lg:grid-cols-3": institutes.bronze.length >= 3,
        })}
      >
        {institutes.bronze.map((institute, index: number) => (
          <InstituteCard
            key={index}
            rankTitle="Bronze"
            rankingColor="bg-amber-500 text-amber-900"
            institute={institute}
            getIntitute={getIntitute}
          />
        ))}
      </div>
    </div>
  );
};
