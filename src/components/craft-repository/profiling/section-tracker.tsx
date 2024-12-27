'use client'
import { Lock, LockOpen } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

export const SectionTracking = ({ subcategoryId, className }: ComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { open, setOpen } = useOpen();
  const [sections] = api.craft.getAllSections.useSuspenseQuery({
    subcategoryId,
  });

  useEffect(() => {
    if (open.length == 0) {
      router.replace(`${pathname}?sectionId=${sections[0]?.craftsectionId ?? ""}`);
      setOpen([...open, sections[0]?.craftsectionId ?? ""]);
    }else {
      router.replace(`${pathname}?sectionId=${sections[0]?.craftsectionId ?? ""}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <div className={cn("sticky top-6 h-fit", className)}>
      <div className="rounded-lg bg-primary p-6 shadow-lg">
        <ScrollArea className="h-[calc(100dvh-20rem)]">
          <div className="grid place-content-start gap-4">
            {sections.map((data, index) => {
              const isOpen = open.some(
                (existing) => existing == data.craftsectionId
              );
              if (!isOpen) {
                return (
                  <Button
                    type="button"
                    variant="link"
                    className="flex cursor-not-allowed justify-start gap-2 text-white/50 [&_svg]:size-6"
                    key={index}
                    disabled
                  >
                    <Lock />
                    <span className="font-montserrat text-lg">
                      {data.sectionName}
                    </span>
                  </Button>
                );
              }

              return (
                <Button
                  type="button"
                  variant="link"
                  className="flex justify-start gap-2 text-white [&_svg]:size-6"
                  key={index}
                  asChild
                >
                  <Link href={`${pathname}?sectionId=${data.craftsectionId}`}>
                    <LockOpen />
                    <span className="font-montserrat text-lg">
                      {data.sectionName}
                    </span>
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