"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { useOpen } from "~/hooks/use-profile";

export const SectionProgress = () => {
  const searchParams = useSearchParams();
  const currentSectionId = searchParams.get("sectionId");
  const { progress } = useOpen();
  const progressPercentage =
    progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  return !currentSectionId ? (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Active Artisans</span>
            <span className="font-bold">2,450+</span>
          </div>
          <div className="flex justify-between">
            <span>Documented Techniques</span>
            <span className="font-bold">180+</span>
          </div>
          <div className="flex justify-between">
            <span>Heritage Items</span>
            <span className="font-bold">5,000+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl text-primary">
          Shop Smarter at Craft Trade Registry
        </CardTitle>
        <CardDescription className="space-y-6">
          <span className="text-xl text-secondary">
            Not Harder – Let Knowledge Be Your Currency
          </span>

          <span className="mt-6 flex items-center justify-between">
            <span className="text-lg font-medium">Learning Progress</span>
            <span className="text-sm text-muted-foreground">
              {progress.completed}/{progress.total} Sections Complete
            </span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={progressPercentage} className="h-2" />
      </CardContent>
    </Card>
  );
};
