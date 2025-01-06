
import { AboutBackGround } from "~/components/general/about/background";
import { RegisterSection } from "~/components/general/about/registeries/register-section";
import { Banner } from "~/components/general/landing/banner";
import { REGISTERBANNER } from "~/constants/banner";

export default async function AboutResgistryPage() {

    return (
        <>
            <Banner banner={REGISTERBANNER}/>
            <RegisterSection/>
            <AboutBackGround/>
        </>
    );
}
