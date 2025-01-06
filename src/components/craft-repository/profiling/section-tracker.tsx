"use client";

import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useOpen } from "~/hooks/use-profile";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export const SectionTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const currentSectionId = searchParams.get("sectionId");
  const subcategoryId = params.subcategoryId as string;
  const { open, setOpen } = useOpen();

  const { data: sections = [] } = api.craft.getAllSections.useQuery(
    { subcategoryId },
    {
      enabled: !!subcategoryId,
    },
  );

  useEffect(() => {
    if (sections.length > 0 && open.length === 0) {
      setOpen([sections[0]?.craftsectionId ?? ""]);
    }
  }, [sections, open.length, setOpen]);

  return (
    <div className="sticky top-[16rem] h-fit">
      <ScrollArea className="h-[calc(100dvh-20rem)]">
        <div className="flex flex-col gap-4">
          {sections?.map((data) => {
            const isOpen = open.includes(data.craftsectionId);
            const isSelected = data.craftsectionId === currentSectionId;
            const baseBtnClasses = cn(
              "flex justify-start gap-2 text-lg font-montserrat transition-colors",
              {
                "bg-primary text-white rounded-md px-2 py-1": isOpen,
                // "text-white": isOpen && !isSelected,
                // "text-primary ": !isOpen || (isOpen && !isSelected),
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
                    "cursor-not-allowed opacity-50 [&_svg]:size-6",
                  )}
                  disabled
                >
                  <Lock />
                  <span>{data.sectionName}</span>
                </Button>
              );
            }

            return (
              <Button
                key={data.craftsectionId}
                type="button"
                variant="link"
                className={cn(baseBtnClasses, "[&_svg]:size-6")}
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
