import { GENDERCOMPONENTS } from "~/constants"


export const GenderComponentList = ()=>{

    return (
        <div className="grid grid-cols-2 gap-8">
            {
                GENDERCOMPONENTS.map((component,index)=>(
                    <div className="col-span-2 lg:col-span-1 grid  gap-4 group hover:bg-primary bg-white rounded-lg shadow-lg p-6" key={index}>
                        <p className="group-hover:text-white font-montserrat text-xl">{component.title}</p>
                        <p className="group-hover:text-white font-opensans text-xl">{component.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}