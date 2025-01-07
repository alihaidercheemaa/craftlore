"use client";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { PROFILES } from "~/constants/profiling";
import { useCraft } from "~/hooks/use-craft";
import Image from "next/image";

export const CraftIntro = () => {
  const { craft } = useCraft();
  const profile = PROFILES[craft as keyof typeof PROFILES];
  return (
    <Card className="col-span-3 md:col-span-2">
      <CardHeader>
        <CardTitle>{profile.title}</CardTitle>
      </CardHeader>
      <CardContent className="col-span-2 grid">
        <div className="relative mb-4 aspect-video rounded-lg">
          <Image
            src="/crafts/R.jpeg"
            alt="pashmina image"
            fill
            sizes="100%"
            className="rounded-lg border-secondary border-2"
          />
        </div>
        <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_p]:font-opensans [&_p]:text-xl">
          <h2 className="font-montserrat text-2xl text-primary">
            {profile.title}
          </h2>
          {profile.des.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
