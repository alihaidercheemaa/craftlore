import { EMPLOYMENTSTAKHOLDERS } from "~/constants/data"


export const EmploymentStakHolder= () => {


    return (
        <div className="grid grid-cols-2 gap-6">
            {
                EMPLOYMENTSTAKHOLDERS.map((stak, index) => (
                    <div className="col-span-2 lg:col-span-1 bg-white border-4 border-secondary rounded-xl hover:shadow-lg p-8" key={index}>
                        <p className="font-opensans text-xl leading-[31px]">
                            <b>{stak.title}</b> <br />{stak.desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
