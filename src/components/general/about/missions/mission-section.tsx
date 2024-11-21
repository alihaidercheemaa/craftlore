'use client';
import { MISSIONS } from '~/constants';
import { MissionCard } from '~/components/general/about/missions/misson-card';
import { useMissionStore } from '~/hooks/use-mission';

export const MissionSection = () => {
  const { mission } = useMissionStore();
  return (
    <section className="col-span-12 mx-6 lg:container gap-4 mt-12">
      {/* Top Mission Cards */}
      <div className="lg:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative -mt-36">
        {MISSIONS.slice(0, 4).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </div>

      {/* Mission Description */}
      <div className="mx-6 lg:container grid gap-6 my-32 text-center">
        <h6 className="text-2xl sm:text-4xl lg:text-6xl font-montserrat text-primary">
          {mission.title}
        </h6>
        <p className="text-base sm:text-xl lg:text-2xl">{mission.description}</p>
      </div>

      {/* Bottom Mission Cards */}
      <div className="lg:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative -mb-36">
        {MISSIONS.slice(4, 8).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </div>
    </section>
  );
};
