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
    <Accordion type="single" collapsible>
      {data.map((category) => (
        <AccordionItem value={category.categoryId} key={category.categoryId}>
          <AccordionTrigger className="font-montserrat text-white">
            {category.categoryName}
          </AccordionTrigger>
          <AccordionContent className="grid place-content-start place-items-start gap-2">
            <p className="p-4 text-justify font-opensans text-white">
            Kashmir’s iconic weaving crafts—Pashmina, Kani, Carpet, and Silk weaving—reflect unparalleled artistry and cultural heritage. Through CraftLore’s Kashmir Craft Profiling Repository Registry, these crafts are preserved and empowered using blockchain authentication and sustainable practices. From luxurious Pashmina shawls and intricate Kani designs to Persian-inspired carpets and shimmering silk textiles, these crafts symbolize tradition and innovation. The registry bridges heritage and modernity, ensuring these treasures thrive globally while safeguarding their authenticity for future generations.
            </p>
            {category.SubCategory.map((subcategory) => (
              <Button
                className="font-montserrat text-lg font-bold text-white"
                variant="link"
                key={subcategory.subcategoryId}
                asChild
              >
                <Link
                  href={`/craft-registry/profiling/${subcategory.subcategoryId}`}
                >
                  <Circle className="text-white" />
                  <span className="text-secondary">
                    {subcategory.subcategoryName}
                  </span>
                </Link>
              </Button>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
