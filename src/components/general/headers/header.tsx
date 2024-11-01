'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaSignal, FaTwitter } from 'react-icons/fa6'
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
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <p className="flex gap-2 items-center text-white">
                        <FaLocationDot className="text-secondary" />
                        <span>ARTISAN LANE 2 DAR UL ZAMROOD GOUSIA COLONY EXT ZAKURA SRG INDIA</span>
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
            <Image src="/logo/logo.png" alt="logo for craftlore" width={100} height={100} />
            <nav>

            </nav>
        </header>
    )
}