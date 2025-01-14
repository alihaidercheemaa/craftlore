import { useProject } from "~/hooks/use-project";
import { cn } from "~/lib/utils";

type ProjectProps = {
  title: string;
  id: number;
  description: string;
  className?: string;
};

export const ProjectCard = ({
  title,
  id,
  description,
  className,
}: ProjectProps) => {
  const { project, setProject } = useProject();
  return (
    <div
      className={cn(
        "group flex h-[170px] lg:h-[250px] cursor-pointer flex-col justify-center rounded-lg border-4 border-secondary bg-white px-2 lg:px-5 pb-4 pt-8 shadow-lg hover:bg-secondary lg:pb-7 lg:pt-16",
        className,
        project.id == id && "bg-secondary text-white",
      )}
      onClick={() =>
        setProject({ id: id, title: title, description: description })
      }
    >
      <p
        className={cn(
          "font-montserrat text-xs sm:text-sm text-primary group-hover:text-white lg:text-2xl",
          project.id == id && "text-white",
        )}
      >
        {title}
      </p>
      <p className="text-left text-sm group-hover:text-white">See more</p>
    </div>
  );
};
