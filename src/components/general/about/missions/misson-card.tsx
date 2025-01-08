"use client";
import { useMissionStore } from "~/hooks/use-mission";
import { cn } from "~/lib/utils";

type MissionProps = {
  title: string;
  id: number;
  description: string;
  className?: string;
};

export const MissionCard = ({
  title,
  id,
  description,
  className,
}: MissionProps) => {
  const { mission, setMission } = useMissionStore();

  return (
    <div
      className={cn(
        "group flex h-auto cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-secondary bg-white px-5 pb-4 pt-8 shadow-lg transition-colors duration-300 hover:bg-secondary",
        className,
        mission.id === id && "bg-secondary text-white",
      )}
      onClick={() =>
        setMission({ id: id, title: title, description: description })
      }
    >
      <p
        className={cn(
          "text-center font-montserrat text-lg text-primary group-hover:text-white sm:text-xl lg:text-2xl",
          mission.id === id && "text-white",
        )}
      >
        {title}
      </p>
      <p className="mt-2 text-left text-sm group-hover:text-white">See more</p>
    </div>
  );
};
