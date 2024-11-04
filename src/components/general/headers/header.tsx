'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaSignal, FaTwitter } from 'react-icons/fa6'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "~/components/ui/navigation-menu"
export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`col-span-12 fixed top-0 flex flex-col items-center py-2 w-full z-20 transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}>
            <div className="flex justify-between gap-6">
                <div className="flex gap-6">
                    <p className="flex gap-2 items-center text-white">
                        <FaLocationDot className="text-secondary" />
                        <span className="text-xs">ARTISAN LANE 2 DAR UL ZAMROOD GOUSIA COLONY EXT ZAKURA SRG INDIA</span>
                    </p>
                    <p className="flex gap-2 items-center text-white">
                        <FaPhone className="text-secondary" />
                        <span>(+917) 814 - 3527</span>
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link className="flex gap-2 items-center text-white" href="">
                        <FaTwitter className="text-secondary" />
                    </Link>
                    <Link className="flex gap-2 items-center text-white" href="">
                        <FaFacebook className="text-secondary" />

                    </Link>
                    <Link className="flex gap-2 items-center text-white" href="">
                        <FaLinkedin className="text-secondary" />

                    </Link>
                    <Link className="flex gap-2 items-center text-white" href="">
                        <FaSignal className="text-secondary" />
                    </Link>
                </div>
            </div>
            <div className="flex justify-between items-center  px-6 py-4">
                {/* Logo */}
                <Image src="/logo/logo.png" alt="logo for craftlore" width={100} height={100} />

                <NavigationMenu className="flex">
                    <NavigationMenuList className="flex gap-6 text-white">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#home" className="hover:text-secondary ">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="absolute hidden bg-primary p-4 transition-opacity duration-300 group-hover:block">
                                <Link href="#sub-link-1" className="block hover:text-secondary">Sub Link 1</Link>
                                <Link href="#sub-link-2" className="block hover:text-secondary">Sub Link 2</Link>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#about" className="hover:text-secondary">About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#services" className="hover:text-secondary">Services</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#craft-registry" className="hover:text-secondary">Craft Registry</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#sustainability" className="hover:text-secondary">Sustainability</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <NavigationMenuLink asChild>
                                    <Link href="#contact" className="hover:text-secondary">Contact</Link>
                                </NavigationMenuLink>
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}