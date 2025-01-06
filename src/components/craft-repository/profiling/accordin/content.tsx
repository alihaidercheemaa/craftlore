"use client";

import { Circle } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PROFILES } from "~/constants/profiling";
import { useCraft } from "~/hooks/use-craft";

type ComponentProps = {
  subId: string;
  name: string;
};

export const AccordinData = ({ subId, name }: ComponentProps) => {
  const { setCraft } = useCraft();
  const craftKey = Object.keys(PROFILES).find((key) =>
    name.toLowerCase().includes(key.toLowerCase()),
  );
  return (
    <Button
      key={subId}
      variant="ghost"
      className="w-fit justify-start gap-3 p-2 hover:bg-white/10"
      onClick={() => {
        if (craftKey) {
          setCraft(craftKey);
        } else {
          console.warn(`No matching craft key found for name: ${name}`);
        }
      }}
      asChild
    >
      <Link
        href={`/craft-registry/profiling/${subId}`}
        className="flex items-center gap-3"
      >
        <Circle className="h-2 w-2 text-secondary/70" />
        <span className="font-opensans text-base font-medium text-secondary transition-colors hover:text-secondary/80">
          {name}
        </span>
      </Link>
    </Button>
  );
};
