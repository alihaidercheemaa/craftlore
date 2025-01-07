import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/server";
import { Loader2 } from "lucide-react";
import { QuizCard } from "~/components/craft-repository/profiling/details/quiz";

type ComponentProps = {
  sectionId: string;
  subcategoryId: string;
};

export const CraftDetail = async ({ sectionId }: ComponentProps) => {
  const data = await api.craft.getDataBySectionId({ sectionId });
  const questions = await api.craft.getQuestionBySectionId({ sectionId });

  if (!data?.length) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="col-span-3 grid gap-8 md:col-span-2">
      <div className="rounded-lg bg-primary/10 p-6 text-center">
        <h1 className="text-6xl font-bold text-primary font-montserrat">
          Kashmir Craft Learning Journey
        </h1>
        <p className="mt-2 text-xl text-gray-700 font-opensans">
          Learn the Art of Kashmir Craftsmanship and Enjoy Exclusive Discounts at our Craft Trade Registry.
        </p>
        <p className="mt-1 text-xl text-gray-700 font-opensans font-semibold mb-4">
          Complete Your Craft Journey and Unlock{" "}
          <span className="text-secondary">Upto 50% Off</span> on Authentic Kashmir Handmade
          Products!
        </p>
      </div>
      <div className="grid grid-cols-1 content-start gap-4 md:grid-cols-2">
        {data.map((subsection) => (
          <Card
            key={subsection.craftsubsectionId}
            className="group grid transition-all duration-300 hover:shadow-xl"
          >
            <CardHeader className="rounded-t-lg transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <CardTitle className="flex items-center justify-between font-montserrat text-xl">
                {subsection.sectionName}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {subsection.CraftContent.map((content) => (
                <div key={content.craftsubsectionId} className="space-y-3">
                  <ul className="list-inside list-disc space-y-2 font-opensans">
                    {content.content.split("~").map((item, index) => (
                      <li
                        key={index}
                        className="pl-2 text-sm leading-relaxed transition-colors hover:text-primary"
                      >
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <QuizCard questions={questions} />
    </div>
  );
};
