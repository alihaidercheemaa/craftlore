
import { api, HydrateClient } from "~/trpc/server"
import { Suspense } from "react"
import { InstituteList } from "~/components/listing/institute/institue-list"
import { InstituteTable } from "~/components/listing/institute/institute-table"

export const InstituteInfo = async () => {

    void api.register.getInstitutes.prefetch()
    return (
        <HydrateClient>
            <div className="g:container grid lg:gap-32 lg:mt-32">
                <InstituteList />
                <Suspense fallback={<div>Loading......</div>}>
                    <InstituteTable />
                </Suspense>
            </div>
        </HydrateClient>
    )
}