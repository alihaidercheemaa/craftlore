import { type Metadata } from "next";
import { CraftDetail } from "~/components/craft-repository/profiling/details/craft";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost profiling",
};


export default function ProfileDetailHomePage() {

  return (
    <CraftDetail/>
  );
}
