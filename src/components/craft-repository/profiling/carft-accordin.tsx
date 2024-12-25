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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, in
              explicabo cumque qui nemo, doloremque dolorum, maiores quam dicta
              illum quasi ex iure aperiam tempore tenetur provident? Cumque
              facere quo, laudantium repudiandae tempore rem nisi tenetur beatae
              suscipit aliquam accusamus atque placeat error quos temporibus eum
              minus quasi, laboriosam perspiciatis doloremque asperiores illo.
              Ducimus laboriosam vero alias modi ipsa inventore officiis
              voluptatibus quas at nesciunt, quibusdam omnis earum totam iste
              doloribus accusantium impedit dignissimos enim optio dolor!
              Tempore veritatis laborum eligendi sunt quisquam omnis voluptatem
              consectetur soluta alias, quo eveniet dolorum cumque quas fuga
              dolorem nobis reiciendis sapiente eaque illo pariatur molestiae
              beatae? Nisi possimus unde ex libero molestias quo, aliquid odio
              ea iure laboriosam, mollitia nihil repellat officiis debitis
              cupiditate perferendis adipisci id laborum dolorum pariatur. Ut,
              minima doloremque? Necessitatibus expedita totam similique libero
              dolore tenetur quis culpa maxime omnis vel quam odit aperiam aut
              in, dolor corrupti officiis minima voluptatum ad assumenda
              incidunt laboriosam. Provident ratione eius natus maxime id
              obcaecati numquam, sapiente explicabo eos, voluptas eaque? Ipsum,
              nihil beatae voluptates velit delectus porro veniam soluta earum
              quisquam, facilis magnam qui aliquam. Expedita voluptate aliquam,
              dolorem praesentium blanditiis, ratione odio quaerat officiis
              cupiditate deserunt, harum nulla saepe alias!
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
