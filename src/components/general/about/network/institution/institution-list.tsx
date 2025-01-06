import { INDIAORGANIZATIONS } from "~/constants/data"




export const IndiaList = () => {

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="mx-6 lg:container">
                <div className="px-6 lg:container  grid gap-7 mb-32 py-8">
                    <h1 className='text-5xl font-montserrat text-primary'>Craftlore India Network</h1>
                    <div className="grid grid-cols-2 gap-8">
                        {INDIAORGANIZATIONS.map((organization, index) => (
                            <div
                                className="col-span-2 lg:col-span-1 bg-white p-6 rounded-lg  shadow-sm group hover:bg-primary hover:shadow-lg text-gray-900 grid"
                                key={index}
                            >
                                <h2 className="font-bold font-montserrat group-hover:text-white text-gray-900 mt-3">
                                    {organization.name}
                                </h2>
                                <p className="group-hover:text-white">{organization.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}