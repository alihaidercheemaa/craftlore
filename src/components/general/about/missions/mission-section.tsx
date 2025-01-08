"use client";
import { MISSIONS } from "~/constants/data";
import { MissionCard } from "~/components/general/about/missions/misson-card";
import { useMissionStore } from "~/hooks/use-mission";
import { Container } from "~/components/common/container";

export const MissionSection = () => {
  const { mission } = useMissionStore();
  return (
    <Container className="col-span-12 mt-12 gap-4">
      <Container className="relative -mt-36 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {MISSIONS.slice(0, 4).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </Container>
      <Container className="my-32 grid gap-6 text-center">
        <h2 className="font-montserrat text-2xl text-primary sm:text-4xl lg:text-6xl">
          {mission.title}
        </h2>
        <p className="text-base sm:text-xl lg:text-2xl">
          {mission.description}
        </p>
      </Container>
      <Container className="relative -mb-36 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {MISSIONS.slice(4, 8).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </Container>
    </Container>
  );
};
