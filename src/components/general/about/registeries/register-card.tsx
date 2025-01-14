import { useRegister } from "~/hooks/use-register";
import { cn } from "~/lib/utils";

type RegisterProps = {
  title: string;
  id: number;
  description: string;
  className?: string;
};

export const RegisterCard = ({
  title,
  id,
  description,
  className,
}: RegisterProps) => {
  const { register, setRegister } = useRegister();
  return (
    <div
      className={cn(
        "group flex h-[170px] lg:h-[250px] cursor-pointer flex-col justify-center rounded-lg border-4 border-secondary bg-white px-2 md:px-5 pb-4 pt-8 shadow-lg hover:bg-secondary lg:pb-7 lg:pt-16",
        className,
        register.id == id && "bg-secondary text-white",
      )}
      onClick={() =>
        setRegister({ id: id, title: title, description: description })
      }
    >
      <p
        className={cn(
          "font-montserrat text-primary group-hover:text-white lg:text-2xl",
          register.id == id && "text-white",
        )}
      >
        {title}
      </p>
      <p className="text-left text-sm group-hover:text-white">See more</p>
    </div>
  );
};
