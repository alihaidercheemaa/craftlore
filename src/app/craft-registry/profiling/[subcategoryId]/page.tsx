import { type Metadata } from "next";
import { CraftDetail } from "~/components/craft-repository/profiling/details/detail";
import {  CraftIntro } from "~/components/craft-repository/profiling/details/intro";

export const metadata: Metadata = {
  title: "CRAFTLORE | Craft Profiling",
};

type PageProps = {
  params: Promise<{ subcategoryId: string }>;
  searchParams?: Promise<{
    sectionId: string;
  }>;
};

export default async function ProfileDetailHomePage({
  params,
  searchParams,
}: PageProps) {
  const searchProps = await searchParams;
  const paramProps = await params;

  return searchProps?.sectionId ? <CraftDetail sectionId={searchProps.sectionId} subcategoryId={paramProps.subcategoryId}/> : <CraftIntro />;
}
