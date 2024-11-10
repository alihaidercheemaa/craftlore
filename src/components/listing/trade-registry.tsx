import { TraderRegistryInfo } from "~/components/listing/trade-registry/intro"
import { ListingBenefits } from "~/components/listing/trade-registry/listing-benifts"
import { RegisterInfo } from "~/components/listing/trade-registry/register-info"
import { RegistrationProcess } from "~/components/listing/trade-registry/registration-process"
import { AnalysisInfo } from "~/components/listing/trade-registry/analysis-info"



export const TradeRegistry = () => {

    return (
        <div className="grid gap-32">
            <TraderRegistryInfo />
            <ListingBenefits />
            <RegisterInfo />
            <RegistrationProcess />
            <AnalysisInfo />
        </div>
    )
}