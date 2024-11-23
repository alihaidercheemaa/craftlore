/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export const BusinessList = async () => {
    const businesses = await api.register.getTopBusiness();

    return (
        <div className="lg:container ">
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": businesses.gold.length === 1 || businesses.gold.length === 0,
                    "grid-cols-1 lg:grid-cols-2": businesses.gold.length === 2,
                    "grid-cols-1 lg:grid-cols-3": businesses.gold.length >= 3,
                }
            )}>
                {businesses.gold.map((business, index) => {
                    // Determine ranking color based on business's rank
                    const rankingColor = "bg-yellow-300 text-yellow-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                Gold
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {business.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {business.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {business.businessType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">No. of employee:</span>{" "}
                                    {business.businessEmployee}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": businesses.silver.length === 1 || businesses.silver.length === 0,
                    "grid-cols-1 lg:grid-cols-2": businesses.silver.length === 2,
                    "grid-cols-1 lg:grid-cols-3": businesses.silver.length >= 3,
                }
            )}>
                {businesses.silver.map((business, index) => {
                    // Determine ranking color based on business's rank
                    const rankingColor = "bg-gray-300 text-gray-800";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                Silver
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {business.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {business.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {business.businessType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">No. of employee:</span>{" "}
                                    {business.businessEmployee}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cn(
                "grid gap-6 p-4",
                {
                    "grid-cols-1": businesses.bronze.length === 1 || businesses.bronze.length === 0,
                    "grid-cols-1 lg:grid-cols-2": businesses.bronze.length === 2,
                    "grid-cols-1 lg:grid-cols-3": businesses.bronze.length >= 3,
                }
            )}>
                {businesses.bronze.map((business, index) => {
                    // Determine ranking color based on business's rank
                    const rankingColor = "bg-amber-500 text-amber-900";
                    return (
                        <div
                            key={index}
                            className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                            >
                                Bronze
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {business.user.fullName}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    Location: {business.user.address}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Type:</span>{" "}
                                    {business.businessType}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">No. of employee:</span>{" "}
                                    {business.businessEmployee}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
