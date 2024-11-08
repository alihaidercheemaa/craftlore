import { ARCHITECTURE } from "~/constants"



export const ArchitectureList = () => {

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="mx-6 lg:container">
                <div className=" lg:container grid  gap-7 mb-32">
                    <h1 className='text-5xl font-montserrat text-primary'>Craftlore Architecture</h1>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            ARCHITECTURE.map((architecture, index) => (
                                <div className="col-span-2 lg:col-span-1 bg-white p-6 rounded-lg shadow-sm group hover:bg-primary hover:shadow-lg" key={index}>
                                    <h2 className="text-xl font-bold mb-4 font-montserrat group-hover:text-white">{architecture.title}</h2>

                                    <div className="mb-4 font-opensans text-sm group-hover:text-white">
                                        <h3 className="font-semibold">• Definition:</h3>
                                        <p className="text-gray-700 group-hover:text-white my-2">{architecture.defination} </p>
                                    </div>
                                    <div className="font-opensans text-sm group-hover:text-white">
                                        <h3 className="font-semibold">• Key Features:</h3>
                                        <p className="text-gray-700 group-hover:text-white my-2">{architecture.features}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}