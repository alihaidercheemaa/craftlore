import { STAKHOLDERS } from "~/constants"




export const StakHolderList = () => {


    return (
        <div className="grid grid-cols-2 gap-6">
            {
                STAKHOLDERS.map((stak, index) => (
                    <div className="bg-white border-4 border-secondary rounded-xl hover:shadow-lg p-8" key={index}>
                        <p className="font-opensans text-xl leading-[31px]">
                            <b>{stak.title}</b> <br />{stak.desc}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
