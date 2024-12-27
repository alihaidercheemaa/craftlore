import { api } from "~/trpc/server";

type ComponentsProps = {
  sectionId: string;
};

export const SectionData = async ({ sectionId }: ComponentsProps) => {
  const data = await api.craft.getDataBySectionId({ sectionId });
  return (
    <div className="grid grid-cols-2 gap-2">
      {data.map((subsection) => (
        <article
          key={subsection.craftsubsectionId}
          className="space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white"
        >
          <p className="font-montserrat text-xl">{subsection.sectionName}</p>
          {subsection.CraftContent.map((content) => (
            <menu
              key={content.craftsubsectionId}
              className="list-inside list-disc space-y-2 rounded-lg p-4 font-opensans"
            >
              {content.content.split("~").map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </menu>
          ))}
        </article>
      ))}
    </div>
  );
};
