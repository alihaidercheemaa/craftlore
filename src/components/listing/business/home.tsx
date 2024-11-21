
import { api, HydrateClient } from "~/trpc/server"
import { Suspense } from "react"
import { BusinessList } from "~/components/listing/business/business-list"
import { BusinessTable } from "~/components/listing/business/business-table"


export const BusinessInfo = async () => {

    void api.register.getBusinesses.prefetch()
    return (
        <HydrateClient>
            <div className="lg:container grid lg:gap-32 lg:mt-32">
                <BusinessList />
                <Suspense fallback={<div>Loading......</div>}>
                    <BusinessTable />
                </Suspense>
            </div>
        </HydrateClient>
    )
}