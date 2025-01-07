import { Book, Microscope, History } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { SectionTracking } from "~/components/craft-repository/profiling/details/section-tracker";

export const DetailAside = () => {
  return (
    <aside className="col-span-3 space-y-4 md:col-span-1">
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

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Kashmir Craft  </CardTitle>
        </CardHeader>
        <CardContent>
          <SectionTracking />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Book size={24} className="mb-4 text-blue-900" />
          <h3 className="mb-2 text-lg font-bold">Knowledge Transfer</h3>
          <p className="text-gray-600">
            Facilitating traditional knowledge transmission across generations
            through structured documentation and training programs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <History size={24} className="mb-4 text-blue-900" />
          <h3 className="mb-2 text-lg font-bold">Heritage Documentation</h3>
          <p className="text-gray-600">
            Scientific recording and preservation of traditional craft
            techniques, methodologies, and cultural significance.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Microscope size={24} className="mb-4 text-blue-900" />
          <h3 className="mb-2 text-lg font-bold">Technical Analysis</h3>
          <p className="text-gray-600">
            In-depth scientific study of traditional materials, processes, and
            techniques for authentic preservation.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};
