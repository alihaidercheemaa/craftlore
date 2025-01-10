"use client";

import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AsideSkeleton } from "~/components/skeletons/aside-skeleton";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useOpen } from "~/hooks/use-profile";
import { useTracker } from "~/hooks/use-tracker";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export const SectionTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const currentSectionId = searchParams.get("sectionId");
  const subcategoryId = params.subcategoryId as string;
  const { sections, setSection, setProgress } = useOpen();
  const {setList} = useTracker()

  const sectionData = api.craft.getAllSections.useQuery(
    { subcategoryId },
    { enabled: !!subcategoryId },
  );

  useEffect(() => {
    if (
      sectionData.data &&
      sectionData.data.length > 0 &&
      sections.length === 0
    ) {
      setSection({
        id: sectionData.data[0]?.craftsectionId ?? "",
        completed: false,
      });
      setList(sectionData.data.map((section)=>section.craftsectionId) ?? [] )
      setProgress({ total: sectionData.data.length ?? 0 });
    }
  }, [sectionData.data, sections, setList, setProgress, setSection]);

  if (sectionData.isPending) return <AsideSkeleton />;

  return (
    <div className="sticky top-[16rem] h-fit">
      <ScrollArea className="h-[calc(100dvh-20rem)]">
        <div className="flex flex-col gap-4">
          {sectionData.data?.map((data) => {
            const isOpen = sections.some(
              (section) => section.id == data.craftsectionId,
            );
            const isSelected = data.craftsectionId === currentSectionId;
            const baseBtnClasses = cn(
              "flex justify-start gap-2 text-xs md:text-lg font-montserrat transition-colors",
              {
                "bg-primary text-white rounded-md md:px-2 md:py-1": isSelected,
              },
            );

            if (!isOpen) {
              return (
                <Button
                  key={data.craftsectionId}
                  type="button"
                  variant="link"
                  className={cn(
                    baseBtnClasses,
                    "cursor-not-allowed opacity-50 [&_svg]:size-4 md:[&_svg]:size-6",
                  )}
                  disabled
                >
                  <Lock className="text-secondary" />
                  <span>{data.sectionName}</span>
                </Button>
              );
            }

            return (
              <Button
                key={data.craftsectionId}
                type="button"
                variant="link"
                className={cn(
                  baseBtnClasses,
                  "[&_svg]:size-4 md:[&_svg]:size-6",
                )}
                asChild
              >
                <Link href={`${pathname}?sectionId=${data.craftsectionId}`}>
                  <LockOpen />
                  <span>{data.sectionName}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
