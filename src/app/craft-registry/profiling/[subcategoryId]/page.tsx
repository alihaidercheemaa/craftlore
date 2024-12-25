import { CostEstimationHome } from "~/components/craft-repository/cost-estimations/home";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost profiling",
};


type PageProps = {
    params : Promise<{subcategoryId:string}>
}

export default function CostestimatorPage({params}:PageProps) {
  return (
    <section className="col-span-12 mx-6 lg:container">
      <CostEstimationHome />
    </section>
  );
}
