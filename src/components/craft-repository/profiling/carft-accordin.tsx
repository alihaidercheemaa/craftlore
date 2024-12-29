import { Circle } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";

export const CraftAccordin = async () => {
  const data = await api.craft.getAllCategoriesAndSubCategories();
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {data.map((category) => (
        <AccordionItem
          value={category.categoryId}
          key={category.categoryId}
          className="rounded-lg border border-white/20 bg-white backdrop-blur-sm"
        >
          <AccordionTrigger className="group px-4 hover:no-underline">
            <div className="flex items-center gap-3 font-montserrat text-primary">
              <span className="text-lg">{category.categoryName}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-4 px-4 pb-4">
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-justify font-opensans leading-relaxed text-primary">
                Kashmir&apos;s iconic weaving crafts—Pashmina, Kani, Carpet, and Silk
                weaving—reflect unparalleled artistry and cultural heritage.
                Through CraftLore&apos;s Kashmir Craft Profiling Repository Registry,
                these crafts are preserved and empowered using blockchain
                authentication and sustainable practices. From luxurious
                Pashmina shawls and intricate Kani designs to Persian-inspired
                carpets and shimmering silk textiles, these crafts symbolize
                tradition and innovation. The registry bridges heritage and
                modernity, ensuring these treasures thrive globally while
                safeguarding their authenticity for future generations.
              </p>
            </div>

            <div className="grid gap-2 pl-7">
              {category.SubCategory.map((subcategory) => (
                <Button
                  key={subcategory.subcategoryId}
                  variant="ghost"
                  className="w-fit justify-start gap-3 p-2 hover:bg-white/10"
                  asChild
                >
                  <Link
                    href={`/craft-registry/profiling/${subcategory.subcategoryId}`}
                    className="flex items-center gap-3"
                  >
                    <Circle className="h-2 w-2 text-secondary/70" />
                    <span className="font-montserrat text-base font-medium text-secondary transition-colors hover:text-secondary/80">
                      {subcategory.subcategoryName}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
