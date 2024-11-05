'use client'

import { REGISTRIES } from "~/constants"
import { useRegister } from "~/hooks/use-register"
import { RegisterCard } from "~/components/general/about/registeries/register-card"


export const RegisterSection = () => {
    const { register } = useRegister()
    return (
        <section className="col-span-12 container gap-4 mt-12">
            <div className="container grid grid-cols-4 gap-7 relative -mt-36">
                {
                    REGISTRIES.slice(0, 4).map((register) => (
                        <RegisterCard title={register.title} id={register.id} description={register.description} key={register.id} />
                    ))
                }
            </div>
            <div className="container grid gap-6 my-32">
                <h6 className="text-6xl font-montserrat text-primary">{register.title}</h6>
                <p className="text-2xl">{register.description}</p>
            </div>
            <div className="container grid grid-cols-4 gap-7 relative -mb-36">
                {
                    REGISTRIES.slice(4, 8).map((register) => (
                        <RegisterCard title={register.title}  id={register.id} description={register.description} key={register.id} />
                    ))
                }
            </div>
        </section>
    )
}