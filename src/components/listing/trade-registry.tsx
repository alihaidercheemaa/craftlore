import { TraderRegistryInfo } from "~/components/listing/landing/intro"
import { ListingBenefits } from "~/components/listing/landing/listing-benifts"
import { RegisterInfo } from "~/components/listing/landing/register-info"
import { RegistrationProcess } from "~/components/listing/landing/registration-process"
import { AnalysisInfo } from "~/components/listing/landing/analysis-info"



export const TradeRegistry = () => {

    return (
        <div className="grid lg:gap-32 gap-16">
            <TraderRegistryInfo />
            <ListingBenefits />
            <RegisterInfo />
            <RegistrationProcess />
            <AnalysisInfo />
        </div>
    )
}