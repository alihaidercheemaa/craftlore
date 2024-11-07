import { KEYCOMPONENTS } from "~/constants"


export const ComponentList = ()=>{

    return (
        <div className="grid grid-cols-2 gap-8">
            {
                KEYCOMPONENTS.map((component,index)=>(
                    <div className="grid  gap-4 group hover:bg-primary bg-white rounded-lg shadow-lg p-6" key={index}>
                        <p className="group-hover:text-white font-montserrat text-xl">{component.title}</p>
                        <p className="group-hover:text-white font-opensans text-xl">{component.desc}</p>
                        <p className="group-hover:text-white font-montserrat text-xl">{component.sub}</p>
                        <p className="group-hover:text-white font-opensans text-xl">{component.subdesc}</p>
                    </div>
                ))
            }
        </div>
    )
}