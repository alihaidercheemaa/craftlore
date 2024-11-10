import { FaUserPlus } from "react-icons/fa6"
import { Button } from "~/components/ui/button"
import { CounterInfo } from "~/components/general/counter-info"


export const FounderCard = () => {
    return (
        <section className="col-span-12 mx-6 lg:container gap-4 mt-6 lg:mt-12">
            <div className="lg:container">
                <div className="lg:container grid grid-cols-2">
                    <div className="col-span-2 grid grid-cols-2 gap-7 mt-20 mb-20 lg:mb-40  p-4">
                        <div className="col-span-2 lg:col-span-1">
                            <div className="bg-primary border-2 border-secondary rounded-md p-8 lg:p-[60px] font-montserrat text-white space-y-8">
                                <h6 className="text-xl lg:text-[2.5rem] leading-[2.7rem]">
                                    Join Craftlore, in exploring the vast repository and experience the artistry of Kashmir like never before!
                                </h6>
                                <div className="flex justify-end">
                                    <div className="grid gap-1">
                                        <p className="text-right text-secondary text-xl">Jasif Khan</p>
                                        <p className="text-right text-xl">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <p className="font-montserrat text-lg">Unlocking 700+ Years of Kashmiri Craft Heritage:</p>
                            <h6 className="font-montserrat text-secondary text-3xl">Fully Digitized for a New Era, Backed by Science!</h6>
                            <div className="space-y-6 my-4 text-lg font-monorope">
                                <p>
                                    In a revolutionary step toward preserving cultural heritage, we have leveraged advanced technology to safeguard the rich legacy of Kashmiri crafts. CraftLore has transformed into the <b>World’s Largest, Most Interactive Platform for Kashmir Crafts</b>, offering an extensive craft registry with access to over <b>One Million Data Elements Representing 28 Major Crafts</b>. This comprehensive digital repository makes centuries of craftsmanship accessible to the world, engaging and educating a global audience.
                                </p>
                                <p>
                                    Our initiative is a bold stand against the flood of counterfeit Kashmiri crafts infiltrating the global market, particularly from <b>China and Amritsar</b> (India). These imitations tarnish the authentic Kashmiri name, and we are committed to defending the integrity of our artisans and their time-honored traditions. Through CraftLore, we ensure every craft is verified, authentic, and a true reflection of the cultural mastery it represents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <CounterInfo className="col-span-2" />
                    <div className="col-span-2 flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center bg-primary text-white text-center py-12 font-opensans rounded-t-xl border-b-8 border-secondary mt-36">
                        <FaUserPlus className="text-3xl lg:text-5xl font-bold " />
                        <p className="text-xl">Stay Connected to Craftlore-Kashmir Craft Repository</p>
                        <Button variant={'secondary'}>
                            SUBSCRIBE TODAY
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}