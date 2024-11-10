import { GenderComponentList } from "~/components/general/gender/compoment-list";
import { GenderStakHolder } from "~/components/general/gender/stakholder";
import { GenderVisionList } from "~/components/general/gender/vision-list";

export default function EmploymentPage() {

    return (
        <>
            <div className="col-span-12 bg-[#e5edf7] h-60" />
            <section className="col-span-12 bg-[#e5edf7] gap-4">
                <div className="mx-3 lg:container">
                    <div className="lg:container grid gap-12 mb-32">
                        <h1 className="font-montserrat text-[40px]  text-primary">Kashmir Handicraft Gender Economic Study Center</h1>
                        <p className="font-opensans text-xl leading-[31px]">The Kashmir Handicraft Gender Economic Study Center is dedicated to addressing and analyzing gender-based economic dynamics within the Kashmiri handicraft sector. This pioneering initiative seeks to promote gender equality by focusing on the specific challenges women artisans face, as well as their contributions to the craft industry. By providing real-time data and comprehensive insights, the center empowers women artisans, businesses, and policymakers to make informed decisions that enhance gender inclusivity and economic opportunities in the sector.</p>
                        <h2 className="text-[40px] text-secondary font-montserrat">Purpose and Vision</h2>
                        <p className="font-opensans text-xl leading-[31px]">The mission of the Kashmir Handicraft Gender Economic Study Center is to promote gender equality and economic empowerment in the handicraft sector. Its core aims include:</p>
                        <GenderVisionList />
                        <h2 className="text-5xl text-secondary font-montserrat">Key Components</h2>
                        <GenderComponentList />
                        <h2 className="text-5xl text-secondary font-montserrat">Impact on Stakeholders</h2>
                        <GenderStakHolder />
                        <div className="bg-white rounded-lg shadow-md px-8 grid gap-4 py-12">
                            <h2 className="text-5xl text-secondary font-montserrat">Future Vision</h2>
                            <p className="font-opensans text-xl"> The <b>CraftLore Kashmir Handicrafts Economics Monitoring Center</b> aims to be a global leader in promoting gender equality within the handicraft industry. As it grows, the center will expand its analysis to include the role of women artisans in leadership positions and their impact on global trade. By providing valuable insights into gender dynamics, the center aspires to create a more inclusive and equitable economic landscape where women artisans receive the recognition and opportunities they deserve.</p>
                            <p className="font-opensans text-xl">
                            Through its work, the center will help transform the Kashmiri handicraft sector into a gender-balanced, sustainable industry where all artisans can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
