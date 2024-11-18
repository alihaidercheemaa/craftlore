import { api } from "~/trpc/server";

export const BusinessList = async () => {
    const businesses = await api.register.getTopBusiness();

    return (
        <div className="lg:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {businesses.map((business, index) => {
                // Determine ranking based on index
                let ranking, rankingColor;
                if (index < 3) {
                    ranking = "Gold";
                    rankingColor = "bg-yellow-300 text-yellow-800";
                } else if (index < 6) {
                    ranking = "Silver";
                    rankingColor = "bg-gray-300 text-gray-800";
                } else {
                    ranking = "Bronze";
                    rankingColor = "bg-amber-500 text-amber-900";
                }

                return (
                    <div
                        key={index}
                        className="relative border shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div
                            className={`absolute top-0 right-0 px-3 py-1 text-sm font-semibold rounded-bl-lg ${rankingColor}`}
                        >
                            {ranking}
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">
                                {business.businessName}
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Location: {business.businessAddress}
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Type:</span>{" "}
                                {business.businessType}
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">No. of employee:</span>{" "}
                                {business.businessEmployee}
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Email:</span>{" "}
                                {business.businessEmail}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
