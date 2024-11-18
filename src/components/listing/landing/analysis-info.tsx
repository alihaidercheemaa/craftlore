import { FaUserPlus } from "react-icons/fa6"
import { Button } from "~/components/ui/button"



export const AnalysisInfo = () => {

    return (
        <div className="bg-[#e5edf7]">
            <div className="mx-6 lg:container grid gap-32 pt-32">
                <div className="lg:container grid gap-4">
                    <h6 className="font-opensans font-bold text-2xl text-secondary">Defend Authenticity, Empower Artisans: Join the Movement to Transform Kashmir’s Craft Future</h6>
                    <h6 className="font-montserrat text-4xl text-primary">Join our network for a better future of our Artisans & Craft Industry</h6>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:container grid justify-center text-center" >
                            <p className="text-secondary font-montserrat text-2xl">+22000</p>
                            <p className="text-primary font-montserrat text-2xl">Artisans</p>
                        </div>
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:container grid justify-center text-center" >
                            <p className="text-secondary font-montserrat text-2xl">+18</p>
                            <p className="text-primary font-montserrat text-2xl">Craft Associations</p>
                        </div>
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:container grid justify-center text-center" >
                            <p className="text-secondary font-montserrat text-2xl">+5</p>
                            <p className="text-primary font-montserrat text-2xl">Craft Insitutions</p>
                        </div>
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 lg:container grid justify-center text-center" >
                            <p className="text-secondary font-montserrat text-2xl">+114</p>
                            <p className="text-primary font-montserrat text-2xl">Craft Businesses</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center bg-primary text-white text-center py-12 font-opensans rounded-t-xl border-b-8 border-secondary mt-36">
                        <FaUserPlus className="text-3xl lg:text-5xl font-bold " />
                        <p className="text-xl">Stay Connected to Craftlore-Kashmir Craft Repository</p>
                        <Button variant={'secondary'}>
                            SUBSCRIBE TODAY
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}