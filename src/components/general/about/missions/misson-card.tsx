'use client';
import { useMissionStore } from '~/hooks/use-mission';
import { cn } from '~/lib/utils';

type MissionProps = {
  title: string;
  id: number;
  description: string;
  className?: string;
};

export const MissionCard = ({ title, id, description, className }: MissionProps) => {
  const { mission, setMission } = useMissionStore();

  return (
    <div
      className={cn(
        'border-4 border-secondary flex flex-col justify-center items-center pt-8 px-5 pb-4 rounded-lg shadow-lg bg-white h-auto group hover:bg-secondary cursor-pointer transition-colors duration-300',
        className,
        mission.id === id && 'bg-secondary text-white'
      )}
      onClick={() => setMission({ id: id, title: title, description: description })}
    >
      <p
        className={cn(
          'text-lg sm:text-xl lg:text-2xl font-montserrat text-primary group-hover:text-white text-center',
          mission.id === id && 'text-white'
        )}
      >
        {title}
      </p>
      <p className="text-left text-sm group-hover:text-white mt-2">See more</p>
    </div>
  );
};
