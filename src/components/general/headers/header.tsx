'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaBars, FaChevronRight, FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaSignal, FaTwitter } from 'react-icons/fa6'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet"

interface MenuItem {
    title: string;
    href: string;
    submenu?: MenuItem[];
}

// Define the props interface for the SubMenu component
interface SubMenuProps {
    items: MenuItem[];
    isNested?: boolean;
}

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

    const menuItems = [
        {
            title: 'Home',
            href: '/',
            submenu: [
                { title: 'Homepage 1', href: '#homepage-1' },
                { title: 'Homepage 2', href: '#homepage-2' },
                { title: 'Homepage 3', href: '#homepage-3' },
            ]
        },
        {
            title: 'Craft Repository Registry',
            href: '#about',
            submenu: [
                { title: 'Our Story', href: '#our-story' },
                { title: 'Our Team', href: '#our-team' },
                { title: 'Our Mission', href: '#our-mission' },
            ]
        },
        {
            title: 'CRAFT INDUSTRY LISTING',
            href: '/listing',
            submenu: [
                { title: 'Service 1', href: '#service-1' },
                { title: 'Service 2', href: '#service-2' },
                { title: 'Service 3', href: '#service-3' },
            ]
        },
        {
            title: 'CRAFT VULNERABILITY',
            href: '#',
            submenu: [
                { title: 'INTELLECTUAL PROPERTY', href: '/craft-vulnerability/property' },
                { title: 'COUNTERFEITS', href: '/craft-vulnerability/counterfeit' },
                { title: 'DEPENDENCY', href: '/craft-vulnerability/dependency' },
                { title: 'TECHNOLOGICAL GAPS', href: '/craft-vulnerability/gap' },
                { title: 'GENERATIONAL SHIFT', href: '/craft-vulnerability/shift' },
            ]
        },
        {
            title: 'CRAFT SOCIO-ECONOMICS',
            href: '#',
            submenu: [
                {
                    title: 'ECONOMICS',
                    href: '/economics',
                    submenu: [
                        { title: 'PRODUCTION INSIGHTS', href: '/economics/production' },
                        { title: 'EXPORT DATA', href: '/economics/export' },
                    ]
                },
                {
                    title: 'EMPLOYMENT',
                    href: '/employment',
                    submenu: [
                        { title: 'WAGE EQUITY', href: '/employment/wage' },
                        { title: 'EMPLOYMENT TRENDS', href: '/employment/trend' },
                        { title: 'EMPLOYMENT GROWTH', href: '/employment/growth' },
                    ]
                },
                {
                    title: 'GENDER DYNMAICS',
                    href: '/gender',
                    submenu: [
                        { title: 'STATISTICAL INSIGHTS', href: '/gender/insight' },
                    ]
                },

            ]
        },
        {
            title: 'ABOUT CRATFLORE',
            href: '#',
            submenu: [
                { title: 'MISSION', href: '/about/mission' },
                { title: 'CRAFTLORE PROJECTS', href: '/about/project' },
                { title: 'CRAFTLORE REGISTRY', href: '/about/registry' },
                { title: 'REGISTRY ARCHITECTURE', href: '/about/architecture' },
                {
                    title: 'CRAFT ALLIANCE',
                    href: '#',
                    submenu: [
                        { title: 'NETWORKS', href: '/about/network' },
                        { title: 'SPONSORS', href: '/about/sponsor' },
                    ]
                },
                { title: 'CAREER', href: '/about/career' },
                { title: 'TEAM', href: '/about/team' },
                { title: 'CONTACT US', href: '/about/contact-us' },
            ]
        },
    ]

    const SubMenu = ({ items, isNested = false }: SubMenuProps) => (
        <ul className={`absolute ${isNested ? 'left-full top-0' : 'left-1/2 -translate-x-1/2 top-full'} bg-white border-t-2 border-secondary min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
            {items.map((item, index) => (
                <li key={index} className="border-b relative group/nested">
                    <Link href={item.href} className="text-primary hover:text-white hover:bg-secondary/80 px-4 py-2 text-sm w-full h-full flex justify-between items-center">
                        {item.title}
                        {item.submenu && <FaChevronRight size={10} />}
                    </Link>
                    {item.submenu && (
                        <ul className="absolute left-full top-0 bg-white border-t-2 border-secondary min-w-[200px] opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                            {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="border-b">
                                    <Link href={subItem.href} className="block text-primary hover:text-white hover:bg-secondary/80 px-4 py-2 text-sm w-full h-full">
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )

    return (
        <header className={`col-span-12 fixed top-0 flex flex-col items-center w-full z-20 transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}>
            {/* Top bar */}
            <div className="hidden lg:flex justify-between gap-6 py-2">
                <div className="flex flex-col lg:flex-row  gap-6">
                    <p className="flex gap-2 items-center text-white">
                        <FaLocationDot className="text-secondary" />
                        <span className="text-xs text-wrap">ARTISAN LANE 2 DAR UL ZAMROOD GOUSIA COLONY EXT ZAKURA SRG INDIA</span>
                    </p>
                    <p className="flex gap-2 items-center text-white">
                        <FaPhone className="text-secondary" />
                        <span>(+917) 814 - 3527</span>
                    </p>
                </div>
                <div className="flex gap-6 [&_a]:text-white ">
                    <Link className="flex gap-2 items-center hover:text-secondary" href="#">
                        <FaTwitter />
                    </Link>
                    <Link className="flex gap-2 items-center hover:text-secondary" href="#">
                        <FaFacebook />
                    </Link>
                    <Link className="flex gap-2 items-center hover:text-secondary" href="#">
                        <FaLinkedin />
                    </Link>
                    <Link className="flex gap-2 items-center hover:text-secondary" href="#">
                        <FaSignal />
                    </Link>
                </div>
            </div>

            <div className="w-full  flex justify-between lg:justify-center items-center px-6 py-4">
                <Image src="/logo/logo.png" alt="logo for craftlore" width={100} height={100} />

                {/* larger screens */}
                <nav className="hidden lg:flex lg:justify-center">
                    <ul className="flex gap-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-white hover:text-secondary py-2 px-3 flex items-center text-sm gap-1"
                                >
                                    {item.title}
                                    {item.submenu && (
                                        <span className="inline-flex items-center">
                                            <FaChevronDown className="group-hover:hidden transition-transform duration-200" size={10} />
                                            <FaChevronUp className="hidden group-hover:block transition-transform duration-200" size={10} />
                                        </span>
                                    )}
                                </Link>
                                {item.submenu && <SubMenu items={item.submenu} />}
                            </li>
                        ))}
                    </ul>
                </nav>

                <Sheet>
                    <SheetTrigger className="lg:hidden text-white">
                        <FaBars />
                    </SheetTrigger>
                    <SheetContent className="bg-white">
                        <SheetHeader>
                            <SheetTitle>Craftlore </SheetTitle>
                            <ul className="grid gap-6">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative">
                                        <Collapsible>
                                            <CollapsibleTrigger asChild>
                                                <Link
                                                    href={item.href}
                                                    className="text-gray-900 hover:text-secondary py-2 px-3 flex items-center text-sm gap-1"
                                                >
                                                    {item.title}
                                                    {item.submenu && (
                                                        <span className="inline-flex items-center ml-2">
                                                            <FaChevronDown className="group-hover:hidden" size={10} />
                                                            <FaChevronUp className="hidden group-hover:block" size={10} />
                                                        </span>
                                                    )}
                                                </Link>
                                            </CollapsibleTrigger>
                                            {item.submenu && (
                                                <CollapsibleContent className="flex flex-start">
                                                    <ul className="pl-4">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <li key={subIndex} className="py-2">
                                                                <Link href={subItem.href} className="text-gray-700 hover:text-secondary text-sm block">
                                                                    {subItem.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CollapsibleContent>
                                            )}
                                        </Collapsible>
                                    </li>
                                ))}
                            </ul>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}