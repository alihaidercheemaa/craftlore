import Image from "next/image"
import Link from "next/link"
import { REGISTER } from "~/constants"


export const RegisterCard = () => {

    return (
        <section className="col-span-12  bg-[#e5edf7] lg:pt-32 pb-72">
            <div className="mx-6  lg:container">
                <div className="lg:container grid grid-cols-3 gap-4">
                    <div className="col-span-3 lg:col-span-2">
                        <div className="border-2 border-secondary my-10" />
                        <h4 className="text-2xl leading-[29px] font-extrabold font-montserrat">Unlock Everything Our Platform Offers-At No Cost to You</h4>
                        <h4 className="text-3xl text-secondary font-bold font-montserrat py-3">A wealth of tools and insights, completely free.</h4>
                        <p className="font-opensans text-xl leading-[31px] py-7">
                            Our platform provides a comprehensive suite of tools designed to offer transparency, ethical evaluation, and deeper insights into the craftsmanship behind every piece. From verifying origins through <b>Geographical Indications (GI)</b> to tracking each product&apos;s journey with blockchain, we ensure every craft you encounter reflects true heritage and integrity. With services ranging from price valuation and carbon footprint assessment to empowering women artisans and protecting vulnerable crafts, CraftLore is your trusted source for everything related to Kashmir&apos;s rich craft tradition.
                        </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1">
                        <Link href={"#"}>
                            <Image src={"/images/register.png"} alt="image" width={360} height={450} />
                        </Link>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-8">
                        {
                            REGISTER.map((register, index) => (
                                <div
                                    className="col-span-3 lg:col-span-1 group flex flex-col gap-2 bg-white transition-all duration-300 hover:shadow-2xl py-2 px-6 hover:bg-primary rounded-lg border cursor-pointer"
                                    key={index}
                                >
                                    <div className="flex flex-col py-4 gap-2">
                                        <Image
                                            className='transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]'
                                            src={register.icon}
                                            alt='service icon'
                                            width={55}
                                            height={55}
                                        />
                                        <p className=" text-gray-900 text-xl font-bold group-hover:text-white font-montserrat">{register.title}</p>
                                        <p className=" text-gray-900 text-sm font-light  group-hover:text-white font-montserrat my-2">{register.description}</p>
                                        <Link href={"#"} className="text-gray-900 text-sm underline underline-offset-4 group-hover:text-secondary">Read more</Link>
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