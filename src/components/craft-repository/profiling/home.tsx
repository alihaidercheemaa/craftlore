import { Info, Book, Camera, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { CraftAccordin } from "~/components/craft-repository/profiling/carft-accordin";

export const ProfileHome = async () => {
  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Welcome to CraftLore’s Kashmir Craft Profiling Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 aspect-video rounded-lg bg-gray-200"></div>
            <h3 className="mb-2 text-xl font-bold">Master Craftsmen Series</h3>
            <p className="text-gray-600">
              Exploring the legendary artisans keeping traditional crafts alive
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
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
              <CardTitle className="text-lg">Interactive Map</CardTitle>
            </CardHeader>
            <CardContent>
              <CraftAccordin />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Categories Navigation */}

        {/* Featured Section */}

        {/* Tools Section */}
        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <Info size={24} className="mb-4 text-blue-900" />
              <h3 className="mb-2 text-lg font-bold">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive guides on craft techniques and history
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Book size={24} className="mb-4 text-blue-900" />
              <h3 className="mb-2 text-lg font-bold">Learning Resources</h3>
              <p className="text-gray-600">
                Educational materials for practitioners and enthusiasts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Camera size={24} className="mb-4 text-blue-900" />
              <h3 className="mb-2 text-lg font-bold">Visual Archive</h3>
              <p className="text-gray-600">
                High-resolution imagery and 3D scans of artifacts
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Collection Grid */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Browse Collection</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item}>
                <div className="aspect-square rounded-t-lg bg-gray-200"></div>
                <CardContent className="p-4">
                  <h3 className="mb-1 font-bold">Craft Item {item}</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    Traditional technique
                  </p>
                  <button className="flex items-center gap-1 text-blue-900">
                    <Heart size={16} />
                    Save
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
