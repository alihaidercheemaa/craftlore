import Image from "next/image"
import { ORGANIZATIONS } from "~/constants"




export const NetworkList = () => {

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="container">
                <div className="container bg-white rounded-md shadow-md grid gap-7 mb-32 py-8">
                    <h1 className='text-5xl font-montserrat text-primary'>Craftlore Network</h1>
                    <div className="grid grid-cols-2  gap-8">
                        {ORGANIZATIONS.map((organization, index) => (
                            <div
                                className="bg-primary p-6 rounded-lg shadow-sm group hover:shadow-lg text-white grid"
                                key={index}
                            >
                                <Image
                                    src={"/logo/logo.png"}
                                    alt={`${organization.name} logo`}
                                    width={64}
                                    height={64}
                                />
                                <h2 className="font-bold font-montserrat text-white mt-3">
                                    {organization.name}
                                </h2>
                                <p>{organization.mission} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita cum doloribus, esse quibusdam aliquam ea dolores rem voluptatum alias iure? Qui ex accusantium maxime amet magnam veniam iure, eaque tempora dolorem, obcaecati suscipit aliquam adipisci officiis ut consequuntur mollitia numquam sapiente culpa earum hic dicta voluptas explicabo reprehenderit? Optio asperiores vel atque rem nam ipsa voluptates ipsum alias laboriosam animi veritatis, et, corrupti deserunt distinctio quasi porro cum. Nisi ad natus delectus. Veritatis eligendi omnis corporis enim aspernatur quam laboriosam in repudiandae earum ad ducimus est hic sit, molestias repellat delectus modi quo pariatur nulla ut eum vitae repellendus iure.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}