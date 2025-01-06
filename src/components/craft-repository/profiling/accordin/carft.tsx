import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { api } from "~/trpc/server";
import { AccordinData } from "~/components/craft-repository/profiling/accordin/content";

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
          <AccordionTrigger className="group px-4 font-opensans hover:no-underline">
            {category.categoryName}
          </AccordionTrigger>
          <AccordionContent className="grid gap-2 pl-7">
            {category.SubCategory.map((subcategory) => (
              <AccordinData
                key={subcategory.subcategoryId}
                subId={subcategory.subcategoryId}
                name={subcategory.subcategoryName}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
