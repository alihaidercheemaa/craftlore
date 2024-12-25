'use client'
import { Button } from "~/components/ui/button"
import { useState, useEffect } from "react"
import { BANNERS } from "~/constants"
import { motion, AnimatePresence } from "framer-motion"

export const Banner = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
  

    // Set up interval for automatic banner change every 5 seconds
    useEffect(() => {

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % BANNERS.length)
        }, 5000) // 5 seconds interval

        return () => clearInterval(interval)
    }, [])

    // Split the title into words
    const title = BANNERS[activeIndex]?.title ?? '';
    const words = title.split(' ');

    // Define first and second lines
    const firstLine = words.slice(0, 2).join(' ');
    const secondLine = words.slice(2).join(' ');

    // Parent banner variants
    const bannerVariants = {
        hidden: { y: '-100%', opacity: 0 },
        visible: { 
            y: '0%', 
            opacity: 1,
            transition: {
                duration: 1, // Increased duration for smoother animation
                ease: 'easeInOut',
            },
        },
        exit: { 
            y: '100%', 
            opacity: 0,
            transition: {
                duration: 1, // Matching exit duration
                ease: 'easeInOut',
            },
        },
    }

    // Container variants to stagger child animations
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // 0.3 seconds between each child animation
                delayChildren: 0.2,   // Delay before child animations start
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.2,       // 0.2 seconds between each exit animation
                staggerDirection: -1,        // Reverse order on exit
            }
        }
    }

    // Child variants for Title
    const titleVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 3, ease: 'easeOut' },
        },
        exit: { 
            y: -100, 
            opacity: 0,
            transition: { duration: 3, ease: 'easeIn' },
        },
    }

    // Child variants for Subtitle
    const subtitleVariants = {
        hidden: { y: -30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 2, ease: 'easeOut' },
        },
        exit: { 
            y: -30, 
            opacity: 0,
            transition: { duration: 2, ease: 'easeIn' },
        },
    }

    // Child variants for Button
    const buttonVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        exit: { 
            y: 50, 
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeIn' },
        },
    }

    return (
        <section
            className="col-span-12 relative h-[calc(100dvh)] bg-primary text-white overflow-hidden"
        >
            <div className="container grid items-center h-full">
                <AnimatePresence>
                    <motion.div
                        key={activeIndex}
                        variants={bannerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Container for banner content with containerVariants */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="lg:container mx-6 grid gap-2"
                        >
                            {/* Title */}
                            <motion.p
                                variants={titleVariants}
                                className="font-extrabold font-montserrat text-[2rem] md:text-[5.5rem] lg:text-[6.3rem] lg:leading-[7rem] whitespace-normal"
                            >
                                {firstLine} <span className="block">{secondLine}</span>
                            </motion.p>
                            
                            {/* Subtitle */}
                            <motion.p
                                variants={subtitleVariants}
                                className="font-montserrat text-base md:text-lg lg:text-2xl mt-2"
                            >
                                {BANNERS[activeIndex]?.subtitle}
                            </motion.p>
                            
                            {/* Button */}
                            <motion.div
                                variants={buttonVariants}
                                className="mt-6"
                            >
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-fit text-xl"
                                >
                                    {BANNERS[activeIndex]?.buttonText}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
