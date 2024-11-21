

import { ArtisanList } from "~/components/listing/artisans/artisan-list"
import { api, HydrateClient } from "~/trpc/server"
import { ArtisanTable } from "~/components/listing/artisans/artisan-table"
import { Suspense } from "react"


export const ArtisanInfo = async () => {


    void api.register.getArtisans.prefetch()
    return (
        <HydrateClient>
            <div className="lg:container grid lg:gap-32 lg:mt-32">
                <ArtisanList />
                <Suspense fallback={<div>Loading......</div>}>
                    <ArtisanTable />
                </Suspense>
            </div>
        </HydrateClient>
    )
}