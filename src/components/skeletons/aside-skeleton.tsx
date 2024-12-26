import { Skeleton } from "~/components/ui/skeleton";

export const AsideSkeleton = () => {
  return (
    <aside className="grid gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-[4rem] w-full rounded-md"/>
      ))}
    </aside>
  );
};
