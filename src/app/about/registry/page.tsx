
import { AboutBackGround } from "~/components/general/about/background";
import { RegisterSection } from "~/components/general/about/registeries/register-section";

export default async function AboutResgistryPage() {

    return (
        <>
            <AboutBackGround />
            <RegisterSection/>
            <AboutBackGround/>
        </>
    );
}
