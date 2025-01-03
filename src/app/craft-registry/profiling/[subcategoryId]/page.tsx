import { type Metadata } from "next";
import { Suspense } from "react";
import { SectionData } from "~/components/craft-repository/profiling/section-data";
import { SectionTracking } from "~/components/craft-repository/profiling/section-tracker";
import { AsideSkeleton } from "~/components/skeletons/aside-skeleton";
import { SectionDataSkeleton } from "~/components/skeletons/craft-skeleton";
import { KashmirCraftsRepository } from "~/components/testing";
import { ScientificCraftsRepository } from "~/components/testing1";

export const metadata: Metadata = {
  title: "CRAFTLORE | Cost profiling",
};

type PageProps = {
  params: Promise<{ subcategoryId: string }>;
  searchParams?: Promise<{
    sectionId: string;
  }>;
};

export default async function CostEstimatorPage({
  params,
  searchParams,
}: PageProps) {
  const searchProps = await searchParams;
  const paramProps = await params;
  return (
    <section className="col-span-12 mx-6 grid grid-cols-3 gap-6 px-24 py-12">
      <div className="col-span-2 space-y-6">
        <Suspense fallback={<SectionDataSkeleton />}>
          <SectionData sectionId={searchProps?.sectionId ?? ""} />
        </Suspense>
      </div>
      <Suspense fallback={<AsideSkeleton />}>
        <SectionTracking
          subcategoryId={paramProps.subcategoryId}
          className="sticky top-[16rem] col-span-1"
        />
      </Suspense>
      <div className="col-span-2">
        <KashmirCraftsRepository />
      </div>
      <div className="col-span-2">
        <ScientificCraftsRepository />
      </div>
    </section>
  );
}
