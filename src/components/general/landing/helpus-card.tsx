import Image from "next/image"
import { HELPUS } from "~/constants"





export const HelpUs = () => {

    return (
        <section className="col-span-12 mx-6  lg:container py-20">
            <div className="lg:container">
                <h4 className="font-montserrat text-[40px] leading-[48px] text-secondary" >Help Us in Our Fight</h4>
                <h5 className="font-montserrat text-xl my-3" >CraftLore&apos;s fight to protect Kashmir&apos;s craft identity and artisans&apos; livelihoods against the global dilution of our heritage, fueled by the legacy of the 19th century Anglicization of Kashmir name also known as &quot;Cashmere Conspiracy&quot; !</h5>
                <h5 className="font-montserrat text-[30px] leading-[40px]" >Europeans Rebranded Kashmir’s Heritage and China&apos;s Profits Today</h5>
                <div className="flex flex-col space-y-10 my-8">
                    <p className="text-xl font-opensans">The anglicization of Kashmir into&quot;Cashmere&quot; in the 19th century marked the beginning of a strategic and ongoing exploitation of Kashmir&apos;s rich cultural heritage. British colonial powers, recognizing the global allure of Kashmir&apos;s craft and craftmanship , deliberately rebranded it as&quot;Cashmere&quot;, stripping away its cultural significance to make it more marketable in Europe and beyond. This was not merely a linguistic change, but a calculated move in an economic war to control and profit from Kashmir&apos;s ancient craftsmanship. By detaching the product from its origins, Britain paved the way for mass production and industrialization in Europe, diluting the exclusivity and authenticity of Kashmiri Craft. What followed was a flood of machine-made imitations that undermined the value of the original craft, effectively launching a long-term battle for market dominance that continues today.</p>
                    <p className="text-xl font-opensans">In the modern era, this war has found a new player <b>China</b>. Now the world’s largest producer of &quot;Cashmere&quot;, China capitalizes on the confusion created by the original anglicization, mass-producing synthetic and cheaper product that is marketed under the same label. As a result, Kashmiri artisans are once again marginalized, battling against a global market saturated with inferior products under the &quot;Cashmere&quot; name. This ongoing struggle, rooted in colonial exploitation, has become a war over identity, authenticity, and survival. While foreign powers profit from the legacy of Kashmiri Crafts, the true artisans continue to fight to reclaim their heritage and secure their rightful place in the global market.
                    </p>
                </div>
                <div className="space-y-8">
                    <h5 className="font-montserrat text-[30px] leading-[40px] text-secondary" >Despite Conspiracy, Kashmir Still Uphold the Legacy</h5>
                    <p className="text-xl font-opensans" >In a world driven by mass production,<b> Kashmir</b> has stood firm, refusing to let machines diminish the soul of its sacred crafts.<b> Kashmir and its capital Srinagar</b>, the heart of Kashmir’s handicraft heritage</p>
                    <ul className="font-opensans text-xl list-disc px-6">
                        <li className="mb-4">Stands proudly among <b>50 cities worldwide</b> in the <b>UNESCO Creative Cities Network</b> under the <b>Crafts and Folk Art</b> category — a testament of artisanal excellence recognized on the global stage.</li>
                        <li className="mb-4">Honored among <b>63 cities</b> worldwide recognized as <b>World Craft Cities</b> by the <b>World Craft Council (WCC)</b>, cements Kashmir’s place as a global epicenter of artisanal excellence.</li>
                        <li className="mb-4">Proud <b>Legacy of the Silk Route</b>, the enduring & greatest civilization of crossroads of craft commerce (1st Century BCE - 15th Century CE).</li>
                        <li className="mb-4">The <b>World’s First Martyrs of Craft Labor</b>, pioneers of sacrifice in the “Global Struggle for Artisanal Rights”.</li>
                        <li className="mb-4">Home to the <b>largest concentration of master artisans</b> in the world, a <b>Timeless Sanctuary for Artisans</b>, made Kashmir their lifelong home, contributing to the region’s craft heritage.</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-5 gap-6 my-20">
                        {
                            HELPUS.map((image, index) => (
                                <Image className="col-span-2 lg:col-span-1 border-2 border-secondary rounded-md hover:shadow-lg" src={image.image} alt="image" key={index} width={166} height={200} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}