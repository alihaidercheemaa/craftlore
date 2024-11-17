


import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select"


export const ArtisanInfo = () => {

    return (
        <div className="mx-6 lg:container grid gap-32 mt-32">
            <div className="lg:container flex flex-col lg:flex-row justify-between gap-5">
                <p className="text-4xl font-montserrat">May I Help you ?</p>
                <form action="" className="flex flex-col lg:flex-row gap-6">
                    <Select >
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Find a listing" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Listing</SelectLabel>
                                <SelectItem value="apple">Find a listing</SelectItem>
                                <SelectItem value="banana">View Rankings</SelectItem>
                                <SelectItem value="blueberry">Check Blacklisted</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select >
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Business" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Business</SelectLabel>
                                <SelectItem value="apple">Artisan</SelectItem>
                                <SelectItem value="banana">Business</SelectItem>
                                <SelectItem value="blueberry">Institution</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button variant={'secondary'} type="button">Submit</Button>
                </form>
            </div>
            
        </div>
    )
}