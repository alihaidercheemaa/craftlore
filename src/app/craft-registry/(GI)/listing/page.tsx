import { type Metadata } from "next";
import { GIListing } from "~/components/craft-repository/gi/listing";

export const metadata: Metadata = {
  title: 'CRAFTLORE | GI Listing',
};


export default function GIListingPage() {
  return (
    <div className="col-span-12 grid gap-4 bg-[#e5edf7]">
      <div className="mx-6 my-10 grid gap-10 lg:container">
        <div className="grid gap-10 lg:container">
          <GIListing />
        </div>
      </div>
    </div>
  );
}
