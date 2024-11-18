import { LISTINGBENEFITS } from "~/constants"
import { BusinessListing } from "~/components/listing/landing/business-listing"




export const ListingBenefits = () => {

    return (
        <div className="bg-[#e5edf7]  pt-20  pb-10">
            <div className="mx-6 lg:container">
                <div className="lg:container grid gap-6">
                    <h2 className="text-4xl font-montserrat text-primary">Benefits of the CraftLore Trade Registry Project</h2>
                    <p className="text-xl font-opensans">The CraftLore Trade Registry Project offers significant advantages to various stakeholders in the Kashmiri handicraft sector, including the buyer community, artisans, businesses, and institutions. Here’s how each group benefits:</p>
                    <div className="grid grid-cols-2 gap-6">
                        {
                            LISTINGBENEFITS.map((listing, index) => (
                                <div
                                    className="col-sapn-2 lg:col-span-1 grid gap-8 rounded-lg shadow-md bg-white group hover:bg-primary p-6"
                                    key={index}
                                >
                                    <h3 className="text-xl font-montserrat group-hover:text-white">{listing.title}</h3>
                                    {
                                        listing.sub.map((sub, index) => (
                                            <div
                                                className="text-sm font-opensans grid gap-2 group-hover:text-white"
                                                key={index}
                                            >
                                                <h4 className="font-bold">{sub.title}</h4>
                                                <p>{sub.des}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <BusinessListing/>
        </div>
    )
}