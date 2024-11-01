'use client'
import { Button } from "~/components/ui/button"
import { useState, useEffect } from "react"
import { BANNERS } from "~/constants"
import { cn } from "~/lib/utils"

export const Banner = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false)

    const handleSlideChange = (index: number) => {
        setIsAnimatingOut(true)
        setTimeout(() => {
            setActiveIndex(index)
            setIsAnimatingOut(false)
        }, 1000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideChange((activeIndex + 1) % BANNERS.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [activeIndex])

    // Split the title into words
    const title = BANNERS[activeIndex]!.title;
    const words = title.split(' ');

    // Define first and second lines
    const firstLine = words.slice(0, 2).join(' ');
    const secondLine = words.slice(2).join(' ');

    return (
        <section className="col-span-12 relative h-screen bg-primary text-white overflow-hidden">
            <div className="container grid items-center h-full">
                <div className="container grid gap-2">
                    <p
                        className={cn(
                            "font-extrabold font-manrope text-[2rem] md:text-[5.5rem] lg:text-[6.3rem] lg:leading-[7rem] transition-all duration-1000 ease-out text-wrap",
                            isAnimatingOut
                                ? "opacity-0 -translate-y-5"
                                : "opacity-100 translate-y-0"
                        )}
                    >
                        {firstLine} <span className="block">{secondLine}</span>
                    </p>
                    <p
                        className={cn(
                            "font-medium text-base md:text-lg lg:text-2xl mt-2 transition-all duration-1000 ease-out delay-100",
                            isAnimatingOut
                                ? "opacity-0 -translate-y-5"
                                : "opacity-100 translate-y-0"
                        )}
                    >
                        {BANNERS[activeIndex]!.subtitle}
                    </p>
                    <Button
                        variant="secondary"
                        className={cn(
                            "mt-6 transition-all duration-1000 ease-out delay-200 w-fit",
                            isAnimatingOut
                                ? "opacity-0 translate-y-5"
                                : "opacity-100 translate-y-0"
                        )}
                    >
                        {BANNERS[activeIndex]!.buttonText}
                    </Button>
                </div>
            </div>
        </section>
    )
}
