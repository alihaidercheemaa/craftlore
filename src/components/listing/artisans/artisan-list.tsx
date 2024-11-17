import { api } from "~/trpc/server"




export const ArtisanList = async () => {

    const artisans = await api.register.getArtisans()
    return (
        <div className="lg:container grid grid-cols-3">
            {/* {artisans.map((artisan, index) => (
                <div
                    key={artisan.id}
                    className={`border p-4 rounded-lg ${artisan.ranking === "Gold"
                            ? "bg-yellow-300"
                            : artisan.ranking === "Silver"
                                ? "bg-gray-300"
                                : "bg-amber-500"
                        }`}
                >
                    <h2 className="text-lg font-bold">{artisan.name}</h2>
                    <p>Location: {artisan.location}</p>
                    <p>Craft: {artisan.craft}</p>
                    <p>Skill Level: {artisan.skill}</p>
                </div>
            ))} */}
        </div>
    )
}