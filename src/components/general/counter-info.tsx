import { Counter } from "~/components/animations/counter"
import { cn } from "~/lib/utils"


type CounterProps = {
    className?:string
}

export const CounterInfo = ({className}:CounterProps) => {


    return (
        <div className={cn('grid gap-10',className)}>
            <h6 className="font-montserrat text-2xl text-secondary">Defend Authenticity, Empower Artisans: Join the Movement to Transform Kashmir’s Craft Future</h6>
            <h6 className="font-montserrat text-4xl text-primary">Join our network for a better future of our Artisans & Craft Industry</h6>
            <Counter />
        </div>
    )
}