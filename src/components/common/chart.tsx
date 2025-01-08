import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type ChartProps = {
  children: ReactNode;
  className?: string;
};

export const ChartContainer: React.FC<ChartProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("flex h-[400px] justify-center", className)}>
      {children}
    </div>
  );
};
