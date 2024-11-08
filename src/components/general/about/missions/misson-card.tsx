import { useMissionStore } from "~/hooks/use-mission"
import { cn } from "~/lib/utils"

type MissionProps = {
    title: string
    id: number,
    description: string
    className?:string
}

export const MissionCard = ({ title, id, description,className }: MissionProps) => {

    const { mission, setMission } = useMissionStore()
    return (
        <div className={cn('border-4 border-secondary flex flex-col justify-center pt-8 lg:pt-16 px-5 pb-4 lg:pb-7 rounded-lg shadow-lg bg-white h-[150px] lg:h-[250px] group hover:bg-secondary cursor-pointer',
            className,
            mission.id == id && "bg-secondary text-white"
        )}
            onClick={() => setMission({ id: id, title: title, description: description })}
        >
            <p className={cn("text-2xl font-montserrat text-primary group-hover:text-white",
                mission.id == id && "text-white"
            )}>{title}</p>
            <p className="text-left text-sm group-hover:text-white">See more</p>
        </div>
    )
}