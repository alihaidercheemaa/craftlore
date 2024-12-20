import { FaUserPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";


type ComponentProps = {
    className?: string;
}

export const BottomBanner = ({className}:ComponentProps) => {
  return (
    <div className={cn("mt-36 flex flex-col items-center justify-center gap-6 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-white lg:flex-row lg:gap-16",className)}>
      <FaUserPlus className="text-3xl font-bold lg:text-5xl" />
      <p className="text-xl">
        Stay Connected to Craftlore-Kashmir Craft Repository
      </p>
      <Button variant={"secondary"}>SUBSCRIBE TODAY</Button>
    </div>
  );
};
