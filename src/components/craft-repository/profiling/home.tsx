import { Book, History, Microscope } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { CraftAccordin } from "~/components/craft-repository/profiling/accordin/carft";

export const ProfileHome = () => {
  return (
    <div className="mb-12 grid grid-cols-3 gap-8">
      <Card className="col-span-3 md:col-span-2">
        <CardHeader>
          <CardTitle>
            Welcome to CraftLore’s Kashmir Craft Profiling Repository
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 aspect-video rounded-lg bg-gray-200"></div>
          <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_p]:font-opensans [&_p]:text-xl">
            <h2 className="font-montserrat text-2xl text-primary">
              World’s Largest, Most Interactive Platform for Kashmir Crafts,
              offering an extensive craft registry with access to over
              <span className="text-secondary"> One Million Data</span> Elements
              Representing
              <span className="text-secondary"> 28 Major Crafts.</span>
            </h2>
            <p>
              Explore the richness of Kashmiri handicrafts through our Craft
              Profiling Repository. Designed as a comprehensive digital archive,
              it brings together artisanal wisdom, cultural narratives, and
              intricate craft details in one accessible platform. This resource
              empowers artisans, researchers, buyers, and cultural enthusiasts
              with structured, verified, and evolving craft knowledge—fostering
              authenticity, integrity, and innovation.
            </p>
            <h3 className="text-gray-950">
              CraftLore Craft Profiling Repository
            </h3>
            <p>
              In a rapidly changing world, documenting Kashmir’s handicrafts is
              essential for cultural preservation and informed decision-making.
              Our repository leverages open-source technologies, scalable server
              infrastructure, and recognized metadata standards to catalog the
              nuances of each craft. Through version control and multilingual
              interfaces, this platform continuously evolves to capture emerging
              techniques, updated patterns, and newly discovered historical
              facts. Integration with other cultural databases, interoperability
              via APIs, and blockchain verification ensures that the information
              is trustworthy, traceable, and easily shareable. This holistic
              ecosystem not only informs product development, marketing, and
              policy formation, but also supports artisans by giving global
              audiences a deeper understanding of their skill and heritage.
            </p>
            <div>
              <h3 className="text-secondary">
                Unlocking 700+ Years of Kashmiri Craft Heritage
              </h3>
              <p>Fully Digitized for a New Era, Backed by Science! Our platform blends traditional craftsmanship with cutting-edge technology, offering a comprehensive, science-backed journey through history. Explore authentic artisanal stories, intricate designs, and cultural masterpieces like never before, ensuring preservation and global access for future generations.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-3 space-y-4 md:col-span-1">
        <Card className="hidden md:block">
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
            <CardTitle className="text-lg">Crafts </CardTitle>
          </CardHeader>
          <CardContent>
            <CraftAccordin />
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
      </div>

      {/* <div clas>
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
        </div> */}
    </div>
  );
};
