import Image from "next/image";
import { TypedComponent } from "~/components/animations/typo";
import { TYPETEXT } from "~/constants/data";

export const WelcomeCard = () => {
    return (
        <section className="col-span-12 mx-6 my-32 grid grid-cols-2 gap-4 lg:container ">
            <div className="col-span-2 flex flex-col items-center lg:container lg:col-span-1">
                <Image
                    src={"/images/pic2.png"}
                    alt="guru image"
                    width={300}
                    height={384}
                    className="duration-2000 transform animate-ghoomo transition-all"
                />
                <h2 className="text-center font-montserrat text-7xl font-extrabold text-primary">
                    Craft Guru
                </h2>
                <TypedComponent
                    text={TYPETEXT}
                    className="mb-[17px] text-center font-montserrat text-sm font-extrabold text-secondary"
                />
                <p className="text-justify font-opensans text-sm lg:text-xl">
                    We are the driving force behind CraftLore, bringing together the
                    expertise of a diverse group of professionals—
                    <strong>
                        Ethnographers, Material Scientists, Craft Educators, Cultural
                        Theorists, Art Historians, Designers, Sociologists,
                        Environmentalists, and Technologists
                    </strong>
                    . United in our mission, we are committed to preserving and advancing
                    the timeless heritage of Kashmiri crafts for future generations.
                    <br />
                    <br />
                    At<b> Craft Guru</b>, we operate on a non-commercial basis under the
                    mandate of the <b>Hamadan Craft Revival Foundation</b>, a dedicated
                    craft policy think tank for Kashmir. We do not sell, endorse, or
                    promote any business, nor do we influence your decisions. Instead, we
                    empower you with knowledge and tools to make informed, independent
                    choices, free from external pressure or bias.
                    <br />
                    <br />
                    <b>Empower Your Choices</b>, at no cost, with<b> Craft Guru</b>. We
                    connect you with the finest Kashmiri artisans, ensuring each craft is
                    verified, sustainable, and transparent. Whether you&apos;re seeking
                    <strong> Authenticity Guidance</strong>, access to the<b> Craft Registry</b>, or{" "}
                    <strong>Value Estimation</strong>, we ensure your decisions are intentional and
                    well-informed.
                    <br />
                    <br />
                </p>
            </div>
            <div className="group col-span-2 rounded-lg bg-primary text-white shadow-lg px-2 lg:container  lg:col-span-1">
                <h2 className="pt-8 text-center font-montserrat text-xl font-extrabold text-secondary  lg:text-4xl">
                    Welcome to CraftLore
                </h2>
                <h6 className="pb-[17px] text-center font-montserrat text-sm font-extrabold  lg:text-base">
                    Eliminating Middleman, Empowering Artisans/ Buyers
                </h6>
                <br />
                <p className="font-opnsans text-justify text-base group-hover:text-white lg:text-2xl">
                    CraftLore is a cutting-edge, <b>Non-Commercial</b> digital platform
                    engineered for the in-depth analysis of Kashmir&apos;s<b> 700+</b>{" "}
                    year craft heritage. By seamlessly blending historical, artistic, and
                    scientific frameworks, CraftLore sets the benchmark for authenticity
                    and transparency.
                    <br />
                    <br />
                </p>
                <ul className="list-inside list-disc space-y-4 text-base group-hover:text-white lg:text-2xl pb-6 [&_li]:px-4">
                    <li className="text-justify">
                        CraftLore uses advanced <b>Geo-Certification protocols</b> to ensure
                        precise geospatial verification of craft origins, delivering
                        unmatched accuracy in counterfeit prevention.
                    </li>
                    <li className="text-justify">
                        Our <b>Craft Profile Registry</b> stands as a dynamic digital
                        powerhouse, delivering in-depth insights into the origins,
                        techniques, & materials of authentic Kashmiri crafts, empowering
                        instant recognition of imitations and safeguarding heritage with
                        precision.
                    </li>
                    <li className="text-justify">
                        We track the <b>Carbon Footprint</b> of each craft, enabling
                        artisans to embrace sustainable practices and empowering consumers
                        to choose eco-friendly products, collectively reducing impact.
                    </li>
                    <li className="text-justify">
                        CraftLore offers an <b>Immutable Blockchain Record</b> of every
                        craft’s journey, guaranteeing authenticity, preventing counterfeits,
                        and ensuring sustainability, empowering consumers with confidence.
                    </li>
                    <li className="text-justify">
                        Our <b>Valuation Tool-Calculator</b> delivers fair,{" "}
                        <b>Dynamic Data-Driven Pricing</b> for authentic Kashmiri crafts,
                        providing accurate pricing for buyers and fair compensation for
                        artisans.
                    </li>
                </ul>
            </div>
        </section>
    );
};
