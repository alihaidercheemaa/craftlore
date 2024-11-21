import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { CarbonEstimationHome } from '~/components/craft-repository/carbon-footprint/home';


export default function CarbonPrintPage() {

    return (
        <>
            <Tabs defaultValue="registry" className="w-full ">
                <TabsList className="mx-6 lg:container grid grid-cols-4 gap-4 bg-transparent h-auto">
                    <TabsTrigger
                        value="registry"
                        className="col-span-4 lg:col-span-1 flex flex-col items-center text-center gap-2 text-gray-900 bg-white p-6 h-[150px] rounded-md border-none shadow-md 
                    hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                        <h3 className="text-xl font-bold font-montserrat whitespace-pre-line">
                            CARBON FOOTPRINT
                            CRAFT REGISTRY
                        </h3>
                    </TabsTrigger>
                    <TabsTrigger
                        value="artisans"
                        className="col-span-4 lg:col-span-1 flex flex-col items-center text-center gap-2 text-gray-900 bg-white p-6 h-[150px] rounded-md shadow-md 
                    hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Ranking,
                            Listing,
                            Blacklisted
                        </p>
                        <h3 className="text-xl font-bold font-montserrat">ARTISANS</h3>
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Fairness &
                            Recognition
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="businesses"
                        className="col-span-4 lg:col-span-1 flex flex-col items-center text-center gap-2 text-gray-900 bg-white p-6 h-[150px] rounded-md shadow-md 
                    hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Ranking,
                            Listing,
                            Blacklisted
                        </p>
                        <h3 className="text-xl font-bold font-montserrat">BUSINESSES</h3>
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Standards &
                            Trust
                        </p>
                    </TabsTrigger>
                    <TabsTrigger
                        value="institutions"
                        className="col-span-4 lg:col-span-1 flex flex-col items-center text-center gap-2 text-gray-900 bg-white p-6 h-[150px] rounded-md shadow-md 
                    hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Ranking,
                            Listing,
                            Blacklisted
                        </p>
                        <h3 className="text-xl font-bold font-monstreat">INSTITUTIONS</h3>
                        <p className="text-sm whitespace-pre-line font-opensans">
                            Transparency &
                            Governance
                        </p>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="registry" className="mt-6 mx-6 lg:container  grid gap-32">
                    <div className='lg:container'>
                        <CarbonEstimationHome />
                    </div>
                </TabsContent>
                <TabsContent value="artisans" className="mt-6">
                    <div className="bg-white p-6 ">

                    </div>
                </TabsContent>
                <TabsContent value="businesses" className="mt-6">
                    <div className="bg-white p-6 ">

                    </div>
                </TabsContent>
                <TabsContent value="institutions" className="mt-6">
                    <div className="bg-white p-6 ">

                    </div>
                </TabsContent>
            </Tabs>
        </>

    );
}
