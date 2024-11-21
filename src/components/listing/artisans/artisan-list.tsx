/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export const ArtisanList = async () => {
    const artisans = await api.register.getTopArtisans();

    return (
        <div className="lg:container ">
            <div className={cn(
                 "grid gap-6 p-4",
                 {
                     "grid-cols-1": artisans.gold.length === 1 || artisans.gold.length === 0,
                     "grid-cols-1 lg:grid-cols-2": artisans.gold.length === 2,
                     "grid-cols-1 lg:grid-cols-3": artisans.gold.length >= 3,
                 }
            )}>
                {artisans.gold.map((artisan, index) => {
                    // Determine ranking color based on artisan's rank
                    const rankingColor = "bg-yellow-300 text-yellow-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {artisan.criteria.rank}
                            </div>
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
                })}
            </div>
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": artisans.silver.length === 1 || artisans.silver.length === 0,
                    "grid-cols-1 lg:grid-cols-2": artisans.silver.length === 2,
                    "grid-cols-1 lg:grid-cols-3": artisans.silver.length >= 3,
                }
            )}>
                {artisans.silver.map((artisan, index) => {
                    // Determine ranking color based on artisan's rank
                    const rankingColor = "bg-gray-300 text-gray-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {artisan.criteria.rank}
                            </div>
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
                })}
            </div>
            <div className={cn(
                  "grid gap-6 p-4",
                  {
                      "grid-cols-1": artisans.bronze.length === 1 || artisans.bronze.length === 0,
                      "grid-cols-1 lg:grid-cols-2": artisans.bronze.length === 2,
                      "grid-cols-1 lg:grid-cols-3": artisans.bronze.length >= 3,
                  }
            )}>
                {artisans.bronze.map((artisan, index) => {
                    // Determine ranking color based on artisan's rank
                    const rankingColor = "bg-amber-500 text-amber-900";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {artisan.criteria.rank}
                            </div>
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
                })}
            </div>
        </div>
    );
};
