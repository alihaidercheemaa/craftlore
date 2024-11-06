'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaSignal, FaTwitter } from 'react-icons/fa6'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

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
            title: 'Fraft Industry Listing',
            href: '#services',
            submenu: [
                { title: 'Service 1', href: '#service-1' },
                { title: 'Service 2', href: '#service-2' },
                { title: 'Service 3', href: '#service-3' },
            ]
        },
        {
            title: 'Craft Vulnerability',
            href: '#craft-registry',
            submenu: [
                { title: 'Browse Registry', href: '#browse-registry' },
                { title: 'Register Craft', href: '#register-craft' },
                { title: 'Featured Artisans', href: '#featured-artisans' },
            ]
        },
        {
            title: 'Craft Socio-Economics',
            href: '#sustainability',
            submenu: [
                { title: 'Our Approach', href: '#our-approach' },
                { title: 'Initiatives', href: '#initiatives' },
                { title: 'Impact', href: '#impact' },
            ]
        },
        {
            title: 'About Craftlore',
            href: '/about',
            submenu: [
                { title: 'MISSION', href: '/about/mission' },
                { title: 'CRAFTLORE PROJECTS', href: '/about/project' },
                { title: 'CRAFTLORE REGISTRY', href: '/about/registry' },
                { title: 'REGISTRY ARCHITECTURE', href: '/about/architecture' },
                { title: 'NETWORKS', href: '/about/network' },
                { title: 'SPONSORS', href: '/about/sponsor' },
                { title: 'CAREER', href: '/about/career' },
                { title: 'TEAM', href: '/about/team' },
                { title: 'CONTACT US', href: '/about/contact-us' },
            ]
        },
    ]

    return (
        <header className={`col-span-12 fixed top-0 flex flex-col items-center w-full z-20 transition-colors duration-300 ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}>
            {/* Top bar */}
            <div className="flex justify-between gap-6 py-2">
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
                    <Link className="flex gap-2 items-center text-white hover:text-secondary" href="">
                        <FaTwitter />
                    </Link>
                    <Link className="flex gap-2 items-center text-white hover:text-secondary" href="">
                        <FaFacebook />
                    </Link>
                    <Link className="flex gap-2 items-center text-white hover:text-secondary" href="">
                        <FaLinkedin />
                    </Link>
                    <Link className="flex gap-2 items-center text-white hover:text-secondary" href="">
                        <FaSignal />
                    </Link>
                </div>
            </div>

            {/* Main navigation */}
            <div className="flex justify-between items-center px-6 py-4">
                <Image src="/logo/logo.png" alt="logo for craftlore" width={100} height={100} />
                
                <nav className="flex justify-center">
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
                                {item.submenu && (
                                    <ul className="absolute left-1/2 -translate-x-1/2 top-full bg-white border-t-2 border-secondary min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className="border-b">
                                                <Link 
                                                    href={subItem.href}
                                                    className="block text-primary hover:text-white hover:bg-secondary/80 px-4 py-2 text-sm w-full h-full"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}