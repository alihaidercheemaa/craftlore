import Link from "next/link"
import { Button } from "~/components/ui/button"



export const RegistrationProcess = () => {

    return (
        <div>
            <div className="bg-[#e5edf7] h-80" />
            <div className="mx-6 lg:container">
                <div className="lg:container">
                    <div className="lg:container bg-primary text-white text-center py-12 font-opensans  font-bold rounded-t-xl relative -mt-[192px] border-b-8 border-secondary space-y-6">
                        <h4 className="text-base lg:text-4xl">
                            CraftLore Trade Registry Registration Process
                        </h4>
                        <p className="text-sm lg:text-base">A unified platform fostering trust, growth & sustainability in Kashmiri handicrafts.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-20">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold">CraftLore Trade Registry Registration Process</h1>

                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-orange-500">Step 1: Create an Account</h2>
                                    <p>Start by signing up with basic details to access the portal.</p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-orange-500">Step 2: Fill Registration Form</h2>
                                    <p>Complete the form tailored to artisans, businesses, or institutions.</p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-orange-500">Step 3: Upload Documents</h2>
                                    <p>Provide necessary verification documents to ensure your authenticity.</p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-orange-500">Step 4: Verification Process</h2>
                                    <p>Our team reviews your submission for compliance with ethical standards.</p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-orange-500">Step 5: Approval & Listing</h2>
                                    <p>Once approved, your profile will be publicly listed, providing access to rankings, collaborations, and market visibility.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-orange-500">Join the CraftLore Trade Registry Today!</h1>

                            <p className="text-gray-700">
                                Be part of the largest unified platform dedicated to Kashmiri handicrafts. Whether you&apos;re an artisan, business, or institution, CraftLore Trade Registry offers unparalleled access to global markets, ethical trade partnerships, and verified credibility.
                            </p>

                            <h2 className="text-2xl font-bold">CraftLore Trade Registry is your gateway to a trusted global platform</h2>

                            <p className="text-gray-700">
                                Get Started today by creating your account and becoming part of the CraftLore ecosystem, empowering Kashmiri artisans, businesses, and institutions through transparency, collaboration, and sustainability.
                            </p>
                            <Button type="button" asChild>
                                <Link href={'/listing/registration'}>
                                    START NOW
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}