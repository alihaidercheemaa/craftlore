/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export const InstituteList = async () => {
    const institutes = await api.register.getTopInstitutes();

    return (
        <div className="lg:container ">
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": institutes.gold.length === 1 || institutes.gold.length === 0,
                    "grid-cols-1 lg:grid-cols-2": institutes.gold.length === 2,
                    "grid-cols-1 lg:grid-cols-3": institutes.gold.length >= 3,
                }
            )}>
                {institutes.gold.map((institute, index) => {
                    // Determine ranking color based on institute's rank
                    const rankingColor = "bg-yellow-300 text-yellow-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {institute.criteria.rank}
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {institute.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {institute.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {institute.instituteType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Mission:</span>{" "}
                                    {institute.instituteMission}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Representative:</span>{" "}
                                    {institute.instituteRep} ({institute.repDes})
                                </p>
                               
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": institutes.silver.length === 1 || institutes.silver.length === 0,
                    "grid-cols-1 lg:grid-cols-2": institutes.silver.length === 2,
                    "grid-cols-1 lg:grid-cols-3": institutes.silver.length >= 3,
                }
            )}>
                {institutes.silver.map((institute, index) => {
                    // Determine ranking color based on institute's rank
                    const rankingColor = "bg-gray-300 text-gray-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {institute.criteria.rank}
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {institute.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {institute.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {institute.instituteType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Mission:</span>{" "}
                                    {institute.instituteMission}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Representative:</span>{" "}
                                    {institute.instituteRep} ({institute.repDes})
                                </p>
                               
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": institutes.bronze.length === 1 || institutes.bronze.length === 0,
                    "grid-cols-1 lg:grid-cols-2": institutes.bronze.length === 2,
                    "grid-cols-1 lg:grid-cols-3": institutes.bronze.length >= 3,
                }
            )}>
                {institutes.bronze.map((institute, index) => {
                    // Determine ranking color based on institute's rank
                    const rankingColor = "bg-amber-500 text-amber-900";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                {institute.criteria.rank}
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {institute.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {institute.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {institute.instituteType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Mission:</span>{" "}
                                    {institute.instituteMission}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Representative:</span>{" "}
                                    {institute.instituteRep} ({institute.repDes})
                                </p>
                               
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
