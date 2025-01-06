import Link from "next/link"
import { NETWORK } from "~/constants/data"

export const SupportNetwork = () => {

    return (
        <section className="col-span-12 bg-primary pb-20">
            <div className="mx-6  lg:container">
                <div className="lg:container">
                    <div className="bg-white lg:container border-t-4 border-secondary rounded-b-lg py-12 lg:py-24 px-10 lg:px-20 space-y-4">
                        <p className="font-montserrat text-xl" >Who Support our Initiative</p>
                        <h6 className="font-montserrat text-[40px] leading-[48px] text-secondary" >CraftLore Formidable Support Network</h6>
                        <div className="space-y-6 text-xl font-opensans">
                            <p >In the rapidly evolving landscape of the global craft industry, the success of CraftLore’s mission is driven by the unwavering strength and collaboration of a dedicated support network. At the heart of our initiative lies an influential coalition of partners who share our commitment to preserving the authenticity of Kashmiri crafts and revolutionizing Artisan Direct Market Access. Together, we are eliminating the long-standing barriers posed by middlemen and counterfeit trade, creating a transparent and fair marketplace for artisans.</p>
                            <p >Our formidable support network is further reinforced by essential contributions from business, administrative, technological, and marketing partners, ensuring that CraftLore continues to grow and thrive on the global stage.</p>
                            <p >As a key pillar of financial and business support,<b>B2B Connect USA</b> provides the essential funding and business-to-business connections that fuel CraftLore’s expansion. By forging strategic collaborations between Kashmiri artisans and international markets, they ensure that the craft sector reaches its full potential in the global economy. Their contributions allow us to scale operations, increase artisan visibility, and enhance market access worldwide.</p>
                            <p ><b>The Hamdan Craft Revival Foundation</b> is the operational backbone of our initiative. With a focus on administrative excellence, policy advocacy, and organizational leadership, the Foundation plays a pivotal role in the seamless functioning of CraftLore. Their efforts ensure that our mission is not only preserved but advanced through strategic partnerships, thoughtful leadership, and a vision of empowering artisans through cultural preservation and fair trade policies. Their advocacy for Kashmiri crafts sets the stage for CraftLore’s enduring impact in both local and international arenas.</p>
                            <p >At the intersection of technology and craft preservation, <b>Prime Logic Solutions USA</b> empowers CraftLore with state-of-the-art digital tools and technological innovations. From blockchain technology to geo-certification protocols, Prime Logic equips us with cutting-edge solutions that guarantee the authenticity and traceability of Kashmiri crafts. Their technological expertise ensures that every craft on our platform is not only verified but protected against counterfeit threats, creating a secure and transparent marketplace for artisans and buyers alike.</p>
                            <p >A visionary partner in anticraft marketing and cultural tourism, <b>ArtStay</b> connects craft enthusiasts and art lovers from around the world, positioning Kashmiri artisans at the center of authentic and sustainable travel experiences. By integrating the rich history of Kashmiri craftsmanship with global tourism, ArtStay promotes cultural exchange and elevates artisans on a global stage. Their marketing efforts help bring the stories, traditions, and artistry of Kashmiri crafts to a broader audience, creating meaningful connections between artisans and those who appreciate the true value of handcrafted art.</p>
                        </div>
                    </div>
                    <div className="lg:container flex justify-center relative -mt-10">
                        <div className="grid grid-cols-4 gap-6">
                            {
                                NETWORK.map((network, index) => {
                                    return (
                                        <div className="group col-span-4 lg:col-span-1 flex flex-col justify-between border-2 border-gray-900 hover:border-white rounded-lg bg-white hover:bg-primary p-5 h-40" key={index}>
                                            <div>
                                                <h6 className="group-hover:text-white text-lg font-montserrat w-8">{network.title}</h6>
                                                <p className="group-hover:text-white text-sm break-words">({network.description})</p>
                                            </div>
                                            <Link className="group-hover:text-secondary text-sm" href={network.redirect}>{network.link}</Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}