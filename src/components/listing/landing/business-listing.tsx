import { BUSINESSLISTINGS } from "~/constants"


export const BusinessListing = () => {

    return (
        <div className="mx-6 lg:container pt-20">
            <div className="lg:container grid gap-6">
                <h2 className="text-4xl font-montserrat text-primary">Listing of Artisans, Businesses, and Institutions</h2>
                <div className="grid grid-cols-2 gap-6">
                    {
                        BUSINESSLISTINGS.map((listing, index) => (
                            <div
                                className="col-span-2 lg:col-span-1 grid gap-8 rounded-lg shadow-md bg-white group hover:bg-primary p-6 duration-500"
                                key={index}
                            >
                                <h3 className="text-xl font-montserrat group-hover:text-white">{listing.title}</h3>
                                <p className="text-sm font-opensans grid gap-2 group-hover:text-white">{listing.desc}</p>
                                <div className="grid gap-2">
                                    <h3 className="text-xl font-montserrat group-hover:text-white">Listing Criteria</h3>
                                    {
                                        listing.criteria.map((cr, index) => (
                                            <p
                                                className="text-sm font-opensans group-hover:text-white"
                                                key={index}
                                            >
                                                <b>{cr.title}</b>: {cr.desc}
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-xl font-montserrat group-hover:text-white">Listing Categorires</h3>
                                    {
                                        listing.categories.map((cr, index) => (
                                            <p
                                                className="text-sm font-opensans group-hover:text-white"
                                                key={index}
                                            >
                                                <b>{cr.title}</b>: {cr.desc}
                                            </p>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}