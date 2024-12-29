"use client";

import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { useOpen } from "~/hooks/use-profile";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

type ComponentProps = {
  subcategoryId: string;
  className?: string;
};

export const SectionTracking = ({
  subcategoryId,
  className,
}: ComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSectionId = searchParams.get("sectionId");

  const { open, setOpen } = useOpen();
  const [sections] = api.craft.getAllSections.useSuspenseQuery({
    subcategoryId,
  });

  useEffect(() => {
    if (sections.length > 0) {
      if (open.length === 0) {
        setOpen([sections[0]?.craftsectionId ?? ""]);
      }
      router.replace(
        `${pathname}?sectionId=${sections[0]?.craftsectionId ?? ""}`,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <div
      className={cn(
        "sticky top-6 h-fit ", 
        className,
      )}
    >
      <div className="bg-primary rounded-lg shadow-lg p-6">
        <ScrollArea className="h-[calc(100dvh-20rem)]">
          <div className="flex flex-col gap-4">
            {sections.map((data) => {
              const isOpen = open.includes(data.craftsectionId);
              const isSelected = data.craftsectionId === currentSectionId;
              const baseBtnClasses = cn(
                "flex justify-start gap-2 text-lg font-montserrat transition-colors",
                isOpen &&
                  "hover:bg-white/10 focus:bg-white/10 rounded-md px-2 py-1",
              );
              const selectedClasses = isSelected
                ? "bg-white/20 text-white rounded-md"
                : "text-white";
              if (!isOpen) {
                return (
                  <Button
                    key={data.craftsectionId}
                    type="button"
                    variant="link"
                    className={cn(
                      baseBtnClasses,
                      "cursor-not-allowed opacity-50 [&_svg]:size-6 text-white",
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
                  className={cn(
                    baseBtnClasses,
                    selectedClasses,
                    "[&_svg]:size-6",
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
    </div>
  );
};
