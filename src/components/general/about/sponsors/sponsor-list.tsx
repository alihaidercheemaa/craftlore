import { SPONSORS } from "~/constants"




export const SponsorList = () => {

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="container">
                <div className="container bg-white rounded-md shadow-md grid gap-7 mb-32 py-8">
                    <h1 className='text-5xl font-montserrat text-primary'>Craftlore Network</h1>
                    <div className="grid  gap-8">
                        {SPONSORS.map((sponsor, index) => (
                            <div
                                className="bg-primary p-6 rounded-lg shadow-sm group hover:shadow-lg text-white grid "
                                key={index}
                            >
                                <h2 className="font-bold font-montserrat text-white mt-3 ">
                                    {sponsor.name}
                                </h2>
                                <p className=" mt-2">{sponsor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


    )
}