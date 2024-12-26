import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { api } from "~/trpc/server";

type ComponentsProps = {
  sectionId: string;
};

export const SectionData = async ({ sectionId }: ComponentsProps) => {
  const data = await api.craft.getDataBySectionId({ sectionId });
  console.log(data);
  return (
    <>
      {data.map((subsection) => (
        <Card key={subsection.craftsubsectionId}>
          <CardHeader>
            <CardTitle className="font-montserrat text-xl">
              {subsection.sectionName}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subsection.CraftContent.map((content) => (
              <div
                key={content.craftsubsectionId}
                className="prose prose-slate max-w-none rounded-lg bg-slate-50 p-4"
              >
                {content.content}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
