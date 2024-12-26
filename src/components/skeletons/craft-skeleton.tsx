import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export const SectionDataSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-1/2" />
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2].map((j) => (
              <Skeleton 
                key={j} 
                className="h-24 w-full rounded-lg"
              />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};