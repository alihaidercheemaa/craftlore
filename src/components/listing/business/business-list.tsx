
import React from "react";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { BusinessCard } from "~/components/listing/business/business-card";


export const BusinessList = async () => {
  const businesses = await api.register.getTopBusiness();

  const getBusiness = (level: string) => {
    switch (level) {
      case "None":
        return "None";
      case "Large_Enterprice":
        return "Large_Enterprice";
      case "Mid_sized_Business":
        return "Mid sized Business";
      case "Small_Business":
        return "Small Business";
      case "Startup":
        return "Startup";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="mx-6 lg:container">
      {/* Gold section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            businesses.gold.length === 1 || businesses.gold.length === 0,
          "grid-cols-1 lg:grid-cols-2": businesses.gold.length === 2,
          "grid-cols-1 lg:grid-cols-3": businesses.gold.length >= 3,
        })}
      >
        {businesses.gold.map((business, index: number) => (
          <BusinessCard
            key={index}
            rankingColor="bg-yellow-300 text-yellow-800"
            rankTitle="Gold"
            business={business}
            getBusiness={getBusiness}
          />
        ))}
      </div>

      {/* Silver section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            businesses.silver.length === 1 || businesses.silver.length === 0,
          "grid-cols-1 lg:grid-cols-2": businesses.silver.length === 2,
          "grid-cols-1 lg:grid-cols-3": businesses.silver.length >= 3,
        })}
      >
        {businesses.silver.map((business, index: number) => (
          <BusinessCard
            key={index}
            rankingColor="bg-gray-300 text-gray-800"
            rankTitle="Silver"
            business={business}
            getBusiness={getBusiness}
          />
        ))}
      </div>

      {/* Bronze section */}
      <div
        className={cn("grid gap-6 p-4", {
          "grid-cols-1":
            businesses.bronze.length === 1 || businesses.bronze.length === 0,
          "grid-cols-1 lg:grid-cols-2": businesses.bronze.length === 2,
          "grid-cols-1 lg:grid-cols-3": businesses.bronze.length >= 3,
        })}
      >
        {businesses.bronze.map((business, index: number) => (
          <BusinessCard
            key={index}
            rankingColor="bg-amber-500 text-amber-900"
            rankTitle="Bronze"
            business={business}
            getBusiness={getBusiness}
          />
        ))}
      </div>
    </div>
  );
};
