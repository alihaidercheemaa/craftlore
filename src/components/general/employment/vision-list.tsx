import { EMPLOYMENTVISION } from "~/constants"


export const EmploymentVisionList = ()=>{

    return(
        <div className="grid grid-cols-3 gap-6">
        {
            EMPLOYMENTVISION.map((vission,index)=>(
                <div className="col-span-3 lg:col-span-1 bg-white border-4 border-secondary rounded-xl hover:shadow-lg p-6 lg:p-8" key={index}>
                    <p className="font-opensans text-xl leading-[31px]">
                        <b>{vission.title}</b> {vission.description}
                    </p>
                </div>
            ))
        }
    </div>
    )
}