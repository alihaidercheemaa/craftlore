import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { ArtisanCard } from "~/components/listing/artisans/artisan-card";

export const ArtisanList = async () => {
  const artisans = await api.register.getTopArtisans();

  return (
    <div className="mx-4 lg:container">
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            artisans.gold.length === 1 || artisans.gold.length === 0,
          "grid-cols-1 lg:grid-cols-2": artisans.gold.length === 2,
          "grid-cols-1 lg:grid-cols-3": artisans.gold.length >= 3,
        })}
      >
        {artisans.gold.map((artisan, index: number) => (
          <ArtisanCard
            key={index}
            rankTitle="Gold"
            rankingColor="bg-yellow-300 text-yellow-800"
            artisan={artisan}
          />
        ))}
      </div>

      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            artisans.silver.length === 1 || artisans.silver.length === 0,
          "grid-cols-1 lg:grid-cols-2": artisans.silver.length === 2,
          "grid-cols-1 lg:grid-cols-3": artisans.silver.length >= 3,
        })}
      >
        {artisans.silver.map((artisan, index: number) => (
          <ArtisanCard
            key={index}
            rankTitle="Silver"
            rankingColor="bg-gray-300 text-gray-800"
            artisan={artisan}
          />
        ))}
      </div>

      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            artisans.bronze.length === 1 || artisans.bronze.length === 0,
          "grid-cols-1 lg:grid-cols-2": artisans.bronze.length === 2,
          "grid-cols-1 lg:grid-cols-3": artisans.bronze.length >= 3,
        })}
      >
        {artisans.bronze.map((artisan, index: number) => (
          <ArtisanCard
            key={index}
            rankTitle="Bronze"
            rankingColor="bg-amber-500 text-amber-900"
            artisan={artisan}
          />
        ))}
      </div>
    </div>
  );
};
