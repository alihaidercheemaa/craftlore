import Image from "next/image"



export const WelcomeCards = () => {
    return (
        <section className="col-span-12 container mx-auto grid grid-cols-2 gap-4 mt-16 ">
            <div className="col-span-2 lg:col-span-1 flex flex-col items-center container">

                <Image src={'/images/pic2.png'} alt="guru image" width={300} height={384} className="transition-all duration-2000 transform animate-ghoomo" />
                <h2 className="text-center text-primary text-[40px] font-extrabold font-montserrat">Craft Guru</h2>
                <h6 className="text-center text-gray-900 text-sm font-extrabold font-montserrat mb-[17px]">Future-Proofing the Kashmir Handicraft Sector</h6>
                <p className="font-opensans text-xl text-left">We are the driving force behind CraftLore, bringing together the expertise of a diverse group of professionals—<b>Ethnographers, Material Scientists, Craft Educators, Cultural Theorists, Art Historians, Designers, Sociologists, Environmentalists, and Technologists</b>. United in our mission, we are committed to preserving and advancing the timeless heritage of Kashmiri crafts for future generations.
                    <br /><br />
                    At<b> Craft Guru</b>, we operate on a non-commercial basis under the mandate of the <b>Hamadan Craft Revival Foundation</b>, a dedicated craft policy think tank for Kashmir. We do not sell, endorse, or promote any business, nor do we influence your decisions. Instead, we empower you with knowledge and tools to make informed, independent choices, free from external pressure or bias.
                    <br /><br />
                    <b>Empower Your Choices</b>, at no cost, with<b> Craft Guru</b>. We connect you with the finest Kashmiri artisans, ensuring each craft is verified, sustainable, and transparent. Whether you&apos;re seeking<b> Authenticity Guidance</b>, access to the<b> Craft Registry</b>, or <b>Value Estimation</b>, we ensure your decisions are intentional and well-informed.
                    <br /><br />
                </p>
            </div>
            <div className="col-span-2 lg:col-span-1 bg-primary rounded-lg shadow-lg container">
                <h2 className="text-center pt-8 text-secondary text-[40px] font-extrabold font-montserrat">Welcome to CraftLore</h2>
                <h6 className="text-center text-white pb-[17px] font-montserrat font-extrabold">Eliminating Middleman, Empowering Artisans/Buyers<br /></h6><br />
                <p className="font-opnsans text-2xl text-white">
                    CraftLore is a cutting-edge, <b>Non-Commercial</b> digital platform engineered for the in-depth analysis of Kashmir&apos;s<b> 700+</b> year craft heritage. By seamlessly blending historical, artistic, and scientific frameworks, CraftLore sets the benchmark for authenticity and transparency.
                    <br /><br />
                </p>
                <ul className="text-white list-disc list-inside space-y-4 text-2xl">
                    <li>
                        CraftLore uses advanced <b>Geo-Certification protocols</b> to ensure precise geospatial verification of craft origins, delivering unmatched accuracy in counterfeit prevention.
                    </li>
                    <li>
                        Our <b>Craft Profile Registry</b> stands as a dynamic digital powerhouse, delivering in-depth insights into the origins, techniques, & materials of authentic Kashmiri crafts, empowering instant recognition of imitations and safeguarding heritage with precision.
                    </li>
                    <li>
                        We track the <b>Carbon Footprint</b> of each craft, enabling artisans to embrace sustainable practices and empowering consumers to choose eco-friendly products, collectively reducing impact.
                    </li>
                    <li>
                        CraftLore offers an <b>Immutable Blockchain Record</b> of every craft’s journey, guaranteeing authenticity, preventing counterfeits, and ensuring sustainability, empowering consumers with confidence.
                    </li>
                    <li>
                        Our <b>Valuation Tool-Calculator</b> delivers fair, <b>Dynamic Data-Driven Pricing</b> for authentic Kashmiri crafts, providing accurate pricing for buyers and fair compensation for artisans.
                    </li>
                </ul>



            </div>
        </section>
    )
}


/**
 * 
 * <h2 style="text-align:center;padding-top: 35px;color: #F26522;">Welcome to CraftLore</h2> 
<h6 style="text-align:center;color: white;margin-top: -17px;">Eliminating Middleman, Empowering Artisans/Buyers<br></h6><br>

<ul>
    <li>
        CraftLore uses advanced<b> Geo-Certification protocols</b> to ensure precise geospatial verification of craft origins, delivering unmatched accuracy in counterfeit prevention.

<br><br>
    </li>
    <li>
        Our<b> Craft Profile Registry</b> stands as a dynamic digital powerhouse, delivering in-depth insights into the origins, techniques, & materials of authentic Kashmiri crafts, empowers instant recognition of imitations, safeguarding heritage with precision.

<br><br>
    </li>
    <li>
        We tracks the<b> Carbon Footprint</b> of each craft, enabling artisans to embrace sustainable practices and empowering consumers to choose eco-friendly products, collectively reducing impact.

<br><br>
    </li>
    <li>
        CraftLore offers an <b>Immutable BlockChain Record</b> of every craft’s journey, guaranteeing authenticity, preventing counterfeits, & ensuring sustainability, empowering consumers with confidence.

<br><br>
    </li>
    <li>
        Our<b> Valuation Tool-Calculator</b> delivers fair,<b> Dynamic Data-Driven Pricing</b> for authentic Kashmiri crafts, accurate pricing for buyers and fair compensation for artisans.<br><br>
    </li>
</ul>

 * 
 */