import { FaUserPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";


type ComponentProps = {
    className?: string;
}

export const BottomBanner = ({className}:ComponentProps) => {
  return (
    <div className={cn("mt-36 flex flex-col items-center justify-center gap-6 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-white lg:flex-row lg:gap-8 xl:gap-12 2xl:gap-16",className)}>
      <FaUserPlus className="text-xl font-bold lg:text-3xl xl:text-4xl 2xl:text-6xl" />
      <p className="text-sm lg:text-2xl xl:text-3xl">
        Stay Connected to Craftlore-Kashmir Craft Repository
      </p>
      <Button variant="secondary">SUBSCRIBE TODAY</Button>
    </div>
  );
};
